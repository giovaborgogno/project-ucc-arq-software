package dto

import (
	"github.com/google/uuid"
)

type HotelResponse struct {
	HotelID     uuid.UUID `json:"hotel_id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Rooms       uint      `json:"rooms"`
	PricePerDay float64   `json:"price_per_day"`
	
	Bookings    Bookings  `gorm:"foreignKey:HotelID"`
	Photos      Photos    `gorm:"foreignKey:HotelID"`
	Amenitie    Amenities `gorm:"many2many:hotel_amenities;"`
}

type HotelResponses []HotelResponse
