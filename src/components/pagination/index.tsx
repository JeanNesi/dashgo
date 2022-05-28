import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./paginationItem";

export function Pagination(){
  return(
    <Stack
      direction={["column", "row"]}
      mt='6'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack
        direction='row'
        spacing='2'
      >
        <PaginationItem number={1} isCurrent={true}/>
        <PaginationItem number={2}/>
        <PaginationItem number={3}/>
      </Stack>
    </Stack>
  )
}