FROM node:8.12.0

RUN apt-get -q update &&\
    apt-get install -y --no-install-recommends apt-transport-https ca-certificates &&\
    apt-get install -y xvfb

WORKDIR /tmp

RUN DEBIAN_FRONTEND=noninteractive apt-get install -yq unzip

RUN wget "https://chromedriver.storage.googleapis.com/2.9/chromedriver_linux64.zip" &&\
    unzip chromedriver_linux64.zip &&\
    mv chromedriver /usr/local/bin

RUN wget "https://goo.gl/uTXEJ1" -O selenium-server-standalone.jar &&\
    mv selenium-server-standalone.jar /usr/local/bin

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -

RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list &&\
    apt-get update &&\
    apt-get -yq install google-chrome-stable


RUN apt-get update -y 

RUN rm /usr/local/bin/yarn
RUN npm install -g yarn

WORKDIR /app
