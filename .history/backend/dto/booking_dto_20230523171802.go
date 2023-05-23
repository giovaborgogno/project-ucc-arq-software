package dto

import (
	"time"

	"github.com/google/uuid"
)

type Booking struct {

	Rooms     uint      `json:"rooms"`
	Total     float64   `json:"total"`
	DateIn    time.Time `json:"date_in"`
	DateOut   time.Time `json:"date_out"`
	UserID    uuid.UUID `json:"user_id"`
	HotelID   uuid.UUID `json:"hotel_id"`
}

type Bookings []Booking
