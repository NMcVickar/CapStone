import Weather from './Weather';


export default function Footer(state) {
    return `
<div id=footer>
    <div class="container">
        <ul>
            <li>
                <a href="tel:+16187999959">
                    Give me a call
                </a>
            </li>
            <li>
                <a href="mailto:nmcvickar@aol.com"> Email me </a>
            </li>
            <li>
                <a href="https://github.com/NMcVickar" target="_blank"> <i class="fab fa-github"></i> </a>
            </li>
            <li>
            ${Weather(state.Weather)}
            </li>
        </ul>
    </div>
</div>
`;
}