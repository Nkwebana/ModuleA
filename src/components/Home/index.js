/**
 *
 * Login
 * 
 */

import React, { useState } from 'react';
import {
  Button,
  View,
} from 'react-native';
import PropTypes from "prop-types";

import { StyledTextInput } from './styledComponents'

function Home({ handleLogin }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View>
      <StyledTextInput
        onChangeText={setUsername}
        value={username}
        placeholder="Enter username"
      />

      <StyledTextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Enter password"
      />

      <Button title="Login" onPress={() => handleLogin({ username, password })} />
    </View>
  );
};

Home.propTypes = {
  handleLogin: PropTypes.func,
};




export default Home;
