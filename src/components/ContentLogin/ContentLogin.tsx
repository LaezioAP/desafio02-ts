import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { login } from "../../services/login";
import "./styles.css";

export const ContentLogin = () => {
  return (
    <Box>
      <Flex direction="column" align="center" gap="15px">
        <h1>Faça o login</h1>
        <Input placeholder="Username" type="text" />
        <Input placeholder="Password" type="password" />
        <Button onClick={() => login("Laezio")} colorScheme="green">
          Entrar
        </Button>
      </Flex>
    </Box>
  );
};
