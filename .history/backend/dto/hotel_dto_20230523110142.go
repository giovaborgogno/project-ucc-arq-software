package dto

import (
	"github.com/google/uuid"

)

type HotelResponse struct {
	HotelID     uuid.UUID `json:"hotel_id,omitempty"`
	Title       string    `json:"title,omitempty"`
	Description string    `json:"description"`
	Rooms       uint      `json:"not null"`
	PricePerDay float64   `json:"not null"`

}

type HotelResponses []HotelResponse
