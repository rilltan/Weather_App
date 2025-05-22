import React from "react";
import { Box, VStack, Text, Center } from "native-base";

import { COLORS } from "../../../../constants";

const ScreentimeCard = () => {
  const stackData = [
    {
      stacks: [
        { value: 10, color: "orange" },
        { value: 20, color: "#4ABFF4", marginBottom: 2 },
      ],
      label: "Jan",
    },
    {
      stacks: [
        { value: 10, color: "#4ABFF4" },
        { value: 11, color: "orange", marginBottom: 2 },
        { value: 15, color: "#28B2B3", marginBottom: 2 },
      ],
      label: "Mar",
    },
    {
      stacks: [
        { value: 14, color: "orange" },
        { value: 18, color: "#4ABFF4", marginBottom: 2 },
      ],
      label: "Feb",
    },
    {
      stacks: [
        { value: 7, color: "#4ABFF4" },
        { value: 11, color: "orange", marginBottom: 2 },
        { value: 10, color: "#28B2B3", marginBottom: 2 },
      ],
      label: "Mar",
    },
  ];

  return (
    <Box
      backgroundColor={COLORS.white}
      width="100%"
      borderRadius="xl"
      margin="1"
      shadow="2"
      padding={3}
      pb={5}
    >
      <VStack space="3">
        <Text>Screen Time</Text>
        <Center></Center>
      </VStack>
    </Box>
  );
};

export default ScreentimeCard;
