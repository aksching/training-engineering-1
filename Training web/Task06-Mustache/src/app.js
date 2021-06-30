let content = {
    items: [
        {
            name: "Chuck Norris Bodyguards",
            image: "images/image.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.",
            price: "Desde: $15 / 12 horas"
        },
        {
            name: "Chuck Norris Bodyguards",
            image: "images/image.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.",
            price: "Desde: $15 / 12 horas"
        },
        {
            name: "Chuck Norris Bodyguards",
            image: "images/image.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.",
            price: "Desde: $15 / 12 horas"
        }

    ]
}
function loadInfo() {
    let template = document.getElementById("template").innerHTML;
    let rendered = Mustache.render(template, content);
    document.getElementById('grid').innerHTML = rendered;
}