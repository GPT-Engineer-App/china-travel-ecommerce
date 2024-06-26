import { Container, Heading, Text } from "@chakra-ui/react";

const ContactUsPage = () => {
  return (
    <Container centerContent>
      <Heading as="h1" size="xl" my={4}>联系我们页面</Heading>
      <Text fontSize="lg">这里是联系我们页面的内容。</Text>
    </Container>
  );
};

export default ContactUsPage;