package dto

import (
	"github.com/google/uuid"
)

type Photo struct {
	PhotoID uuid.UUID `json:"photo_id"`
	Url     string    `json:"url"`
	HotelID uuid.UUID `json:"photo_id"`
}

type Photos []Photo
