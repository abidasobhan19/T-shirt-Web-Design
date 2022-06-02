import React, { useEffect, useState } from "react";
import { fabric } from "fabric";

import { connect } from "react-redux";
import "../Design/style.css";
import { setButtonDyncData } from "../../redux/action/button_action";
import { setAlignButtonDyncData } from "../../redux/action/align_button";
import FFF from "../../img/T-shirt Layout/fffff.jpeg";
const Cantest = ({
  image,
  dynamicValue,
  setButtonDyncData,
  align_value,
  setAlignButtonDyncData,
  scale_value,
}) => {
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

      img.scale(0.1);

      setImg(img);
      canvas.add(img).renderAll();
      canvas.setActiveObject(img);
      // console.log(canvas.getObjects().indexOf(img));
      setImgURL("");
    });
  };

  const handletop = () => {
    setButtonDyncData(0);
    dataimg.set({ top: 0 });
    canvas.renderAll();
  };

  const handleleft = () => {
    setAlignButtonDyncData(0);
    dataimg.set({ left: 4, position: "absolute", zIndex: -1 });

    dataimg.bringForward(dataimg);
    // canvas.bringToFront(dataimg);

    canvas.renderAll();
  };

  const handlescale = (scale_value) => {
    dataimg.scaleX = parseFloat(scale_value);
    dataimg.scaleY = parseFloat(scale_value);
    console.log(dataimg);
    canvas.renderAll();
  };

  useEffect(() => {
    addImg(procssImge, canvas);
  }, [procssImge]);

  useEffect(() => {
    if (dynamicValue === 1) {
      handletop();
    }
  }, [dynamicValue]);

  useEffect(() => {
    if (align_value === 1) {
      handleleft();
    }
  });

  useEffect(() => {
    if (dataimg !== undefined) {
      handlescale(scale_value);
    }
  }, [scale_value]);

  return (
    <div>
      {image !== null ? (
        <div className="Hover">
          <canvas id="canvas"></canvas>
          <div></div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setButtonDyncData: (data) => dispatch(setButtonDyncData(data)),
    setAlignButtonDyncData: (data) => dispatch(setAlignButtonDyncData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cantest);
