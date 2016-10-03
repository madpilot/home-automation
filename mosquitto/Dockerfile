FROM ubuntu:latest

RUN apt update -qq && apt install -y python-software-properties
RUN apt update -qq && apt install -y mosquitto

RUN mkdir /ca

COPY ./etc/mosquitto.conf /etc/mosquitto/mosquitto.conf 

EXPOSE 8883

CMD mosquitto -c /etc/mosquitto/mosquitto.conf
