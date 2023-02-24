import React, { useState, useEffect } from 'react';

const Section = ({ children }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('Products');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const windowTop = window.pageYOffset;
      const windowHeight = window.innerHeight;

      if (windowTop + windowHeight >= sectionTop + sectionHeight / 2 && windowTop + windowHeight < sectionTop + sectionHeight + 4/5) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="section" className={inView ? 'in-view' : ''}>
      {children}
    </section>
  );
};

export default Section;
