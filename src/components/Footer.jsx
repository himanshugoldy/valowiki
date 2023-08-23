import { Avatar, Box, Stack, Text, VStack,HStack,IconButton } from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../assets/me.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We provide information and guide about one of the famous FPS game in the world called Valorant.
          </Text>
          <Text>
            Follow Me
          </Text>
          <HStack spacing={8}  mb="1rem"> {/* Add margin to buttons */}
          <IconButton
            as="a"
            href="https://github.com/himanshugoldy"
            aria-label="GitHub"
            icon={<FaGithub />}
            color="#FD4556"
            bgColor={"black"}
            size="lg" // Increase button size
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.1)" }}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/himanshu-choudhary-443774111/"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            color="#FD4556"
            bgColor={"black"}
            size="lg" // Increase button size
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.1)" }}
          />
        </HStack>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Made By</Text>
          <Text>Copyright@2023</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;