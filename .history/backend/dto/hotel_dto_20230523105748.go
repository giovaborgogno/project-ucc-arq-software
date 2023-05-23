package dto

import (
	"github.com/google/uuid"

)

type HotelResponse struct {
	HotelID     uuid.UUID `gorm:"type:char(36);primary_key"`
	Title       string    `gorm:"type:varchar(255);not null"`
	Description string    `gorm:"type:varchar(255);not null"`
	Rooms       uint      `gorm:"not null"`
	PricePerDay float64   `gorm:"not null"`

	Amenitie    Amenities `gorm:"many2many:hotel_amenities;"`
}

type HotelResponses []HotelResponse
