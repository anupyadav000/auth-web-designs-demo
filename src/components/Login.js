import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";

const Login = () => {
  // State for handling form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here (e.g., making an API call, validating credentials, etc.)
    console.log("Login submitted with: ", email, password);
  };

  return (
    <Box bg="gray.100" minH="100vh" py="8" px={{ base: "4", md: "10" }}>
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Log in to Your Account
        </Heading>
        <Box mt="4" shadow="base" bg="white" py="8" px="6" rounded="lg">
          <form onSubmit={handleSubmit}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password" mt="4">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" mt="6" w="full">
              Log in
            </Button>
          </form>

          <Flex justify="space-between" mt="4">
            <Link color="teal.500">Forgot password?</Link>
            <Link color="teal.500">Create an account</Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
