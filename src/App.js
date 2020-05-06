import React from "react";
import "./App.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { devConfig, prodConfig } from "./config/firebase";
import Header from "./components/navigation/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { ContentWrapper } from "./components/tailwind_ui/lib";

const App = () => {
  const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <Router>
        <Header />
        <ContentWrapper>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere
          nam atque earum in excepturi, eveniet impedit quibusdam odio maxime
          laborum animi fuga quas quia illo fugit assumenda. Incidunt tempore
          dolor aliquid, magni eius nihil repellat maiores repudiandae corrupti
          laudantium possimus obcaecati qui sint. Error eaque earum magnam natus
          cupiditate.
        </ContentWrapper>
        <Footer />
      </Router>
    </FirebaseAuthProvider>
  );
};

export default App;
