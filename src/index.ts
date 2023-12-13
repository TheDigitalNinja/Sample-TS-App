import express from 'express';
import router from './routes';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('dev')); // Use 'combined' for detailed logs
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
