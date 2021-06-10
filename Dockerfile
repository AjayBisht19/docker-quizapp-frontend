FROM node:10.16.1-alpine as builder
WORKDIR /QuizAppFront
COPY . .
RUN yarn install
RUN yarn run build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /QuizAppFront/dist/QuizAppFront/ /usr/share/nginx/html