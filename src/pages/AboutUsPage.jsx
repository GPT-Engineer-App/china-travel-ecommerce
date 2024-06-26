import { Container, Heading, Text } from "@chakra-ui/react";

const AboutUsPage = () => {
  return (
    <Container centerContent>
      <Heading as="h1" size="xl" my={4}>关于我们页面</Heading>
      <Text fontSize="lg">这里是关于我们页面的内容。</Text>
    </Container>
  );
};

export default AboutUsPage;