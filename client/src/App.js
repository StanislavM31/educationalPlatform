import "./App.css";

import { MyContext } from "./Context/Context";
import useAuth from "./Hook/useAuth";
import RoutesProvider from "./RouteProvider/RouteProvider";

function App() {
  const { token, logIn, logOut } = useAuth();
  const routes = RoutesProvider(token);

  return (
    <MyContext.Provider value={{ token, logIn, logOut }}>
      {routes}
    </MyContext.Provider>
  );
}

export default App;
