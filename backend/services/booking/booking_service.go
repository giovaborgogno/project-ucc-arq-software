package bookingService

import (
	"errors"
	bookingClient "mvc-go/clients/booking"
	hotelClient "mvc-go/clients/hotel"
	"mvc-go/dto"
	"mvc-go/model"
	"time"

	e "mvc-go/utils/errors"

	"github.com/google/uuid"
)

type bookingService struct{}

type bookingServiceInterface interface {
	CreateBooking(bookingDto dto.Booking) (dto.Booking, e.ApiError)
	GetBookingsByUserId(id uuid.UUID) (dto.Bookings, e.ApiError)
	DeleteBooking(id uuid.UUID) e.ApiError
}

var (
	BookingService bookingServiceInterface
)

func init() {
	BookingService = &bookingService{}
}

func (s *bookingService) CreateBooking(bookingDto dto.Booking) (dto.Booking, e.ApiError) {
	booking := model.Booking{
		Rooms:   bookingDto.Rooms,
		Total:   bookingDto.Total,
		DateIn:  bookingDto.DateIn,
		DateOut: bookingDto.DateOut,
		UserID:  bookingDto.UserID,
		HotelID: bookingDto.HotelID,
	}

	if booking.Total <= 0 {
		return dto.Booking{}, e.NewBadRequestApiError("Error trying to create new booking: You cannot have a zero or negative amount for Total value")
	}

	if booking.DateIn.Before(time.Now()){
		return dto.Booking{}, e.NewBadRequestApiError("Error trying to create new booking: You should not have a DateIn earlier than the current date")
	}

	if booking.DateIn.After(booking.DateOut) || booking.DateIn.Equal(booking.DateOut) {
		return dto.Booking{}, e.NewBadRequestApiError("Error trying to create new booking: You should not have a DateIn greater or equal than the DateOut")
	}

	availableRooms := hotelClient.HotelClient.GetAvailableRooms(booking)
	if booking.Rooms > uint(availableRooms) {
		return dto.Booking{}, e.NewBadRequestApiError("Error trying to create new booking: You cannot book more rooms than the ones currently available")
	}

	booking = bookingClient.BookingClient.InsertBooking(booking)
	if booking.BookingID == uuid.Nil {
		return dto.Booking{}, e.NewInternalServerApiError("Error trying to create new booking", errors.New(""))
	}

	bookingDto.BookingID = booking.BookingID

	return bookingDto, nil
}

func (s *bookingService) GetBookingsByUserId(id uuid.UUID) (dto.Bookings, e.ApiError) {
	idString := id.String()
	bookings := bookingClient.BookingClient.GetBookingsByUserId(idString)
	if len(bookings) == 0 {
		return dto.Bookings{}, e.NewNotFoundApiError("Bookings not found")
	}

	var bookingsDto dto.Bookings

	for _, booking := range bookings {
		var bookingDto dto.Booking
		bookingDto.BookingID = booking.BookingID
		bookingDto.Rooms = booking.Rooms
		bookingDto.Total = booking.Total
		bookingDto.DateIn = booking.DateIn
		bookingDto.DateOut = booking.DateOut
		bookingDto.UserID = booking.UserID
		bookingDto.HotelID = booking.HotelID

		bookingsDto = append(bookingsDto, bookingDto)

	}

	return bookingsDto, nil
}

func (s *bookingService) DeleteBooking(id uuid.UUID) e.ApiError {
	idString := id.String()

	err := bookingClient.BookingClient.DeleteBooking(idString)
	if err != nil {
		return e.NewInternalServerApiError("Something went wrong deleting booking", nil)
	}

	return nil
}
