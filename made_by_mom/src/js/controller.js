import * as model from './model.js'
import recipeView from './views/recipeView.js'



// import icons  from '../img/icons.svg' // pARSEL 1

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import recipeView from './views/recipeView.js'

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function (){
    try {      
      
      
        const id = window.location.hash.slice(1);
        if(!id) return; 
        
        recipeView.renderSpinner()
      //LOADING RECIPE
        await model.loadRecipe(id)
       
        //RENDERING RECIPE
        recipeView.render(model.state.recipe)
        
    } catch (err) {
        console.log(err)
        recipeView.renderError();
    }
}

const init = function(){
  recipeView.addHandlerRender(controlRecipes);
}

init()



