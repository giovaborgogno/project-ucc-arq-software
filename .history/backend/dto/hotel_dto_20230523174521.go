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
	
	`json:"photo_id"`

	
}

type HotelResponses []HotelResponse
