import Navigo from 'navigo';
import Axios from 'axios';
import Victor from 'victor';
import Navigation from './components/Navigation';
import Game from './components/Dots';
import Tracker from './components/MouseTracker';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import store from './store/Store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);

// The vars below are for the dropdown lits
var tog = [ true, true, true ];
var visibility = [ 'block', 'block', 'block' ];
var about;
var dropdown;
// End of Dropdown Vars

// Function for showing and hiding "About Me" lists
function show(event){
    tog[event.target.value] = !tog[event.target.value];
    visibility[event.target.value] === 'none'
        ? (visibility[event.target.value] = 'block')
        : (visibility[event.target.value] = 'none');
}
// end of Function

// Start of Render Function
function render(state){
    var state = store.getState();

    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Header(state)}
			${Content(state)}
			${Game(state)}
            ${Footer(state)}
        `;

    // greeter.render(root);

    // Setting an element to a class
    // document.querySelector('h1').addEventListener('click',(event) => {
    //     var animation = tween();
    //     var title = styler(event.target);

    //     animation.start((value) => title.set(value));
    // });

    // Setting Dropdown Lists values
    about = document.querySelectorAll('.about>ul>li');
    dropdown = document.querySelectorAll('.dropdown');
    for(let i = 0; i < about.length; i++){
        let li = about[i];

        let drop = dropdown[i];

        li.value = i;

        li.addEventListener('click', (event) => {
            drop.style.display = visibility[i];
            show(event);
        });
    }
    // End of Dropdown set

    Game();
    var vec = new Victor(event.clientX, event.clientY);

    console.log('mouse location:', vec);

    router.updatePageLinks();
}

// End or Render Function

function handelNavigation(activePage){
    store.dispatch((state) => Object.assign(state, { 'active': activePage }));
}

router
    .on('/:page', (params) => handelNavigation(params.page))
    .on('/', () => handelNavigation('Home'))
    .resolve();

Axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    store.dispatch((state) => {
        state.posts = response.data;

        return state;
    });
});

Axios.get(
    'https://api.openweathermap.org/data/2.5/weather?q=Belleville,62223&APPID=94f1c8fc237e5c6513b5c800e4c67e16'
).then((response) => {
    store.dispatch((state) => {
        state.Weather = response.data;

        return state;
    });
});

Axios.get('https://api.github.com/users/nmcvickar/repos', {
    'Headers': {
        Authorization: `token ${process.env.GITHUB_API_KEY}`, //eslint-disable-line
    },
}).then((response) => {
    store.dispatch((state) => {
        state.repos = response.data;

        return state;
    });
});

console.log(Game());
store.dispatch((state) => {
    state.Dots;

    return state;
});

// if(vec == g){
//     store.dispatch((state) => {
//         state.Dots;

//         return state;
//     });
// }

store.addStateListener(render);
