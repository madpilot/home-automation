FROM ubuntu:latest

ENV TINI_VERSION v0.10.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

RUN apt-get update -qq && apt-get install -y build-essential python

RUN mkdir /holideck
WORKDIR /holideck

ENTRYPOINT ["/tini", "--"]
CMD [ "python", "holideck.py" ]