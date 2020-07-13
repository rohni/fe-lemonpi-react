# Lemon Pi FE Test

Not as far as I would like, but there is something.

- fetching data from apis
- allowing displaying of advertisers even if the stats are not yet in, and view
  will update once stats are in
- styling approximating that in the pdf.  I had to guess on the exact colours
  (more comments below)

Still working on:

- Sorting (see below)

TODO:

- Testing all the things

And once the sorting and routing (persistent sorting) is done, I'm going to see
what I come up with using clojurescript. :-)

## Styling

Currently styling is being done with a global style sheet.  I would normally
break this down and attach it to components using css modules.  It needs
cleaning up, and tightening up.

The colours are defined globally, as variables so adding theming would be very
easy.

## Testing (lack of)

I ran out of time.  Normally, I would test all the data munging, and components
where needed. i.e. loading state, error state for the table etc.


## Still working on sorting

I have the arrows and styles and the headers are not jumping around too much
(well, actually yes, too much, but it is better than it was).

Currently what is done is implemented on the `feature/sorting` branch.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Currently on the TODO.  Got bogged down with getting things to initially work,
and wondering how to make it work.
- data munging needs tests
- various dumb components need testing
- integration tests needed to ensure all the connections are working

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
