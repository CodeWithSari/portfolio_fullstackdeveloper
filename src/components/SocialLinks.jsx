import React from "react";
import { IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

function SocialLinks() {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <IconButton href="https://github.com/CodeWithSari" target="_blank"><GitHub /></IconButton>
      <IconButton href="https://www.linkedin.com/in/saritha-bijesh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank"><LinkedIn /></IconButton>
      
    </Stack>
  );
}

export default SocialLinks;
