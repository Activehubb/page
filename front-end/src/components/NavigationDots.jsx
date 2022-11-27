import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "contact", "work", "skills", "testimonials"].map(
        (list, idx) => (
          <>
            <a
              href={`#${list}`}
              key={idx}
              className="app__navigation-dot"
              style={active === list ? { backgroundColor: "#313Bac" } : {}}
            />
          </>
        )
      )}
    </div>
  );
};

export default NavigationDots;
