const Parser = require('rss-parser');
const parser = new Parser();

const getFeed = async () => {
    try {
        let feed = await parser.parseURL('https://www.reddit.com/.rss');
        return feed.title;
    } catch (e) {
        throw new Error(e.message)
    }
};

module.exports = {
    getFeed
}
