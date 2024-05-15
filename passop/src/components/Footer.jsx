import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 flex flex-col justify-center items-center  w-full">
      <div className=" logo font-bold text-2xl">
        <span className="text-green-500">&lt;</span>
        <span className="text-white">Pass</span>
        <span className="text-green-500">OP / &gt;</span>
      </div>
      <div className="text-white flex justify-center items-center">
        Created with <img className="w-7 mx-2" src="/icons/heart.png" alt="" />
        by Ali
      </div>
    </div>
  );
};

export default Footer;
