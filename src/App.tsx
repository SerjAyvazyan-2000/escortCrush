import './App.scss'
import Header from "./components/header/header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.tsx";
import CreateProfile from "./pages/create-profile/create-profile.tsx";
import Footer from "./components/footer/footer.tsx";
import Profile from "./pages/profile/profile.tsx";

function App() {

    return (
        <div className='wrapper'>
            <Header/>

            <main>
                <Routes>
                    <Route  path="/" Component={Home}/>
                    <Route  path="/createProfile" Component={CreateProfile}/>
                    <Route  path="/profile" Component={Profile}/>

                </Routes>

            </main>

            <Footer/>


        </div>
    )
}

export default App
