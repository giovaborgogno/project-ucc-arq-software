package dto

import (
	"github.com/google/uuid"
	
)

type Amenitie struct {
	AmenitieID  uuid.UUID `:"type:char(36);primary_key"`
	Title       string    `gorm:"type:varchar(255);not null"`
	Description string    `gorm:"type:varchar(255);not null"`
}

type Amenities []Amenitie

