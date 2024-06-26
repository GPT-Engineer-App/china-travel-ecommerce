import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">Home</Link>
        <Link as={RouterLink} to="/product" color="white" fontWeight="bold">产品页面</Link>
        <Link as={RouterLink} to="/cart" color="white" fontWeight="bold">购物车页面</Link>
        <Link as={RouterLink} to="/checkout" color="white" fontWeight="bold">结账页面</Link>
        <Link as={RouterLink} to="/contact" color="white" fontWeight="bold">联系我们页面</Link>
        <Link as={RouterLink} to="/about" color="white" fontWeight="bold">关于我们页面</Link>
      </Flex>
    </Box>
  );
};

export default Navigation;