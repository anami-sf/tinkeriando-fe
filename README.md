# tinkeriando-fe

## Install
```
$ cd app
$ yarn
```

## Run server locally
`$ yarn dev`

## Build dist for production
`$ yarn build`

## Docker-compose
From inside the /app directory
`docker-compose -f docker-compose.dev.yml up`

To rebuild a Docker container, a new image must be created based on the changes made to the files within the container. This is accomplished by using the docker-compose up command with the --build flag, which instructs Docker to rebuild the container and create a new image based on the changes made to the files.