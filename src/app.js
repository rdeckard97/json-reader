import express from 'express';
import readerRoutes from './routes/reader.js';
import homeRoutes from './routes/home.js';
import path from 'path';
const app = express();
const port = process.env.PORT || 8000;

// views
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'src/views'));
app.use(express.urlencoded({ extededed: true}));
app.use(express.json());



app.use('/files', readerRoutes);
app.use('/', homeRoutes);

app.listen(port, ()=>{
    console.log('Server on http://localhost:'+port);
});