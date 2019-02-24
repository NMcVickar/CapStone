export default function Weather(weather){
    var list = '';

    if(weather.main){
        list = `
    <div>
        <h3><strong>Temperature</strong>:${weather.main.temp}K</h3>
        <h3><strong>Description</strong>: ${weather.weather[0].description}</h3>
    </div>
`;
    }

    return `
<div>
<h3>This is Weather:</h3>
${list}
</div>
`;
}
