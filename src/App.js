import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Regiester from "./components/register/Regiester";
import RequireAuth from "./components/requireAuth/RequireAuth";
import Teachers from "./components/teachers/Teachers";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/regiester" element={<Regiester></Regiester>}></Route>

        <Route
          path="/teachers"
          element={
            <RequireAuth>
              <Teachers />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
