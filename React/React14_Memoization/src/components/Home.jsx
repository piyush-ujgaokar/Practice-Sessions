import React from 'react';

const Home = ({userName}) => {

    console.log("Home Page Rendering....");
    

  return (
    <div>
      This is Home Page
    </div>
  );
}

export default React.memo(Home,(prevProps,nextProps)=>{
    return prevProps.userName.id === nextProps.userName.id
});
