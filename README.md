## *Your notes for us*


*Place any details about your implementation and usage of your app here.*


---


## General

### What to do?

Sauce Labs offers a variety of real devices in the cloud. Users can request available devices to remotely run their tests on them.  

The goal of this challenge is to build a simple UI that displays some details about the devices and shows which of them are currently available.  

Please make sure to fulfill the *Acceptance Criteria* when implementing the *User Stories* listed below.  

We are looking forward to your submission. :)


### How much time?

Please don't spend more than a few hours on this within a 48 hour window, but please let us know if you need more time. We know you have other duties. We want you to have enough time to comfortably complete this challenge.


### Any questions?

Feel free to contact us.


## Acceptance Criteria

- **Create a good user experience.** We want to provide our users with interfaces which are simple, useable and good-looking. Feel free to download another style library; you will not be penalized for this. Just make sure that you are happy with the UI/UX 🎨
- **Write your own components.** We prepared this scaffold for you. We believe it comes with everything necessary to complete the tasks. You can use other libaries than the pre-installed ones for API requests, data handling etc., but please do not use ready-made components. We included a few scripts and utilities as documented below under *Available Scripts* and *Available Utilities*. We suggest to follow the [Ducks](https://github.com/erikras/ducks-modular-redux) file structure.
- **Write tests.** Write unit tests for components and other logic as you see fit. You may use the pre-installed libraries Chai, Enzyme and Sinon, but feel free to use what works for you. We know that setting up proper container tests can be time-consuming, so don‘t feel obligated to have perfect coverage for that.


## User Stories

Please implement the following user stories based on the acceptance criteria described in the section above.

### 1. As a user, I want to see an overview of all real devices that Sauce Labs offers

Mock endpoints to retrieve the list of real devices:
- `http://localhost:3004/eu-devices`

An image for each device can be found at:
- `https://d3ty40hendov17.cloudfront.net/device-pictures/{descriptorId}.png`

You don't have to show all fields for each device from the API response; pick which ones make sense to you.


### 2. As a user, I want to filter devices by operating system

Allow the user to choose between all operating systems, only Android and only iOS.


### 3. As a user, I want to see which devices are currently available

Periodically refresh the status of the displayed devices.

Mock endpoints to retrieve the list of available devices:

- `http://localhost:3004/eu-availability`

We know that this list doesn't change, but for the sake of this exercise, please implement a solution that assumes that this list is updated in real time :)


## Available Scripts

In the project directory, you can run the following commands.


### `npm install`

Installs dependencies.


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run server:start`

Starts the mock server.


### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the documentation about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Available Utilities

You may use the following utilites to avoid writing boilerplate code.

### createConstants

```js
import { createConstants } from '../utils/constant';

// Without the utility
export const NAMESPACE = 'manual';
export const STACKTAB_TOGGLE = `${NAMESPACE}/STACKTAB_TOGGLE`;
export const STACKTAB_OPEN = `${NAMESPACE}/STACKTAB_OPEN`;
export const STACKTAB_CLOSE = `${NAMESPACE}/STACKTAB_CLOSE`;

// Usage of the utility
export const NAMESPACE = 'manual';
export const STACKTAB = createConstants(NAMESPACE, 'stacktab')(
  'TOGGLE',
  'OPEN',
  'CLOSE',
);

// This will generate:
// {
//   TOGGLE: 'manual/STACKTAB_TOGGLE',
//   OPEN: 'manual/STACKTAB_OPEN',
//   CLOSE: 'manual/STACKTAB_CLOSE',
// }
```

### createApiConstants

```js
import { createApiConstants } from '../utils/constant';

// Without the utility
export const NAMESPACE = 'manual';
export const SESSION_GET_REQUEST = `${NAMESPACE}/SESSION_GET_REQUEST`;
export const SESSION_GET_SUCCESS = `${NAMESPACE}/SESSION_GET_SUCCESS`;
export const SESSION_GET_FAILURE = `${NAMESPACE}/SESSION_GET_FAILURE`;

// Usage of the utility
export const NAMESPACE = 'manual';
export const SESSION_GET = createApiConstants(NAMESPACE, 'session_get');

// This will generate:
// {
//   REQUEST: 'manual/SESSION_GET_REQUEST',
//   SUCCESS: 'manual/SESSION_GET_SUCCESS',
//   FAILURE: 'manual/SESSION_GET_FAILURE',
// }
```

### createAction

For more info regarding action structure check [flux standard action](https://github.com/acdlite/flux-standard-action).

```js
import { createAction } from '../utils/action';

// Without the utility
const openStacktab = (payload) => ({
  type: constants.STACKTAB_OPEN,
  payload,
});

// Usage of the utility
const openStacktab = createAction(constants.STACKTAB_OPEN);
```

### createErrorAction

```js
import { createErrorAction } from '../utils/action';

// Without the utility
const removeSessionFailure = (payload) => ({
  type: constants.SESSION_REMOVE_FAILURE,
  payload,
  error: true,
});

// Usage of the utility
const removeSessionFailure = createErrorAction(constants.SESSION_REMOVE_FAILURE);
```

### createApiAction

This utility helps only with super simple api calls

```js
import { createApiAction } from '../utils/action';
import { createApiConstants } from '../utils/constant';

// Without the utility
const getSessionRequest = () => ({
  type: constants.SESSION_GET_REQUEST,
});

const getSessionSuccess = (payload, record) => ({
  type: constants.SESSION_GET_SUCCESS,
  payload,
  record,
});

const getSessionFailure = (payload, record) => ({
  type: constants.SESSION_GET_FAILURE,
  payload,
  record,
});

const getSession = (payload) => (dispatch) => {
  dispatch(getSessionRequest());

  return api.getSession(payload).then(
    ({ data }) => dispatch(getSessionSuccess(data)),
    (error) => {
      dispatch(getSessionFailure(error));
      throw error;
    },
  );
};

// Usage of the utility
const constants = createApiConstants('session_get', 'manual') // <- this should be imported from constants file
const getSession = createApiAction(constants, (payload) => api.getSession(payload));
```


---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
