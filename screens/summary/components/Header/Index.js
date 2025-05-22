import React, { useState } from "react";
import { Box, Select, CheckIcon, Text, Flex, Divider } from "native-base";
import { useSelector } from "react-redux";

const Header = () => {
  const [person, setPerson] = useState();
  const children = useSelector((e) => e.children);

  return (
    <Flex width="100%">
      <Select
        selectedValue={person}
        minWidth="100%"
        height="40px"
        mt={4}
        accessibilityLabel="Choose Kid"
        placeholder="Choose child"
        _selectedItem={{
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={(itemValue) => setPerson(itemValue)}
      >
        {Object.keys(children).map((k) => (
          <Select.Item label={children[k].name} value={children[k].name} />
        ))}
      </Select>
      <Divider mt={3} />
    </Flex>
  );
};

export default Header;
