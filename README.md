# Demo School Mangement System

## Pre Requisites
- MongoDB connectivity

## Installation


``` bash
$ git clone git clone https://github.com/princekasok/demo.git
$ cd demo
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ npm i pm2 -g
$ npm install

```
## Access Server
- Test If running - http://localhost:3000/
- You would see Login

## Auto Setup Configuration
```bash
$ node first-time-setup.js
```
## Default credentials
- Username : admin@test.co
- Password : 12345

## Database connectivity
- open dbConfig.json and edit the file

## Running in Testing Server
- From root folder of project
``` bash
$ npm start
```

## Running in Production Server

- From root folder of the project

```bash

$ pm2 start app.js
```
- Stop Server
```bas
$ pm2 kill
```
- See Documentations http://pm2.keymetrics.io/docs/usage/process-management/
- See Logs of the Server
```bash
$ pm2 logs

```
