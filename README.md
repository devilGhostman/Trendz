# Trendz
## Demo - [LIVE](https://trendz-beta.vercel.app/)
```shell
https://trendz-beta.vercel.app/
```

## Getting started
### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
https://github.com/devilGhostman/Trendz.git
```

### Install packages

```shell
cd backend/
npm i
cd ..
cd frontend/
npm i
```

### Setup .env file in backend folder


```js
MONGODB_URL =
PORT_NO = 5000
PASSWORD_SEC_KEY =
JWT_SEC_KEY = 
STRIPE_KEY =
CLIENT_URL = http://localhost:3000 
```

### Setup .env file in frontend folder

```js
STRIPE_KEY =
```

### Start the backend

```shell
npm start
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]` ans `npm [command]`

| command         | description                                        |
| :-------------- | :------------------------------------------------- |
| `i` or `install`| Install all the dev dependency to run app          |
| `dev`           | Starts a development instance of the app in nextjs |
| `start`         | Starts a development instance of the app in nodejs |
