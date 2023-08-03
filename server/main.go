package main

import (
	"fmt"
	"Portfolio/internal/controller"
	"log"
	"github.com/gin-gonic/gin"
)


func main() {
	fmt.Println("Hello world!")

	router := gin.New()
	router.GET("/health", controller.GetHealth)
	log.Fatal(router.Run(":3001"))
}