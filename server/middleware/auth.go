package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		isAdmin := true

		if !isAdmin {
			c.JSON(http.StatusForbidden, "Error: You are not allowed to access this!")
			c.Abort()
			return
		}

		c.Next()
	}
}