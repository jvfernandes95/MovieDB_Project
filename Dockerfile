FROM alpine

WORKDIR /~/Documents/MovideDB_Project

COPY . /~/Documents/MovideDB_Project

RUN npm install -g @angular/cli

Run npm install

CMD [ "ng","serve","--host","0.0.0.0" ]


