# ConDigital fileUploader 

> file uploader app

## Getting Start

- First clone this repo
``` 
$ git clone https://github.com/dagemtsehay1/fileUploadert
```
- then cd to the directory and install all the neccessary packages 
```
$ cd fileUploadert
$ cd client
$ npm i
$ cd ../server
$ npm i
```

- then change database credential under `/server/utils/connection.ts`
```
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'condigital', //database name
 'root', // user
 '', //password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

export default sequelize;

```

- now run both applications 
```
$ cd client
$ npm run
```
```
$ cd server
$ npm run dev
```

### ⚠️ Note
> There are 3 scripts in the server application
 - build
 >to build the app

 - start
 >to run the app in production mode

 - dev
 >to run the app in dev mode also it supports live updates
