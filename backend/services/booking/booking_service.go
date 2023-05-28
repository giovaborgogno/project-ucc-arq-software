package bookingService

import (
	"errors"
	bookingClient "mvc-go/clients/booking"
	hotelClient "mvc-go/clients/hotel"
	"mvc-go/dto"
	"mvc-go/model"

	// "time"

	e "mvc-go/utils/errors"

	"github.com/google/uuid"
)

type bookingService struct{}

type bookingServiceInterface interface {
	CreateBooking(bookingDto dto.Booking) (dto.Booking, e.ApiError)
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

	if booking.DateIn.After(booking.DateOut) || booking.DateIn.Equal(booking.DateOut) {
		return dto.Booking{}, e.NewBadRequestApiError("Error trying to create new booking: You should not have a DateIn greater or equal than the DateOut")
	}

	

	booking = bookingClient.BookingClient.InsertBooking(booking)
	if booking.BookingID == uuid.Nil {
		return dto.Booking{}, e.NewInternalServerApiError("Error trying to create new booking", errors.New(""))
	}

	bookingDto.BookingID = booking.BookingID

	return bookingDto, nil
}