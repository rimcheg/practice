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
    button_nav.classList.add('tooltip')
    button_nav.setAttribute('data-tooltip', 'Choose a section')
    document.getElementById('input_wishlist').appendChild(input_wishlist_div);
    buttons.push("button_nav_" + value)
    inputs.push(value + "_main")

}


for (const button of buttons) {

    let btn_сl = document.getElementsByClassName('' + button)[0];
    let full = btn_сl.innerText + "_main";
    
    var myHandler = function () {
        document.querySelector('.' + full).classList.toggle('display_none');
    }
    btn_сl.addEventListener('click', myHandler, false);
};

for (const input of inputs) {
    
    let div = document.createElement('div');
    let divl = document.createElement('div');
    let divr = document.createElement('div');
    let inp = document.createElement('input');
    inp.setAttribute('type', 'text')
    inp.setAttribute('pattern', '[a-z   ]')
    let add_inp_btn = document.createElement('button');
    add_inp_btn.innerText = "+";
    let txt = document.createElement('h6')
    txt.innerText = 'WRITE' + ' ' + input + ' ' + 'MUST HAVE'
    let info_inp = document.getElementsByClassName('' + input)[0];
    
    info_inp.appendChild(txt)
    txt.classList.add('tooltip')
    txt.setAttribute('data-tooltip', 'Use onli ;')
    
    info_inp.appendChild(div)
    div.classList.add('flex', input + '_info_div')

    info_inp.appendChild(div).appendChild(divl).appendChild(inp)
    divl.classList.add('left_part', input)
    inp.classList.add(input + '_info_input')

    info_inp.appendChild(div).appendChild(divr).appendChild(add_inp_btn)
    add_inp_btn.classList.add('tooltip')
    add_inp_btn.setAttribute('data-tooltip', 'add 1 more input')
    add_inp_btn.classList.add('add_' + input + '_info_button', 'add_info_button')
        
};

a = document.getElementsByClassName('add_info_button')
for (let i = 0; i < a.length; i++) {
    const add_inp = a[i];
    add_inp.onclick = function () {
        let inp = document.createElement('input');
        let c = add_inp.closest('div').previousElementSibling;
        c.appendChild(inp)
    }
}






//////////////////////////////////////////////цікаві невдачі/////////////////////////////////////////////////

// for (const button of buttons) {

//     let btn = document.getElementsByClassName('' + button)
//     let btn_сl = document.getElementsByClassName('' + button)[0];
//     let txt = document.createElement('h2')
//     txt.innerText = 'auifajk.f'
//     let div = document.createElement('div')
//     let inp = document.createElement('input');
//     let add_inp_btn = document.createElement('button');
//     add_inp_btn.innerText = "+";
//     let one_part = (btn[0].innerText)
//     sec_part = "_main"
//     let full = one_part + sec_part
//     inp.classList.add(one_part + '_info_input')
//     add_inp_btn.classList.add('add_' + one_part + '_info_button', 'add_info_button')

//     var myHandler = function () {
//         var click = 0;
//         return function () {
//             if (click === 0) {
//                 document.querySelector('.' + full).classList.toggle('display_none')
//                 document.getElementsByClassName(full)[0].appendChild(div).appendChild(inp)
//                 document.getElementsByClassName(full)[0].appendChild(div).appendChild(add_inp_btn)
//                 // a = document.getElementsByClassName('add_' + one_part + '_info_button')[0]
//                 // console.log(a)
//             } else {
//                 document.querySelector('.' + full).classList.toggle('display_none')
//             }
//             click++;
//         }}();

//     btn_сl.addEventListener('click', myHandler, false);

// };



// (function () {
    
//     for (const button of buttons) {

//         let btn = document.getElementsByClassName('' + button)
//         let btn_сl = document.getElementsByClassName('' + button)[0];
//         let txt = document.createElement('h2')
//         txt.innerText = 'auifajk.f'
//         let div = document.createElement('div')
//         let inp = document.createElement('input');
//         let add_inp_btn = document.createElement('button');
//         add_inp_btn.innerText = "+";
//         let one_part = (btn[0].innerText)
//         sec_part = "_main"
//         let full = one_part + sec_part
//         inp.classList.add(one_part + '_info_input')
//         add_inp_btn.classList.add('add_' + one_part + '_info_button', 'add_info_button')

//         var myHandler = function () {
//             var click = 0;
//             return function () {
//                 if (click === 0) {
//                     document.querySelector('.' + full).classList.toggle('display_none')
//                     document.getElementsByClassName(full)[0].appendChild(div).appendChild(inp)
//                     document.getElementsByClassName(full)[0].appendChild(div).appendChild(add_inp_btn)
//                 } else {
//                     document.querySelector('.' + full).classList.toggle('display_none')
//                 }
//                 click++;
//             }}();

//         btn_сl.addEventListener('click', myHandler, false);

//     }})();


// let add_info_button = document.getElementsByClassName('add_' + one_part + '_info_button')
// add_info_button[0].onclick = () => {
//     document.getElementsByClassName(full)[0].appendChild(div).appendChild(inp)
//     console.log('praktice')
// }
// console.log(add_info_button.length)











