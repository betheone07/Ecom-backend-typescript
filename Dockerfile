FROM node:16
WORKDIR /home/node/app
COPY Ecom-backend-typescript /home/node/app/
RUN npm install
CMD npm run start
EXPOSE 6563