import "./App.css";
import Authorization from "./pages/AuthorizationPage/Authorization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Loading from "./components/Loading/Loading";

function App() {
  console.log(localStorage.getItem("user"));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authorization />} />
          <Route path="/main/*" element={<MainPage />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
