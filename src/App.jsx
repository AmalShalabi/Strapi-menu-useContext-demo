import { useGlobalContext } from "./context";

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <main>
      <h1>strap starter</h1>
    </main>
  );
};
export default App;
