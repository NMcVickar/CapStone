export default function eraseDot(pos, Dot){
    document.addEventListener('click', (event) => {
        console.log('start:', pos);

        if(
            event.clientX <= pos.x + 10 &&
            event.clientX >= pos.x - 10 &&
            event.clientY <= pos.y + 10 &&
            event.clientY >= pos.y - 10
        ){
            console.log('works');

            return Dot();
        }
    });
}
