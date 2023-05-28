package hotelClient

import (
	"errors"
	"mvc-go/model"
	"time"
	"github.com/jinzhu/gorm"
	log "github.com/sirupsen/logrus"
)

type hotelClient struct{}

type hotelClientInterface interface {
	GetHotelById(id string) model.Hotel
	GetHotels() model.Hotels
	InsertHotel(hotel model.Hotel) model.Hotel
	UpdateHotel(hotel model.Hotel) model.Hotel
	DeleteHotel(id string) error
}

var (
	HotelClient hotelClientInterface
)

func init() {
	HotelClient = &hotelClient{}
}

var Db *gorm.DB

func (c *hotelClient) GetHotelById(id string) model.Hotel {
	var hotel model.Hotel

	Db.First(&hotel, "hotel_id = ?", id)
	log.Debug("Hotel: ", hotel)

	return hotel
}

func (c *hotelClient) GetHotels() model.Hotels {
	var hotels model.Hotels
	result := Db.Find(&hotels)
	if result.Error != nil {
		log.Error("")
		return model.Hotels{}
	}
	log.Debug("Hotels: ", hotels)

	return hotels
}

func (c *hotelClient) InsertHotel(hotel model.Hotel) model.Hotel {
	result := Db.Create(&hotel)

	if result.Error != nil {
		log.Error("")
		return model.Hotel{}
	}
	log.Debug("Hotel Created: ", hotel.HotelID)
	return hotel
}

func (c *hotelClient) UpdateHotel(hotel model.Hotel) model.Hotel {
	result := Db.Save(&hotel)
	if result.Error != nil {
		log.Error(result.Error.Error())
		return model.Hotel{}
	}
	return hotel
}

func (c *hotelClient) DeleteHotel(id string) error {
	var hotel model.Hotel
	result := Db.Delete(&hotel, "hotel_id = ?", id)
	if result.Error != nil {
		log.Debug(id)
		log.Error(result.Error.Error())
		return errors.New(result.Error.Error())
	}
	return nil
}

func (c *hotelClient) GetAvailableRoomsByHotel(booking model.Booking) int{
	result := Db.Exec("SELECT avg(h.rooms) - sum(b.rooms) as availableRooms FROM hotels h LEFT JOIN bookings b ON h.hotel_id = b.hotel_id WHERE (b.date_in >= ? OR b.date_out <= ?)  AND h.hotel_id = ? GROUP BY h.hotel_id;", time.Format("YYYY-MM-DD", booking.DateIn), booking.DateOut, booking.HotelID)
	return result
}