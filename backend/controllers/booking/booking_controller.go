package bookingController

import (
	"mvc-go/dto"
	// "mvc-go/model"
	bookingService "mvc-go/services/booking"
	"net/http"

	"github.com/gin-gonic/gin"
	// "github.com/google/uuid"
	log "github.com/sirupsen/logrus"
)

func CreateBooking(c *gin.Context) {
	var payload dto.Booking
	err := c.BindJSON(&payload)
	if err != nil {
		log.Error(err.Error())
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	booking, er := bookingService.BookingService.CreateBooking(payload)
	if er != nil {
		c.JSON(er.Status(), gin.H{"error": er.Message()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"booking": booking})
}

func GetBookingsMe(c *gin.Context) {

}

func GetBookings(c *gin.Context) {

}

func GetBookingById(c *gin.Context) {

}

func UpdateBooking(c *gin.Context) {

}

func DeleteBooking(c *gin.Context) {

}
