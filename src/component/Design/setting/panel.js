import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";
const Radiopanel = () => {
  return (
    <Box style={{ marginLeft: 10 }}>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Print on Front"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Print on Back"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Print on Front & Back"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Radiopanel;
