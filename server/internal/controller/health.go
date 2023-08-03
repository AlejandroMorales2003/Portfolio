package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

func GetHealth(c *gin.Context) {
	c.IndentedJSON(http.StatusAccepted,"It's all good in the hood")
}