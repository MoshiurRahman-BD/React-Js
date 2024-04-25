
import { Component } from "react";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewImg1 from "../../images/testimonial1.png"
import reviewImg2 from "../../images/testimonial2.png"
import reviewImg3 from "../../images/testimonial3.png"

class ReviewSlider extends Component {
  render() {
    return (
      <div className="pt-5 mb-5">
      
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
         <SwiperSlide><img src={reviewImg1}/> <h4>Mr. Khew</h4> <p>Pepsi co.</p>      
            <p>
              Sumanta is an amazing character to work with, he manages things so
              simply and smoothly which is hard to ge nowadays.
            </p></SwiperSlide>

          <SwiperSlide><img src={reviewImg2}/> <h4>Mr. Khew</h4> <p>Pepsi co.</p>      
            <p>
              Sumanta is an amazing character to work with, he manages things so
              simply and smoothly which is hard to ge nowadays.
            </p></SwiperSlide>
            <SwiperSlide><img src={reviewImg3}/> <h4>Ms. Khew</h4> <p>Pepsi co.</p>      
            <p>
              Sumanta is an amazing character to work with, he manages things so
              simply and smoothly which is hard to ge nowadays.
            </p></SwiperSlide>
          
        </Swiper>
      </div>
    );
  }
}

export default ReviewSlider;
