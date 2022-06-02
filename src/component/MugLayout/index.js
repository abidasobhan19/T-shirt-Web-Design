import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import { fabric } from "fabric";
import MugImage from "../../img/Mug Layout/mug.jpg";
import Coffee from "../../img/Mug Layout/mug-coffee.png";
const MugDesing = ({ image }) => {
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
      position: "relative",
      height: 200,
      width: 400,
    });

  const addImg = (url, canvas) => {
    new fabric.Image.fromURL(url, (img) => {
      img.set({
        left: 0,
        top: 0,
      });

      img.scale(0.1256);

      setImg(img);
      canvas.add(img).renderAll();
      canvas.setActiveObject(img);
      // console.log(canvas.getObjects().indexOf(img));
      setImgURL("");
    });
  };
  useEffect(() => {
    addImg(procssImge, canvas);
  }, [procssImge]);

  return (
    <Box
      style={{
        backgroundImage: `url(${Coffee})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img src={MugImage} /> */}

      <div
        style={{
          marginTop: -400,
          marginLeft: 100,
          marginTop: -320,
        }}
      >
        {image !== null ? (
          <div className="Mug" style={{ position: "relative", zIndex: -1 }}>
            <canvas id="canvas"></canvas>
          </div>
        ) : (
          ""
        )}
      </div>
    </Box>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setButtonDyncData: (data) => dispatch(setButtonDyncData(data)),
//     setAlignButtonDyncData: (data) => dispatch(setAlignButtonDyncData(data)),
//   };
// };

export default connect(mapStateToProps)(MugDesing);
