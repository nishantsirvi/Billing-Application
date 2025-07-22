import Menubar from "./components/Menubar/Menubar";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ManageUsers from "./pages/ManageUsers/ManageUsers.jsx";
import ManageItems from "./pages/ManageItems/ManageItems.jsx";
import ManageCategory from "./pages/ManageCatogory/ManageCategory.jsx";
import Explore from "./pages/Explore/Explore.jsx";
const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/items" element={<ManageItems />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;