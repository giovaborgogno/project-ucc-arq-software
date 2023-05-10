package model

import (
	"github.com/google/uuid"
	"github.com/jinzhu/gorm"
)

type Amenitie struct {
	AmenitieID  uuid.UUID `gorm:"type:char(36);primary_key"`
	Description string    `gorm:"type:varchar(255);not null"`
	HotelID     uuid.UUID `gorm:"type:char(36);not null"`
}

type Amenities []Amenitie

func (amenitie *Amenitie) BeforeCreate(scope *gorm.Scope) error {
	return scope.SetColumn("AmenitieID", uuid.New())
}
