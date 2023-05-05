import * as React from "react";
import { Button, IconButton, Checkbox } from "@mui/material";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function Buttons() {
  return (
    <div>
      <Button className="bg-black" variant="outlined" color="error">
        Xin chào tất cả các bạn
      </Button>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button> */}
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} />
      <Checkbox {...label} checked />
    </div>
  );
}
