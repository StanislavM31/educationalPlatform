import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import StudentPage from "../pages/StudentPage/StudentPage";
import CoursePage from "../pages/CoursePage/CoursePage";
import AuthPage from "../pages/AuthPage/AuthPage"
import RegPage from "../pages/RegPage/RegPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

export default function RoutesProvider(isAuth){
    if(isAuth){
        return(
            <Routes>
                <Route path={"/"} element={<StudentPage/>}>  </Route>
                <Route path={"/course/:id"} element={<CoursePage/>}>  </Route>
                <Route path={"/*"} element={<NotFoundPage/>}>Not FOUND</Route>
            </Routes>
        )
    } else {
        return(
            <Routes>
                <Route path={"/"} element={<HomePage/>}></Route>
                <Route path={"/*"} element={<NotFoundPage/>}>Not FOUND</Route>
                <Route path={"/auth"} element={<AuthPage/>}> </Route>
                <Route path={"/reg"} element={<RegPage/>}> </Route>
        </Routes>
        )
    }
}