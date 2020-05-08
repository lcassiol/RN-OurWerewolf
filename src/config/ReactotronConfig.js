import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    //.configure({ host: '192.168.0.35' })
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
}
