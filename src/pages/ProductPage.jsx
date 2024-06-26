import { Container, Heading, Text, VStack, Box, Button } from "@chakra-ui/react";

const products = [
  { id: 1, title: "7 Days VPN Service", description: "Enjoy 7 days of secure and fast VPN service.", price: "$5" },
  { id: 2, title: "14 Days VPN Service", description: "Enjoy 14 days of secure and fast VPN service.", price: "$9" },
  { id: 3, title: "21 Days VPN Service", description: "Enjoy 21 days of secure and fast VPN service.", price: "$12" },
  { id: 4, title: "30 Days VPN Service", description: "Enjoy 30 days of secure and fast VPN service.", price: "$15" },
];

const ProductPage = () => {
  return (
    <Container centerContent>
      <Heading as="h1" size="xl" my={4}>产品页面</Heading>
      <Text fontSize="lg" mb={6}>这里是产品页面的内容。</Text>
      <VStack spacing={8} width="100%">
        {products.map(product => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{product.title}</Heading>
            <Text mt={4}>{product.description}</Text>
            <Text mt={4} fontWeight="bold">{product.price}</Text>
            <Button mt={4} colorScheme="teal">购买</Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default ProductPage;