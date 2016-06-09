import React, { Component, PropTypes } from 'react';
import { View, AsyncStorage } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import reducers from './reducers';
import SideBarContainer from './containers/SideBar';
import AuthContainer from './containers/Auth';
import DashContainer from './containers/Dash';
import Comments from './components/Comments';
import BurgerIcon from './components/BurgerIcon';
import styles from './styles.js';

const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers);

persistStore(store, { storage: AsyncStorage });

const ReduxRouter = connect()(Router);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ReduxRouter
            sceneStyle={{ flex: 1 }}
            navigationBarStyle={styles.navigationBar}
            titleStyle={styles.title}
            leftButton={() => <BurgerIcon />}
          >
            <Scene key="root" hideNavBar={true}>
              <Scene
                key="auth"
                component={AuthContainer}
                title="Auth"
                initial={true}
              />
              <Scene key="dash" component={SideBarContainer} panHandlers={null}>
                <Scene key="nav">
                  <Scene key="spaces"
                    title="Spaces"
                    component={DashContainer}
                    renderBackButton={() => <BurgerIcon />}
                    duration={0}
                  />
                  <Scene key="comment"
                    title="Comments"
                    component={Comments}
                    renderBackButton={() => <BurgerIcon />}
                    duration={0}
                  />
                </Scene>
              </Scene>
            </Scene>
          </ReduxRouter>
        </View>
      </Provider>
    );
  }
}

App.contextTypes = {
  drawer: PropTypes.object,
};

export default App;
