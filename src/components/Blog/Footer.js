import React from "react";

const Footer = () => {
  const date = new Date();

  const copyRight = ` © Ibsa Ejeta ${date.toString().slice(10, 15)}`;
  return (
    <footer>
      <p>{copyRight}</p>
    </footer>
  );
};

export default Footer;
