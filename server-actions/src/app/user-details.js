"use client";

import Box from "@mui/system/Box";
import { red, green } from "@mui/material/colors";

function UserDetails(props) {
  const { userKey, name, flagKey, flagValue } = props;
  return (
    <div>
      <div>Key={userKey}</div>
      <div>Name={name}</div>
      <div>Flag={flagKey}</div>
      <div>value={flagValue ? "true" : "false"}</div>
    </div>
  );
}

export function SimpleBox(props) {
  const { flagKey, context, flagValue } = props;
  const { key: userKey, name } = context.user;

  const color = flagValue == true ? green[400] : red[400];

  const userDetails = {
    flagKey,
    flagValue,
    userKey,
    name,
  };

  return (
    <Box
      sx={{
        p: 2,
        border: "1px dashed grey",
        bgcolor: color,
        color: "#fafafa",
      }}
    >
      <UserDetails {...userDetails} />
    </Box>
  );
}
