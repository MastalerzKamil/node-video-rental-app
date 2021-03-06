
# About
You can checkout API containers deploy at http://46.101.119.25:3000/movies (URL to find all actual movie)

Deployed on DigitalOcean droplet as dockerized app. (Manual configuration)

# Requirements

* MongoDB
* Node.JS
* Docker

# Runing app

## Locally

* change url for your database in `config/config.json` (optional)
* Run MonogoDB database
* Use `npm install` and then `npm run start: dev` to run app

## Dockerized

* Use `docker-compose up` to run app and everything should works after building
* Use `docker-compose down` to close app on docker or just `docker-compose down -v --rmi all --remove-orphans` to close and remove everytving connected with app

## Deployed

Use url http://46.101.119.25:3000 to get or post something fro my API

# Routes

| Route | Body/Params | Response | description |
| :---                    |     :---:      |     :---:     |   ---:    |
| `GET /version`          | -                                | api_<api version>    |   Getting api version         |
| `POST /movies`          | `title: String (required)`       |  object with movie details      |      add movie from omdapi to our database       |
| `GET /movies`           |   -                              |   list of all movies from app database  |   Getting all movies from database    |
| `GET /movies/:movieId`  |   `movieId: String (required)`   | movie details by ID   | Getting movie details from  database  |
|  `POST /comments`       |   `title: String (required), movie: String (required), text: String (required), rate: Decimal (required)`   |   Comment object  |   Adding comment for movie   |
|       `GET /comments`            |  -    |   list of all comments from app database |   Getting all coments from database  |
|  `GET /comments:movieId` |  `movieId: String (required)`    |   All comments for movie with movieId provided  |   Getting all comments for movie   |

## Example requests

https://app.getpostman.com/join-team?invite_code=ccc8a31c7fe9842fd959e1c0de2e7ff2&ws=2d7f0508-ee95-4c01-87ae-fb4299af8d27