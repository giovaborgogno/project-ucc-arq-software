package dto

import (
	"github.com/google/uuid"
)

type Photo struct {
	PhotoID uuid.UUID `json:"photo_id"`
	Url     string    `json:"url"`
	HotelID uuid.UUID `json:"hotel_id" binding:`
}

type Photos []Photo
