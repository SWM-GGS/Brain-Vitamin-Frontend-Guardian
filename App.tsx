import * as React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import AppInner, { RootStackParamList } from './AppInner';
import analytics from '@react-native-firebase/analytics';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FEFDFF',
  },
};

function App() {
  const navigationRef =
    React.useRef<NavigationContainerRef<RootStackParamList>>(null);
  const routeNameRef = React.useRef<string>();

  return (
    <Provider store={store}>
      <NavigationContainer
        theme={navTheme}
        ref={navigationRef}
        onReady={() =>
          (routeNameRef.current =
            navigationRef.current?.getCurrentRoute()?.name)
        }
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName =
            navigationRef.current?.getCurrentRoute()?.name;

          if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }

          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;
        }}>
        <AppInner />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
