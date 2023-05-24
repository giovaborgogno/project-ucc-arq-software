FROM golang:alpine

WORKDIR /api
COPY . .

RUN go mod tidy
RUN go build -o /docker-go

CMD ["/docker-go"]