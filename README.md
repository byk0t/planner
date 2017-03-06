## TODO manager build on ReactJS, NodeJS, MongoDB

### Install
1. install node
2. install npm
3. install mongo
4. clone this project
5. ```cd planner```
6. ```cp ./src/config/config.json.sample ./src/config/config.json```
5. setup your configuration in config.json
6. ```npm install```

### RUN in DEVELOPMENT mode (with hot reload, etc)
```npm run dev-server && npm run webpack-dev```

### RUN in PRODUCTION mode

```npm run build && npm run start```
### Deploy on Heroku
1. fetch heroku branch
2. ```git checkout heroku```
3. install heroku console
4. ```heroku login```
5. ```git push heroku heroku:master```
6. ```heroku logs```
