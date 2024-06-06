import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-teal-900 text-sm p-4 text-center text-white">
      Copyright © {currentYear} Louis Odhiambo. All Rights Reserved.
    </div>
  );
};

export default Footer;