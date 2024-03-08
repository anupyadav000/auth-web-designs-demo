import { Box, Input, ListItem, List, Button } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import SetPassword from "./components/SetPassword";
import BlogsDashboard from "./components/Blogs";
import DynamicText from "./components/DynamicText";
import "./App.css";
function App() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleBlogSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title: title,
      content: content,
    };
    if (title !== "" && content !== "") {
      setBlogs((blogs) => {
        return [...blogs, blog];
      });
    }
    setTitle("");
    setContent("");
    console.log(blogs);
  };
  return (
    <Box>
      <DynamicText></DynamicText>
      <Login></Login>
      <Register></Register>
      <ForgotPassword></ForgotPassword>
      <SetPassword></SetPassword>
      <BlogsDashboard></BlogsDashboard>
      <Box>
        <Box>
          <Input
            type="text"
            placeholder="my blog title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="20px"
          ></Input>
          <Input
            type="text"
            placeholder="my blog content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            margin="20px"
          ></Input>
          <Button onClick={handleBlogSubmit} margin="20px" width={"100%"}>
            Add Blog
          </Button>
        </Box>
      </Box>
      <Box marginTop={"5%"}>
        <Box textAlign={"center"}>
          <h1>here below are all of my blogs</h1>
        </Box>
        <List margin="20px" marginTop={"50px"}>
          {blogs.map((blog, index) => {
            return (
              <ListItem key={index} display={"flex"} flexDirection={"column"}>
                <Box display={"flex"} flexDirection={"row"}>
                  <h1>....</h1>
                  <h1>{blog.title}</h1>
                </Box>
                <Box display={"flex"} flexDirection={"row"}>
                  <h1>...........................</h1>
                  <p>{blog.content}</p>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default App;
