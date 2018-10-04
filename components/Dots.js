import Victor from 'victor';

/* function Game(){
    // bounds
    var topLeft = new Victor(20, 470);
    var bottomRight = new Victor(900, 730);

    // => x: 10, y: 166 (one random component randomized)
    Victor(460, 600)
        .randomize(topLeft, bottomRight)
        .toObject();
}
*/

export default function Dot(){
    var topLeft = new Victor(20, 470);
    var bottomRight = new Victor(900, 730);

    var pos = Victor.fromObject(
        Victor(460, 600)
            .randomize(topLeft, bottomRight)
            .toObject()
    );

    console.log(pos);

    return `<div class="dot" style="left:${pos.x}px;top:${pos.y}px">
</div>`;
}
