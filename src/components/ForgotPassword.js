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

const ForgotPassword = () => {
  // State for handling form input
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your "Forgot Password" logic here (e.g., sending a password reset email)
    console.log("Password reset requested for: ", email);
  };

  return (
    <Box bg="gray.100" minH="100vh" py="8" px={{ base: "4", md: "10" }}>
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Forgot Password
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

            <Button type="submit" colorScheme="teal" mt="6" w="full">
              Reset Password
            </Button>
          </form>

          <Flex justify="center" mt="4">
            <Link color="teal.500">Remembered your password? Log in</Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
