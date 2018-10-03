// import Greeting from '../../js/greeting';
import { capitalize, kebabCase } from 'lodash';

function Repo(repo) {
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

export default function(state) {
	var repos = state.repos.map(Repo).join('');

	return `
<div id=content>
    <div class="container">
        <p>Here is a Little Bit About Me and My Background.</p>
        <div span class="about">
            <ul>
                <li>
                    What I Know
                    <ul class ="dropdown">
                        <li>Robotics C & C++</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                        <li>JSON</li>
                        <li>Web API</li>
                    </ul>
                </li>

                <li>
                    Experience
                    <ul class = "dropdown">
                        <li>Website Maintence</li>
                        <li>WordPress Management</li>
                        <li>Data Entry</li>
                        <li>Inventory Management</li>
                    </ul>
                </li>
                
                <li>
                    Personal Projcts
                    <ul class = "dropdown">
                        <li>Server Maintence</li>
                        <li>Networking</li>
                        <li>System Assembly</li>
                    </ul>
                </li>
            </ul>
        </div>
        <ol>
        ${repos}
        </ol>
    </div>
</div>
`;
}
// Greeting();
