const config = require("config");
import "firebase/auth";
const Config = require("config-js");
const config = new Config("./dev_conf.js");

export const devConfig = {
  apiKey: config.REACT_APP_FIREBASE_KEY_DEV,
  authDomain: REACT_APP_FIREBASE_DOMAIN_DEV,
  databaseURL: REACT_APP_FIREBASE_DATABASE_DEV,
  projectId: REACT_APP_FIREBASE_PROJECT_ID_DEV,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET_DEV,
  messagingSenderId: REACT_APP_FIREBASE_SENDER_ID_DEV,
  appId: REACT_APP_FIREBASE_APP_ID_DEV,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID_DEV,
};

export const prodConfig = {
  apiKey: REACT_APP_FIREBASE_KEY,
  authDomain: REACT_APP_FIREBASE_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
};
