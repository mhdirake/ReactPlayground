import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const routesUsed = routes();

  return useRoutes(routesUsed);
}

export default App;
