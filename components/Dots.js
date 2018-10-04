import Victor from 'victor';

function Game(){
    // bounds
    var topLeft = new Victor(20, 470);
    var bottomRight = new Victor(900, 730);

    // => x: 10, y: 166 (one random component randomized)
    Victor(460, 600)
        .randomize(topLeft, bottomRight)
        .toObject();
}

export default function Dot(){
    var topLeft = new Victor(20, 470);
    var bottomRight = new Victor(900, 730);
    //    var coordinates = Game();
    var pos = Victor.fromObject(
        Victor(460, 600)
            .randomize(topLeft, bottomRight)
            .toObject()
    );

    return `<div class="dot" style="top:${pos.y}px;right:${pos.x}px">
</div>`;
}
