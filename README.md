# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs

## Setup

```sh
npm install --save-dev @testing-library/react-hooks
```

React-hooks-testing-library does not come bundled with a version of react to allow you to install the specific version you want to test against. It also does not come installed with a specific renderer, we currently support react-test-renderer and react-dom. You only need to install one of them, however, if you do have both installed, we will use react-test-renderer as the default. 

```sh
npm install react@^16.9.0
npm install --save-dev react-test-renderer@^16.9.0
```
Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Dependencies

    @testing-library/jest-dom
    @testing-library/react
    @testing-library/user-event
    react
    react-dom
    react-scripts
    web-vitals
    
## Screenshots

![Main View](https://raw.githubusercontent.com/DaftTrash97/PhotoLabs1/c0a82c655880e84e6b476e1eccc14092734a9459/docs/mainView.png)

![Nature Topic View With Favorites Selected](https://raw.githubusercontent.com/DaftTrash97/PhotoLabs1/c0a82c655880e84e6b476e1eccc14092734a9459/docs/NatureTopicWithFavorites.png)

![Modal View](https://raw.githubusercontent.com/DaftTrash97/PhotoLabs1/c0a82c655880e84e6b476e1eccc14092734a9459/docs/modalView.png)

![Modal Similar Photos View](https://raw.githubusercontent.com/DaftTrash97/PhotoLabs1/c0a82c655880e84e6b476e1eccc14092734a9459/docs/modalSimilarPhotosView.png)