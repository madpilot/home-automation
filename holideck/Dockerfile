FROM ubuntu:latest

ENV TINI_VERSION v0.10.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

RUN apt-get update -qq && apt-get install -y build-essential python curl
RUN curl -sL http://nodejs.org/dist/v0.10.28/node-v0.10.28.tar.gz -o ./node-v0.10.28.tar.gz  && \
    tar -zxvf ./node-v0.10.28.tar.gz && \
    cd ./node-v0.10.28 && \
    ./configure && \
    make && \
    make install && \
    rm -rf ./node-v0.10.28 && \
    rm -rf ./node-v0.10.28.tar.gz

RUN mkdir /holideck
WORKDIR /holideck

ENTRYPOINT ["/tini", "--"]
CMD [ "python", "holideck.py" ]