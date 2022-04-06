import React from "react";
import Switch from "@mui/material/Switch";
import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Config = () => {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [age, setAge] = React.useState("");

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Config;
