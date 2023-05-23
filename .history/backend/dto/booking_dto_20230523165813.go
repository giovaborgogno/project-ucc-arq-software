package dto

import (
	"time"

	"github.com/google/uuid"
)

type BookingResponse struct {
	BookingID uuid.UUID `json:"booking_id"`
	Rooms     uint      `json:"rooms"`
	Total     float64   `json:"total"`
	DateIn    time.Time `json:"date_in"`
	DateOut   time.Time `json:"date_out,omitempty"`
	UserID    uuid.UUID `json:"user_id,omitempty"`
	HotelID   uuid.UUID `json:"hotel_id,omitempty"`
}

type BookingResponses []BookingResponse
