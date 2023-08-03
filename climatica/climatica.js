// on Site toogles



document.getElementById('On_click_seazon').onclick = () => {

    let home_cl = document.getElementById('Home').classList;
    let cat_men_cl = document.getElementById('Open_menu_catalog').classList;
    let y = cat_men_cl[1];

    document.querySelector('#Open_menu_seazon').classList.toggle('not_on_display');
    document.querySelector('#On_click_seazon').classList.toggle('active_link');
    document.querySelector('.season_img').classList.toggle('display_none');
    document.querySelector('#Open_menu_catalog').classList.add('not_on_display');
    document.querySelector('#On_click_catalog').classList.remove('active_link');
    document.querySelector('.catalog_img').classList.add('display_none');

    if (home_cl.length === 0 && y === 'not_on_display') {

        document.querySelector('#Home').classList.add('blure');
        document.querySelector('#Catalog').classList.add('blure');
        document.querySelector('#card').classList.add('blure');
        document.querySelector('#News').classList.add('blure');
        document.querySelector('#News_article').classList.add('blure');
        document.querySelector('#Payment_delivery').classList.add('blure');
        document.querySelector('#Contakts').classList.add('blure');
        document.querySelector('#About_company').classList.add('blure');
        document.querySelector('#Partners').classList.add('blure');
        document.querySelector('#Search').classList.add('blure');
        document.querySelector('#Search_not_found').classList.add('blure');
        document.querySelector('#FAQ').classList.add('blure');
        document.querySelector('#Size_table').classList.add('blure');
        document.querySelector('#Size_table_without_women').classList.add('blure');
        document.querySelector('#Thank_you_page').classList.add('blure');
        document.querySelector('#Error_404').classList.add('blure');

    } else if (home_cl.length === 1 && y === 'not_on_display') {

        document.querySelector('#Home').classList.remove('blure');
        document.querySelector('#Catalog').classList.remove('blure');
        document.querySelector('#card').classList.remove('blure');
        document.querySelector('#News').classList.remove('blure');
        document.querySelector('#News_article').classList.remove('blure');
        document.querySelector('#Payment_delivery').classList.remove('blure');
        document.querySelector('#Contakts').classList.remove('blure');
        document.querySelector('#About_company').classList.remove('blure');
        document.querySelector('#Partners').classList.remove('blure');
        document.querySelector('#Search').classList.remove('blure');
        document.querySelector('#Search_not_found').classList.remove('blure');
        document.querySelector('#FAQ').classList.remove('blure');
        document.querySelector('#Size_table').classList.remove('blure');
        document.querySelector('#Size_table_without_women').classList.remove('blure');
        document.querySelector('#Thank_you_page').classList.remove('blure');
        document.querySelector('#Error_404').classList.remove('blure');
    }
}

document.getElementById('On_click_catalog').onclick = () => {

    let home_cl = document.getElementById('Home').classList;
    let seas_men_cl = document.getElementById('Open_menu_seazon').classList;
    let y = seas_men_cl[1];

    document.querySelector('#Open_menu_catalog').classList.toggle('not_on_display');
    document.querySelector('#On_click_catalog').classList.toggle('active_link');
    document.querySelector('.catalog_img').classList.toggle('display_none');
    document.querySelector('#Open_menu_seazon').classList.add('not_on_display');
    document.querySelector('#On_click_seazon').classList.remove('active_link');
    document.querySelector('.season_img').classList.add('display_none');

    if (home_cl.length === 0 && y === 'not_on_display') {

        document.querySelector('#Home').classList.add('blure');
        document.querySelector('#Catalog').classList.add('blure');
        document.querySelector('#card').classList.add('blure');
        document.querySelector('#News').classList.add('blure');
        document.querySelector('#News_article').classList.add('blure');
        document.querySelector('#Payment_delivery').classList.add('blure');
        document.querySelector('#Contakts').classList.add('blure');
        document.querySelector('#About_company').classList.add('blure');
        document.querySelector('#Partners').classList.add('blure');
        document.querySelector('#Search').classList.add('blure');
        document.querySelector('#Search_not_found').classList.add('blure');
        document.querySelector('#FAQ').classList.add('blure');
        document.querySelector('#Size_table').classList.add('blure');
        document.querySelector('#Size_table_without_women').classList.add('blure');
        document.querySelector('#Thank_you_page').classList.add('blure');
        document.querySelector('#Error_404').classList.add('blure');

    }   else if (home_cl.length === 1 && y === 'not_on_display') {

        document.querySelector('#Home').classList.remove('blure');
        document.querySelector('#Catalog').classList.remove('blure');
        document.querySelector('#card').classList.remove('blure');
        document.querySelector('#News').classList.remove('blure');
        document.querySelector('#News_article').classList.remove('blure');
        document.querySelector('#Payment_delivery').classList.remove('blure');
        document.querySelector('#Contakts').classList.remove('blure');
        document.querySelector('#About_company').classList.remove('blure');
        document.querySelector('#Partners').classList.remove('blure');
        document.querySelector('#Search').classList.remove('blure');
        document.querySelector('#Search_not_found').classList.remove('blure');
        document.querySelector('#FAQ').classList.remove('blure');
        document.querySelector('#Size_table').classList.remove('blure');
        document.querySelector('#Size_table_without_women').classList.remove('blure');
        document.querySelector('#Thank_you_page').classList.remove('blure');
        document.querySelector('#Error_404').classList.remove('blure');
    }
}
