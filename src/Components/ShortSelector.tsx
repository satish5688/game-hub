import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSelectShort: (shortOrder: string) => void;
  shortOrder:string
}

const ShortSelector = ({ onSelectShort,shortOrder }: Props) => {
  const shortOrderlist = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: " Date Added" },
    { value: "name", lable: " Name" },
    { value: "-released", lable: " Release date" },
    { value: "-metacritic", lable: " Popularity" },
    { value: "-rating", lable: " Average rating" },
  ];

  const currentShortOrder= shortOrderlist.find(order=> order.value=== shortOrder)

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          Shorted by :{currentShortOrder?.lable || ' Relevance'}
        </MenuButton>
        <MenuList>
          {shortOrderlist.map((order) => (
            <MenuItem onClick={()=>onSelectShort(order.value)} key={order.value} value={order.value}>
              {order.lable}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default ShortSelector;
