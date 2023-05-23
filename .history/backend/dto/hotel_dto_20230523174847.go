package dto

import (
	"github.com/google/uuid"
)

type Hotel struct {
	HotelID     uuid.UUID `json:"hotel_id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Rooms       uint      `json:"rooms"`
	PricePerDay float64   `json:"price_per_day"`
	
	Bookings    Bookings  `json:"bookings"`
	Photos      Photos    `json:"photos"`
	Amenities    Amenities `json:"amenities"`
}

type Hotel []HotelResponse
