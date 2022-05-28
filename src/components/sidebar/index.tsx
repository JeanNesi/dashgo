import { Box, useBreakpointValue } from "@chakra-ui/react";
import { DrawerSidebar } from "./drawerSidebar";
import { SidebarNav } from "./sidebarNav";

export function Sidebar(){
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if(isDrawerSidebar){
    return (
      <DrawerSidebar/>
    )
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <SidebarNav/>
    </Box>
  )
}