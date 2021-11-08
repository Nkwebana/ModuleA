import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";

import { StyledHome, StyledTitle } from "./styledComponents";

function Home({ message, changeGlobalState }) {
  return (
    <StyledHome>
      <StyledTitle>{message}</StyledTitle>

      <Button
        backgroundColor="red"
        color="green"
        title="Update"
        onPress={() => changeGlobalState()}
      />
    </StyledHome>
  );
}

Home.propTypes = {
  message: PropTypes.string,
  changeGlobalState: PropTypes.func,
};

export default Home;
