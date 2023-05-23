package dto

import (
	"time"

	"github.com/google/uuid"
)

type BookingResponse struct {
	BookingID uuid.UUID `json:"user_id,omitempty"`
	Rooms     uint      `json:"rooms, "`
	Total     float64   `gorm:"not null"`
	DateIn    time.Time `gorm:"not null"`
	DateOut   time.Time `gorm:"not null"`
	UserID    uuid.UUID `gorm:"type:char(36);not null"`
	HotelID   uuid.UUID `gorm:"type:char(36);not null"`
}

type BookingResponses []BookingResponse
