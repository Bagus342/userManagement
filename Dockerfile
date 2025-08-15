FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]