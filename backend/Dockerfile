FROM golang:alpine

WORKDIR /api
COPY .env.docker ./.env
COPY . .

RUN go mod tidy
RUN go build -o /docker-go

CMD ["/docker-go"]