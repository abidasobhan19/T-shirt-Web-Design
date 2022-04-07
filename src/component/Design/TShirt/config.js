import React, { useEffect } from "react";
import Switch from "@mui/material/Switch";
import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { connect } from "react-redux";
import { setShirtColor } from "../../../redux/action/color_action";
import { ShirtData } from "../../../data";
import Blackfront from "../../../img/T-shirt Layout/blackFront.png";
import BlackBack from "../../../img/T-shirt Layout/blackBack.png";
import Front from "../../../img/T-shirt Layout/front.png";
import Back from "../../../img/T-shirt Layout/back.png";

import Asphaltfront from "../../../img/T-shirt Layout/Asplatfront.png"
import Asphaltback from "../../../img/T-shirt Layout/Asplatback.png"
const Config = ({ setShirtColor }) => {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [age, setAge] = React.useState("");

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    switch (age) {
      case 0:
        setShirtColor({ front: Front, back: Back });
        break;
      case 1:
        setShirtColor({ front: Blackfront, back: BlackBack });
        break;
        case 2:
          setShirtColor({ front: Asphaltfront, back:  Asphaltback  });
          break;
      default:
        setShirtColor({ front: Front, back: Back });
        break;
    }
  }, [age]);

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        style={{
          width: 500,
          height: 30,
          padding: 10,
        }}
      >
        <Box display="flex" flexGrow="1">
          <Typography style={{ color: "Black", marginLeft: 50 }}>
            T-Shirt
          </Typography>
        </Box>

        {/* toggle button */}
        <Box display="flex" flexGrow="1" style={{ marginLeft: -50 }}>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
        {/* color selection */}
        <Box
          display="flex"
          flexGrow="1"
          style={{ minWidth: 120, marginLeft: -110 }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Default Color
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select Default Color"
              onChange={handleChange2}
            >
              <MenuItem value={0}>White</MenuItem>
              <MenuItem value={1}>Black</MenuItem>
              <MenuItem value={2}>Asphalt</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setShirtColor: (shirt) => dispatch(setShirtColor(shirt)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Config);
