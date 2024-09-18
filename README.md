# docs

This web frontend to the documentation depends on <https://openebench.bsc.es/rest/docs/projects>

The prefix of the service to be used can be changed on [.env.production](.env.production).

## Auto Deployment

The Deployment is set up with Docker and GIT workflows.

`docker-image.yml` contains the GIT workflow specifications, using `DOCKER_HUB_USER_NAME` and `DOCKER_HUB_ACCESS_TOKEN` as Docker Hub credentials.

`Dockerfile` contains the ENV variables and Build stage (nginx).

### Production/Master

```yml
name: Docker Image CI production

on:
  push:
    branches: [ master ]
```

The git workflow for building and pushing the Docker Image for <https://docs.openebench.bsc.es/> is triggered by a push to the `master` branch.
### Docker compose

The respective docker compose files for the oeb landscape can be found in this repo: <https://github.com/inab/oeb-docker-compose>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
