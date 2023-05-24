package app

import (
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

var (
	router *gin.Engine
)

func init() {
	router = gin.Default()
	// config := cors.DefaultConfig()
	// config.AllowCredentials = true
	// config.AllowOrigins = []string{"http://localhost:3000"}
	// config.AllowHeaders = []string{"Authorization", "Content-Type"}
	// router.Use(cors.New(config))
	router.Use(cors.Default())
}

func StartRoute() {
	mapUrls()

	log.Info("Starting server")
	router.Run(":" + os.Getenv("PORT"))

}
