import { Container, Heading, Text } from "@chakra-ui/react";

const ProductPage = () => {
  return (
    <Container centerContent>
      <Heading as="h1" size="xl" my={4}>产品页面</Heading>
      <Text fontSize="lg">这里是产品页面的内容。</Text>
    </Container>
  );
};

export default ProductPage;