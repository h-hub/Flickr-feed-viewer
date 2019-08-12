const feedService = require('./service');

const getRssFeed = async (req, res, next) => {
  try {
    let feedContent = await feedService.getFeedContent(req.query.tag)
    res.send(feedContent)
    next()
  } catch(e) {
    res.sendStatus(500) && next(error)
  }
}
 
module.exports = {
    getRssFeed
}
 