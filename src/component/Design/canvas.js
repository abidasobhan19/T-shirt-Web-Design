import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import Myimg from "../../img/a.jpg";
import FFF from "../../img/T-shirt Layout/fffff.jpeg";
const Cantest = () => {
  const [canvas, setCanvas] = useState("");
  const [imgURL, setImgURL] = useState("");

  const data =
    "data:image/jpeg;base64,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";
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 100,
      width: 150,
      backgroundColor: "pink",
    });

  const addImg = (e, url, canvi) => {
    e.preventDefault();
    new fabric.Image.fromURL(url, (img) => {
      img.set({
        left: 0,
        top: 0,

        width: 150,
        height: 100,
        // Scale image to fit width / height ?
      });
      img.scale(0.85);

      canvi.add(img);
      console.log(img);
      canvi.renderAll();
      setImgURL("");
    });
  };

  return (
    <div>
      <div>
        <canvas id="canvas" />
      </div>
      <button
        onClick={(e) => {
          addImg(e, FFF, canvas);
        }}
      >
        {" "}
        Click ME
      </button>
    </div>
  );
};

export default Cantest;
