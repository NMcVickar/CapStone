import Victor from 'victor';

export default function Background(){
    var height = document.getElementById('root').offsetHeight;
    var width = document.getElementById('root').offsetWidth;
    var random =
        '#' +
        (
            '000000' +
            Math.random()
                .toString(16)
                .slice(2, 8)
                .toUpperCase()
        ).slice(-6);

    document.body.style.backgroundColor = random;
}

/* export function Dot(){
    var topLeft = new Victor(0, 0);
    var bottomRight = new Victor(width, height);

    var pos = Victor(460, 600).randomize(topLeft, bottomRight);

    console.log('pos:', pos);

    // return pos;

    return `<div class="dot" style="left:${pos.x}px;top:${pos.y}px">
 </div>`;
}
*/

/*
  let i = 0;
    // var coords = Array();

    while(i <= 200){
        i++;
        console.log('i:', i);
        
        var x = Math.random();
        var y = Math.random();

        x *= 100;
        y *= 100;
        continue;
    }

    return `<div class="dot" style="left: ${x} px;top: ${y} px" />`;
*/
