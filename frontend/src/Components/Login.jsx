import {
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate}  from "react-router-dom"
import axios from 'axios'

function Login() {
  const toast = useToast()
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [loading, setLoading] = useState(false);
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

  const submitHandler = async() => {
    setLoading(true);
    if (!formstate.email || !formstate.password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        formstate,
        config
      );

      // console.log(JSON.stringify(data));
      toast({
        title: "Login Successful",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
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
            value={formstate.email}
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
              value={formstate.password}
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
            isLoading={loading}
        >
          Login
        </Button>
        <Button
          colorScheme="red"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={()=>setFormstate({email:"guest@gmail.com",password:"123456"})}
            isLoading={loading}
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    </>
  );
}

export default Login;
