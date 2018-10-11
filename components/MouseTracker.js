import Victor from 'victor';
export default function MouseMove(event){
    var vec = new Victor(event.clientX, event.clientY);

    console.log('mouse location:', vec);

    return `<div class="dot" style="left:${vec.x}px;top:${vec.y}px" />`;
}
