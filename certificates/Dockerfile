FROM alpine:latest

RUN apk update && \
    apk add openssl

RUN mkdir ca && mkdir ca_mount

RUN openssl req \
  -new \
  -x509 \
  -days 3650 \
  -extensions v3_ca \
  -passout pass:password \
  -subj "/C=AU/ST=VIC/L=Melbourne/CN=Home Automation" \
  -keyout /ca/ca.key.pem \
  -out /ca/ca.crt.pem

RUN openssl genrsa \
      -out /ca/mqtt.local.key.pem 2048 && \
    openssl req \
      -new \
      -subj "/C=AU/ST=VIC/L=Melbourne/CN=mqtt.local" \
      -out /ca/mqtt.local.csr.pem \
      -key /ca/mqtt.local.key.pem && \
    openssl x509 \
      -req \ 
      -passin pass:password \
      -in /ca/mqtt.local.csr.pem \
      -CA /ca/ca.crt.pem \
      -CAkey /ca/ca.key.pem \
      -CAcreateserial \
      -out /ca/mqtt.local.crt.pem \
      -days 365

RUN openssl genrsa \
      -out /ca/mqtt-client.local.key.pem 2048 && \
    openssl req \
      -new \
      -subj "/C=AU/ST=VIC/L=Melbourne/CN=mqtt-client.local" \
      -out /ca/mqtt-client.local.csr.pem \
      -key /ca/mqtt-client.local.key.pem && \
    openssl x509 \
      -req \ 
      -passin pass:password \
      -in /ca/mqtt-client.local.csr.pem \
      -CA /ca/ca.crt.pem \
      -CAkey /ca/ca.key.pem \
      -CAcreateserial \
      -out /ca/mqtt-client.local.crt.pem \
      -days 365

RUN openssl genrsa \
      -out /ca/hass.local.key.pem 2048 && \
    openssl req \
      -new \
      -subj "/C=AU/ST=VIC/L=Melbourne/CN=hass.local" \
      -out /ca/hass.local.csr.pem \
      -key /ca/hass.local.key.pem && \
    openssl x509 \
      -req \ 
      -passin pass:password \
      -in /ca/hass.local.csr.pem \
      -CA /ca/ca.crt.pem \
      -CAkey /ca/ca.key.pem \
      -CAcreateserial \
      -out /ca/hass.local.crt.pem \
      -days 365

RUN openssl genrsa \
      -out /ca/garage.local.key.pem 2048 && \
    openssl req \
      -new \
      -subj "/C=AU/ST=VIC/L=Melbourne/CN=hass.local" \
      -out /ca/garage.local.csr.pem \
      -key /ca/garage.local.key.pem && \
    openssl x509 \
      -req \ 
      -passin pass:password \
      -in /ca/garage.local.csr.pem \
      -CA /ca/ca.crt.pem \
      -CAkey /ca/ca.key.pem \
      -CAcreateserial \
      -out /ca/garage.local.crt.pem \
      -days 365
