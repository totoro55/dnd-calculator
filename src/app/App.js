import './App.scss';
import ConstructorPage from "../pages/ConstructorPage/ConstructorPage";
import Navbar from "../widgets/Navbar/components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RuntimePage from "../pages/RuntimePage/RuntimePage";
import {Provider} from "react-redux";
import {store} from "./store/store";


const router = [
    {
        path: "/",
        element: <ConstructorPage/>,
    },
    {
        path: "runtime",
        element: <RuntimePage/>,
    },
]

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={'App'}>
                    <Navbar/>
                    <Routes>
                        {router.map(route => <Route key={route.path} path={route.path} element={route.element}/>)}
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
