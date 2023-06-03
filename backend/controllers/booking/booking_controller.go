package bookingController

import (
	"mvc-go/dto"

	"time"

	"mvc-go/model"
  
	bookingService "mvc-go/services/booking"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"

	//"github.com/google/uuid"
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
	currentUser := c.MustGet("currentUser").(model.User)

	bookingsDto, er := bookingService.BookingService.GetBookingsByUserId(currentUser.UserID)
	if er != nil {
		c.JSON(er.Status(), gin.H{"error": er.Message()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"bookings": bookingsDto})

}

func GetBookings(c *gin.Context) {

	bookingsDto, err := bookingService.BookingService.GetBookings()
	if err != nil {
		c.JSON(err.Status(), gin.H{"error": err.Message()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"bookings": bookingsDto})
}

func SearchBookings(c *gin.Context) {
	date_in := c.Query("date_in")
	date_out := c.Query("date_out")
	dateIn, err := time.Parse("2006-01-02T15:04:05.000Z", date_in)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "date_in must be a correct date"})
		return
	}

	dateOut, err := time.Parse("2006-01-02T15:04:05.000Z", date_out)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "date_out must be a correct date"})
		return
	}
	search := c.Query("search")
	bookings, er := bookingService.BookingService.SearchBookings(search, dateIn, dateOut)
	if er != nil {
		c.JSON(er.Status(), gin.H{"error": er.Message()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"bookings": bookings})
}

func GetBookingById(c *gin.Context) {

}

func UpdateBooking(c *gin.Context) {

}

func DeleteBooking(c *gin.Context) {
	log.Debug("Booking id to delete: " + c.Param("bookingID"))

	uuid, err := uuid.Parse(c.Param("bookingID"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "bookingID must be an uuid"})
		return
	}

	er := bookingService.BookingService.DeleteBooking(uuid)
	if er != nil {
		c.JSON(er.Status(), gin.H{"error": er.Message()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": "Booking deleted successfully"})

}
