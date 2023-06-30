<div align="center">
    <h1>SIMPLE NODE.JS API WITHOUT FRAMEWORK</h1>
  
  [![Node.js Version](https://img.shields.io/badge/Node.js-%3E=18-brightgreen)](https://nodejs.org/)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
</div>

## 📋 About

A simple API of users (CRUD), built using Node.js without any framework. The API allows to create, update, delete, and retrieve data using filters. The repository also inclues some code files about streams, which Node is known for being very good at.

## 🌐 Technologies

-   JavaScript
-   Node.js (v. 18)

## 🚀 Installation and usage

To run the project locally, get a clone of it and access its directory, then execute:

```bash
$ npm run dev
```

Make sure you are using Node version 18, to execute the server in watch mode.

The server will start on TCP port 3333.

For testing, you can use an API client like Insomnia.<br>

## Endpoints

**Retrieve users with or without query parameters**

```
GET /users
GET /users?name=nameExample&email=email-example@email.com``
```

<br>

**Create a user via body request**<br>

```
POST /users
{
        "name": "Leandro"
        "email": "leandro@email.com
}

```

<br>

**Update a user via route paramaters and body request**

```
PUT /users/id

{
        "name": "Camila",
}
```

<br>

**Delete a user via route paramaters**

```
DELETE /users/id
```

<br>

## 📃 License

Project under MIT license.
