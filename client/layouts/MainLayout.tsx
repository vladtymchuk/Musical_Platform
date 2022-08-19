import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

const MainLayout: React.FC = ({children}) => {
  return (
    <>
      <Navbar/>
        <Container
          style={{marginTop: '90px'}}
        >
          {children}
        </Container>
    </>
  );
};

export default MainLayout;
