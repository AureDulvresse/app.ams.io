import Sidebar from "./components/partials/sidebar";

const App = () => {
  return (
    <div className="flex bg-gray-100 w-full h-screen">
      <Sidebar />
      <div className="w-[84%] h-full">content</div>
    </div>
  );
};

export default App;
