const axios = require('axios')

export default async function handler(req, res) {
  const url = `https://v1.nocodeapi.com/elitenft/medium/${process.env.MEDIUM_API_KEY}`
  let sendData = [];

  await axios.get(url)
    .then((response) => {
        let res = response.data
        res.map((item) => {
            let sendDataObj = {
                title: item.title,
                link: item.link,
                media: item.media,
            }
            sendData.push(sendDataObj)
        })
        console.log(sendData)
    })
    .catch((e) => {
      console.log(e)
    })

    res.status(200).json(JSON.stringify(sendData))
}