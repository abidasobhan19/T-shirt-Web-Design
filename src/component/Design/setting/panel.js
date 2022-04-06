import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";
const Radiopanel = () => {
  const [value, setValue] = useState("front");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box style={{ marginLeft: 10 }}>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="front"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="front"
            control={<Radio />}
            label="Print on Front"
          />
          <FormControlLabel
            value="back"
            control={<Radio />}
            label="Print on Back"
          />
          <FormControlLabel
            value="both"
            control={<Radio />}
            label="Print on Front & Back"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Radiopanel;
