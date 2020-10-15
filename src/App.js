import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { userDetails } from "./store/actions/userDetailsActions";
import { PersistGate } from "redux-persist/integration/react";
import SignIn from "./Components/auth/SignIn";
import Profile from "./Components/auth/Profile";
import DeveloperResume from "./Components/Resume/DeveloperResume";
import Logout from "./Components/auth/Logout";
import Home from "./Components/Home";
import firebase from "./Config/firebaseConfig";
import { store } from "./store/store";
import { persistor } from "./store/store";
// import "./App.css";

const App = () => {
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   const state = store.getState().userDetails;
  //   // store.subscribe(() => {});
  //   setUser(state.user);
  // }, []);

  firebase.auth().onAuthStateChanged(user => {
    // console.log(user);
    if (user) {
      store.dispatch(userDetails(user));
    } else {
      store.dispatch(userDetails(null));
    }
  });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          {/* <main className="container"> */}
          <BrowserRouter>
            {/* {user?.uid ? <Redirect exact to="/" /> : <Redirect to="/login" />} */}
            <Switch>
              <Route path="/logout" component={Logout} />
              <Route path="/profile" component={Profile} />
              <Route path="/login" component={SignIn} />
              <Route path="/developer-resume" component={DeveloperResume} />
              <Route path="/" exact component={Home} />
            </Switch>
          </BrowserRouter>
          {/* </main> */}
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
