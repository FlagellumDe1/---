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


//ABOUT SECTIONS SWITCH

let sectionButtons = document.querySelectorAll('.about__sections-item');

for (let button of sectionButtons) {
    button.addEventListener('click', changeSection)
}

function changeSection(event) {

    //HIDING CURRENT CATEGORY
    for (let elements of document.querySelectorAll('.about__sections-item.active')) {
        elements.classList.remove('active');
    }
    this.classList.add('active');

    for (let element of document.querySelectorAll('.about__section.active')) {
        element.classList.remove('active');
        element.classList.add('inactive');
    }

    //SHOWING NEW CATEGORY

    let buttonSection = this.dataset.section;

    let sectionSwiper = document.getElementById(`${buttonSection}`);
    sectionSwiper.classList.remove('inactive');
    sectionSwiper.classList.add('active');

}