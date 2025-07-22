import Menubar from "./components/Menubar/Menubar";
const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/items" element={<ManageItems />} />
        <Route path="/category" element={<ManageCategories />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;