package dto

import (
	"github.com/google/uuid"

)

type HotelResponse struct {
	HotelID     uuid.UUID `json:"hotel_id,omitempty"`
	Title       string    `json:"title,omitempty"`
	Description string    `json:"description,omitempty"`
	Rooms       uint      `json:"rooms,omitempty"`
	PricePerDay float64   `json:"price_per_day"`

}

type HotelResponses []HotelResponse
