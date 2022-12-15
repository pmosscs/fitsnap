import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import ImprovementScreen from "./screens/ImprovementScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SubmitSnapScreen from "./screens/SubmitSnapScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/profile/:userId" element={<ProfileScreen />} />
        <Route path="/submit" element={<SubmitSnapScreen />} />
        <Route path="/improve" element={<ImprovementScreen />} />
      </Routes>
    </div>
  );
}

export default App;
