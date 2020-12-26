# Getting Started with RTMP Server

## Install Dependencies

### `npm install`

## Generate certificate

```
openssl genrsa -out privatekey.pem 1024
openssl req -new -key privatekey.pem -out certrequest.csr 
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
```

## Starting the server

In the project directory, you can run:

### `npm start`
