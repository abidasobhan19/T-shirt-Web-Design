import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import Myimg from "../../img/a.jpg";
const Cantest = () => {
  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  // useEffect(() => {
  //   fabric.Image.fromURL(Myimg, function (oImg) {
  //     oImg.scaleToHeight(100);
  //     oImg.scaleToWidth(100);
  //     editor.canvas.add(oImg);
  //   });
  // });

  fabric.Image.fromURL(Myimg, function (oImg) {
    oImg.scaleToHeight(100);
    oImg.scaleToWidth(140);
    editor.canvas.add(oImg);
    console.log(oImg);
  });

  return (
    <div>
      <div>
        <FabricJSCanvas
          id="canvas"
          className="sample-canvas"
          onReady={onReady}
        />
      </div>
    </div>
  );
};

export default Cantest;
