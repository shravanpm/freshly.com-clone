import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Card.module.css";

function Card({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="200px" h="310px">
      <>
        <Box h={"280px"} onClick={onOpen} cursor="pointer">
          <Modal isOpen={isOpen} onClose={onClose} size="2xl">
            <ModalOverlay />
            <ModalContent>
              <Box
                h={"150px"}
                borderBottom="1px solid"
                paddingRight="20px"
                paddingLeft="20px"
              >
                <Box h="40px">
                  <ModalCloseButton />
                </Box>
                <Flex justifyContent={"space-between"}>
                  <Stack>
                    <Text size="md">
                      <b>{data.title}</b>
                    </Text>
                    <Text>{data.subTitle}</Text>
                    <Flex justifyContent={"space-between"}>
                      <Flex w="90%" mr="100px">
                        {data.highlight.split(",").map((item) => (
                          <Text mr="10px">{` ${item}   `}</Text>
                        ))}
                      </Flex>
                      <Flex
                        float={"right"}
                        border="1px solid"
                        // ml="80px"
                        justifyItems={"flex-end"}
                        alignContent="end"
                      >
                        <Button>Add</Button>
                      </Flex>
                    </Flex>
                  </Stack>
                  {/* Body */}
                </Flex>
              </Box>

              <ModalBody>
                <Flex
                  justifyContent={"space-between"}
                  h="400px"
                  overflow={"scroll"}
                >
                  <Box w="46%" border={"1px solid red"}>
                    <Stack>
                      <Box>
                        <Image w="90%" h="180px" src={data.img_1} alt="image" />
                      </Box>
                      <Box>
                        <Image w="90%" h="180px" src={data.img_2} alt="image" />
                      </Box>
                    </Stack>
                  </Box>

                  <Box w="52%" ml="1px" border={"1px solid red"}>
                    <Stack>
                      <Text mt="15px" paddingLeft="20px">
                        What makes this dish special
                      </Text>
                      <Box paddingLeft="10px" borderLeft="3px solid">
                        <Text noOfLines={[1, 2, 3]}>{data.desc1}</Text>
                      </Box>
                      <Box paddingLeft="10px" borderLeft="3px solid">
                        <Text noOfLines={[1, 2, 3]}>{data.desc2}</Text>
                      </Box>
                      <Box paddingLeft="10px" borderLeft="3px solid">
                        <Text noOfLines={[1, 2, 3]}>{data.desc3}</Text>
                      </Box>
                      <Box paddingLeft="10px" borderLeft="3px solid">
                        <Text noOfLines={[1, 2, 3]}>{data.desc4}</Text>
                      </Box>
                      <Box paddingLeft="10px" borderLeft="3px solid">
                        <Text noOfLines={[1, 2, 3]}>{data.desc5}</Text>
                      </Box>
                    </Stack>
                  </Box>
                </Flex>
              </ModalBody>

              {/* <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter> */}
            </ModalContent>
          </Modal>
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"200px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 10,
              left: 10,
              backgroundImage: `url(${data.img_1})`,
              filter: "blur(50px)",
              zIndex: -1,
            }}
            marginTop="10px"
          >
            <Image
              rounded={"lg"}
              height={180}
              width={200}
              objectFit={"cover"}
              src={data.img_1}
              borderRadius="10px"
              className={styles.zoom}
            />
          </Box>

          <Heading as="h6" size={"xs"} textTransform={"uppercase"}>
            {data?.title}
          </Heading>
          <Text
            color={"rgb(53,116,113)"}
            fontSize={"xs"}
            fontWeight="600"
            textTransform={"uppercase"}
            mt="5px"
          >{`${data?.calories} Cal | ${
            data?.GlutenFree === true ? "Gluten Free" : "Has Gluten"
          } | Single-Serve`}</Text>
        </Box>
        <Box
          w="40px"
          h="40px"
          borderRadius={"50%"}
          backgroundColor="blue"
          pt={"5px"}
          justifyItems={"flex-end"}
          alignContent="end"
          float={"right"}
          bottom="0"
          cursor={"pointer"}
        >
          <AddIcon color="white" />
        </Box>
      </>
    </Box>
  );
}

export default Card;
