const feedService = require('./service');

const getRssFeed = async (req, res, next) => {
  try {
    let feedContent = await feedService.getFeedContent()
    res.send(feedContent)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}
 
module.exports = {
    getRssFeed
}
 