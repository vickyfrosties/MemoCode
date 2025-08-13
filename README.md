# MemoCode

![Static Badge](https://img.shields.io/badge/React.js-62dafb)
![Static Badge](https://img.shields.io/badge/JavaScript-f7df31)
![Static Badge](https://img.shields.io/badge/Express.js-black)
![Static Badge](https://img.shields.io/badge/Node.js-88c743)
![Static Badge](https://img.shields.io/badge/MongoDB-519747)

MemoCode is a full-stack web application built with React, Express, Node and MongoDB. It allows you to create notes, read them, edit and even delete them if you're no longer interested in it. It uses a clean and responsive interface.

## Table of contents

- [MemoCode](#memocode)
  - [Table of contents](#table-of-contents)
    - [Purpose](#purpose)
  - [Technologies stack](#technologies-stack)
  - [Clone the project](#clone-the-project)
  - [Installation](#installation)
    - [Dependencies](#dependencies)
  - [Usage](#usage)
    - [Client](#client)
    - [Server](#server)

### Purpose

This project's goal is all about **learning concepts** from the IT industry and have a unique space to store the core information and get an **easy and efficient** user interface. As I usually read blogs and documentations, it gets really difficult to keep track of all the information into folders using bookmarks.

## Technologies stack

This project implements full **CRUD** functionality - **_CREATE_**, **_READ_**, **_UPDATE_** and **_DELETE_** via RESTful API endpoints.

The following stacks are those that have been used in the project:

```
| Front-End  | Back-End | Database       |
| ---------- | -------- | -------------- |
| React.js   | Express  | MongoDB Atlas  |
| JavaScript | Node.js  | MongoDB Driver |
| SCSS/SASS  | Nodemon  | -------------- |
```

## Clone the project

To get the project on your local device, run this command in your terminal:

```
git clone https://github.com/vickyfrosties/MemoCode.git
```

Then open the project in your editor and run those commands in separate terminals:

- Navigate to the client folder

```
cd MemoCode/frontend/
```

- Navigate to the server folder

```
cd MemoCode/backend/
```

## Installation

### Dependencies

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
