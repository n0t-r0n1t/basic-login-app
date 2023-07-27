// In a new file, e.g., App.test.js

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Login from '../src/Login';
import PostListScreen from '../src/PostListScreen';
import {Alert} from 'react-native';

test('renders login screen correctly', () => {
  const mockNavigation = {navigate: jest.fn()};
  const {getByText, getByPlaceholderText} = render(
    <Login navigation={mockNavigation} />,
  );
  const loginHeader = getByText('Log in');
  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');

  expect(loginHeader).toBeTruthy();
  expect(usernameInput).toBeTruthy();
  expect(passwordInput).toBeTruthy();
});

test('login with correct credentials shows success message', () => {
  const mockNavigation = {navigate: jest.fn()};
  const {getByPlaceholderText, getByText} = render(
    <Login navigation={mockNavigation} />,
  );
  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Log in');

  const validUsername = 'admin';
  const validPassword = 'password';

  // Enter valid credentials and click login
  fireEvent.changeText(usernameInput, validUsername);
  fireEvent.changeText(passwordInput, validPassword);
  fireEvent.press(loginButton);

  // Check if the success message appears
  expect(mockNavigation.navigate).toHaveBeenCalledWith('PostList');
});

test('login with incorrect credentials shows error message', () => {
  const mockNavigation = {navigate: jest.fn()};
  const {getByPlaceholderText, getByText} = render(
    <Login navigation={mockNavigation} />,
  );
  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Log in');

  // Replace these values with incorrect credentials for failed login
  const invalidUsername = 'wronguser';
  const invalidPassword = 'wrongpass';

  // Enter invalid credentials and click login
  fireEvent.changeText(usernameInput, invalidUsername);
  fireEvent.changeText(passwordInput, invalidPassword);
  fireEvent.press(loginButton);

  // Check if the error message appears
  expect(mockNavigation.navigate).toBeCalledTimes(0);
});

test('renders list screen correctly', () => {
  // Mock the navigation prop since we're not testing navigation in this test
  const mockNavigation = {navigate: jest.fn()};
  const {getByText} = render(<PostListScreen navigation={mockNavigation} />);

  // Check if the "Loading..." text appears
  const loadingText = getByText('Loading...');
  expect(loadingText).toBeTruthy();
});
