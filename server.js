const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
