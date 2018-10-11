import Weather from './Weather';

export default function Footer(state){
    return `
<div id=footer>
    <div class="container">
        <ul>
            <li>
                <a href="tel:+16187999959">
                    Give me a call
                </a>
            </li>
            <li
            ><p>
            Send me an E-mail
                <a href="mailto:nmcvickar@aol.com"> <i class="far fa-envelope"></i>
                </a>
            </p>
            </li>
            <li>
            <p>
            Check out my GitHub Profile
                <a href="https://github.com/NMcVickar" target="_blank"> <i class="fab fa-github"></i> </a>
            </p>
          </li>
        </ul>
    </div>
</div>
`;
}
