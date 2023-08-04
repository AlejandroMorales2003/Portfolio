package main

import (
	"Portfolio/internal/controller"
	"Portfolio/middleware"
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	//LOAD ENV
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading env")
	}
	fmt.Println("LOADED ENV...")

	//CONNECT TO MONGO
	ctx, cancel := context.WithTimeout(context.Background(),10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx,options.Client().ApplyURI(os.Getenv("MONGODB_CONNECT")))
	if err != nil {
		panic(err)
	}
	defer func() {
		if err = client.Disconnect(ctx); err != nil {
			panic(err)
		}
		fmt.Println("MONGO DISCONNECTED")
	}()
	fmt.Println("MONGO CONNECTED")

	//DATABASE COLLECITON
	CarCollection := client.Database("Cars").Collection("Users")

	//ROUTING
	router := gin.New()

	adminGroup := router.Group("/admin")
	adminGroup.Use(middleware.AuthMiddleware())
	//puts the car collection to all
	carCtrl := controller.New(CarCollection)
	//creates a car
	router.POST("/car", carCtrl.CreateCar)
	//gets all cars
	adminGroup.GET("/car",	carCtrl.GetCars)
	//gets one car
	adminGroup.GET("/oneCar", carCtrl.GetOneCar)

	adminGroup.DELETE("/delete",carCtrl.DeleteCar)

	//begins web service
	fmt.Println("Connecting service to localhost:3001...")
	log.Fatal(router.Run(":3001"))
}