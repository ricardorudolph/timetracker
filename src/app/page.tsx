'use client';
import useSWR from 'swr';
import staticDataHandler from './data/staticdata';
import Settings from './data/settings.json';
import TimeStamps from './data/timestamps.json';
import { Daily } from './components/Daily';
import { Box, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Monthly } from './components/Monthly';
import { Weekly } from './components/Weekly';
import { EditableField } from './components/Form';
import { DataProvider } from './context/dataContext';
import { defaultTheme } from './theme';

export default function Home () {
	return (
		<DataProvider>
			<ChakraProvider theme={defaultTheme}>
				<Navbar></Navbar>
				<Box p="4" bgColor="gray.50" h="100%">
					<Daily></Daily>
					{/* <Weekly></Weekly>
          <Monthly></Monthly> */}
					{/* <h3>Settings</h3>
          <Flex px="4">
            <p>User: {Settings.user}</p>
            <p>Status: {Settings.status}</p>
            <p>Working hours weekly: {Settings.working_hours_weekly}</p>
            <p>Billing period: {Settings.billing_period}</p>
          </Flex> */}
				</Box>
			</ChakraProvider>
		</DataProvider>
	);
}

('https://feiertage-api.de/api/?jahr=2023&nur_land=BE');

//   var days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   var months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
