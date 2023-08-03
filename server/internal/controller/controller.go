package controller

import (
	"go.mongodb.org/mongo-driver/mongo"
)

type (
	Controller interface {
		CarController
		MessageController
		HealthController
	}

	controller struct {
		collection *mongo.Collection
	}
)

func New(collection *mongo.Collection) Controller {
	return &controller{
		collection: collection,
	}
}