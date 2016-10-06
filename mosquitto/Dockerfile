FROM ubuntu:latest

ENV TINI_VERSION v0.10.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

RUN apt update -qq && apt install -y python-software-properties
RUN apt update -qq && apt install -y mosquitto

RUN mkdir /ca

COPY ./etc/mosquitto.conf /etc/mosquitto/mosquitto.conf
COPY ./etc/bridge.conf /etc/mosquitto/bridge.conf 

EXPOSE 8883

ENTRYPOINT [ "/tini", "--" ]
CMD mosquitto -c /etc/mosquitto/mosquitto.conf
