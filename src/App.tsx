import React from 'react';
import {Provider} from 'react-redux';

import store from './redux/store';

import TabNavigation from './navigation/TabNavigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
};

export default App;
