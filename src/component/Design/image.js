import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { connect } from "react-redux";
import Imgto64 from "image-to-base64/browser";

import { setShirtImage } from "../../redux/action/image_action";
const Image = ({ setShirtImage }) => {
  const [canvas, setCanvas] = useState();
  const onUpload = (e) => {
    console.log(e.target.files[0]);

    e.preventDefault();
    const { files } = e.target;
    console.log(files);
    const localImageUrl = window.URL.createObjectURL(files[0]);

    Imgto64(localImageUrl) // Path to the image
      .then((response) => {
        setCanvas(response); // "cGF0aC90by9maWxlLmpwZw=="
        setShirtImage(response);
      })
      .catch((error) => {
        console.log(error); // Logs an error if there was one
      });

    // setShirtImage(localImageUrl);
  };

  return (
    <Box style={{ marginLeft: "45%", marginTop: 50 }}>
      {" "}
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden name="user[image]" onChange={onUpload} />
      </Button>
      <Box style={{ width: 100, height: 100, marginLeft: -80 }}>
        {" "}
        {canvas != null ? (
          <img
            src={`data:image/png;base64,${canvas}`}
            style={{ width: 300, height: 200 }}
            alt=""
          />
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};
//   {/* <img src={canvas} style={{ width: 300, height: 200 }} /> */}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setShirtImage: (img) => dispatch(setShirtImage(img)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Image);
