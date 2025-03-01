import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Homepage from "./pages/Homepage";
import ProtectedRoute from "./components/ProtectedRoute";
import TaskPage from "./pages/TaskPage";
import { Toaster } from "react-hot-toast";
import Settings from "./pages/Settings";
import Welcome from "./pages/Welcome";
import Start from "./pages/Start";

function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="dark:bg-gray-900">
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<Signin />} />
          <Route path="/start" element={<Start />} />

          <Route path="/" element={<Homepage />} />
          <Route path="/welcome" element={<Welcome />} />

          <Route path="/taskpage" element={<TaskPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="" element={<ProtectedRoute />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
