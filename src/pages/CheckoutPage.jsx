import { Container, Heading, Text } from "@chakra-ui/react";

const CheckoutPage = () => {
  return (
    <Container centerContent>
      <Heading as="h1" size="xl" my={4}>结账页面</Heading>
      <Text fontSize="lg">这里是结账页面的内容。</Text>
    </Container>
  );
};

export default CheckoutPage;