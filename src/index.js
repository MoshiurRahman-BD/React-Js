import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './asset/component/navBar/Navbar';
// import About from './asset/component/about/About';
import reportWebVitals from './reportWebVitals';
import TopHeader from './asset/component/topheader/TopHeader';
import OurSeervice from './asset/component/ourservices/OurServices';
import Chart from './asset/component/chart/Chart';
import TotalWorks from './asset/component/TotalWorks/TotalWorks';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    {/* <About name="Moshiur" email="abcd@1234.com"/> */}
    <TopHeader />
    <OurSeervice />
    <Chart />
    <TotalWorks />
  </React.StrictMode>
);


reportWebVitals();
