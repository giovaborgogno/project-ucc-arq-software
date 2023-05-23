package dto

import (
	"github.com/google/uuid"
)

type Photo struct {
	PhotoID uuid.UUID `json:"photo_id"`
	Url     string    `json:"url"`
	HotelID uuid.UUID `gorm:"type:char(36);not null"`
}

type Photos []Photo
