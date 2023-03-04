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

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [formstate, setFormstate] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormstate({
      ...formstate,
      [name]: value,
    });
  };

  const submitHandler = () => {
    console.log(formstate);
  };
  return (
    <>
      <VStack spacing="5px">
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
        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          //   isLoading={picLoading}
        >
          Login
        </Button>
      </VStack>
    </>
  );
}

export default Login;
