import React from "react";
import preloader from "../../assets/img/preloader_.gif";
import { PreloaderStyled } from "./PreloaderStyled.styled";

const Preloader = (props) => {
  return (
    <PreloaderStyled>
      <img src={preloader} alt="preloader img" />
    </PreloaderStyled>
  );
};

export default Preloader;
