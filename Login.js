/**
 * Sample React Native App
 */

import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native";

import Home from "./src/components/Home";

function Login({ handleLogin }) {

  return (
    <SafeAreaView>
      <Home handleLogin={handleLogin} />
    </SafeAreaView>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func,
};

export default Login;
