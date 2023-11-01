import React from "react";

function Footer({fullname}) {
  return (
    <footer className="border-2 border-t-black flex justify-center">
      <div>Creater by {fullname}</div>
    </footer>
  );
}

export default Footer;
