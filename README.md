# Socket IO multi-room chat 

A project for experimenting with socket.io. 

## Proxying

In development, the full stack template works by proxying requests from port 8080 to the server or the client.  Any requests to routes which start with `/api/`, (for example, `/api/foo`, or `/api/foo/bar`) will be sent to the server.  All other requests, will serve the client.

*tl;dr* Make sure your API endpoints start with `/api`.

## Installing dependencies

Client-side dependencies should be installed into the `client` directory:

```
cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME/client
npm install --save dependency-name
```

Server-side dependencies should be installed into the `server` directory:

```
cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME/server
npm install --save dependency-name
```

## Deployment

Requires the [Heroku CLI client](https://devcenter.heroku.com/articles/heroku-command-line).

### Setting up the project on Heroku

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Create the Heroku app: `heroku create PROJECT_NAME`

### Deploying to Heroku

* Push your code to Heroku: `git push heroku master`

