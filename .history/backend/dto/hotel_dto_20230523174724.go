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
	
	Bookings    Bookings  `json:"bookings"`
	Photos      Photos    `json:"photos"`
	Amenitie    Amenities `json:"am"`
}

type HotelResponses []HotelResponse
