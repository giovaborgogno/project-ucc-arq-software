package hotelController

import (
	// "mvc-go/model"
	// userService "mvc-go/services/user"
	"net/http"

	"mvc-go/dto"
	hotelService "mvc-go/services/hotel"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	log "github.com/sirupsen/logrus"
)

func GetHotels(c *gin.Context) {
	hotels, er := hotelService.HotelService.GetHotels()
	if er != nil {
		c.JSON(er.Status(), gin.H{"error": er.Message()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"hotels": hotels})
}

func GetHotelById(c *gin.Context) {
	uuid, err := uuid.Parse(c.Param("hotelID"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "HotelID must be a uuid"})
		return
	}

	hotel, er := hotelService.HotelService.GetHotelById(uuid)
	if er != nil {
		c.JSON(er.Status(), gin.H{"error": er.Message()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"hotel": hotel})

}

func GetAvailableHotels(c *gin.Context) {

}

func CheckAvailableHotelById(c *gin.Context) {

}

func InsertHotel(c *gin.Context) {

	var payload dto.Hotel
	err := c.BindJSON(&payload)
	if err != nil {
		log.Error(err.Error())
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	hotel, er := hotelService.HotelService.InsertHotel(payload)
	if er != nil {
		c.JSON(er.Status(), gin.H{"error": er.Message()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"hotel": hotel})
}

func UpdateHotel(c *gin.Context) {

	uuid, err := uuid.Parse(c.Param("hotelID"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "HotelID must be a uuid"})
		return
	}

	var payload dto.Hotel
	errr := c.BindJSON(&payload)
	if errr != nil {
		log.Error(err.Error())
		c.JSON(http.StatusBadRequest, errr.Error())
		return
	}

	payload.HotelID = uuid

	hotel, er := hotelService.HotelService.UpdateHotel(payload)
	if er != nil {
		c.JSON(er.Status(), gin.H{"error": er.Message()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"hotel": hotel})
}

func DeleteHotel(c *gin.Context) {

	uuid, err := uuid.Parse(c.Param("hotelID"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "HotelID must be a uuid"})
		return
	}

	er := hotelService.HotelService.DeleteHotel(uuid)
	if er != nil {
		c.JSON(er.Status(), gin.H{"error": er.Message()})
		return
	}

}
