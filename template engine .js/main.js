const nav_templates = ['header', 'content', 'footer'];
let buttons = [];
let inputs = [];

for (value of nav_templates) {

    let button_nav = document.createElement('button');
    button_nav.innerText = value;
    button_nav.classList.add("button_nav", "button_nav_" + value);
    let input_wishlist_div = document.createElement('div');
    input_wishlist_div.classList.add(value + "_main", "display_none");
    document.getElementById('nav_template').appendChild(button_nav);
    document.getElementById('input_wishlist').appendChild(input_wishlist_div);
    buttons.push("button_nav_" + value)
    inputs.push(value + "_main")

}

(function () {

    for (const button of buttons) {

        let btn = document.getElementsByClassName('' + button)
        let btn_сl = document.getElementsByClassName('' + button)[0];
        var myHandler = function () {

            var click = 0;
            return function () {

                inp = document.createElement('input');
                add_inp_btn = document.createElement('button');
                add_inp_btn.innerText = "+";
                one_part = (btn[0].innerText)
                sec_part = "_main"
                full = one_part + sec_part
                inp.classList.add(one_part + '_info_input')
                add_inp_btn.classList.add('add_' + one_part + '_info_button')
                if (click === 0) {
                    document.querySelector('.' + full).classList.toggle('display_none')
                    document.getElementsByClassName(full)[0].appendChild(inp)
                    document.getElementsByClassName(full)[0].appendChild(add_inp_btn)
                } else {
                    document.querySelector('.' + full).classList.toggle('display_none')                    
                }
                click++;

            }}();
        btn_сl.addEventListener('click', myHandler, false);
        
    }})();
