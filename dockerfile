FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm update
COPY . /app
RUN npm run build
CMD ["npm", "start"]