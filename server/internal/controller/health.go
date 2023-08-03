package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

type HealthController interface {
	GetHealth(ctx *gin.Context)
}

func (c *controller) GetHealth(ctx *gin.Context) {
	ctx.IndentedJSON(http.StatusAccepted,"It's all good in the hood")
}