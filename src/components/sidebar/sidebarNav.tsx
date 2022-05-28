import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./navLink";
import { NavSection } from "./navSection";

export function SidebarNav(){
  return(
    <Stack spacing='12' align='flex-start'>

    <NavSection title="GERAL">
      <NavLink icon={RiContactsLine} name="Usuários" href="/users"/>
      <NavLink icon={RiDashboardLine} name="Dashboard" href="/dashboard"/>
    </NavSection>

    <NavSection title='AUTOMAÇÃO'>
      <NavLink icon={RiGitMergeLine} name="Formulários" href="/forms"/>
      <NavLink icon={RiInputMethodLine} name="Automação" href="/automation"/>
    </NavSection>

  </Stack>
  )
}