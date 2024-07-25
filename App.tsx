import React from 'react';
import { Provider} from 'react-redux';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './src/navigation/AppNavigator';
import ThemeProvider from './src/theme/themeProvider';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
          <AppNavigator />
      </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
