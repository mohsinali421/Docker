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
- docker run -p 3000:3001 my-nodejs-app
- [host-port] : [container-port] 

### Stop conatiner
- docker stop "conatiner-id"

### Give tag to image otherwise tag = latest
- docker build -t myapp:v2 .

### Delete container
- docker kill <container-id>
- docker rm <container-id>

### Delete images
- docker rmi image:tag

### Cheatsheet
- [https://docs.docker.com/get-started/docker_cheatsheet.pdf]

### Search images on Hub
- [https://hub.docker.com/]


