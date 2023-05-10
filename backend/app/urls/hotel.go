package urls

import (
	hotelController "mvc-go/controllers/hotel"
	middlewareController "mvc-go/controllers/middleware"

	"github.com/gin-gonic/gin"
)

func HotelRoute(hotel *gin.RouterGroup) {
	hotel.GET("/", hotelController.GetHotels)
	hotel.GET("/:hotelID", hotelController.GetHotelById)
	hotel.GET("/available", hotelController.GetAvailableHotels)
	hotel.GET("/available/:hotelID", hotelController.CheckAvailableHotelById)

	// Only admin:
	hotel.POST("/", middlewareController.CheckAdmin(), hotelController.InsertHotel)
	hotel.PUT("/:hotelID", middlewareController.CheckAdmin(), hotelController.UpdateHotel)
	hotel.DELETE("/:hotelID", middlewareController.CheckAdmin(), hotelController.DeleteHotel)

	photo := hotel.Group("/photo")
	photo.GET("/", hotelController.GetPhotos)

	// Only admin:
	photo.POST("/", middlewareController.CheckAdmin(), hotelController.InsertPhoto)
	photo.PUT("/:photoID", middlewareController.CheckAdmin(), hotelController.ChangePhoto)
	photo.DELETE("/:photoID", middlewareController.CheckAdmin(), hotelController.DeletePhoto)

	amenitie := hotel.Group("/amenitie")
	amenitie.GET("/", hotelController.GetAmenities)

	// Only admin:
	amenitie.POST("/", middlewareController.CheckAdmin(), hotelController.InsertAmenitie)
	amenitie.PUT("/:amenitieID", middlewareController.CheckAdmin(), hotelController.ChangeAmenitie)
	amenitie.DELETE("/:amenitieID", middlewareController.CheckAdmin(), hotelController.DeleteAmenitie)
}
