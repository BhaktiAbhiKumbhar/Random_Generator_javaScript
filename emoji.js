const emoji=["😄","😃","🥲","🫡","😮‍💨","🥹","🫤","🤕","🫢","🫣","😵‍💫","🤒",
              "👍","👍","🍵","🍰","🤙","🍊","😦","☹️","🙍‍♂️","👪"];

const joke=["I went to the aquarium this weekend, but I didn’t stay long. There’s something fishy about that place.",
            "Why did the snail paint a giant S on his car? So when he drove by, people could say: “Look at that S car go!”",
            "Humpty Dumpty had a great fall. He said his summer was pretty good too.",
            "Justice is a dish best served cold. Otherwise, it's just water.",
            "How do you make holy water? You boil the hell out of it. ",
            "Why should you never throw grandpa's false teeth at a vehicle? You might denture car.",
            "Some people pick their nose, but I was born with mine.",
            "I used to be afraid of speed bumps. I'm trying to get over it.",
            "Why did the egg have a day off? Because it was Fryday.",
            "What is the best present? Broken drums! You can't beat them.",
            "I made song about tortilla once, now it's more like a wrap."];

const color=["#00ffff","#8a2be2","b1c675","#75c6b2","#a52a2a","#000000","#ffffff","#41cd7b","#cd419c"];

function emojiGenerator(){
    let randomemoji=Math.floor(Math.random()*emoji.length);
    console.log(randomemoji);
    document.getElementById("emoji-Generator").textContent=emoji[randomemoji];
}

function jokeGenerator(){
    let randomjokes=Math.floor(Math.random()*joke.length);
    console.log(randomjokes);
    document.getElementById("joke-Generator").textContent=joke[randomjokes];
}

function colorGenerator(){
    let randomcolors=Math.floor(Math.random()*color.length);
    console.log(randomcolors);
    document.getElementById("color-Generator").style.background=color[randomcolors];
}

