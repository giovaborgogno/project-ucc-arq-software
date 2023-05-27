package hotelController

import (
	// "mvc-go/model"
	// userService "mvc-go/services/user"
	"net/http"

	"mvc-go/dto"
	hotelService "mvc-go/services/hotel"

	"github.com/gin-gonic/gin"
	// "github.com/google/uuid"
	log "github.com/sirupsen/logrus"
)

func GetHotels(c *gin.Context) {

}

func GetHotelById(c *gin.Context) {

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

}

func DeleteHotel(c *gin.Context) {

}
