# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Setting up a web server using json-server

json-server provides a very simple way to setup a web server that supports full-fledged REST API server. We're configuring and start a server using json-server to enable serving data to our react app.

### `Installing json-server`

json-server is a node module, and hence can be installed globally by typing the following at the command prompt:

```
     npm install json-server -g
```
If you are using OSX or Linux, use sudo at the front of the command. This will install json-server that can be started from the command line from any folder on your computer.

### `Configuring the Server`

- Locate the folder named **src/server/json-server**, and move to this folder.

- Review the db.json file provided inside this folder for sample records.
        
- Move to this folder in your terminal window, and type the following at the command prompt to start the server:

```
     json-server --watch db.json -p 3001 -d 2000
```
- This should start up a server at port number 3001 on your machine with 2 seconds of delay to simulate networking roundtrip time. The data from this server can be accessed by typing the following addresses into your browser address bar:

```
    http://localhost:3001/dishes
    http://localhost:3001/comments
    http://localhost:3001/promotions
    http://localhost:3001/leaders
    http://localhost:3001/feedback
```

## Available Scripts

In the project home directory, you can run:

```
It's important to setup web server using json-server before loading the react UI app
```
### `npm install`

Install the dev dependencies required by this project by running npm install.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
