import { ChakraProvider, Container } from "@chakra-ui/react";
import { Layout } from "./components/Layout/Layout";
import "./global.css";

function App() {
  return (
    <ChakraProvider>
      <Container>
        <Layout />
      </Container>
    </ChakraProvider>
  );
}

export default App;
