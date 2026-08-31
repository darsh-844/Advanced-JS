// import { read } from 'fs';
import fs from 'fs/promises';

async function readfilecontent(filename) {
    const data = await fs.readFile(filename, 'utf8');
    console.log(data);
}
readfilecontent('notes.txt');

