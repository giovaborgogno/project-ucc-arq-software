package dto

import (
	"github.com/google/uuid"
	
)

type Amenitie struct {
	AmenitieID  uuid.UUID `json:"photo_id"`
	Title       string    `gorm:"type:varchar(255);not null"`
	Description string    `gorm:"type:varchar(255);not null"`
}

type Amenities []Amenitie

