import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import './ScrollArrow.css';

export const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <Icon
      size="huge"
      className="scrollTop"
      name="arrow circle up"
      onClick={scrollTop}
      style={{
        display: showScroll ? 'flex' : 'none',
      }}
    />
  );
};
