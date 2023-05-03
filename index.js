const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

const chef = require('./data/chef.json')
const recipe = require('./data/recipe.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chef',(req, res) => {
  console.log(chef);
    res.send(chef)
})

// app.get('/chef/:id',(req, res) => {
//   const id = parseInt(req.params.id);
//   console.log(id);
  
//   if (id === 0){
//     res.send(news)
//   }
//   else{const chefList = chef.filter(n => parseInt(n.id) ===id)
//     res.send(categoryNews)}
  
//   })



app.get('/recipe',(req, res) => {
  console.log(recipe);
    res.send(recipe)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
