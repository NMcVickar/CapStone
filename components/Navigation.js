function Link(link){
    var href = '';

    if(link !== 'Home'){
        href = link;
    }

    return `
      <li>
        <a href="/${href}" data-navigo>${link}</a>
      </li>    
    `;
}

export default function Navigation(state){
    var links = state.links.reduce((acc, link) => (acc += Link(link)), '');

    return `
<div id="navigation">
    <ul class="container">
   ${links}
    </ul>
</div>
`;
}
