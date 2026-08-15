import React from 'react';

const About = ({userName}) => {

    console.log("About Page Rendering.....");
    

  return (
    <div>
      This is About Page
    </div>
  );
}

export default React.memo(About);
