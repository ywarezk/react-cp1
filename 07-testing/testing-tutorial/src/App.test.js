import React from 'react';
import App from './App';
import {mount} from 'enzyme';

describe('<App />', () => {
  let appWrapper;

  beforeEach(() => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    appWrapper = mount(<App />, {
      attachTo: div
    })
  });

  it('renders learn react link', () => {
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });

  afterEach(() => {
    appWrapper.unmount();
  });
})


