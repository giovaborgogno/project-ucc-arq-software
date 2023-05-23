package dto

import (
	"time"

	"github.com/google/uuid"
)

type BookingResponse struct {
	BookingID uuid.UUID `json:"booking_id,omitempty"`
	Rooms     uint      `json:"rooms,omitempty"`
	Total     float64   `gorm:"total,omitempty"`
	DateIn    time.Time `gorm:"date_in,omitemp"`
	DateOut   time.Time `gorm:"not null"`
	UserID    uuid.UUID `gorm:"type:char(36);not null"`
	HotelID   uuid.UUID `gorm:"type:char(36);not null"`
}

type BookingResponses []BookingResponse
