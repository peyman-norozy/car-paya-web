import React from "react";

const ServicesLayout = (props) => {
  return (
    <main className={`lg:mt-[75px]`}>
      <div>
        {/*<p>sldfsdfs</p>*/}
        {props.children}
      </div>
    </main>
  );
};

export default ServicesLayout;
