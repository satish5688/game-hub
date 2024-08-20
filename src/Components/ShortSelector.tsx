import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown } from 'react-icons/bs'

const ShortSelector = () => {
    return (
        <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>short selector</MenuButton>
            <MenuList>
                <MenuItem>Satish</MenuItem>
                <MenuItem>Pratiks</MenuItem>
                <MenuItem>Tikaram</MenuItem>
                <MenuItem>Vishal</MenuItem>

            </MenuList>
        </Menu>
        </>
      )
}

export default ShortSelector