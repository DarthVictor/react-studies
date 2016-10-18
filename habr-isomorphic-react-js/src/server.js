import express  from 'express';

const app = express();

app.use((req, res) => {
  res.end('<p>Hello World!</p>');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});