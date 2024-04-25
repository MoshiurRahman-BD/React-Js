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
import Projects from './asset/component/project/Projects';
import Courses from './asset/component/courses/Courses';
import Videosec from './asset/component/vediosec/Vediosec';
import ReviewSlider from './asset/component/reviewslider/ReviewSlider';
import Footer from './asset/component/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    {/* <About name="Moshiur" email="abcd@1234.com"/> */}
    <TopHeader />
    <OurSeervice />
    <Chart />
    <TotalWorks />
    <Projects />
    <Courses />
    <Videosec />
    <ReviewSlider />
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
