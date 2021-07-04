import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('should render the App component in the document', () => {
  const component = renderer.create(<App />);
  
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
