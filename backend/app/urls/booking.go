package urls

import (
	bookingController "mvc-go/controllers/booking"
	middlewareController "mvc-go/controllers/middleware"

	"github.com/gin-gonic/gin"
)

func BookingRoute(booking *gin.RouterGroup) {
	booking.POST("/", bookingController.CreateBooking)
	booking.GET("/me", bookingController.GetBookingsMe)
	booking.GET("/:bookingID", bookingController.GetBookingById)
	booking.PUT("/:bookingID", bookingController.UpdateBooking)
	booking.DELETE("/:bookingID", bookingController.DeleteBooking)

	// Only admin:
	booking.GET("/", middlewareController.CheckAdmin(), bookingController.GetBookings)
}
