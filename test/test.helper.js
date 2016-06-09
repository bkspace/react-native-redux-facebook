var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');
var mockery = require('mockery');

require('react-native-mock/mock');

require('babel-core/register')({
  ignore: /node_modules\/(?!react-native-vector-icons|react-native-router-flux|react-native-tabs|react-native-spinkit|react-native-drawer)/,
  plugins: [
    ['transform-assets', {
      extensions: ['png'],
      name: '[name].[ext]?[sha512:hash:base64:7]',
    }],
  ],
});

chai.use(chaiEnzyme());
mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false,
});
mockery.registerMock('react-native-router-flux', { Actions: {} });
