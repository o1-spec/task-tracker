import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Homepage from "./pages/Homepage";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <Router>
      <Routes>
        {/****AUTH PAGES******/}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Signin />} />

        <Route path="/" element={<Homepage />} />

        <Route path="" element={<ProtectedRoute />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/taskpage" element={<TaskPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
