const marathons = require('./marathon-data')
const express = require('express');
const app = express(); 
app.use(express.json());
app.set('port', 3002); 

app.locals.title='Top US Marathons'
app.locals.marathons = marathons.marathons; 

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is up and running on http://localhost:${app.get('port')}.`);
});

app.get('/api/v1/marathons', (request, response) => {
  response.status(200).json({marathons: app.locals.marathons})
})


app.get('/api/v1/marathons/:id', (request, response) => {
  const id = +request.params.id;
  const requestedRace = app.locals.marathons.find(marathon => marathon.id === id);
  if (!requestedRace) {
    response.status(404).json({error: `Sorry, we couldn't find a race with an id of ${id}`})
  }
  response.status(200).json({requestedRace})
})