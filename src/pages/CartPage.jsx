import { Container, Heading, Text } from "@chakra-ui/react";

const CartPage = () => {
  return (
    <Container centerContent>
      <Heading as="h1" size="xl" my={4}>购物车页面</Heading>
      <Text fontSize="lg">这里是购物车页面的内容。</Text>
    </Container>
  );
};

export default CartPage;