package dto

import (
	"github.com/google/uuid"
)

type Hotel struct {
	HotelID     uuid.UUID `json:"hotel_id"`
	Title       string    `json:"title" binding:"required"`
	Description string    `json:"description" binding:"required"`
	Rooms       uint      `json:"rooms" binding:"required"`
	PricePerDay float64   `json:"price_per_day" binding:"required"`
	s
	Photos    Photos    `json:"photos" binding:"required"`
	Amenities Amenities `json:"amenities" binding:"required"`
}

type Hotels []Hotel
