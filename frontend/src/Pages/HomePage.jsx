import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

function HomePage() {
  return (
    <div>
      <Container
        maxW="xl"
        centerContent
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            🅲🅷🅸🆃-🅲🅷🅰🆃
          </Text>
        </Box>
        <Box
          bg="white"
          w="100%"
          p={4}
          borderRadius="lg"
          borderWidth="1px"
          //   bgColor={"transparent"}
          //   color="white"
        >
          <Tabs variant='enclosed' size={"lg"} isFitted>
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box>
                  <Login />
                </Box>
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
}

export default HomePage;
