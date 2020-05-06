import React from "react";
import "./App.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { devConfig, prodConfig } from "./config/firebase";
import Header from "./components/navigation/Header";
import Footer from "./components/footer/Footer";
import { ContentWrapper } from "./components/tailwind_ui/lib";
import FeaturedProperty from "./views/FeaturedProperty";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import FeaturedPropertyPage from "./components/featured-property/FeaturedPropertyPage";
import BlogList from "./components/blog/BlogList";
import BlogPage from "./components/blog/BlogPage";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <h1>Home Page</h1>
          </Route>

          <Route exact path="/featured-properties">
            <FeaturedProperty />
          </Route>
          <Route path="/featured-properties/:id">
            <FeaturedPropertyPage />
          </Route>
          <Route exact path="/latest-news">
            <BlogList />
          </Route>
          <Route path="/latest-news/:id">
            <BlogPage />
          </Route>
          <Route>
            <PageNotFound path="*" />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </FirebaseAuthProvider>
  );
};

export default App;
