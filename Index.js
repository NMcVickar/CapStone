import Navigo from 'navigo';
import Axios from 'axios';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import store from './store/Store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);

// Start of Render Function
function render(state) {
    var state = store.getState();

    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Header(state)}
            ${Content(state)}
            ${Footer(state)}
        `;

    $('.carousel').carousel();
}

// End or Render Function

function handelNavigation(activePage) {
    store.dispatch((state) => Object.assign(state, { 'active': activePage }));
}

router
    .on('/:page', (params) => handelNavigation(params.page))
    .on('/', () => handelNavigation('Home'))
    .resolve();

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


store.addStateListener(render);
