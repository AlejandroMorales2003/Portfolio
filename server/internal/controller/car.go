package controller

import (
	"Portfolio/internal/model"
	"context"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)


type CarController interface {
	CreateCar(ctx *gin.Context)
}

func (c *controller) CreateCar(ctx *gin.Context) {
	var car model.Car
	if err:= ctx.BindJSON(&car); err != nil {
		ctx.IndentedJSON(http.StatusBadRequest, "Invalid Creation of Car, Please try Again")
		ctx.JSON(http.StatusBadRequest,err)
	}

	result, err := c.collection.InsertOne(context.TODO(), car)
	if err != nil {
		fmt.Println(err)
	}
	ctx.IndentedJSON(http.StatusOK, result)

}