const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const path = require('path'); // Allows working w/ file paths.

const app = express();

// Allow cross-origin / cors
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// Set static folder for React and other files
app.use(express.static('public'));

// Send to the React index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));