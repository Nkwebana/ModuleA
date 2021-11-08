/**
 * Sample React Native App
 */

import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native";

import Home from "./src/components/Home";

function ModuleA({ message = "This is module A", handleStateUpdate }) {
  const changeGlobalState = () => {
    handleStateUpdate({
      name: "Buyisile",
      mainColor: "red",
      secondaryColor: "green",
    });
  };

  return (
    <SafeAreaView>
      <Home message={message} changeGlobalState={changeGlobalState} />
    </SafeAreaView>
  );
}

Home.propTypes = {
  message: PropTypes.string,
  changeGlobalState: PropTypes.func,
};

export default ModuleA;
