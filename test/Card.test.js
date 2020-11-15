import React from 'react';
import Card from '../src/Card'
import {shallow} from 'enzyme'

const deck = require('../assets/deck.en.json')

describe('Card component', () => {
  it('Card: renders correctly', () => {
    const wrapper = shallow(<Card deck={deck} />)
    expect(wrapper.instance().state.selectedCard).toBeDefined()
  });

  it('onClick: should randomly change selectedCard value', () => {
    const wrapper = shallow(<Card deck={deck} />)
    const instance = wrapper.instance()
    const previousCard = instance.state.selectedCard
    wrapper.find('.card').simulate('click');
    expect(instance.state.selectedCard.content).not.toBe(previousCard.content);
  });
});