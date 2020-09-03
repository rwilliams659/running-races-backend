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

app.post('/api/v1/marathons', (request, response) => {
  const requiredProperties = ['name', 'location', 'maxRunners', 'date'];
  for (let property of requiredProperties) {
    if(!request.body[property]) {
      return response.status(422).json({error: `Unsuccessful POST. Property of ${property} must be included.`})
    }
  };
  const { name, location, maxRunners, date } = request.body; 
  const id = Date.now(); 
  const newMarathon = { id, name, location, maxRunners, date }
  app.locals.marathons.push(newMarathon);
  response.status(201).json(newMarathon);
})

app.patch('/api/v1/marathons/:id', (request, response) => {
  const id = +request.params.id;
  const raceToUpdate = app.locals.marathons.find(marathon => marathon.id === id); 
  if (!raceToUpdate) {
    return response.status(404).json({ error: `Sorry, we couldn't find a race with an id of ${id}` })
  };
  const existingProperties = ['name', 'location', 'maxRunners', 'date'];
  const propertyToUpdate = Object.keys(request.body)[0]; 
  if (!existingProperties.includes(propertyToUpdate)) {
    return response.status(422).json({error: `Unsuccessful PATCH. Property of ${propertyToUpdate} does not exist.`})
  };
  const raceToUpdateIndex = app.locals.marathons.indexOf(raceToUpdate)
  const updatedRace = raceToUpdate;
  updatedRace[propertyToUpdate] = request.body[propertyToUpdate];
  app.locals.marathons.splice(raceToUpdateIndex, 1, updatedRace);
  response.status(201).json(updatedRace);
})

app.delete('/api/v1/marathons/:id', (request, response) => {
  const id = +request.params.id;
  const raceToDelete = app.locals.marathons.find(marathon => marathon.id === id);
  if (!raceToDelete) {
    return response.status(404).json({ error: `Sorry, cannot find a marathon with id of ${id}` })
  }
  app.locals.marathons = app.locals.marathons.filter(marathon => marathon.id !== id)
  response.status(200).json(raceToDelete); 
})