import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        {/****AUTH PAGES******/}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Signin />} />

        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
