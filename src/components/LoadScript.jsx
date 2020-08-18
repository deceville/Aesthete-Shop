import React, { useEffect } from "react";

function LoadScript() {
  useEffect(() => {
    let scripts = [
      { src: "js/vendor/jquery-3.2.1.min.js" },
      { src: "js/popper.min.js" },
      { src: "js/bootstrap.min.js" },
    ];
    scripts.map((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = false;
      document.body.appendChild(script);
    });
  }, []);
  return <div>{/* Do something with data. */}</div>;
}

export default LoadScript;
