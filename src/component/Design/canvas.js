import React, { useEffect, useState } from "react";
import { fabric } from "fabric";

import { connect } from "react-redux";
import "../Design/style.css";
import FFF from "../../img/T-shirt Layout/fffff.jpeg";
const Cantest = ({ image, dynamicValue }) => {
  const [canvas, setCanvas] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [dataimg, setImg] = useState();

  const procssImge = `data:image/png;base64,${image}`;
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      selectionBorderColor: "black",
      controlsAboveOverlay: true,
      height: 250,
      width: 200,
    });

  const addImg = (url, canvas) => {
    new fabric.Image.fromURL(url, (img) => {
      img.set({
        left: 0,
        top: 0,
      });

      img.scale(0.11);

      setImg(img);
      canvas.add(img).renderAll.bind(canvas);
      canvas.setActiveObject(img);
      setImgURL("");
    });
  };

  const handletop = () => {
    console.log(procssImge);
    new fabric.Image.fromURL(procssImge, (img) => {
      img.set({
        top: 0,
      });
      img.scale(0.1);
      canvas.clear();
      canvas.add(img).renderAll.bind(canvas);
      canvas.setActiveObject(img);
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
          <div>
            {" "}
            <button
              id="moveText"
              onClick={() => {
                handletop();
              }}
            >
              Move Text
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Cantest);
