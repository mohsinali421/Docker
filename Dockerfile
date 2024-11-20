FROM node:21

WORKDIR /

COPY package*.json ./

# RUN command inside docker terminal
RUN npm install

# COPY HOST CONTAINER
COPY . .

# EXPOSE does not open the port rather it is just the information
EXPOSE 3002

# ENV variable key value
ENV PORT 3002

# Command to run when container starts
CMD [ "npm", "start" ]



