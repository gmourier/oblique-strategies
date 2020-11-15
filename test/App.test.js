import React from 'react';
import App from '../src/App'
import {shallow, mount} from 'enzyme'

describe('App component', () => {
  it('LanguageChoice: has language choices on UI', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('#enLang').length).toEqual(1)
    expect(wrapper.find('#frLang').length).toEqual(1)
  });

  if ('LanguageChoice: default language is set to english', () => {
    const wrapper = shallow(<App/>)
    const instance = wrapper.instance()
    expect(instance.state.selectedLanguage).toBeEqual('en')
  });
});