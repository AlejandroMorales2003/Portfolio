package controller

import (
	"Portfolio/internal/model"
	"context"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type CarController interface {
	CreateCar(ctx *gin.Context)
	GetCars(ctx *gin.Context)
	GetOneCar(ctx *gin.Context)
	DeleteCar(ctx *gin.Context)
}

func (c *controller) CreateCar(ctx *gin.Context) {
	var car model.Car
	if err:= ctx.BindJSON(&car); err != nil {
		ctx.IndentedJSON(http.StatusBadRequest, gin.H{"Invalid Creation of Car, Please try Again": err})
		fmt.Println("Invalid Creation of Car, Please try Again", err)
		return
	}

	result, err := c.collection.InsertOne(context.TODO(), car)
	if err != nil {
		fmt.Println(err)
		return
	}
	ctx.IndentedJSON(http.StatusOK, gin.H{"ID":result, "Car Info" : car})

}

func (c *controller) GetCars(ctx *gin.Context) {
	var cars []model.Car

	allCars, err := c.collection.Find(context.TODO(), bson.D{})
	if err != nil {
		fmt.Println(err)
		return
	}

	if err := allCars.All(context.TODO(), &cars); err != nil{
		fmt.Println(err)
		return
	}

	fmt.Println("HERE ARE ALL THE CARS!", cars)
	ctx.IndentedJSON(http.StatusAccepted, cars)
}


func (c *controller) GetOneCar(ctx *gin.Context) {
	var car model.Car
	if err:= ctx.BindJSON(&car); err != nil {
		fmt.Println(err)
		return
	}

	var result bson.M
	err := c.collection.FindOne(context.TODO(),bson.M{"make":car.Make,"model":car.Model,"year":car.Year}).Decode(&result)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			fmt.Println("No documents of that type")
			ctx.IndentedJSON(http.StatusBadRequest,"No documents of that type")
		} else {
			fmt.Println(err)
		}
		return
	}
	fmt.Println("FOUND THE CAR!", result)
	ctx.IndentedJSON(http.StatusOK, result)
}

func(c *controller) DeleteCar(ctx *gin.Context) {
	var car model.Car
	if err:= ctx.BindJSON(&car); err != nil {
		fmt.Println(err)
		return
	}

	var result bson.M
	err := c.collection.FindOneAndDelete(context.TODO(), bson.M{"make":car.Make,"model":car.Model,"year":car.Year}).Decode(&result)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("DELETED THE CAR!", result)
	ctx.IndentedJSON(http.StatusOK, gin.H{"Deleted the car": result})
}
/* /* 
func(c* controller) UpdateCar(ctx *gin.Context) {
	var car model.Car
	if err:=ctx.BindJSON(&car); err != nil {
		fmt.Println(err)
		return
	}

		c.collection.Up
	result, err := c.collection.UpdateOne(context.TODO(),bson.M{"make":car.Make,"model":car.Model,"year":car.Year})
} /* */