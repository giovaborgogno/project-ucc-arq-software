package app

import (
	middlewareController "mvc-go/controllers/middleware"

	"mvc-go/app/urls"

	log "github.com/sirupsen/logrus"
)

func mapUrls() {

	// Users Mapping
	api := router.Group("/api")

	auth := api.Group("/auth")
	urls.AuthRoute(auth)

	user := api.Group("/user")
	urls.UserRoute(user)

	hotel := api.Group("/hotel")
	urls.HotelRoute(hotel)

	booking := api.Group("/booking", middlewareController.DeserializeUser())
	urls.BookingRoute(booking)

	// amenitie := api.Group("/amenitie", middlewareController.DeserializeUser())
	// urls.AmenitieRoute(amenitie)

	log.Info("Finishing mappings configurations")
}
