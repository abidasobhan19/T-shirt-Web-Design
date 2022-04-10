import React, { useEffect, useState } from "react";
import { fabric } from "fabric";

import { connect } from "react-redux";
import "../Design/style.css";
import FFF from "../../img/T-shirt Layout/fffff.jpeg";
const Cantest = ({ image }) => {
  const [canvas, setCanvas] = useState("");
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      selectionBorderColor: "black",
      // marginTop:90,
      height: 250,
      width: 200,
    });

  const procssImge = `data:image/png;base64,${image}`;

  const addImg = (url, canvas) => {
    console.log(url);
    new fabric.Image.fromURL(url, (img) => {
      img.set({
        top: 0,
        left: 4,
      });
      img.scale(0.1);

      canvas.add(img);
      console.log(img);
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
          <canvas id="canvas" />
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
