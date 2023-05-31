import React from 'react';
import {
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Tfoot,
	Container
} from '@chakra-ui/react';
import { EditableField, InputForm } from './Form';
import {
	calcDayTotal,
	toDay,
	toTime,
	toWeekNumber,
	useDataContext
} from '../context/dataContext';

export function Daily () {
	const { data, currentDate } = useDataContext();
	// if (data.length <= 0) {
	// return
	// }

	return (
		<>
			<InputForm />
			<TableContainer>
				<Container margin={0}>KW: {toWeekNumber(currentDate)}</Container>
				<Table
					size="sm"
					variant="simple"
				>
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
