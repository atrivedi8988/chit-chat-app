import {
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Signup() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [formstate, setFormstate] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    pic: "",
  });

  const handleChange = (e) => {
    const {name,value,files} = e.target
    setFormstate({
        ...formstate,
        [name]:value || files[0]
    })
  };

  const submitHandler = () => {
    console.log(formstate)
  };
  return (
    <>
      <VStack spacing="5px">
        <FormControl id="first-name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            name="name"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            placeholder="Enter Your Email Address"
            name="email"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="confirmPassword" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup size="md">
            <Input
              type={show ? "text" : "password"}
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="pic">
          <FormLabel>Upload your Picture</FormLabel>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={handleChange}
            name="pic"
          />
        </FormControl>
        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          //   isLoading={picLoading}
        >
          Sign Up
        </Button>
      </VStack>
    </>
  );
}

export default Signup;
