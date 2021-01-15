import React from 'react';
import {shallow} from 'enzyme';
import {CustomButton} from '../index';

describe('Button', () => {
  it('should render Button', () => {
    const wrapper = shallow(
      <CustomButton
        text="TEST"
        textSize={16}
        textColor="white"
        onPressEvent={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Button with disable state', () => {
    const wrapper = shallow(
      <CustomButton
        text="TEST"
        textSize={16}
        textColor="white"
        onPressEvent={() => {}}
        disabled
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Button with button press', () => {
    const onPress = jest.fn();
    const wrapper = shallow(
      <CustomButton
        text="TEST"
        textSize={16}
        textColor="white"
        onPressEvent={onPress}
      />,
    );
    wrapper.simulate('press');
    expect(onPress).toHaveBeenCalled();
  });
});
