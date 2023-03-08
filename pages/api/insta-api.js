const axios = require('axios')

export default async function handler(req, res) {
    const url = `https://v1.nocodeapi.com/elitenft/instagram/${process.env.INSTA_API_KEY}`
    let sendData = [];

    await axios.get(url, {
        params: {
            limit: 5,
        }
    })
        .then((response) => {
            let res = response.data.data
            let sendDataObj = {}
            res.map((item) => {
                var regexp = /\#\w\w+\s?/g
                if (item.media_type === "VIDEO") {
                    sendDataObj = {
                        thumbnail: item.thumbnail_url,
                        link: item.permalink,
                        caption: (item.caption.replace(regexp, '')).split('.').join(""),
                    }

                    sendData.push(sendDataObj)
                }
            })

        })
        .catch((e) => {
            console.log(e)
        })

    res.status(200).json(JSON.stringify(sendData))
}