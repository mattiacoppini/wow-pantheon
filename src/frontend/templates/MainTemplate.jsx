import React from "react";
import FlexBox from "../components/UI/Layout/FlexBox";
import Box from "../components/UI/Layout/Box";
import { Switch, Route } from "react-router-dom";
import Main from "../components/home/Home";
import About from "../components/about/About";
import Navbar from "../components/Navbar";
import ContentRouter from "../components/ContentRouter";

export const MainTemplate = () => (
  <FlexBox direction="column" height="100%">
    <Navbar />
    <FlexBox background="black" flexGrow={1}>
      <ContentRouter />
    </FlexBox>
  </FlexBox>
);

export default MainTemplate;
