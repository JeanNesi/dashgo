import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './logo'
import { NotificationsNav } from './notificationsNav'
import { Profile } from './profile'
import { SearchBox } from './searchBox'

export function Header(){
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
    return(
        <Flex
          w='100%'
          as='header'
          maxW={1480}
          h='20'
          mx='auto'
          mt='8'
          px='6'
          align='center'
        >
          <Logo/>
          {isWideVersion && <SearchBox />}

            <Flex
              align='center'
              ml='auto'
            >
              <NotificationsNav/>
              <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    )
}