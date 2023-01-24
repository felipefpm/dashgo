import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { Profile } from "./Profile";
import { Notification } from "./Notifications";
import { Search } from "./Search";
import { Logo } from "./Logo";
import { useSidebarDrower } from '../../contexts/sidebarDraweContext';
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrower()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg:true
  })

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      align='center'
      px='6'
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        >

        </IconButton>
      )}

      <Logo />

      {isWideVersion && <Search />}

      <Flex align='center' ml='auto' >
        <Notification />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}