// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require('axios')

export default async function handler(req, res) {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
  let data;

  await axios.get(url)
    .then((response) => {
      data = JSON.stringify(response.data)
    })
    .catch((e) => {
      console.log(e)
    })

    res.status(200).json(data)
}
