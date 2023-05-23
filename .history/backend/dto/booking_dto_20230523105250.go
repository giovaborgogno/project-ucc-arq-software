package dto

import (
	"time"

	"github.com/google/uuid"
)

type BookingResponse struct {
	BookingID uuid.UUID `json:"booking_id,omitempty"`
	Rooms     uint      `json:"rooms,omitempty"`
	Total     float64   `json:"total,omitempty"`
	DateIn    time.Time `json:"date_in,omitempty"`
	DateOut   time.Time `json:"date_out,omitempty"`
	UserID    uuid.UUID `json:"user_id,omitempty"`
	HotelID   uuid.UUID `json:"hotel_id,omitempty"`
}

type BookingResponses []BookingResponse
