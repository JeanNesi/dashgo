import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/sidebarDrawerContext";
import { SidebarNav } from "./sidebarNav";

export function DrawerSidebar(){
  const { isOpen, onClose } = useSidebarDrawer()
  
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
    <DrawerOverlay>
      <DrawerContent bg='gray.800' p='4'>
        <DrawerCloseButton mt='6'/>
        <DrawerHeader>Navegação</DrawerHeader>
        <DrawerBody>
          <SidebarNav/>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
  )
}