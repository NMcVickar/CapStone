import Weather from './Weather';

export default function Footer(state){
    return `
<div id=footer>
    <div class="container">
        <ul>
            <li>
                <a href="mailto:nmcvickar@aol.com"> Send me an E-mail <i class="far fa-envelope"></i>
                </a>
            </li>
            <li>
                <a href="https://github.com/NMcVickar" target="_blank"> Check out my GitHub Profile <i class="fab fa-github"></i> </a>
          </li>
        </ul>
    </div>
</div>
`;
}
