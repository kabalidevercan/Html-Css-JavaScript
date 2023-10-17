import icons from 'url:../../img/icons.svg'; // PARSEL 2
import  {Fraction} from 'fractional';


class RecipeView {
#parentElement = document.querySelector('.recipe')
#data;
render(data){
    this.#data  = data
    const markup = this.#generateMarkup()
    this.#clear()
    this.#parentElement.insertAdjacentHTML('afterbegin',markup)
}


      #clear(){
        this.#parentElement.innerHTML = ''
      }


       renderSpinner = function (){
        const markup = `<div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
      this.#parentElement.innerHTML = ''
      this.#parentElement.insertAdjacentHTML('afterbegin',markup)
    }



    
    #generateMarkup() {
        return `<figure class="recipe__fig">
        <img src="${this.#data.image}" alt="${this.#data.title}" class="this.#data__img" />
        <h1 class="this.#data__title">
          <span>${this.#data.title}</span>
        </h1>
      </figure>

      <div class="this.#data__details">
        <div class="this.#data__info">
          <svg class="this.#data__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="this.#data__info-data this.#data__info-data--minutes">${this.#data.cookingTime}</span>
          <span class="this.#data__info-text">minutes</span>
        </div>
        <div class="this.#data__info">
          <svg class="this.#data__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="this.#data__info-data this.#data__info-data--people">${this.#data.servings}</span>
          <span class="this.#data__info-text">servings</span>

          <div class="this.#data__info-buttons">
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

        <div class="this.#data__user-generated">
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

      <div class="this.#data__ingredients">
        <h2 class="heading--2">this.#data ingredients</h2>
        <ul class="this.#data__ingredient-list">
            ${this.#data.ingredients.map(this.#generateMarkupIngredient).join('')}
          

          
      </div>

      <div class="this.#data__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="this.#data__directions-text">
          This this.#data was carefully designed and tested by
          <span class="this.#data__publisher">${this.#data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small this.#data__btn"
          href="${this.#data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`;
      
    }

    #generateMarkupIngredient(ing) {
      
        return `<li class="this.#data__ingredient">
        <svg class="this.#data__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="this.#data__quantity">${ing.quantity ? new Fraction(ing.quantity).toString()  : ''}</div>
        <div class="this.#data__description">
          <span class="this.#data__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>`;
    
    }  
  

  }

  export default new RecipeView()
