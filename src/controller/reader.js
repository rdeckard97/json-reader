import { readFile, writeFile } from 'fs/promises';
import path from 'path';

export const uploadJSON = async (req, res) => {
    try {
        if (!req.file){
            return res.send("Subida de archivo incompleta.");
        }

        const filePath = path.join(process.cwd(), req.file.path);
        const data = await readFile(filePath, 'utf8');
        const json = JSON.parse(data);

        json.subido = new Date().toISOString();
        const outpathPath = path.join(process.cwd(), 'src/data', 'raw.json');
        await writeFile(outpathPath, JSON.stringify(json, null, 2));
        
        res.send(`
            Archivo cargado correctamente.<br>
            <a href="/files/export">Descargar JSON procesado</a>
        `);
    } catch (error) {
        res.status(500).send("Ocurrio un error inesperado. "+error.message);
    }
}

export const exportJSON = (req, res) => {
    const filePath = path.join(process.cwd(), 'src/data', 'raw.json');
    res.download(filePath, 'raw.json');
}

export default {
    uploadJSON, exportJSON
};