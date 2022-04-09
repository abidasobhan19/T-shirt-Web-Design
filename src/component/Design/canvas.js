import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { connect } from "react-redux";
import "../Design/style.css"
import FFF from "../../img/T-shirt Layout/fffff.jpeg";
const Cantest = ({image}) => {
  const [canvas, setCanvas] = useState("");
  const [imgURL, setImgURL] = useState("");

  
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      selectionBorderColor:"black",
      // marginTop:90,
      height: 300,
      width: 200,
      
    });

    console.log(image)

  const addImg = (e, url, canvi) => {
    console.log(url)
    new fabric.Image.fromURL(url, (img) => {
      img.set({
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderColor: "black",
        top: 0,
       
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
      {image!==null?<div className="Hover"> 
        <canvas id="canvas" />
      </div>:""}
      <button
        onClick={(e) => {
          addImg(e, image, canvas);
        }}
      >
        {" "}
        Click ME
      </button>
    </div>
  );
};


const mapStateToProps = (state) => {
  console.log(state)
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Cantest);
