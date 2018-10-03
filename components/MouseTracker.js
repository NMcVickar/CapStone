import Victor from 'victor';
export default function OnMouseMove(event){
    var vec = new Victor(event.clientX, event.clientY);

    console.log('mouse location:', vec);
}
