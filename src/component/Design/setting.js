// import React, { useState, useEffect } from "react";
// import { fabric } from "fabric";
// import BlackTshirt from "../../img/T-shirt Layout/T-shirt.png";
// import Myimg from "../../img/a.jpg";
// const Setting = () => {
//   const [canvas, setCanvas] = useState("");
//   useEffect(() => {
//     setCanvas(initCanvas());
//   }, []);
//   const initCanvas = () =>
//     new fabric.Canvas("canvas", {
//       height: 400,
//       width: 400,
//       backgroundColor: "pink",
//     });

//   new fabric.Image.fromURL(Myimg, (image) => {
//     image.scale(0.75);
//     canvas.add(image);
//     canvas.renderAll();
//   });

//   return (
//     <div>
//       <canvas id="canvas" />
//     </div>
//   );
// };

// export default Setting;

import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
const Setting = () => {
  const [canvas, setCanvas] = useState("");
  const [imgURL, setImgURL] = useState("");
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 400,
      width: 400,
      backgroundColor: "pink",
    });
  // const addRect = canvi => {
  //   ...
  // }
  const addImg = (e, url, canvi) => {
    e.preventDefault();
    new fabric.Image.fromURL(url, (img) => {
      img.scale(0.75);
      canvi.add(img);
      canvi.renderAll();
      setImgURL("");
    });
  };
  return (
    <div>
      <form onSubmit={(e) => addImg(e, imgURL, canvas)}>
        <div>
          <input
            type="text"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
          />
          <button type="submit">Add Image</button>
        </div>
      </form>
      <br />
      <br />
      <canvas id="canvas" />
    </div>
  );
};

export default Setting;
