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

const SetPassword = () => {
  // State for handling form inputs
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your "Reset Password" logic here (e.g., updating the user's password)
    console.log("Password reset successful. New password: ", newPassword);
  };

  return (
    <Box bg="gray.100" minH="100vh" py="8" px={{ base: "4", md: "10" }}>
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Reset Password
        </Heading>
        <Box mt="4" shadow="base" bg="white" py="8" px="6" rounded="lg">
          <form onSubmit={handleSubmit}>
            <FormControl id="newPassword">
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                autoComplete="new-password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormControl>

            <FormControl id="confirmPassword" mt="4">
              <FormLabel>Confirm New Password</FormLabel>
              <Input
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

export default SetPassword;
