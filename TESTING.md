Some tips:

```
require('babel-core/register')({
  ignore: /node_modules\/(?!react-native-vector-icons|react-native-router-flux|react-native-tabs|react-native-spinkit|react-native-drawer)/,
  plugins: [
    ['transform-assets', {
      extensions: ['png'],
      name: '[name].[ext]?[sha512:hash:base64:7]',
    }],
  ],
});
```
Tell babel to ignore everything in 'node_modules', except specific modules. I'm sure this could be written better with the 'only' property.
Secondly, some RN packages require image files - so we use the transform-assets plugin to fix that.

```
chai.use(chaiEnzyme());
mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false,
});
mockery.registerMock('react-native-router-flux', { Actions: {} });
```
We use 'react-native-mock' where possible. However, the module 'react-native-router-flux' requires NavigationExperimental - which has yet
to be mocked, so for the time being, we just mock it out completely.
