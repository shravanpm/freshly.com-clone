import React from "react";

import { Box, Stack, Text } from "@chakra-ui/react";

export const MenuModalDesc = ({ data }) => {
  return (
    <>
      <Stack backgroundColor={"white"}>
        <Text mt="15px" paddingLeft="20px">
          <b>What makes this dish special</b>
        </Text>
        <Stack>
          {[data.desc1, data.desc2, data.desc3, data.desc4, data.desc5].map(
            (d, index) => (
              <Box
                paddingLeft="10px"
                marginBottom="10px"
                marginTop="10px"
                borderLeft="5px solid rgb(113,113,113)"
                key={index}
              >
                <Text
                  noOfLines={[1, 3, 5]}
                  color="rgb(48,48,54)"
                  fontSize={"13px"}
                  letterSpacing="3"
                  fontWeight="500"
                >
                  {d}
                </Text>
              </Box>
            )
          )}
        </Stack>
      </Stack>
    </>
  );
};
