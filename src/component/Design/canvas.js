import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import Myimg from "../../img/a.jpg";
const Cantest = () => {
  const [Newimgstate, SetnewImgstate] = useState();

  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  const onAddRectangle = () => {
    editor?.addRectangle();
  };

  useEffect(() => {
    fabric.Image.fromURL(Myimg, function (oImg) {
      oImg.scaleToHeight(100);
      oImg.scaleToWidth(100);
      console.log(oImg);
      editor?.canvas.add(oImg).renderAll.bind(editor.canvas);
    });
  });

  return (
    <div>
      <div>
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
        <button onClick={onAddRectangle}>Add Rectangle</button>
      </div>
    </div>
  );
};

export default Cantest;
