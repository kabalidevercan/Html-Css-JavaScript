import View from './view.js'

import icons from 'url:../../img/icons.svg'; // PARSEL 2
import  {Fraction} from 'fractional';


class RecipeView extends View{
_parentElement = document.querySelector('.recipe')
_errorMessage = 'We couldnt find that recipe.Please try another one!'
_message = '';


    addHandlerRender(handler) {
      ['hashchange','load'].forEach(ev =>
        window.addEventListener(ev,handler))
    }

    
    _generateMarkup() {
        return `<figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="this._data__img" />
        <h1 class="this._data__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="this._data__details">
        <div class="this._data__info">
          <svg class="this._data__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="this._data__info-data this._data__info-data--minutes">${this._data.cookingTime}</span>
          <span class="this._data__info-text">minutes</span>
        </div>
        <div class="this._data__info">
          <svg class="this._data__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="this._data__info-data this._data__info-data--people">${this._data.servings}</span>
          <span class="this._data__info-text">servings</span>

          <div class="this._data__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="this._data__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="this._data__ingredients">
        <h2 class="heading--2">this._data ingredients</h2>
        <ul class="this._data__ingredient-list">
            ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
          

          
      </div>

      <div class="this._data__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="this._data__directions-text">
          This this._data was carefully designed and tested by
          <span class="this._data__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small this._data__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`;
      
    }

    _generateMarkupIngredient(ing) {
      
        return `<li class="this._data__ingredient">
        <svg class="this._data__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="this._data__quantity">${ing.quantity ? new Fraction(ing.quantity).toString()  : ''}</div>
        <div class="this._data__description">
          <span class="this._data__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>`;
    
    }  
  

  }

  export default new RecipeView()
