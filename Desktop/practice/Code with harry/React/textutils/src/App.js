import { useState } from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import "./style.css";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("white");

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
  };

  const handleColor = (e) => {
    let x = e.target.name;
    setColor(x);
    let y = e.target.className;
    setMode(y);
  };
  document.body.style.backgroundColor = color;

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
      setMode("dark");
      setColor("#100840");
      document.body.style.backgroundColor = color;
      showAlert("The Dark mode is enabled", "success");
    } else {
      setTheme("light");
      setMode("light");
      setColor("white");
      document.body.style.backgroundColor = color;
      showAlert("The Light mode is enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar
        brand="TextUtils"
        mode={mode}
        toggle={toggleMode}
        color={handleColor}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Textarea mode={mode} handleAlert={showAlert} />}
        />
        <Route exact path="/About" element={<About mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;
