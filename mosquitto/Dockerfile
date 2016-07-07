FROM ubuntu:latest

RUN apt update -qq && apt install -y python-software-properties
RUN apt update -qq && apt install -y mosquitto

EXPOSE 1883

CMD mosquitto
