FROM ubuntu:latest

COPY /bin/tini /tini
RUN chmod +x /tini

RUN apt-get update -qq && apt-get install -y build-essential python

RUN mkdir /holideck
WORKDIR /holideck

ENTRYPOINT ["/tini", "--"]
CMD [ "python", "holideck.py" ]
