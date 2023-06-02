package bookingClient

import (
	"errors"
	"mvc-go/model"
	"time"

	"github.com/jinzhu/gorm"
	log "github.com/sirupsen/logrus"
)

type bookingClient struct{}

type bookingClientInterface interface {
	GetBookingById(id string) model.Booking
	GetBookings() model.Bookings
	InsertBooking(booking model.Booking) model.Booking
	UpdateBooking(booking model.Booking) model.Booking
	DeleteBooking(id string) error
	SearchBookingsByDatesAndHotel(search string, dateIn time.Time, dateOut time.Time) model.Bookings
	SearchBookingsByDates(dateIn time.Time, dateOut time.Time) model.Bookings
}

var (
	BookingClient bookingClientInterface
)

func init() {
	BookingClient = &bookingClient{}
}

var Db *gorm.DB

func (c *bookingClient) GetBookingById(id string) model.Booking {
	var booking model.Booking

	Db.First(&booking, "booking_id = ?", id)
	log.Debug("booking: ", booking)

	return booking
}

func (c *bookingClient) GetBookings() model.Bookings {
	var bookings model.Bookings
	result := Db.Find(&bookings)
	if result.Error != nil {
		log.Error("")
		return model.Bookings{}
	}
	log.Debug("bookings: ", bookings)

	return bookings
}

func (c *bookingClient) InsertBooking(booking model.Booking) model.Booking {
	result := Db.Create(&booking)

	if result.Error != nil {
		log.Error("")
		return model.Booking{}
	}
	log.Debug("booking Created: ", booking.BookingID)
	return booking
}

func (c *bookingClient) UpdateBooking(booking model.Booking) model.Booking {
	result := Db.Save(&booking)
	if result.Error != nil {
		log.Error(result.Error.Error())
		return model.Booking{}
	}
	return booking
}

func (c *bookingClient) DeleteBooking(id string) error {
	var booking model.Booking
	result := Db.Delete(&booking, "booking_id = ?", id)
	if result.Error != nil {
		log.Debug(id)
		log.Error(result.Error.Error())
		return errors.New(result.Error.Error())
	}
	return nil
}

func (c *bookingClient) SearchBookingsByDatesAndHotel(search string, dateIn time.Time, dateOut time.Time) model.Bookings {
	var bookings model.Bookings
	result := Db.Where("hotel_id = ? AND date_in >= ? AND date_out <= ?", search, dateIn, dateOut).Find(&bookings)
	if result.Error != nil {
		log.Error("")
		return model.Bookings{}
	}
	log.Debug("bookings: ", bookings)

	return bookings
}
func (c *bookingClient) SearchBookingsByDates(dateIn time.Time, dateOut time.Time) model.Bookings {
	var bookings model.Bookings
	result := Db.Where("date_in >= ? AND date_out <= ?", dateIn, dateOut).Find(&bookings)
	if result.Error != nil {
		log.Error("")
		return model.Bookings{}
	}
	log.Debug("bookings: ", bookings)

	return bookings
}
