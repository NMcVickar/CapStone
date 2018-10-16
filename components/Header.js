export default function Header(state){
    var title = state[state.active].title;

    return `
<div id="header">
  <div class="container">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://c1.staticflickr.com/1/920/27657180358_9d1bfb33fe_b.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://svgsilh.com/svg_v2/1462088.svg">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://svgsilh.com/svg/1337383.svg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</div>
`;
}

//     return `
// <div id="header">
//     <div class="container">
//         <h1>${title}</h1>
//         <img src="https://lh3.googleusercontent.com/rDWANKL8svn89tlBt7IiZPdi3LTxeoEBoNOaOnoYnOeMWloYNIqbE7ab8pd1Msb1ll7aq2eQ5AGtHYNFD-Lki4_S9MMT7YP_MNbW8MUZHNCJSI3H082VEiuzdeXWr7dIqR4aC3NOR11PEvIj4j46z3meHNdu7RlABvADiJR7i6vw-e9rctcmhoYmZ8z-x0UYLREe7j4xr6U8LBWpNg81I20gyBiRudCN-1AizqnkgsD-6rCwWh5UM6V8zF0QYXL7MPDvvp4f1I93JQ9s127EuFj6pKFNKLi8FEifUUc2ckm2oCK6CB51xIiXPb-6E0Iq3-KAbkRUXrfOni4EXKL2KNeynrhFGUBxfP2P4eCexjrnHsQrKJxC_9V2v3J2q5acvw6cSzyL7sK0eY-DJJyKnA5vn3qx5HNX9FnhCxevQKomRmiAEQ4oGeElTmFEYAD3ISrIC2DUNocayLsHwk9z0fi4GqXguxYUCrDAAds4U94fd6xuP0v20O8oWxPo4ZucsT0-5zh0ZCM91T2m0h0_9n7RiqliByRTTTeN6KxwtEUenKM8gFA6a-3BgmGheq-Ekta_0RMrMFDvPt8w33XgwqE6WoLhU4zGc_Pj_lcW=w488-h428-no"
//             alt="My Face">
//         <span class="me">Welcome to my Portfolio Site.</span>
//         <p class="me">My name is Nicholas and I have built this site to display my knowlwdge of web-development. This web-site was built initially using HTML5 and was converted to JavaScript. All styles are set using SCSS with fonts imported from Google Fonts and icons from Font Awsome</p>
//             <div id="greeting"></div>
//     </div>
// </div>
// `;
