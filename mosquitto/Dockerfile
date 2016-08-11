FROM ubuntu:latest

RUN apt update -qq && apt install -y python-software-properties
RUN apt update -qq && apt install -y mosquitto

COPY ./etc/mosquitto.conf /etc/mosquitto/mosquitto.conf 
COPY ./etc/ca_certificates/ca.crt /etc/mosquitto/ca_certificates/ca.crt
COPY ./etc/certs/server.key /etc/mosquitto/certs/server.key
COPY ./etc/certs/server.crt /etc/mosquitto/certs/server.crt
COPY ./etc/passwd /etc/mosquitto/passwd 

EXPOSE 8883

CMD mosquitto -c /etc/mosquitto/mosquitto.conf
