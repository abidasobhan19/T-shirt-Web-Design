import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import Myimg from "../../img/a.jpg";
const Cantest = () => {
  const [fdata, setFata] = useState();
  //   const { editor, onReady } = useFabricJSEditor();
  // const onAddCircle = () => {
  //   editor?.addCircle();
  // };
  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  useEffect(() => {
    fabric.Image.fromURL(Myimg, function (oImg) {
      oImg.scaleToHeight(100);
      oImg.scaleToWidth(100);
      editor.canvas.add(oImg);
      // console.log(oImg);
      setFata(oImg);
    });
  });
  const onAddRectangle = () => {
    console.log(fdata);
    var data = editor.canvas.toDataURL(fdata);
    window.open(data);
  };
  return (
    <div>
      <div>
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
        <div>
          {/* <button onClick={onAddCircle}>Add circle</button> */}
          <button onClick={onAddRectangle}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Cantest;
