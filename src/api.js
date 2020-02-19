const serverless = require('serverless-http'), 
      express    = require('express'),
      app        = express();

      const router = express.Router()

    router.get('/', (req, res)=>{
        let data = [
            {
                "name": "Andil",
                "country": "South Africa",
                "profession" : {
                    "profession1" : "Teacher",
                    "profession2" : "Programmer"
                }
            },
            {
                "name": "Kenny",
                "country": "Nigeria",
                "profession" : {
                    "profession1" : "Teacher",
                    "profession2" : "random"
                }
            },
            {
                "name": "Scott",
                "country": "USA",
                "profession" : {
                    "profession1" : "plumber",
                    "profession2" : "Programmer"
                }
            },
            {
                "name": 'tejas',
                "country": "Germany",
                "profession" : {
                    "profession1" : "Teacher",
                }
            }
        ]
        res.send(JSON.stringify(data));
    });

    app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);      