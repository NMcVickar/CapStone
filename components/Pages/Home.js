// import Greeting from '../../js/greeting';
import { capitalize, kebabCase } from 'lodash';

function Repo(repo){
    var name = kebabCase(repo.name)
        .split('-')
        .map(capitalize)
        .join(' ');

    return `
    <li>
    <a href="${repo.url}"> ${name}</a>
    </li>
    `;
}

export default function(state){}
// Greeting();
