# Docker
This is docker repositories for everything

## Official Documentation
- [https://docs.docker.com/guides]

## Installation on Windows
- Download Docker Desktop for windows here - [https://www.docker.com] and log in
- It has Container, Images, Volumes, Builds.
- cmd -> docker -v

### Docker Commands
- docker ps         - list currently running container
- docker ps -a      - list all running+stopped container
- docker images     - list local images


## Create a new Image for nodejs
- Open a new project in vs code
- Download Vs code extension - ***Docker*** It lint the code + helps deploy images and run container from vs code directly
- Create a Docker File and write steps for a basic nodejs app
- docker build -t my-nodejs-app .

### Run container based on image
- docker run -p 3000:3000 my-nodejs-app

### Stop conatiner
- docker stop "conatiner-id"

### Cheatsheet
- [https://docs.docker.com/get-started/docker_cheatsheet.pdf]


