import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Input,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";

// Dummy data for blogs (replace with actual data from your backend)
const dummyBlogs = [
  {
    id: 1,
    title: "Blog 1",
    content: "Content for Blog 1",
    createdBy: "User A",
  },
  {
    id: 2,
    title: "Blog 2",
    content: "Content for Blog 2",
    createdBy: "User B",
  },
  // Add more blogs here...
];

const BlogsDashboard = ({ currentUser }) => {
  const [blogs, setBlogs] = useState(dummyBlogs);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Fetch and set filtered blogs whenever the searchQuery or blogs change
  useEffect(() => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [blogs, searchQuery]);

  return (
    <Box bg="gray.100" minH="100vh" py="8" px={{ base: "4", md: "10" }}>
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold" mb="4">
          Blogs Dashboard
        </Heading>

        {/* Search input */}
        <Stack direction="row" mb="4">
          <Input
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton
            aria-label="Search blogs"
            colorScheme="teal"
            onClick={() => {}}
          />
        </Stack>

        {/* List of blogs */}
        {filteredBlogs.map((blog) => (
          <Box key={blog.id} bg="white" shadow="base" p="4" rounded="md" mb="4">
            <Heading size="lg" fontWeight="bold" mb="2">
              {blog.title}
            </Heading>
            <Text mb="4">{blog.content}</Text>
            <Text fontSize="sm" color="gray.600">
              Created by: {blog.createdBy}
            </Text>
          </Box>
        ))}

        {/* Buttons */}
        <Flex justify="space-between">
          <Button colorScheme="teal" onClick={() => {}}>
            Create New Blog
          </Button>
          <Button colorScheme="teal" onClick={() => {}}>
            Blogs Created by Me
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default BlogsDashboard;
