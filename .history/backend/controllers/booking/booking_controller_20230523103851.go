package bookingController

import (
	// "mvc-go/dto"
	// "mvc-go/model"
	// userService "mvc-go/services/user"
	// "net/http"

	"github.com/gin-gonic/gin"
	// "github.com/google/uuid"
	// log "github.com/sirupsen/logrus"
)

func CreateBooking(c *gin.Context) {

	var payload dto.CreateBookingRequest

	err := c.BindJSON(&payload)
	if err != nil {
		log.Error(err.Error())
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	bookingID := uuid.New().String()

	booking := model.Booking{
		ID:          bookingID,
		UserID:      payload.UserID,
		RoomID:      payload.RoomID,
		StartDate:   payload.StartDate,
		EndDate:     payload.EndDate,
		Description: payload.Description,
	}

	err = bookingService.CreateBooking(booking)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create booking"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"success": "Booking created successfully"})
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
