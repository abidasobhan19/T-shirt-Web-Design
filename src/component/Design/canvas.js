import React, { useEffect, useState } from "react";
import { fabric } from "fabric";

import { connect } from "react-redux";
import "../Design/style.css";
import FFF from "../../img/T-shirt Layout/fffff.jpeg";
const Cantest = ({ image, dynamicValue }) => {
  const [canvas, setCanvas] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [img, setImg] = useState("");

  console.log(img);
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      selectionBorderColor: "black",

      height: 250,
      width: 200,
    });

  const procssImge = `data:image/png;base64,${image}`;

  const addImg = (url, canvas) => {
    var a = new fabric.Image.fromURL(url, (img) => {
      img.set({
        id: "iii",
        top: 0,
        left: 0,
      });
      img.scale(0.11);
      canvas.add(img);

      canvas.renderAll();
      setImgURL("");
    });
  };

  useEffect(() => {
    addImg(procssImge, canvas);
  }, [procssImge]);

  return (
    <div>
      {image !== null ? (
        <div className="Hover">
          <canvas id="canvas"></canvas>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Cantest);
