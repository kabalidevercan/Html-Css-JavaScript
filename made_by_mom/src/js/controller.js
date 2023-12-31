import * as model from './model.js'
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'
import resultsView from './views/resultsView'
import paginationView from './views/paginationView.js'


// import icons  from '../img/icons.svg' // pARSEL 1

import 'core-js/stable'
import 'regenerator-runtime/runtime'


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


// if(module.hot) {
//   module.hot.accept();
// }

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

const controlSearchResults = async function() {
  try {

    resultsView.renderSpinner();
    const query = searchView.getQuery();

    if(!query) return;
    await model.loadSearchResults(query)

    resultsView.render(model.getSearchResultsPage())


    //
    paginationView.render(model.state.search)


    
  } catch (err) {
  console.log(err)    
  }
}

const controlPagination = function(goToPage){
  resultsView.render(model.getSearchResultsPage(goToPage))

  paginationView.render(model.state.search)

}

const controlServings = function (newServings){
  model.updateServings(newServings)
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe)
}



const init = function(){
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);

}

init()





