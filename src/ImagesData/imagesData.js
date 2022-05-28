const images = require.context("../assets/images/questions");

export const imageData = [
    {
        imageSrc: images("./anohana.jpg"),
        title: "Anohana",
    },
    {
        imageSrc: images("./deathNote.jpg"),
        title: "Death Note",
    },
    {
        imageSrc: images("./kiki.jpg"),
        title: "Kiki's delivery service",
    },
    {
        imageSrc: images("./ponyo.webp"),
        title: "Ponyo",
    },
    {
        imageSrc: images("./princessMononoke.jpg"),
        title: "Princess Mononoke",
    },
    {
        imageSrc: images("./spiritedAway.jpg"),
        title: "Spirited Away",
    },
    {
        imageSrc: images("./totoro.jpg"),
        title: "My neighbor Totoro",
    },
    {
        imageSrc: images("./whisperOfTheHeart.jpg"),
        title: "Whisper Of The Heart",
    },
    {
        imageSrc: images("./yourLieInApril.jpg"),
        title: "Your Lie In April",
    },
    {
        imageSrc: images("./weathering.webp"),
        title: "Weathering with you",
    },
    {
        imageSrc: images("./kaguya.jpg"),
        title: "The tail of princess Kaguya",
    },
];
