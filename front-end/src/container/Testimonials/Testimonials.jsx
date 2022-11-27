import React, { useState, useEffect } from "react";
import "./Testimonials.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { urlFor, client } from "../../client";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const testimonialsQuery = '*[_type == "testimonials"]';

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });
  }, []);
  const testimonial = testimonials[current];
  

  const handleClick = (index) => {
    setCurrent(index);
  };
  return (
    <>
      {testimonials.length && (
        <>

          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testimonial.avatarURL)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonial.feedback}</p>
              <div>
                <h4 className="bold-text">{testimonial.name}</h4>
                <h5 className="p-text">{testimonial.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  current === 0 ? testimonials.length - 1 : current - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  current === testimonials.length - 1 ? 0 : current + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonials-brands app__flex">
        {console.log("here", brands)}
        {brands?.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brands.id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial", "app__primarybg"),
  "testimonials"
);
