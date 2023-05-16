import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Navbar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="nav" bg="gray.50" boxShadow="sm" borderBottom="1px" borderColor="gray.400">
      <Container py="8" margin={0} maxWidth="100%">
        <HStack spacing="10" justify="center" fontWeight="bold" letterSpacing="3px">
          <p>TICK TACK TRACK</p>
        </HStack>
      </Container>
    </Box>
  );
}
