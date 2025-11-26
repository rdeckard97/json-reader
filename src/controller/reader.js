import { readFile }  from 'fs/promises';

async function readJson(){
    const filename = 'products';
    const data = await readFile(filename, 'utf8');
    const json = JSON.parse(data);
    console.log(json);
}

