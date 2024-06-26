import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import Navigation from "../components/Navigation.jsx";

const Index = () => {
  return (
    <>
      <Navigation />
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={6}>
          <Heading as="h1" size="2xl" textAlign="center">Welcome to China Travel Services</Heading>
          <Text fontSize="lg" textAlign="center">Get short-term network services and electronic vouchers for your trip to China.</Text>
          <Box boxSize="sm">
            <Image src="/images/china-travel.jpg" alt="China Travel" />
          </Box>
          <Button colorScheme="teal" size="lg" rightIcon={<FaShoppingCart />}>
            Shop Now
          </Button>
        </VStack>
      </Container>
    </>
  );
};

export default Index;