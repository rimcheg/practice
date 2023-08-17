// for Site toogles
let home_cl = document.querySelector('#Home').classList;
let catalog_cl = document.querySelector('#Catalog').classList;
let card_cl = document.querySelector('#Sales_product_list').classList;
let new_prod_cl = document.querySelector('#New_product_list').classList;
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
let thank_you_page_cl = document.querySelector('#Thank_you_page').classList;
let error_404_cl = document.querySelector('#Error_404').classList;


let cat_men_cl = document.querySelector('#Open_menu_catalog').classList;
let seas_men_cl = document.querySelector('#Open_menu_seazon').classList;


// Page toogle
function Page_toogle(button_id, querySelector, page_name) {
    return (
        document.getElementById(button_id).onclick = () => {

            let active_page = document.getElementsByClassName('active_page')[0];
            let no_desk = document.getElementsByClassName('active_page');
            let clear_self_news = document.getElementById('News_article');

            document.querySelector(querySelector).classList.toggle('display_none');
            document.querySelector(querySelector).classList.toggle('pos_init');
            document.querySelector(querySelector).classList.toggle('active_page');

            if (active_page.id !== page_name) {

                active_page.classList.remove('pos_init');
                active_page.classList.remove('active_page');
                active_page.classList.remove('blure');
                active_page.classList.add('display_none');
                if (cat_men_cl.contains('not_on_display') == false || seas_men_cl.contains('not_on_display') == false) {
                    document.querySelector(querySelector).classList.add('blure');
                }
            } else if (no_desk.length === 0) {
                document.querySelector('#Home').classList.add('pos_init');
                document.querySelector('#Home').classList.add('active_page');
                document.querySelector('#Home').classList.remove('display_none');
            }


            ///////remove self news
            if (clear_self_news.classList.contains('display_none') && clear_self_news.childNodes.length > 0) {
                let first_ch = clear_self_news.childNodes[0];
                clear_self_news.removeChild(first_ch);
                let sec_ch = clear_self_news.childNodes[0];
                clear_self_news.removeChild(sec_ch);
            }
        }
    )
}

document.getElementById('Home_page').onclick = Page_toogle('Home_page', '#Home', 'Home');
document.getElementById('Catalog_page').onclick = Page_toogle('Catalog_page', '#Catalog', 'Catalog');
document.getElementById('Sales').onclick = Page_toogle('Sales', '#Sales_product_list', 'Sales_product_list');
document.getElementById('New_product').onclick = Page_toogle('New_product', '#New_product_list', 'New_product_list');
document.getElementById('Partners_page').onclick = Page_toogle('Partners_page', '#Partners', 'Partners');
document.getElementById('About_page').onclick = Page_toogle('About_page', '#About_company', 'About_company');
document.getElementById('News_page').onclick = Page_toogle('News_page', '#News', 'News');
document.getElementById('Payment_page').onclick = Page_toogle('Payment_page', '#Payment_delivery', 'Payment_delivery');
document.getElementById('Contacts_page').onclick = Page_toogle('Contacts_page', '#Contakts', 'Contakts');
document.getElementById('Cize_table_button').onclick = Page_toogle('Cize_table_button', '#Size_table', 'Size_table');
document.getElementById('New_button').onclick = Page_toogle('New_product', '#New_product_list', 'New_product_list');
document.getElementById('Sale_button').onclick = Page_toogle('Sales', '#Sales_product_list', 'Sales_product_list');
document.getElementById('Button_partner').onclick = Page_toogle('Partners_page', '#Partners', 'Partners');
document.getElementById('Button_payment_delivery').onclick = Page_toogle('Payment_page', '#Payment_delivery', 'Payment_delivery');
document.getElementById('Button_size_table').onclick = Page_toogle('Cize_table_button', '#Size_table', 'Size_table');

///////////////////////////////////////////////////

///////Open menu section


document.getElementById('On_click_catalog').onclick = () => {
    let active_page = document.getElementsByClassName('active_page')[0].classList;

    document.querySelector('#Open_menu_catalog').classList.toggle('not_on_display');
    document.querySelector('#On_click_catalog').classList.toggle('active_link');
    document.querySelector('.catalog_img').classList.toggle('display_none');
    document.querySelector('#Open_menu_seazon').classList.add('not_on_display');
    document.querySelector('#On_click_seazon').classList.remove('active_link');
    document.querySelector('.season_img').classList.add('display_none');
    if (active_page.contains('blure') === false) {
        active_page.add('blure')
    } else if (active_page.contains('blure') && (cat_men_cl.contains('not_on_display'))) {
        active_page.remove('blure')
    }
}

document.getElementById('On_click_seazon').onclick = () => {
    let active_page = document.getElementsByClassName('active_page')[0].classList;

    document.querySelector('#Open_menu_seazon').classList.toggle('not_on_display');
    document.querySelector('#On_click_seazon').classList.toggle('active_link');
    document.querySelector('.season_img').classList.toggle('display_none');
    document.querySelector('#Open_menu_catalog').classList.add('not_on_display');
    document.querySelector('#On_click_catalog').classList.remove('active_link');
    document.querySelector('.catalog_img').classList.add('display_none');
    if (active_page.contains('blure') === false) {
        active_page.add('blure')
    } else if (active_page.contains('blure') && (seas_men_cl.contains('not_on_display'))) {
        active_page.remove('blure')
    }
}

// manu toogle

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


////// fetch

let target = document.querySelector('#Target1');
let target2 = document.querySelector('#Target2');
let target3 = document.querySelector('#Target3');
let target4 = document.querySelector('#Target4')
let target5 = document.querySelector('#Target5')


fetch("https://fakerapi.it/api/v1/products?_quantity=20&_taxes=25&_categories_type=integer")
    .then(response => response.json())
    .then(value => {

        let products = value.data
        for (i = 0; i < products.length; i++) {
            const product = products[i]

            // обрезаем цифры для красоты и только
            let str_price = Math.round(product.price) + '';
            let finaly_price = str_price.substring(0, 5);

            let str_net_price = Math.round(product.net_price) + '';
            let finaly_net_price = str_net_price.substring(0, 5);
            // обрезаем цифры для красоты и только



            let product_card = document.createElement('div');
            product_card.classList.add('product_card');
            target.appendChild(product_card);

            // CARD IMAGE SECTION

            let product_img_section = document.createElement('div');
            product_img_section.classList.add('product_img_section');
            product_card.appendChild(product_img_section);

            let product_img_big = document.createElement('img');
            product_img_big.setAttribute('src', './images/card_img/boots.png');
            product_img_big.setAttribute('alt', product.name);
            product_img_section.appendChild(product_img_big);

            // CARD DESCRIPTION SECTION

            let product_description_section = document.createElement('div');
            product_description_section.classList.add('product_description_section');
            product_card.appendChild(product_description_section);

            // CARD DESCRIPTION SECTION // NAME

            let product_name_section = document.createElement('div');
            product_name_section.classList.add('product_name_section');
            product_description_section.appendChild(product_name_section);

            let product_name = document.createElement('h2');
            product_name.innerText = product.name;
            product_name.classList.add('product_name');
            product_name_section.appendChild(product_name);

            let product_article = document.createElement('h3');
            product_article.innerText = product.upc;
            product_article.classList.add('product_article');
            product_name_section.appendChild(product_article);

            // CARD DESCRIPTION SECTION // COLOR

            let product_color_section = document.createElement('div');
            product_color_section.classList.add('product_color_section');
            product_description_section.appendChild(product_color_section);

            let color_text = document.createElement('h2');
            color_text.innerText = "Цвет";
            color_text.classList.add('color_text');
            product_color_section.appendChild(color_text);

            let product_color = document.createElement('h2');
            // product_color.innerText = product.ean;
            if (product.ean <= 2000000000000) {
                product_color.innerText = "Черный"
            } else if (product.ean > 2000000000000 && product.ean <= 4000000000000) {
                product_color.innerText = "Белый"
            } else if (product.ean > 4000000000000 && product.ean <= 6000000000000) {
                product_color.innerText = "Коричневый"
            } else if (product.ean > 6000000000000 && product.ean <= 8000000000000) {
                product_color.innerText = "Серый"
            } else if (product.ean > 8000000000000 && product.ean <= 10000000000000) {
                product_color.innerText = "другие"
            }
            product_color.classList.add('product_color');
            product_color_section.appendChild(product_color);

            // CARD DESCRIPTION SECTION // SEASON

            let product_season_section = document.createElement('div');
            product_season_section.classList.add('product_season_section');
            product_description_section.appendChild(product_season_section);

            let season_text = document.createElement('h2');
            season_text.innerText = "Сезон";
            season_text.classList.add('season_text');
            product_season_section.appendChild(season_text);

            let product_season = document.createElement('h2');
            if (product.id <= products.length / 4) {
                product_season.innerText = "Зима";
            } else if (product.id >= (products.length - products.length / 4)) {
                product_season.innerText = "Лето";
            } else {
                product_season.innerText = "Весна/Осень";
            }
            product_season.classList.add('product_season');
            product_season_section.appendChild(product_season);

            // CARD DESCRIPTION SECTION // SIZE

            let product_size_section = document.createElement('div');
            product_size_section.classList.add('product_size_section');
            product_description_section.appendChild(product_size_section);

            let size_text = document.createElement('h2');
            size_text.innerText = "Размер";
            size_text.classList.add('size_text');
            product_size_section.appendChild(size_text);

            let product_size = document.createElement('h2');
            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
            }
            if ((28 + product.id) < 46) {
                product_size.innerText = 28 + product.id;
            } else {
                product_size.innerText = getRandomIntInclusive(29, 45);
            }
            product_size.classList.add('product_size');
            product_size_section.appendChild(product_size);

            // CARD DESCRIPTION SECTION // PRICE

            let product_price_section = document.createElement('div');
            product_price_section.classList.add('product_price_section');
            product_description_section.appendChild(product_price_section);

            if (product.price < 500) {

                let specify_price = document.createElement('button');
                specify_price.innerText = "Узнать цену";
                specify_price.classList.add('specify_price_button');
                product_price_section.appendChild(specify_price)

            } else {

                let product_price_max_section = document.createElement('div');
                product_price_max_section.classList.add('product_price_max_section');
                product_price_section.appendChild(product_price_max_section);

                let price_max_text = document.createElement('h2');
                price_max_text.innerText = "Розн.";
                price_max_text.classList.add('price_max_text');
                product_price_max_section.appendChild(price_max_text);

                let product_price_max = document.createElement('h2');
                product_price_max.innerText = finaly_price;
                product_price_max.classList.add('product_price_max');
                product_price_max_section.appendChild(product_price_max);

                let product_price_min_section = document.createElement('div');
                product_price_min_section.classList.add('product_price_min_section')
                product_price_section.appendChild(product_price_min_section);

                let price_min_text = document.createElement('h2');
                price_min_text.innerText = "Опт.";
                price_min_text.classList.add('price_min_text');
                product_price_min_section.appendChild(price_min_text);

                let product_price_min = document.createElement('h2');
                product_price_min.innerText = finaly_net_price;
                product_price_min.classList.add('product_price_min');
                product_price_min_section.appendChild(product_price_min);
            }

            //  for News and Sales

            let sales_img = document.createElement('img');
            sales_img.setAttribute('src', './images/card_img/Sales.png');
            sales_img.setAttribute('alt', 'sales');
            sales_img.classList.add('sales_img');

            let new_img = document.createElement('img');
            new_img.setAttribute('src', './images/card_img/New.png');
            new_img.setAttribute('alt', 'new');
            new_img.classList.add('new_img');

            if (product.price > 500 && product.price < 2000) {
                product_img_section.appendChild(sales_img);
                let for_sale = product_card.cloneNode(true);
                target2.appendChild(for_sale);
                if (target5.childElementCount < 3) {
                    let for_home_sale = product_card.cloneNode(true);
                    target5.appendChild(for_home_sale)
                }
            }
            if (product.price > 5000) {
                product_img_section.appendChild(new_img);
                let for_new = product_card.cloneNode(true);
                target3.appendChild(for_new);
                if (target4.childElementCount < 3) {
                    let for_home_new = product_card.cloneNode(true);
                    target4.appendChild(for_home_new)
                }
            }

        }
    });


//////news for home page

let news_arr = document.querySelectorAll('.news_item');
let news_target = document.querySelector('#news_target');

for (i = 0; i < news_arr.length; i++) {
    let news = news_arr[i];

    if (i < 3) {
        let for_news = news.cloneNode(true);
        news_target.append(for_news);
    }
}

//////self_news_page

let self_news_page_list = document.querySelectorAll('.news_item');

for (let i = 0; i < self_news_page_list.length; i++) {
    const self_news_page = self_news_page_list[i];

    self_news_page.onclick = () => {
        let active_page = document.getElementsByClassName('active_page')[0];
        let news_article = self_news_page.cloneNode(true);
        let self_news = document.getElementById('News_article');
        let select = document.querySelector('#News_article');
        let new_child = news_article.childNodes;
        let self_news_name = new_child[3];
        let self_news_description = new_child[5];
        let self_news_img = new_child[1]
    
        active_page.classList.remove('pos_init');
        active_page.classList.remove('active_page');
        active_page.classList.remove('blure');
        active_page.classList.add('display_none');
        select.classList.add('pos_init');
        select.classList.add('active_page');
        select.classList.remove('display_none');
    
        let news_info = document.createElement('div');
        news_info.classList.add('self_news')
        self_news.append(news_info);
    
        let info_news = document.createElement('div');
        info_news.classList.add('info_news');
        news_info.appendChild(info_news);
        info_news.append(self_news_name);
        self_news_name.classList.add('self_news_name');
        info_news.append(self_news_description);
        self_news_description.classList.add('self_news_description');
    
        news_info.append(self_news_img);
        self_news_img.classList.add('self_news_img')
    
        let last_news_section = document.createElement('div');
        last_news_section.classList.add('last_news_section');
        self_news.append(last_news_section);
    
        let signature = document.createElement('div');
        signature.classList.add('signature');
        last_news_section.appendChild(signature);
    
        let signature_text = document.createElement('h2');
        signature_text.innerText = 'Последние новости';
        signature.appendChild(signature_text);
    
        let signature_button = document.createElement('button');
        signature_button.innerText = 'Перейти';
        signature_button.classList.add('to_news_page');
        signature.appendChild(signature_button);
    
        let last_news = news_target.cloneNode(true);
        last_news_section.append(last_news);
    
        let dtn_clk = document.getElementsByClassName('to_news_page')[0]
        dtn_clk.onclick = () => {
            let active_page = document.getElementsByClassName('active_page')[0];
            let select = document.querySelector('#News');
    
            active_page.classList.remove('pos_init');
            active_page.classList.remove('active_page');
            active_page.classList.remove('blure');
            active_page.classList.add('display_none');
            select.classList.add('pos_init');
            select.classList.add('active_page');
            select.classList.remove('display_none');
    
            //// remove child
            let first_ch = active_page.childNodes[0];
            active_page.removeChild(first_ch);
            let sec_ch = active_page.childNodes[0];
            active_page.removeChild(sec_ch);
        }
    }   
}














////////// Without Functhion
    // document.getElementById('Home_page').onclick = () => {
//     let active_page = document.getElementsByClassName('active_page')[0];
//     let no_desk = document.getElementsByClassName('active_page');

//     document.querySelector('#Home').classList.toggle('display_none');
//     document.querySelector('#Home').classList.toggle('pos_init');
//     document.querySelector('#Home').classList.toggle('active_page');

//     if (active_page.id !== 'Home') {
//         active_page.classList.remove('pos_init');
//         active_page.classList.remove('active_page');
//         active_page.classList.remove('blure');
//         active_page.classList.add('display_none');
//         if (cat_men_cl.contains('not_on_display') == false || seas_men_cl.contains('not_on_display') == false) {
//             document.querySelector('#Home').classList.add('blure');
//         }
//     } else if (no_desk.length === 0) {
//         document.querySelector('#Home').classList.add('pos_init');
//         document.querySelector('#Home').classList.add('active_page');
//         document.querySelector('#Home').classList.remove('display_none');
//     }
// }

// document.getElementById('Catalog_page').onclick = () => {
//     let active_page = document.getElementsByClassName('active_page')[0];
//     let no_desk = document.getElementsByClassName('active_page');

//     document.querySelector('#Catalog').classList.toggle('display_none');
//     document.querySelector('#Catalog').classList.toggle('pos_init');
//     document.querySelector('#Catalog').classList.toggle('active_page');

//     if (active_page.id !== 'Catalog') {
//         active_page.classList.remove('pos_init');
//         active_page.classList.remove('active_page');
//         active_page.classList.remove('blure');
//         active_page.classList.add('display_none');
//         if (cat_men_cl.contains('not_on_display') == false || seas_men_cl.contains('not_on_display') == false) {
//             document.querySelector('#Catalog').classList.add('blure');
//         }
//     } else if (no_desk.length === 0) {
//         document.querySelector('#Home').classList.add('pos_init');
//         document.querySelector('#Home').classList.add('active_page');
//         document.querySelector('#Home').classList.remove('display_none');
//     }
// }

// document.getElementById('Sales').onclick = () => {
//     let active_page = document.getElementsByClassName('active_page')[0];
//     let no_desk = document.getElementsByClassName('active_page');

//     document.querySelector('#Sales_product_list').classList.toggle('display_none');
//     document.querySelector('#Sales_product_list').classList.toggle('pos_init');
//     document.querySelector('#Sales_product_list').classList.toggle('active_page');

//     if (active_page.id !== 'Sales_product_list') {
//         active_page.classList.remove('pos_init');
//         active_page.classList.remove('active_page');
//         active_page.classList.remove('blure');
//         active_page.classList.add('display_none');
//         if (cat_men_cl.contains('not_on_display') == false || seas_men_cl.contains('not_on_display') == false) {
//             document.querySelector('#Sales_product_list').classList.add('blure');
//         }
//     } else if (no_desk.length === 0) {
//         document.querySelector('#Home').classList.add('pos_init');
//         document.querySelector('#Home').classList.add('active_page');
//         document.querySelector('#Home').classList.remove('display_none');
//     }
// }

// document.getElementById('New_product').onclick = () => {
//     let active_page = document.getElementsByClassName('active_page')[0];
//     let no_desk = document.getElementsByClassName('active_page');

//     document.querySelector('#New_product_list').classList.toggle('display_none');
//     document.querySelector('#New_product_list').classList.toggle('pos_init');
//     document.querySelector('#New_product_list').classList.toggle('active_page');

//     if (active_page.id !== 'New_product_list') {
//         active_page.classList.remove('pos_init');
//         active_page.classList.remove('active_page');
//         active_page.classList.remove('blure');
//         active_page.classList.add('display_none');
//         if (cat_men_cl.contains('not_on_display') == false || seas_men_cl.contains('not_on_display') == false) {
//             document.querySelector('#New_product_list').classList.add('blure');
//         }
//     } else if (no_desk.length === 0) {
//         document.querySelector('#Home').classList.add('pos_init');
//         document.querySelector('#Home').classList.add('active_page');
//         document.querySelector('#Home').classList.remove('display_none');
//     }
// }

// document.getElementById('Partners_page').onclick = () => {
//     let active_page = document.getElementsByClassName('active_page')[0];
//     let no_desk = document.getElementsByClassName('active_page');

//     document.querySelector('#Partners').classList.toggle('display_none');
//     document.querySelector('#Partners').classList.toggle('pos_init');
//     document.querySelector('#Partners').classList.toggle('active_page');

//     if (active_page.id !== 'Partners') {
//         active_page.classList.remove('pos_init');
//         active_page.classList.remove('active_page');
//         active_page.classList.remove('blure');
//         active_page.classList.add('display_none');
//         if (cat_men_cl.contains('not_on_display') == false || seas_men_cl.contains('not_on_display') == false) {
//             document.querySelector('#Partners').classList.add('blure');
//         }
//     } else if (no_desk.length === 0) {
//         document.querySelector('#Home').classList.add('pos_init');
//         document.querySelector('#Home').classList.add('active_page');
//         document.querySelector('#Home').classList.remove('display_none');
//     }
// }

// document.getElementById('About_page').onclick = () => {
//     let active_page = document.getElementsByClassName('active_page')[0];
//     let no_desk = document.getElementsByClassName('active_page');

//     document.querySelector('#About_company').classList.toggle('display_none');
//     document.querySelector('#About_company').classList.toggle('pos_init');
//     document.querySelector('#About_company').classList.toggle('active_page');

//     if (active_page.id !== 'About_company') {
//         active_page.classList.remove('pos_init');
//         active_page.classList.remove('active_page');
//         active_page.classList.remove('blure');
//         active_page.classList.add('display_none');
//         if (cat_men_cl.contains('not_on_display') == false || seas_men_cl.contains('not_on_display') == false) {
//             document.querySelector('#About_company').classList.add('blure');
//         }
//     } else if (no_desk.length === 0) {
//         document.querySelector('#Home').classList.add('pos_init');
//         document.querySelector('#Home').classList.add('active_page');
//         document.querySelector('#Home').classList.remove('display_none');
//     }
// }

// document.getElementById('News_page').onclick = () => {
//     let active_page = document.getElementsByClassName('active_page')[0];
//     let no_desk = document.getElementsByClassName('active_page');

//     document.querySelector('#News').classList.toggle('display_none');
//     document.querySelector('#News').classList.toggle('pos_init');
//     document.querySelector('#News').classList.toggle('active_page');

//     if (active_page.id !== 'News') {
//         active_page.classList.remove('pos_init');
//         active_page.classList.remove('active_page');
//         active_page.classList.remove('blure');
//         active_page.classList.add('display_none');
//         if (cat_men_cl.contains('not_on_display') == false || seas_men_cl.contains('not_on_display') == false) {
//             document.querySelector('#News').classList.add('blure');
//         }
//     } else if (no_desk.length === 0) {
//         document.querySelector('#Home').classList.add('pos_init');
//         document.querySelector('#Home').classList.add('active_page');
//         document.querySelector('#Home').classList.remove('display_none');
//     }
// }

// document.getElementById('Payment_page').onclick = () => {
//     let active_page = document.getElementsByClassName('active_page')[0];
//     let no_desk = document.getElementsByClassName('active_page');

//     document.querySelector('#Payment_delivery').classList.toggle('display_none');
//     document.querySelector('#Payment_delivery').classList.toggle('pos_init');
//     document.querySelector('#Payment_delivery').classList.toggle('active_page');

//     if (active_page.id !== 'Payment_delivery') {
//         active_page.classList.remove('pos_init');
//         active_page.classList.remove('active_page');
//         active_page.classList.remove('blure');
//         active_page.classList.add('display_none');
//         if (cat_men_cl.contains('not_on_display') == false || seas_men_cl.contains('not_on_display') == false) {
//             document.querySelector('#Payment_delivery').classList.add('blure');
//         }
//     } else if (no_desk.length === 0) {
//         document.querySelector('#Home').classList.add('pos_init');
//         document.querySelector('#Home').classList.add('active_page');
//         document.querySelector('#Home').classList.remove('display_none');
//     }
// }

// document.getElementById('Contacts_page').onclick = () => {
//     let active_page = document.getElementsByClassName('active_page')[0];
//     let no_desk = document.getElementsByClassName('active_page');

//     document.querySelector('#Contakts').classList.toggle('display_none');
//     document.querySelector('#Contakts').classList.toggle('pos_init');
//     document.querySelector('#Contakts').classList.toggle('active_page');

//     if (active_page.id !== 'Contakts') {
//         active_page.classList.remove('pos_init');
//         active_page.classList.remove('active_page');
//         active_page.classList.remove('blure');
//         active_page.classList.add('display_none');
//         if (cat_men_cl.contains('not_on_display') == false || seas_men_cl.contains('not_on_display') == false) {
//             document.querySelector('#Contakts').classList.add('blure');
//         }
//     } else if (no_desk.length === 0) {
//         document.querySelector('#Home').classList.add('pos_init');
//         document.querySelector('#Home').classList.add('active_page');
//         document.querySelector('#Home').classList.remove('display_none');
//     }
// }

// document.getElementById('Cize_table_button').onclick = () => {
//     let active_page = document.getElementsByClassName('active_page')[0];
//     let no_desk = document.getElementsByClassName('active_page');

//     document.querySelector('#Size_table').classList.toggle('display_none');
//     document.querySelector('#Size_table').classList.toggle('pos_init');
//     document.querySelector('#Size_table').classList.toggle('active_page');

//     if (active_page.id !== 'Size_table') {
//         active_page.classList.remove('pos_init');
//         active_page.classList.remove('active_page');
//         active_page.classList.remove('blure');
//         active_page.classList.add('display_none');
//         if (cat_men_cl.contains('not_on_display') == false || seas_men_cl.contains('not_on_display') == false) {
//             document.querySelector('#Size_table').classList.add('blure');
//         }
//     } else if (no_desk.length === 0) {
//         document.querySelector('#Home').classList.add('pos_init');
//         document.querySelector('#Home').classList.add('active_page');
//         document.querySelector('#Home').classList.remove('display_none');
//     }
// }