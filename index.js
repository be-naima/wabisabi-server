const express = require('express')
const app = express()
var cors = require('cors')
const port =process.env.PORT || 8000;
const chefs = require('./data/ChefData.json')
const recipes = require('./data/Recipies.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send('WabiSabi Server')
})
app.get('/chefs',(req,res) =>{
    res.send(chefs)
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chefsRecipe = []
    for(const recipe of recipes){
        if(id == recipe.chef_id){
            chefsRecipe.push(recipe)
        }

    }
    res.send(chefsRecipe);
    
})
app.get('/:id', (req, res) => {
  const id = req.params.id;
  const chefInfo = []
  for(const chef of chefs){
      if(id == chef.id){
          chefInfo.push(chef)
      }

  }
  res.send(chefInfo);
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})