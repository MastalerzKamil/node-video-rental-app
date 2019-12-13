[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
# About
You can checkout API on https://pipeline-vid-master-o3ynxnsf9a.herokuapp.com/version

# Routes

`GET /version` - getting API version
`POST /movies` - adding movie to database from OMDAPI by title
```javascript
{
  "title": "<your movie title> (required)",
}
```
`GET /movies` - getting all movies in database