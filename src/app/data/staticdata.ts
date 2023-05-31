import path from 'path';
import { promises as fs } from 'fs';

export default async function staticDataHandler () {
	const fileContents = await fs.readFile(process.cwd() + 'src/app/data/settings.json', 'utf8');
	return fileContents;
}
