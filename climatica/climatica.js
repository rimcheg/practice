// for Site toogles
let home_cl = document.querySelector('#Home').classList;
let catalog_cl = document.querySelector('#Catalog').classList;
let card_cl = document.querySelector('#Card').classList;
let news_cl = document.querySelector('#News').classList;
let news_article_cl = document.querySelector('#News_article').classList;
let payment_delivery_cl = document.querySelector('#Payment_delivery').classList;
let contakts_cl = document.querySelector('#Contakts').classList;
let about_company_cl = document.querySelector('#About_company').classList;
let partners_cl = document.querySelector('#Partners').classList;
let search_cl = document.querySelector('#Search').classList;
let search_not_found_cl = document.querySelector('#Search_not_found').classList;
let faq_cl = document.querySelector('#FAQ').classList;
let size_table_cl = document.querySelector('#Size_table').classList;
let size_table_without_women_cl = document.querySelector('#Size_table_without_women').classList;
let thank_you_page_cl = document.querySelector('#Thank_you_page').classList;
let error_404_cl = document.querySelector('#Error_404').classList;
let cat_men_cl = document.querySelector('#Open_menu_catalog').classList;
let seas_men_cl = document.querySelector('#Open_menu_seazon').classList;

document.getElementById('On_click_seazon').onclick = () => {
    a = catalog_cl.contains('pos_init');
    b = cat_men_cl.contains('not_on_display');
    c = seas_men_cl.contains('not_on_display');
    d = catalog_cl.contains('not_on_display');

    document.querySelector('#Open_menu_seazon').classList.toggle('not_on_display');
    document.querySelector('#On_click_seazon').classList.toggle('active_link');
    document.querySelector('.season_img').classList.toggle('display_none');
    document.querySelector('#Open_menu_catalog').classList.add('not_on_display');
    document.querySelector('#On_click_catalog').classList.remove('active_link');
    document.querySelector('.catalog_img').classList.add('display_none');

    if (d === true) {
        catalog_cl.remove('pos_init');
    } else if (a === true && b === true && c === true) {
        catalog_cl.remove('pos_init');
    } else if (a === false && b === true && c === false) {
        catalog_cl.add('pos_init');
    }
}

document.getElementById('On_click_catalog').onclick = () => {
    a = catalog_cl.contains('pos_init');
    b = seas_men_cl.contains('not_on_display');
    c = cat_men_cl.contains('not_on_display');
    d = catalog_cl.contains('not_on_display');

    document.querySelector('#Open_menu_catalog').classList.toggle('not_on_display');
    document.querySelector('#On_click_catalog').classList.toggle('active_link');
    document.querySelector('.catalog_img').classList.toggle('display_none');
    document.querySelector('#Open_menu_seazon').classList.add('not_on_display');
    document.querySelector('#On_click_seazon').classList.remove('active_link');
    document.querySelector('.season_img').classList.add('display_none');

    if (d === true) {
        catalog_cl.remove('pos_init');
    } else if (a === true && b === true && c === true) {
        catalog_cl.remove('pos_init');
    } else if (a === false && b === true && c === false) {
        catalog_cl.add('pos_init');
    }
}

document.getElementsByClassName('see_more_type')[0].onclick = () => {
    document.querySelector('.see_more_type_img').classList.toggle('rotate_img');
    document.querySelector('.see_more_type_dropduwn').classList.toggle('pos_init');
}

document.getElementsByClassName('see_more_color')[0].onclick = () => {
    document.querySelector('.see_more_color_img').classList.toggle('rotate_img');
    document.querySelector('.see_more_color_dropduwn').classList.toggle('pos_init');
}

document.getElementsByClassName('see_more_size')[0].onclick = () => {
    document.querySelector('.see_more_size_img').classList.toggle('rotate_img');
    document.querySelector('.see_more_size_dropduwn').classList.toggle('pos_init');
}

document.getElementsByClassName('see_more_material')[0].onclick = () => {
    document.querySelector('.see_more_material_img').classList.toggle('rotate_img');
    document.querySelector('.see_more_material_dropduwn').classList.toggle('pos_init');
}

document.getElementsByClassName('see_more_seasons')[0].onclick = () => {
    document.querySelector('.see_more_seasons_img').classList.toggle('rotate_img');
    document.querySelector('.see_more_season_dropduwn').classList.toggle('pos_init');
}

document.getElementById('Catalog_page').onclick = () => {

    if (cat_men_cl[1] === 'not_on_display' && seas_men_cl[1] === 'not_on_display') {
        document.querySelector('#Catalog').classList.toggle('not_on_display');
        document.querySelector('#Catalog').classList.toggle('pos_init');
    } else if (cat_men_cl[1] === undefined && seas_men_cl[1] === 'not_on_display') {
        document.getElementById('Open_menu_catalog').classList.add('not_on_display');
        document.querySelector('#On_click_catalog').classList.remove('active_link');
        document.querySelector('#Catalog').classList.remove('not_on_display');
        document.querySelector('#Catalog').classList.add('pos_init');
    } else if (cat_men_cl[1] === 'not_on_display' && seas_men_cl[1] === undefined) {
        document.getElementById('Open_menu_seazon').classList.add('not_on_display');
        document.querySelector('#On_click_seazon').classList.remove('active_link');
        document.querySelector('#Catalog').classList.remove('not_on_display');
        document.querySelector('#Catalog').classList.add('pos_init');
    }
}




// fetch





    const url = 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=iphone&page=2&country=UA&category=aps';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7763ee36bamsh3a4742555f567e8p1c838bjsn77be19768996',
            'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com'
        }
    };

    fetch(url, options)
    .then(response => response.json())
    .then(result => {
        console.log(result)
    });