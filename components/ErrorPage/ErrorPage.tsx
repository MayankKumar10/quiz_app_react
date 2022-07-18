import React from "react";
import {error404} from "../../assets";

export const ErrorPage = (): JSX.Element => {
  return (
    <>
      <img src={error404} alt="error-image" />
    </>
  );
};
