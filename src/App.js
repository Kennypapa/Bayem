import { Outlet } from "react-router-dom";
import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    initFlowbite();
})
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
