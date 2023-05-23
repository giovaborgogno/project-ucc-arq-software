package dto

import (
	"github.com/google/uuid"

)

type HotelResponse struct {
	HotelID     uuid.UUID `json:"hotel"`
	Title       string    `json:"type:varchar(255);not null"`
	Description string    `json:"type:varchar(255);not null"`
	Rooms       uint      `json:"not null"`
	PricePerDay float64   `json:"not null"`

}

type HotelResponses []HotelResponse
