FROM node:16
COPY . /app 
WORKDIR /app
# COPY ./package.json /app
# RUN npm install
CMD npm run dev 
# CMD nodemon server.js
