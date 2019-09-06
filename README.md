# react-type-cli
CLI tool for React + Redux with Typescript

## Features

* support "ducks mode"
    ```
    ├── src
    │   └── ducks
    │       ├── auth
    │       │   ├── actions
    │       │   └── reducers
    │       │
    │       └── product
    │           ├── actions
    │           └── reducers
    │
    │── package.json
    ```
* support "common mode"
    ```
    ├── src
    │   ├── actions
    │   └── reducers
    │      
    │── package.json
    ```
    
* generating components (class/function)
* generating actions 
* generating reducers automatically for action
* generating sagas automatically for action
* generating selectors file with [reselect](https://www.npmjs.com/package/reselect)
* generating stories file with [storybook](https://storybook.js.org/)
* generating styles file with [styled-components](https://www.styled-components.com/)

## Installation
    $ npm i -g react-type-cli
    
## Configuration
Create a .rtcrc file in your root directory to configure cli.
```
{
    "componentsPath": "src/components",
    "actionsPath": "src/actions",
    "reducersPath": "src/reducers",
    "sagasPath": "src/sagas",
    "selectorsPath": "src/selectors",
    "ducksPath": "ducks",
    "withSaga": true,
    "withReselect": true,
    "initialState": {
        "data": null,
        "error": null,
        "loading": false
    },
    "rootState": "AppState"

}
```

- `componentsPath` - place for your common components
- `ducksPath` if you are using "ducks mode"
- `actionsPath, reducersPath, sagasPath, selectorsPath` if you are using "common mode"
- `withSaga` if you are using [redux-saga](https://www.npmjs.com/package/redux-saga)
- `withReselect` if you are using [reselect](https://www.npmjs.com/package/reselect)
- `initialState` common initial state object
- `rootState` root state type interface

## Using

Generate component with `rtc gc ComponentName` command.

**Note**: By default component will be created in the same dir command was called from

* `-g` - create common component
* `-f` - create function component
* `-m` - with React.memo
* `-c` - with Redux.connect
* `-s` - with styled-components styles
* `--stories` - with storybook stories


Generate duck with `rtc gd auth` command.

Generate action with `rtc ga fetchUserData auth` command.

* `-p` - call actions with payload argument
* `-e` - call error actions with error argument
* `--no-reducer` - do not create reducer for this action
* `--no-saga` - do not create saga for this action

 
