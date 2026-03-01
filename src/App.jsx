import { Fragment } from "react";

import { useSelector } from "react-redux";

import Counter from "./components/Counter.jsx";
import Header from "./components/Header.jsx";
import Auth from "./components/Auth.jsx";
import UserProfile from "./components/UserProfile.jsx";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);
  return (
    <Fragment>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      {console.log(isAuth)}
      <Counter />
    </Fragment>
  );
}

export default App;
