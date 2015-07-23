#React Router

##Routes

- App.jsx(entry point) will be different using react-router.
  - React.render is now using the `Handler` component given to us by react-router.
- You need your `routes` file. This is like the config in angular routing.
  - This is where you decide what components represent the entry point for what routes.
    - Require in all route entry point components. (Components that represent the beginning of your route)
  - You assign url's in here as well.
    - There are names for each route.
    - There can be paths for each route.
  - You need a main component that is in essence where you put your `ng-view` equivalent.
