import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Routes, Route} from 'react-router-dom'
import RegPage from './pages/RegPage/RegPage'
import AuthPage from './pages/AuthPage/AuthPage';
import StudentPage from "./pages/StudentPage/StudentPage";
import CoursePage from "./pages/CoursePage/CoursePage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage/>}></Route>
      <Route path={"/auth"} element={<AuthPage/>}> </Route>
      <Route path={"/reg"} element={<RegPage/>}> </Route>
      <Route path={"/student"} element={<StudentPage/>}>  </Route>
      <Route path={"/course/:id"} element={<CoursePage/>}>  </Route>
    </Routes>
  );
}

export default App;
