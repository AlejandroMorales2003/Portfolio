package model

//Point of this, person can tell me what they like and don't like
//gives the overall rating on the screen



type Message struct {
	Name		string 		`bson:"name" json:"name"`
	Description	string		`bson:"description" json:"description"`
	Rating		int			`bson:"rating" json:"rating"`
}

type Car struct {
	Make 		string		`bson:"make" json:"make"`
	Model 		string 		`bson:"model" json:"model"`
	Year		int			`bson:"year" json:"year"`
}