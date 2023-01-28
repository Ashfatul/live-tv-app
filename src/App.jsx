import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import CountryList from "./components/CountryList/CountryList";
import TVChannels from "./components/TVChannels/TVChannels";
import Player from "./components/Player/Player";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<CountryList />} path="/" />
        <Route element={<TVChannels />} path="/country/:countryCode" />
        <Route element={<Player />} path="/live-tv/:tvID" />
        <Route element={<Error404 />} path="*" />
      </Routes>
    </Router>
  );
}

export default App;
