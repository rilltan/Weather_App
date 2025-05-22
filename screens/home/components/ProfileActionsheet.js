import React from "react";

import { Box, Avatar, Actionsheet, Text } from "native-base";
import { COLORS } from "../../../constants";

const ProfileActionsheet = ({
  isOpen,
  onClose,
  profileArr,
  selectedProfile,
  setSelectedProfile,
}) => {
  const getInitials = (name) => {
    let n = name.split(" ");
    let i = n.map((w) => w[0]);
    return i.join("").toUpperCase();
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
      <Actionsheet.Content pt={5}>
        <Box alignSelf="flex-start" ml={4}></Box>
        {profileArr.map((p) => {
          return (
            <Actionsheet.Item
              display="flex"
              flexDir="row"
              alignItems="center"
              backgroundColor={
                selectedProfile.id == p.id ? COLORS.lightGray : "transparent"
              }
              borderRadius={10}
              onPress={() => {
                setSelectedProfile(p);
              }}
              _pressed={{
                opacity: 0.5,
              }}
            >
              <Box display="flex" flexDir="row" alignItems="center">
                <Avatar source={{ uri: p["img"] }} mr={5}>
                  {getInitials(p["name"])}
                </Avatar>

                <Text>{p.name}</Text>
              </Box>
            </Actionsheet.Item>
          );
        })}
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default ProfileActionsheet;
