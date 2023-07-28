import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {

   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      swiperToSlide: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,

		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				 slidesToShow: 3,
				 slidesToScroll: 3,
				 infinite: true,
				 dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 2,
				 initialSlide: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1
			  }
			}
		 ]
   }

	return <Slider {...settings}>
			<div className="testimonial py-4 px-3">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptates
					provident qui corporis quam dolore magnam hic sit ad nemo laboriosam
					officiis, blanditiis quisquam cumque. Enim exercitationem porro commodi
					beatae?
				</p>

				<div className="d-flex align-items-center gap-4 mt-3">
					<img src={ava01} className="w-25 h-25 rounded-2" alt="" />
					<div>
						<h5 className="mb-0 mt-3">John Doe</h5>
						<p>Customer</p>
					</div>
				</div>
			</div>
			<div className="testimonial py-4 px-3">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptates
					provident qui corporis quam dolore magnam hic sit ad nemo laboriosam
					officiis, blanditiis quisquam cumque. Enim exercitationem porro commodi
					beatae?
				</p>

				<div className="d-flex align-items-center gap-4 mt-3">
					<img src={ava02} className="w-25 h-25 rounded-2" alt="" />
					<div>
						<h5 className="mb-0 mt-3">Lia Franklin</h5>
						<p>Customer</p>
					</div>
				</div>
			</div>
			<div className="testimonial py-4 px-3">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptates
					provident qui corporis quam dolore magnam hic sit ad nemo laboriosam
					officiis, blanditiis quisquam cumque. Enim exercitationem porro commodi
					beatae?
				</p>

				<div className="d-flex align-items-center gap-4 mt-3">
					<img src={ava03} className="w-25 h-25 rounded-2" alt="" />
					<div>
						<h5 className="mb-0 mt-3">David</h5>
						<p>Customer</p>
					</div>
				</div>
			</div>
			<div className="testimonial py-4 px-3">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptates
					provident qui corporis quam dolore magnam hic sit ad nemo laboriosam
					officiis, blanditiis quisquam cumque. Enim exercitationem porro commodi
					beatae?
				</p>

				<div className="d-flex align-items-center gap-4 mt-3">
					<img src={ava01} className="w-25 h-25 rounded-2" alt="" />
					<div>
						<h5 className="mb-0 mt-3">John Doe</h5>
						<p>Customer</p>
					</div>
				</div>
			</div>
			<div className="testimonial py-4 px-3">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptates
					provident qui corporis quam dolore magnam hic sit ad nemo laboriosam
					officiis, blanditiis quisquam cumque. Enim exercitationem porro commodi
					beatae?
				</p>

				<div className="d-flex align-items-center gap-4 mt-3">
					<img src={ava02} className="w-25 h-25 rounded-2" alt="" />
					<div>
						<h5 className="mb-0 mt-3">John Doe</h5>
						<p>Customer</p>
					</div>
				</div>
			</div>
		</Slider>
};

export default Testimonials;
