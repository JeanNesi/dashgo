import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavLinkProps extends LinkProps{
  icon: IconType
  name: string
}

export function NavLink({icon, name, ...rest}: NavLinkProps){
  return(
      <Link display='flex' alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20'/>
        <Text ml='4' fontWeight='medium'>{name}</Text>
      </Link>
  )
}