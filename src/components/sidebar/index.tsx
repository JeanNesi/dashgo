import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./navLink";
import { NavSection } from "./navSection";

export function Sidebar(){
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>

        <NavSection title="GERAL">
          <NavLink icon={RiContactsLine} name="Usuários" href="/users"/>
          <NavLink icon={RiDashboardLine} name="Dashboard" href="/dashboard"/>
        </NavSection>

        <NavSection title='AUTOMAÇÃO'>
          <NavLink icon={RiGitMergeLine} name="Formulários"/>
          <NavLink icon={RiInputMethodLine} name="Automação"/>
        </NavSection>

      </Stack>
    </Box>
  )
}