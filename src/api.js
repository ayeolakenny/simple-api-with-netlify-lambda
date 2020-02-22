const serverless = require('serverless-http'), 
      express    = require('express'),
      app        = express();

      const router = express.Router()

    router.get('/', (req, res)=>{
        let data = {
            movieDb: [
                {
                    id: "1",
                    title: "Game Of Thrones",
                    genre: "Fantasy/Serial drama",
                    rating: "93%",
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Game_of_Thrones_title_card.jpg/250px-Game_of_Thrones_title_card.jpg",
                    desc: "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones. The show was both produced and filmed in Belfast and elsewhere in the United Kingdom."
                },
                {
                    id: "2",
                    title: "Godzilla",
                    genre: "Fantasy/Sci-Fi",
                    rating: "91%",
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Godzilla_%E2%80%93_King_of_the_Monsters_%282019%29_poster.png/220px-Godzilla_%E2%80%93_King_of_the_Monsters_%282019%29_poster.png",
                    desc: "Godzilla: King of the Monsters[a] is a 2019 American monster film directed by Michael Dougherty and co-written by Dougherty with Zach Shields. A sequel to Godzilla (2014), it is the 35th film in the Godzilla franchise, the third film in Legendary's MonsterVerse, and the third Godzilla film to be completely produced by a Hollywood studio."
                },
                {
                    id: "3",
                    title: "The Originals",
                    genre: "Horror",
                    rating: "97%",
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/The_Originals_intertitle.png/250px-The_Originals_intertitle.png",
                    desc: "The Originals is an American fantasy supernatural drama television series that began airing on The CW on October 3, 2013. Created as a spin-off of The Vampire Diaries."
                },
                {
                    id: "4",
                    title: "Black Panther",
                    genre: "Fantasy/Sci-Fi",
                    rating: "91%",
                    image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Black_Panther_film_poster.jpg",
                    desc: "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the eighteenth film in the Marvel Cinematic Universe (MCU)."
                },
                {
                    id: "5",
                    title: "Walking Dead",
                    genre: "Horror",
                    rating: "94%",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/The_Walking_Dead_2010_logo.svg/250px-The_Walking_Dead_2010_logo.svg.png",
                    desc: "The Walking Dead is an American post-apocalyptic horror television series for AMC based on the comic book series by Robert Kirkman, Tony Moore, and Charlie Adlard. The series features a large ensemble cast as survivors of a zombie apocalypse, trying to stay alive under near-constant threat of attacks from the mindless zombies, colloquially known as 'walkers'."
                },
                {
                    id: "6",
                    title: "Avengers End Game",
                    genre: "Fantasy/Sci-Fi",
                    rating: "95%",
                    image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
                    desc: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to 2012's The Avengers, 2015's Avengers: Age of Ultron, and 2018's Avengers: Infinity War, and the twenty-second film in the Marvel Cinematic Universe (MCU)."
                }
            ]
        }
        res.send(JSON.stringify(data));
    });

    app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);      