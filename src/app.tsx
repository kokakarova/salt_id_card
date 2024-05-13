import "./app.css";
import { Main } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="root">
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </div>
  );
};
export default App;
