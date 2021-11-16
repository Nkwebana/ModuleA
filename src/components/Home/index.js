/**
 *
 * Login
 * 
 */

import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  Button,
  View,
} from 'react-native';
import PropTypes from "prop-types";

function Home({ handleLogin }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Enter username"
      />

      <TextInput
        style={styles.input}
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

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


export default Home;
