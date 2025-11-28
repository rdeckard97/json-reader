import { Router } from 'express';
import multer from 'multer';
import { exportJSON, uploadJSON } from '../controller/reader.js';


const router = Router();
const upload = multer({
    dest: 'data/',
    limits: { fileSize: 5 * 1024 * 1024 }, // 5mb
    fileFilter: (req, file, callback) => {
        if (file.mimetype === 'application/json'){
            callback(null, true);
        }else {
            callback(new Error('Archivo no permitido.'));
        }
    }
});

router.post('/upload', upload.single('jsonFile'), uploadJSON);
router.get('/export', exportJSON);
export default router;