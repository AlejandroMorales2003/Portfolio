package main

import (
	"Portfolio/internal/controller"
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

var CarCollection *mongo.Collection

func main() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading env")
	}
	fmt.Println("LOADED ENV...")
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

	CarCollection = client.Database("Cars").Collection("Users")

	router := gin.New()
	//puts the car collection to all
	ctrl := controller.New(CarCollection)
	router.POST("/car", ctrl.CreateCar)
	fmt.Println("Connecting service to localhost:3001...")
	log.Fatal(router.Run(":3001"))
}