package hotelService

import (
	"errors"
	hotelClient "mvc-go/clients/hotel"
	"mvc-go/dto"
	"mvc-go/model"

	// "time"

	e "mvc-go/utils/errors"

	"github.com/google/uuid"
)

type hotelService struct{}

type hotelServiceInterface interface {
	InsertHotel(hotelDto dto.Hotel) (dto.Hotel, e.ApiError)
}

var (
	HotelService hotelServiceInterface
)

func init() {
	HotelService = &hotelService{}
}

func (s *hotelService) InsertHotel(hotelDto dto.Hotel) (dto.Hotel, e.ApiError) {
	hotel := model.Hotel{
		Title:       hotelDto.Title,
		Description: hotelDto.Description,
		Rooms:       hotelDto.Rooms,
		PricePerDay: hotelDto.PricePerDay,
	}

	hotel = hotelClient.HotelClient.InsertHotel(hotel)
	if hotel.HotelID == uuid.Nil {
		return dto.Hotel{}, e.NewInternalServerApiError("Error trying insert new hotel", errors.New(""))
	}

	hotelDto.HotelID = hotel.HotelID

	return hotelDto, nil
}
