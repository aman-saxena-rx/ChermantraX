// --- MOVIE DATABASE ---
// Edit this list to change movies, posters, or links.
// For the 'poster', you can use any image URL.
// For the 'link', use your .mp4 file link.

const movieData = [
    {
        name: "The Shawshank Redemption",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        link: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        name: "The Godfather",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        link: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
        name: "The Dark Knight",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg", // Placeholder
        link: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    },
    {
        name: "Pulp Fiction",
        poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        link: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
        name: "Inception",
        poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        link: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    { name: "Fight Club", poster: "https://via.placeholder.com/300x450?text=Fight+Club", link: "" },
    { name: "Forrest Gump", poster: "https://via.placeholder.com/300x450?text=Forrest+Gump", link: "" },
    { name: "The Matrix", poster: "https://via.placeholder.com/300x450?text=The+Matrix", link: "" },
    { name: "Lord of the Rings", poster: "https://via.placeholder.com/300x450?text=LOTR", link: "" },
    { name: "Star Wars", poster: "https://via.placeholder.com/300x450?text=Star+Wars", link: "" },
    { name: "Interstellar", poster: "https://via.placeholder.com/300x450?text=Interstellar", link: "" },
    { name: "Parasite", poster: "https://via.placeholder.com/300x450?text=Parasite", link: "" },
    { name: "Avengers: Endgame", poster: "https://via.placeholder.com/300x450?text=Avengers", link: "" },
    { name: "Joker", poster: "https://via.placeholder.com/300x450?text=Joker", link: "" },
    { name: "Spider-Man", poster: "https://via.placeholder.com/300x450?text=Spider-Man", link: "" },
    { name: "The Lion King", poster: "https://via.placeholder.com/300x450?text=Lion+King", link: "" },
    { name: "Titanic", poster: "https://via.placeholder.com/300x450?text=Titanic", link: "" },
    { name: "Jurassic Park", poster: "https://via.placeholder.com/300x450?text=Jurassic+Park", link: "" },
    { name: "Avatar", poster: "https://via.placeholder.com/300x450?text=Avatar", link: "" },
    { name: "Gladiator", poster: "https://via.placeholder.com/300x450?text=Gladiator", link: "" },
    { name: "The Departed", poster: "https://via.placeholder.com/300x450?text=The+Departed", link: "" },
    { name: "Whiplash", poster: "https://via.placeholder.com/300x450?text=Whiplash", link: "" },
    { name: "The Prestige", poster: "https://via.placeholder.com/300x450?text=The+Prestige", link: "" },
    { name: "Memento", poster: "https://via.placeholder.com/300x450?text=Memento", link: "" },
    { name: "Se7en", poster: "https://via.placeholder.com/300x450?text=Se7en", link: "" },
    { name: "Coco", poster: "https://via.placeholder.com/300x450?text=Coco", link: "" },
    { name: "Wall-E", poster: "https://via.placeholder.com/300x450?text=Wall-E", link: "" },
    { name: "Toy Story", poster: "https://via.placeholder.com/300x450?text=Toy+Story", link: "" },
    { name: "Alien", poster: "https://via.placeholder.com/300x450?text=Alien", link: "" },
    { name: "Psycho", poster: "https://via.placeholder.com/300x450?text=Psycho", link: "" },
    { name: "The Shining", poster: "https://via.placeholder.com/300x450?text=The+Shining", link: "" },
    { name: "Goodfellas", poster: "https://via.placeholder.com/300x450?text=Goodfellas", link: "" },
    { name: "Braveheart", poster: "https://via.placeholder.com/300x450?text=Braveheart", link: "" },
    { name: "Reservoir Dogs", poster: "https://via.placeholder.com/300x450?text=Reservoir+Dogs", link: "" },
    { name: "Logan", poster: "https://via.placeholder.com/300x450?text=Logan", link: "" },
    { name: "Mad Max: Fury Road", poster: "https://via.placeholder.com/300x450?text=Mad+Max", link: "" },
    { name: "1917", poster: "https://via.placeholder.com/300x450?text=1917", link: "" },
    { name: "Ford v Ferrari", poster: "https://via.placeholder.com/300x450?text=Ford+v+Ferrari", link: "" },
    { name: "Dune", poster: "https://via.placeholder.com/300x450?text=Dune", link: "" },
    { name: "Oppenheimer", poster: "https://via.placeholder.com/300x450?text=Oppenheimer", link: "" },
    { name: "Barbie", poster: "https://via.placeholder.com/300x450?text=Barbie", link: "" },
    { name: "Top Gun: Maverick", poster: "https://via.placeholder.com/300x450?text=Top+Gun", link: "" },
    { name: "Everything Everywhere", poster: "https://via.placeholder.com/300x450?text=Everything+Everywhere", link: "" },
    { name: "Get Out", poster: "https://via.placeholder.com/300x450?text=Get+Out", link: "" },
    { name: "Black Panther", poster: "https://via.placeholder.com/300x450?text=Black+Panther", link: "" },
    { name: "Frozen", poster: "https://via.placeholder.com/300x450?text=Frozen", link: "" },
    { name: "Moana", poster: "https://via.placeholder.com/300x450?text=Moana", link: "" },
    { name: "Zootopia", poster: "https://via.placeholder.com/300x450?text=Zootopia", link: "" },
    { name: "Inside Out", poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg", link: "" },
    { name: "Up", poster: "https://via.placeholder.com/300x450?text=Up", link: "" },
    { name: "Ratatouille", poster: "https://via.placeholder.com/300x450?text=Ratatouille", link: "" },
    { name: "Finding Nemo", poster: "https://via.placeholder.com/300x450?text=Finding+Nemo", link: "" },
    { name: "The Incredibles", poster: "https://via.placeholder.com/300x450?text=The+Incredibles", link: "" },
    { name: "Iron Man", poster: "https://via.placeholder.com/300x450?text=Iron+Man", link: "" },
    { name: "Thor", poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg", link: "" }
];