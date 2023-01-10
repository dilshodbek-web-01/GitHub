import React, { useState } from 'react';
import { Context } from './context/Context';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideUP from "./components/SideUP";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Repo from "./pages/Repo";
import Followers from "./pages/Followers";
import Following from "./pages/Following";

const App = () => {

  const [state, setState] = useState(false);
  const [apiValue, setApiValue] = useState(localStorage.getItem("key") || "dilshodbek-web-01");
  
  return (
    <>
      <Context.Provider value={{ state: state, setState: setState, apiValue, setApiValue }}>
        <Navbar />
        <SideUP />
        <div className="container">
          <main className='main'>
            <Sidebar />
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="/repositories" element={<Repo />} />
              <Route path="/followers" element={<Followers />} />
              <Route path="/following" element={<Following />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Context.Provider>

    </>
  );
};

export default App;