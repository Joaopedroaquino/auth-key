import  express  from 'express';

const app = express();

app.use(express.json());
// app.use(cors());
// app.use(routes);


app.listen(3000, ()=> console.log('🔥 Server started at http://localhost:3000'));