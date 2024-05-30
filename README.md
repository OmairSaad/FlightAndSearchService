# Welcome to Search and Flight service

## Project Set Up
- clone the project one your local
- Execute `npm install` on the same path as of your root where the downloaded project
- create a .env file in the root directory and add following environment variable
    - `PORT=3000`
- Inside the `src/config` directory create a `config.json` file and add the following piece of json

```

{
  "development": {
    "username": <Your mysql username>,
    "password": <Your mysql password if>,
    "database": <Db name>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
```
- once you have added db config as listed above, go to src folder from your terminal and execute `npx sequelize db:create` then `npx sequelize db:migrate` to create table in db on the basis of model.

- To create a model use `npx sequelize modle:generate --name City --attributes name:string` in `/src` directory where `config/cnfig.json` file exits.