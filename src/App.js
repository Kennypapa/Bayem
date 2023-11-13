import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from './components/sidebar';
function App() {
  return (
    <div>
      <Outlet />
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
