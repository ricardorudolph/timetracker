/* eslint-disable no-empty-pattern */
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState
} from 'react';
import TimeStamps from '../data/timestamps.json';
import path from 'path';
import fs from 'fs';

interface DataProps {
	children?: React.ReactNode;
}

export interface TimeStamp {
	start: Date;
	end: Date;
	breaks: Array<{
		break_start: Date;
		break_end: Date;
	}>;
	isVacation: boolean;
}

const initialValue: TimeStamp[] = [
	{
		start: new Date(),
		end: new Date(),
		breaks: [
			{
				break_start: new Date(),
				break_end: new Date()
			}
		],
		isVacation: false
	}
];

const DataContext = createContext({
	data: initialValue,
	currentDate: new Date(),
	today: {},
	setData: (newData: TimeStamp[]) => {},
	setContext: (newData: TimeStamp[]) => {}
});

export function useDataContext () {
	return useContext(DataContext);
}

export function DataProvider ({ children }: DataProps) {
	const [data, setData] = useState(fetchContent());
	const [currentDate, setDate] = useState(new Date());
	const [today, setToday] = useState({});

	function fetchContent () {
		return Array(TimeStamps.timestamps.length)
			.fill({
				start: null,
				end: null,
				breaks: null,
				isVacation: null
			})
			.map(({}, index1) => ({
				start: new Date(TimeStamps.timestamps[index1].start),
				end: new Date(TimeStamps.timestamps[index1].end),
				breaks: Array(TimeStamps.timestamps[index1].breaks.length)
					.fill({
						break_start: null,
						break_end: null
					})
					.map(({}, index2) => ({
						break_start: new Date(
							TimeStamps.timestamps[index1].breaks[index2].break_start
						),
						break_end: new Date(
							TimeStamps.timestamps[index1].breaks[index2].break_end
						)
					})),
				isVacation: TimeStamps.timestamps[index1].isVacation
			}));
	}

	//   function updateJSON(newData: timeStamp){
	// try {
	// // Read the existing data from the JSON file
	// const dataFilePath = "../data/timestamps.json"
	// const jsonData = fs.readFile(dataFilePath);
	// const objectData = JSON.parse(jsonData);
	// objectData.push(newData);
	// const updatedData = JSON.stringify(objectData);
	// fs.writeFile(dataFilePath, updatedData);
	// console.log("Success")
	// } catch (error) {
	// console.error(error);
	// }
	//   }

	const setContext = useCallback(
		(newData: TimeStamp[]) => {
			setData([...data, ...newData]);
		},
		[data, setData]
	);

	return (
		<DataContext.Provider
			value={{ data, currentDate, today, setData, setContext }}
		>
			{children}
		</DataContext.Provider>
	);
}

export function stringToDate (date: string, time: string) {
	return new Date();
}

export function toWeekNumber (date: Date) {
	const startDate = new Date(date.getFullYear(), 0, 1);
	const days = Math.floor(
		(date.valueOf() - startDate.valueOf()) / (24 * 60 * 60 * 1000)
	);
	return '' + Math.ceil(days / 7).toString();
}

export function toWeekday (date: Date) {
	return date.toLocaleString([], { weekday: 'long' });
}

export function toDay (date: Date) {
	return date.toLocaleDateString([], { day: 'numeric', month: 'long' });
}

export function toTime (date: Date) {
	return date.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
}

export function totalBreaks (breaks: Array<{ break_start: Date; break_end: Date }>) {
	let sum = 0;
	breaks.forEach((br) => {
		sum = sum + br.break_end.getTime() - br.break_start.getTime();
	});
	return sum;
}

export function calcDayTotal (data: TimeStamp) {
	return toTime(
		new Date(
			data.end.getTime() - data.start.getTime() - totalBreaks(data.breaks)
		)
	);
}

export function filterWeek (week: number, data: TimeStamp[]) {
	return data.filter((d) => parseInt(toWeekNumber(d.start), 10) === week);
}

export function filterMonth (month: number, data: TimeStamp[]) {
	return data.filter((d) => d.start.getMonth() === month);
}

export function calcTotalHours (data: TimeStamp[]) {
	let total = 0;
	data.forEach((tStamp) => {
		total = total + parseInt(calcDayTotal(tStamp), 10);
	});
	return total;
}
