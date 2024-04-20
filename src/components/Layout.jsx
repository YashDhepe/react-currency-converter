import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-no-repeat flex flex-wrap justify-center items-center"
        style={{
          backgroundImage: `url(
            "https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          )`,
        }}
      >
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default Layout;
