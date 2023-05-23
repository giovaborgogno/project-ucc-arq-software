package dto

import (
	"time"

	"github.com/google/uuid"
)

type Booking struct {
	BookingID uuid.UUID `gorm:"type:char(36);primary_key"`
	Rooms     uint      `gorm:"not null"`
	Total     float64   `gorm:"not null"`
	DateIn    time.Time `gorm:"not null"`
	DateOut   time.Time `gorm:"not null"`
	UserID    uuid.UUID `gorm:"type:char(36);not null"`
	HotelID   uuid.UUID `gorm:"type:char(36);not null"`
}

type BookingResponses []Booking
