import React from "react";
import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      {/*<MainLayout>*/}
      <Navbar/>
        <div className="center">
          <h1>Better than SoundCloud</h1>
          <h3>Here u can get the best tacks!</h3>
        </div>
      {/*</MainLayout>*/}

      <style jsx>
        {`
          .center{
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>

    </>
  );
};

export default Index;
