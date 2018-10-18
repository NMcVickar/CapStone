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
export default function Blog(state){
    var repos = state.repos.map(Repo).join('');

    return `
<div id=content>
    <div class="container">
        <div class="why">
            <h3>Why Did I Decide to Make This Website</h3>
            <p>
                For the past couple of months i have been dealing with Depression and Anxiety along with other issues.
                Many of the websites I looked at that talk about these issues do so in a way that is either not
                straight-forward or confusing.
                I wanted to display my understanding of web development while also making an attempt to help people if
                i can.
                This website was not the first iteration of my project, but after several false starts I decided that
                this would be a way that I could display my knowledge in the little time I had left.
            </p>

            <br>

            <p>
                I hope that I was able to make sense of the information that i have compiled here in a way that is
                easily understandable.
                Here is a list of sources that I gathered my information from:
                <ul>
                    <li>
                        <a href="https://adaa.org/understanding-anxiety/depression">
                            https://adaa.org/understanding-anxiety/depression
                        </a>
                    </li>
                    <li>
                        <a href="https://www.nimh.nih.gov/health/statistics/major-depression.shtml">
                            https://www.nimh.nih.gov/health/statistics/major-depression.shtml
                        </a>
                    </li>
                    <li>
                        <a href="https://www.mentalhealth.gov/what-to-look-for/mood-disorders/depression">
                            https://www.mentalhealth.gov/what-to-look-for/mood-disorders/depression
                        </a>
                    </li>
                    <li>
                        <a href="<li>
                        <a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders/index.shtml">
                        https://www.nimh.nih.gov/health/topics/anxiety-disorders/index.shtml
                        </a>
                    </li>
                    </ul>
                    </p> </div> <p>Here is a Little Bit About Me and My Background:</p>
            <div span class="about">
                <ul>
                    <li>
                        What I Know
                        <ul class="dropdown">
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
                        <ul class="dropdown">
                            <li>Website Maintence</li>
                            <li>WordPress Management</li>
                            <li>Data Entry</li>
                            <li>Inventory Management</li>
                        </ul>
                    </li>

                    <li>
                        Personal Projcts
                        <ul class="dropdown">
                            <li>Server Maintence</li>
                            <li>Networking</li>
                            <li>System Assembly</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <p>Here are links to my Github Repositories.</p>
            <ol>
                ${repos}
            </ol>
        </div>
    </div>
    `;
}
