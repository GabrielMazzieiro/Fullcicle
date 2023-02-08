FROM golang:alpine AS builder

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /helloworld .

# FROM gcr.io/distroless/static-debian11
FROM golang:1.19.3-nanoserver

WORKDIR /

COPY --from=builder /helloworld /helloworld

USER nonroot:nonroot

ENTRYPOINT ["/helloworld"]



