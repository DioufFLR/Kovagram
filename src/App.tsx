import {Routes, Route} from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm.tsx";
import SignupForm from "./_auth/forms/SignupForm.tsx";
import Home from "./_root/pages/Home.tsx";
import './globals.css'

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* public routes */}
                <Route path='/sign-in' element={<SigninForm/>}/>
                <Route path='/sign-up' element={<SignupForm/>}/>

                {/* private routes */}
                <Route index element={<Home/>}/>
            </Routes>
        </main>
    );
};

export default App;
