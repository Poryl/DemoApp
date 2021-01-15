// @flow
import Enzyme, {shallow} from 'enzyme';
import snapshotDiff from 'snapshot-diff';
import Adapter from 'enzyme-adapter-react-16';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

Enzyme.configure({adapter: new Adapter()});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter', () => {
  jest.fn();
  return class foo1 {
    constructor(lol) {
      this.hitt = lol;
    }

    bleManagerEmitter = {
      addListener: () => {
        'bar';
      },
      start: () => {},
    };

    static start() {}

    addListener = () => {};
  };
});

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

global.snapshotDiff = snapshotDiff;
global.shallow = shallow;
