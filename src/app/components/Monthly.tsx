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
import TimeStamps from '../data/timestamps.json';
import { useContext } from 'react';
import {
	useDataContext,
	calcTotalHours,
	filterMonth
} from '../context/dataContext';

export function Monthly () {
	const { data } = useDataContext();
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	return (
		<TableContainer>
			<Container margin={0}>2023</Container>
			<Table size="sm" variant="simple">
				<Thead>
					<Tr>
						<Th>Month</Th>
						<Th>Hours worked</Th>
						<Th>Vacation days</Th>
						<Th>Holidays</Th>
						<Th>Total</Th>
					</Tr>
				</Thead>
				<Tbody>
					{months.map((month, index) => {
						const tStamps = filterMonth(index, data);
						if (tStamps.length <= 0) {
							return <></>;
						}
						return (
							<Tr key={index}>
								<Td>{month}</Td>
								<Td>{calcTotalHours(tStamps)}</Td>
								<Td></Td>
								<Td></Td>
								<Td></Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
