import "./App.scss";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SideBar />} />
      </Routes>
    </>
  );
}

export default App;
