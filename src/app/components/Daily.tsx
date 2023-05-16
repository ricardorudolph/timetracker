import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Container,
  Flex,
  Box,
} from "@chakra-ui/react";
import TimeStamps from "../data/timestamps.json";
import { EditableField, InputForm } from "./Form";
import { useContext } from "react";
import {
  calcDayTotal,
  toDay,
  toTime,
  toWeekNumber,
  useDataContext,
} from "../context/dataContext";

export function Daily() {
  const { data, currentDate } = useDataContext();
  if (data.length <= 0) {
    return <></>;
  }

  return (
    <>
      {/* <Box margin="0">
        <h3>Today</h3>
        <Flex px="4">
          {EditableField("Start")}
          {EditableField("End")}
          Add Break
          {EditableField("Break start")}
          {EditableField("Break end")}
        </Flex>
      </Box> */}
      <InputForm />
      <TableContainer>
        <Container margin={0}>KW: {toWeekNumber(currentDate)}</Container>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Start</Th>
              <Th>End</Th>
              <Th></Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d, i) => (
              <Tr key={i}>
                <Td>{toDay(d.start)}</Td>
                <Td>{EditableField(toTime(d.start))}</Td>
                <Td>{EditableField(toTime(d.end))}</Td>
                <Td>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Break Start</Th>
                        <Th>Break End</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          {EditableField(toTime(d.breaks[0].break_start))}
                        </Td>
                        <Td>{EditableField(toTime(d.breaks[0].break_end))}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Td>
                <Td>{calcDayTotal(d)}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th>TOTAL</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
