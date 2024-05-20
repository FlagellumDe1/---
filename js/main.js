//PRODUCTS CATEGORIES SWITCH

let categoiesButtons = document.querySelectorAll('.products__categories-item');

for (let button of categoiesButtons){
    button.addEventListener('click', changeCategory)
}

function changeCategory(event){

    //HIDING CURRENT CATEGORY
    for (let elements of document.querySelectorAll('.products__categories-item.active')){
        elements.classList.remove('active');
    }
    this.classList.add('active');

    for (let element of document.querySelectorAll('.products__swiper.active')){
        element.classList.remove('active');
        element.classList.add('inactive');
    }

    //SHOWING NEW CATEGORY

    let buttonCategory = this.dataset.category;

    let categorySwiper = document.getElementById(`${buttonCategory}`);
    categorySwiper.classList.remove('inactive');
    categorySwiper.classList.add('active');

}