import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store.js';
import Header from './components/Header';
import OverviewContainer from './containers/OverviewContainer';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => (<OverviewContainer />)} />
          <Route render={() => (<div>Not found :(</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
