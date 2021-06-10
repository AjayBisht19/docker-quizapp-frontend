FROM node:10.16.1-alpine AS builder
WORKDIR /QuizAppFrontend
COPY . .
RUN npm i
RUN npm run build --prod


FROM nginx:1.17.1-alpine
COPY --from=builder /quizappfrontend/dist/quizappfrontend/ /usr/share/nginx/html