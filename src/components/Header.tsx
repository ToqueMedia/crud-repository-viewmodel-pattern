import { Box } from "@chakra-ui/react";

export default function Header(): JSX.Element {
  return (
    <Box
      height="70px"
      padding="20px"
      alignItems="center"
      display="flex"
      justifyContent="center"
    >
      <h3>Products Manager</h3>
    </Box>
  );
}
