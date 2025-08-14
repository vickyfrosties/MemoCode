# MemoCode

![Static Badge](https://img.shields.io/badge/react-grey?style=for-the-badge&logo=react)
![Static Badge](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![Static Badge](https://img.shields.io/badge/express-white?style=for-the-badge&logo=express&logoColor=black)
![Static Badge](https://img.shields.io/badge/node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/mongodb-56a94c?style=for-the-badge&logo=mongodb&logoColor=white)
![Static Badge](https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## ! Important note

This project is still in development mode. The only way to use it is to run it locally. Make sure to follow all the steps to make it work.

## Table of Contents

- [MemoCode](#memocode)
  - [! Important note](#-important-note)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
    - [Purpose](#purpose)
    - [Technologies stack](#technologies-stack)
  - [Installation](#installation)
    - [Clone the repository](#clone-the-repository)
    - [Install dependencies](#install-dependencies)
  - [Usage](#usage)
    - [Client](#client)
    - [Server](#server)

## Introduction

MemoCode is a full-stack web application built with React, Express, Node and MongoDB. It allows you to create notes, read, edit and delete them as long as you like. It uses a clean and responsive interface.

### Purpose

The project first goal is to have a unique space to store and get an **easy access** at all the IT industry concepts that I learn from. As I read blogs and documentations, it gets really difficult to keep track of all the information into folders using bookmarks.

### Technologies stack

This project implements full **CRUD** functionality - **_CREATE_**, **_READ_**, **_UPDATE_** and **_DELETE_** via RESTful API endpoints.

The following stacks are those that have been used in the project:

```
| Front-End  | Back-End | Database       |
| ---------- | -------- | -------------- |
| React.js   | Express  | MongoDB Atlas  |
| JavaScript | Node.js  | MongoDB Driver |
| SCSS/SASS  | Nodemon  | -------------- |
```

## Installation

### Clone the repository

To get the project on your local device, run this command in your terminal:

```
git clone https://github.com/vickyfrosties/MemoCode.git
```

Then open the project in your editor and run those commands in **separate** terminals:

- Navigate to the client folder

```
cd MemoCode/frontend/
```

- Navigate to the server folder

```
cd MemoCode/backend/
```

### Install dependencies

Now, to install all the dependencies, you have to install the package manager (**_node_modules_**) on each folder. Also, make sure you are in the correct directory.

With **_npm_** as the package manager, run these commands:

- Client (_MemoCode/frontend/_)

```
pwd
MemoCode/frontend/
npm install
```

- Server (_MemoCode/backend/_)

```
pwd
MemoCode/backend/
npm install
```

With **_yarn_** as the package manager, run these commands:

- Client (_MemoCode/frontend/_)

```
cd MemoCode/frontend/
yarn install
```

- Server (_MemoCode/backend/_)

```
cd MemoCode/backend/
yarn install
```

## Usage

### [Client](frontend/README.md)

To run the project, execute the following command on the **client** folder:

```
npm run dev
```

Click the link that shows up in the terminal and it should open the web application on your browser.

### [Server](backend/README.md)

To run the server and the database connection, execute the following command on the **server** folder:

```
npm run dev
```

You should see a logging message such as : "_MongoDB is connected!_" if so, the whole project is ready to be used.
