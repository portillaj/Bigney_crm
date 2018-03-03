const express = require('express');
const app = express();
const port = 5000;

app.get("/api/customers", (req, res) => {
  const customers = [
    {id: 1, firstName: 'Jason', lastName: 'Portilla'},
    {id: 2, firstName: 'Marilyn', lastName: 'Portilla'},
    {id: 3, firstName: 'Noah', lastName: 'Portilla'},
    {id: 4, firstName: 'Eliana', lastName: 'Portilla'}
  ];

  res.json(customers);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
