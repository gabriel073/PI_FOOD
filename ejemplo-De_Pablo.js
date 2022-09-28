

const { link } = require("fs");
const { monitorEventLoopDelay } = require("perf_hooks");

let allVideoGames = [];

    for (let i = 0; i < 5; i++) {
        const { data } = await axios
            .get(`${URL}/games?key=${API_KEY}`)
            .catch((error) => res.status(400).json(error));

        const videoGames = data.results.map((game) => {
            allVideoGames.push( {
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                genres: game.genres && game.genres.map((g) => g.name).filter(g => g !=null).join(', '),
                // rating: game.rating,
                // released: game.released,
                // platforms: game.parent_platforms && game.parent_platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
            });
        });
    }



