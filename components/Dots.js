import Victor from 'victor';

function Game(){
    // bounds
    var topLeft = new Victor(20, 470);
    var bottomRight = new Victor(900, 730);

    // => x: 10, y: 166 (one random component randomized)
    return Victor(460, 600)
        .randomizeAny(topLeft, bottomRight)
        .toObject();
}

export default function Dot(){
    var coordinates = Game();
    // var vec = new Victor(event.clientX, event.clientY);
    // console.log(coordinates);

    return `
<div class="dot" style="top:${coordinates.y}px;right:${coordinates.x}px">
</div>
`;
}

// track mouse

// //export default function OnMouseMove(event){
//     var vec = new Victor(event.clientX, event.clientY);

//     console.log('mouse location:', vec)
