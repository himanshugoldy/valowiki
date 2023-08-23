import { Flex,Avatar,Text,Button, useMediaQuery,useDisclosure,Drawer,DrawerBody,DrawerContent,DrawerHeader,DrawerOverlay} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { Menu,MenuButton,MenuList,MenuItem } from '@chakra-ui/react';
import valoIcon from "../assets/icons8-valorant.svg"
import {AiOutlineMenuFold} from "react-icons/ai"
import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = () => {

    const [isSmallerScreen] = useMediaQuery("(max-width: 1000px)");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement] = React.useState('right')


  return (
    <Flex display={"flex"} justifyContent={"space-between"} alignItems={"center"} bgColor={"black"} position="sticky" // Keep the Navbar fixed
    top={0}
    width="100%"
    zIndex={1000}>
        <Flex display = {"flex"} direction={"row"} justifyContent={"flex-start"} alignItems={"center"}>
            <Link to="/"><Avatar src={valoIcon} ml={"1rem"}></Avatar></Link>
        </Flex>
        {
          !isSmallerScreen?(
            <>
            <Flex display={"flex"} justifyContent={"space-evenly"}  width={"100%"} alignItems={"center"}>
            <Link to="/agents">
              <Button 
              bgColor={"black"} 
              color={"white"}
              _hover={{
                bg: 'gray.900', // Change hover background color
                position: 'relative',
                _after: {
                  content: '""',
                  position: 'absolute',
                  left: '50%',
                  bottom: '-2px', // Adjust the distance of the line from the button
                  transform: 'translateX(-50%)',
                  width: '80%', // Adjust the width of the line
                  height: '3px', // Adjust the height of the line
                  bg: 'red.500', // Change the color of the line
                },
              }}
              >AGENTS</Button>
            </Link>
            <Link to="/skins">
              <Button bgColor={"black"}
              color={"white"} 
              _hover={{
                bg: 'gray.900', // Change hover background color
                position: 'relative',
                _after: {
                  content: '""',
                  position: 'absolute',
                  left: '50%',
                  bottom: '-2px', // Adjust the distance of the line from the button
                  transform: 'translateX(-50%)',
                  width: '80%', // Adjust the width of the line
                  height: '3px', // Adjust the height of the line
                  bg: 'red.500', // Change the color of the line
                },
              }}>SKINS</Button>
            </Link>
            <Link to="/ranks"><Button bgColor={"black"}
            color={"white"}  
            _hover={{
               bg: 'gray.900', // Change hover background color
               position: 'relative',
               _after: {
                 content: '""',
                 position: 'absolute',
                 left: '50%',
                 bottom: '-2px', // Adjust the distance of the line from the button
                 transform: 'translateX(-50%)',
                 width: '80%', // Adjust the width of the line
                 height: '3px', // Adjust the height of the line
                 bg: 'red.500', // Change the color of the line
               },
             }}>COMPETITIVE TIERS</Button></Link>
            <Link to="/gameModes">
              <Button bgColor={"black"}
              color={"white"}  
              _hover={{
                bg: 'gray.900', // Change hover background color
                position: 'relative',
                _after: {
                  content: '""',
                  position: 'absolute',
                  left: '50%',
                  bottom: '-2px', // Adjust the distance of the line from the button
                  transform: 'translateX(-50%)',
                  width: '80%', // Adjust the width of the line
                  height: '3px', // Adjust the height of the line
                  bg: 'red.500', // Change the color of the line
                },
              }}>GAME MODES</Button>
            </Link>
            <Link to="/maps">
              <Button bgColor={"black"} 
              color={"white"} 
              _hover={{
                bg: 'gray.900', // Change hover background color
                position: 'relative',
                _after: {
                  content: '""',
                  position: 'absolute',
                  left: '50%',
                  bottom: '-2px', // Adjust the distance of the line from the button
                  transform: 'translateX(-50%)',
                  width: '80%', // Adjust the width of the line
                  height: '3px', // Adjust the height of the line
                  bg: 'red.500', // Change the color of the line
                },
              }}>MAPS</Button>
            </Link>
            <Link to="/weapons">
              <Button bgColor={"black"} 
              color={"white"} 
              _hover={{
                bg: 'gray.900', // Change hover background color
                position: 'relative',
                _after: {
                  content: '""',
                  position: 'absolute',
                  left: '50%',
                  bottom: '-2px', // Adjust the distance of the line from the button
                  transform: 'translateX(-50%)',
                  width: '80%', // Adjust the width of the line
                  height: '3px', // Adjust the height of the line
                  bg: 'red.500', // Change the color of the line
                },
              }}>WEAPONS</Button>
            </Link>

              <Menu >
                <MenuButton 
                  as={Button} 
                  rightIcon={<ChevronDownIcon/>}
                  color={"white"} 
                  bgColor={"black"} 
                  fontFamily={'Roboto'}
                _hover={{
                  bg: 'gray.900', // Change hover background color
                  position: 'relative',
                  _after: {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    bottom: '-2px', // Adjust the distance of the line from the button
                    transform: 'translateX(-50%)',
                    width: '80%', // Adjust the width of the line
                    height: '3px', // Adjust the height of the line
                    bg: 'red.500', // Change the color of the line
                  },
                }}
                  >
                  OTHER
                </MenuButton>
                <MenuList>
                  <MenuItem bgColor={"black"}>
                      <Link  to="/playerCards"><Button
                          color={"white"}
                          bgColor={"black"} 
                          fontFamily={'Roboto'}
                        _hover={{
                          bg: 'gray.900', // Change hover background color
                          position: 'relative',
                          _after: {
                            content: '""',
                            position: 'absolute',
                            left: '50%',
                            bottom: '-2px', // Adjust the distance of the line from the button
                            transform: 'translateX(-50%)',
                            width: '80%', // Adjust the width of the line
                            height: '3px', // Adjust the height of the line
                            bg: 'red.500', // Change the color of the line
                          },
                        }}>
                        PLAYER CARDS
                      </Button></Link>
                    </MenuItem>
                  <MenuItem bgColor={"black"}
                  color={"white"} 
                  >
                  <Link to="/buddies">
                      <Button 
                        color={"white"} 
                        bgColor={"black"} 
                      _hover={{
                        bg: 'gray.900', // Change hover background color
                        position: 'relative',
                        _after: {
                          content: '""',
                          position: 'absolute',
                          left: '50%',
                          bottom: '-2px', // Adjust the distance of the line from the button
                          transform: 'translateX(-50%)',
                          width: '80%', // Adjust the width of the line
                          height: '3px', // Adjust the height of the line
                          bg: 'red.500', // Change the color of the line
                        },
                      }}
                      >GUN BUDDIES</Button>
                    </Link>
                  </MenuItem>
                  
                </MenuList>
              </Menu>
        </Flex>
        <Flex display={"flex"} justifyContent={"flex-end"}>
        <a href="https://playvalorant.com/en-gb/" target="_blank" rel="noopener noreferrer">
          <Button
            bgColor="#FD4556"
            borderRadius="2rem"
            height="2rem"
            color="white"
            mr="1rem"
            _hover={{
              bg: '#BD3944',
            }}
          >
            PLAY NOW
          </Button>
        </a>
        </Flex>
            </>
          ):(
            
            <Flex display={"flex"} flexDirection={"row"} bgColor={"black"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
              <Text marginLeft={"30%"} fontSize={"1.5rem"} fontWeight="bold" fontFamily={"Roboto"}>ValoWiki</Text>
              <Button colorScheme='blue' onClick={onOpen} bgColor={"black"} textColor={"white"} mr={"0"} fontSize={"2rem"} display={"flex"} justifyContent={"flex-start"}>
                <AiOutlineMenuFold/>
              </Button>
              <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <Link to="/"><DrawerHeader borderBottomWidth='1px'><Avatar src={valoIcon}></Avatar></DrawerHeader></Link>
                  <DrawerBody display={"flex"} flexDirection={"column"} bgColor={"black"}>
                  <Link to="/agents"><Button bgColor={"black"} color={"white"}  mb={"1rem"} width={"100%"} onClick={onClose} >AGENTS</Button></Link>
                  <Link to="/skins"><Button bgColor={"black"} color={"white"}  mb={"1rem"} width={"100%"} onClick={onClose}>SKINS</Button></Link>
                  <Link to="/ranks"><Button bgColor={"black"} color={"white"}   mb={"1rem"} width={"100%"} onClick={onClose}>COMPETITIVE TIERS</Button></Link>
                  <Link to="/gameModes"><Button bgColor={"black"} color={"white"} mb={"1rem"} width={"100%"} onClick={onClose}>GAME MODES</Button></Link>
                  <Link to="/maps"><Button bgColor={"black"} color={"white"}  mb={"1rem"} width={"100%"} onClick={onClose}>MAPS</Button></Link>
                  <Link to="/weapons"><Button bgColor={"black"} color={"white"}  mb={"1rem"} width={"100%"} onClick={onClose}>WEAPONS</Button></Link>
                  <Menu >
                  <MenuButton 
                    as={Button} 
                    rightIcon={<ChevronDownIcon/>}
                    color={"white"} 
                    bgColor={"black"} 
                    fontFamily={'Roboto'}
                  _hover={{
                    bg: 'gray.900', // Change hover background color
                    position: 'relative',
                    _after: {
                      content: '""',
                      position: 'absolute',
                      left: '50%',
                      bottom: '-2px', // Adjust the distance of the line from the button
                      transform: 'translateX(-50%)',
                      width: '80%', // Adjust the width of the line
                      height: '3px', // Adjust the height of the line
                      bg: 'red.500', // Change the color of the line
                    },
                  }}
                    >
                    OPTIONS
                  </MenuButton>
                  <MenuList>
                    <MenuItem bgColor={"black"}>
                    <Link to="/buddies"><Button bgColor={"black"} color={"white"}  mb={"1rem"} width={"100%"} onClick={onClose}>GUN BUDDIES</Button></Link>
                    </MenuItem>
                      <MenuItem bgColor={"black"}>
                      <Link to="/playerCards"><Button bgColor={"black"} color={"white"}  mb={"1rem"} width={"100%"} onClick={onClose}>PLAYER CARDS</Button></Link>
                      </MenuItem>
                  </MenuList>
                </Menu>
              <a href="https://playvalorant.com/en-gb/" target="_blank" rel="noopener noreferrer">
                  <Button
                  width={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    textAlign={"center"}
                    bgColor="#FD4556"
                    borderRadius="2rem"
                    height="2rem"
                    color="white"
                    mr="1rem"
                    _hover={{
                      bg: '#BD3944',
                    }}
                    onClick={onclose}
                  >
                    PLAY NOW
                  </Button>
                </a>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
          )
        }
    </Flex>
  )
}

export default Navbar




