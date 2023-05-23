package dto

import (
	"github.com/google/uuid"
	
)

type Amenitie struct {
	AmenitieID  uuid.UUID `json:"amenitie_id"`
	Title       string    `json:"title"`
	Description string    `gorm:"type:varchar(255);not null"`
}

type Amenities []Amenitie

