import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
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
                        {data.highlight.split(",").map((item, index) => (
                          <Text mr="10px" key={index}>{` ${item}   `}</Text>
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
                  backgroundColor="rgb(247,247,247)"
                >
                  <Box w="46%">
                    <Stack>
                      <Center>
                        <Image w="90%" h="180px" src={data.img_1} alt="image" />
                      </Center>
                      <Center>
                        <Image w="90%" h="180px" src={data.img_2} alt="image" />
                      </Center>
                    </Stack>
                  </Box>

                  <Box w="52%" ml="1px">
                    <Stack backgroundColor={"white"}>
                      <Text mt="15px" paddingLeft="20px">
                        <b>What makes this dish special</b>
                      </Text>
                      {[
                        data.desc1,
                        data.desc2,
                        data.desc3,
                        data.desc4,
                        data.desc5,
                      ].map((d, index) => (
                        <Box
                          paddingLeft="10px"
                          borderLeft="5px solid rgb(113,113,113)"
                          key={index}
                        >
                          <Text noOfLines={[1, 2, 3]}>{d}</Text>
                        </Box>
                      ))}
                    </Stack>
                    {/* Ingredients Starting */}
                    <Box p="10px" backgroundColor={"white"} mt="10px">
                      <Text>
                        <b>Ingredients</b>
                      </Text>
                      <SimpleGrid columns={3} gap="10px" mt="10px">
                        {[
                          { img: data.ing1_Img, name: data.ing1_name },
                          { img: data.ing2_Img, name: data.ing2_name },
                          { img: data.ing3_Img, name: data.ing3_name },
                          { img: data.ing4_Img, name: data.ing4_name },
                          { img: data.ing5_Img, name: data.ing5_name },
                          { img: data.ing6_Img, name: data.ing6_name },
                        ].map((ing, index) => (
                          <Stack key={index}>
                            {ing.img && (
                              <Box>
                                <Box>
                                  <Image
                                    src={ing.img}
                                    alt="image"
                                    w="70px"
                                    h="70px"
                                  />
                                </Box>
                                <Box>
                                  <Text>{ing.name}</Text>
                                </Box>
                              </Box>
                            )}
                          </Stack>
                        ))}
                      </SimpleGrid>
                      <Center color="blue" cursor="pointer" h="50px">
                        <Text>Show Complete Ingredients</Text>
                      </Center>
                    </Box>
                    {/* Ingredients ends */}
                    {/* nutrition */}
                    <Box backgroundColor={"white"} mt="10px" paddingLeft="10px">
                      <Stack paddingBottom="10px" borderBottom="1px solid">
                        <Text>
                          <b>What is inside</b>
                        </Text>
                        <Text>Information per serving</Text>
                        <SimpleGrid columns={2}>
                          <Box
                            borderRight={"1px solid"}
                            borderBottom={"1px solid"}
                            padding="20px"
                          >
                            <Text>
                              <b>Calories</b>
                            </Text>
                            <Heading as="h4" size="lg">
                              {data.calories}
                            </Heading>
                          </Box>
                          <Box borderBottom={"1px solid"} p="20px">
                            <Text>
                              <b>Carbs</b>
                            </Text>
                            <Heading as="h4" size="lg">
                              {data.carbs}
                            </Heading>
                          </Box>
                          <Box borderRight={"1px solid"} p="20px">
                            <Text>
                              <b>Total Fat</b>
                            </Text>
                            <Heading as="h4" size="lg">
                              {data.totalFat}
                            </Heading>
                          </Box>
                          <Box p="20px">
                            <Text>
                              <b>Protein</b>
                            </Text>
                            <Heading as="h4" size="lg">
                              {data.protein}
                            </Heading>
                          </Box>
                        </SimpleGrid>
                      </Stack>
                      <Center color="blue" cursor="pointer" h="50px">
                        <Text>Show Complete Information</Text>
                      </Center>
                    </Box>
                    {/* Nutrition Ends */}
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
              transform="scale(1.05)"
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
