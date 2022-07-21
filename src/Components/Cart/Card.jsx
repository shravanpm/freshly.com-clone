import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function Card({ data }) {
  return (
    <Box w="150px" h="200px">
      <Image src={data?.img_1} w="140px" h="140" alt="image" />
      <Heading as="h6" size={"sm"}>
        {data?.title}
      </Heading>
      <Text>{`${data?.calories} Cal | ${
        data?.GlutenFree === true ? "Gluten Free" : "Has Gluten"
      } | Single Serve`}</Text>
    </Box>
  );
}

export default Card;
