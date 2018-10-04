import Victor from 'victor';
export default function MouseMove(event){
    var vec = new Victor(event.clientX, event.clientY);

    console.log('mouse location:', vec);
}
