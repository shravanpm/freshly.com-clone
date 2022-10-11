import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

import { addToCart } from "../../Redux/AppReducer/action";
import styles from "./Card.module.css";
import { CartModal } from "./CartModal/CartModal";

function Card({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);

  const handleAdd = (payload) => {
    const payloadData = {
      img: payload.img_2,
      title: payload.title,
      token: token,
      id: payload.id,
    };
    console.log("test");
    dispatch(addToCart(payloadData));
  };
  return (
    <Box w="200px" h="310px">
      <>
        <Box h={"280px"} onClick={onOpen} cursor="pointer">
          <Modal isOpen={isOpen} onClose={onClose} size="2xl">
            <ModalOverlay />
            <ModalContent>
              <CartModal data={data} />
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
          onClick={() => {
            handleAdd(data);
          }}
        >
          <AddIcon color="white" />
        </Box>
      </>
    </Box>
  );
}

export default Card;
