## Getting Started
Thanks to [create-react-app](https://github.com/facebookincubator/create-react-app), we will have a configuration-free dev experience. 

To get started, please clone this git repository and then run `npm install` once under the project top-level directory. 

This will install the dependencies for the client side.

**You’ll need to have Node installed on your machine**. (Node >= 6 and npm >= 3 are recommended).

### `npm run translate`

Runs translate lib

## While You're Developing...
Whenever you want to run/test the program, `cd` to the project top-level directory. Use these commands:

### `npm start`

Runs the app in the development mode, using the Webpack-provided "development server".<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.<br>
**Note The web app is up and running now, but some features (such as JWT-based authentication and server alerts/notifications) rely on an API Server. Be sure to run the [API Server](#an-api-server) as well.**

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

Note: `eject` is an advanced `create-react-app` tool. Read the [how-to](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md) for details.

## An API Server
The text and scripts above describe the client-side code that is displayed in the web browser. They rely on the Webpack-provided development server that runs on port 3000. 

This project also contains a separate [API server](https://github.com/cloudmu/react-redux-starter-kit/tree/master/server) that runs on a different port (3001) and handles authentication for certain UI pages using JWT based authentication.
The client login/logout requests will be proxied to the API server as described in: 
[Proxying API Requests in Development](https://github.com/facebookincubator/create-react-app/blob/ef94b0561d5afb9b50b905fa5cd3f94e965c69c0/template/README.md#proxying-api-requests-in-development).

In addition, the server will push notifications to the clients via [Socket.IO](http://socket.io/).

First you need to open a separate command line window, and run `npm install` under the project's `server` directory. 

```
cd react-redux-starter-kit
cd server
npm install
```

Then you can start the API server (under the project's server directory):

### `npm run server`

This starts the API server on port 3001, which listens for authentication (login/logout) requests from the client, and pushes server notifications. At this point, the application is fully operating.
