const Parser = require('rss-parser');
const parser = new Parser();

const getFeedContent = async (tag) => {
    try {
        let feed = await parser.parseURL('https://api.flickr.com/services/feeds/photos_public.gne?tags='+tag);
        return feed;
    } catch (e) {
        throw new Error(e.message)
    }
};

module.exports = {
    getFeedContent
}
