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
	Container
} from '@chakra-ui/react';
import { useContext } from 'react';
import {
	useDataContext,
	calcTotalHours,
	filterWeek,
	toWeekNumber
} from '../context/dataContext';

export function Weekly () {
	const { currentDate, data } = useDataContext();
	const currentWeek = parseInt(toWeekNumber(currentDate), 10);
	const weeks = Array(currentWeek)
		.fill(0)
		.map((week, index) => currentWeek - index);

	return (
		<TableContainer>
			<Table size="sm" variant="simple">
				<Thead>
					<Tr>
						<Th>KW</Th>
						<Th>Hours worked</Th>
						<Th>Vacation days</Th>
						<Th>Holidays</Th>
						<Th>Total</Th>
					</Tr>
				</Thead>
				<Tbody>
					{weeks.map((week, index) => {
						const tStamps = filterWeek(week, data);
						if (tStamps.length <= 0) {
							return <></>;
						}
						return (
							<Tr key={index}>
								<Td>{week}</Td>
								<Td>{calcTotalHours(tStamps)}</Td>
								<Td></Td>
								<Td></Td>
								<Td></Td>
							</Tr>
						);
					})}
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
	);
}
