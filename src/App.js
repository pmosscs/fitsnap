import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import ImprovementScreen from "./screens/ImprovementScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SubmitSnapScreen from "./screens/SubmitSnapScreen";
import { useContext } from "react";
import AuthContext from "./store/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          index
          element={authCtx.token ? <HomeScreen /> : <AuthScreen />}
        />
        <Route
          path="/auth"
          element={!authCtx.token ? <AuthScreen /> : <HomeScreen />}
        />
        <Route
          path="/profile"
          element={authCtx.token ? <ProfileScreen /> : <AuthScreen />}
        />
        <Route
          path="/submit"
          element={authCtx.token ? <SubmitSnapScreen /> : <AuthScreen />}
        />
        <Route
          path="/improve"
          element={authCtx.token ? <ImprovementScreen /> : <AuthScreen />}
        />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
