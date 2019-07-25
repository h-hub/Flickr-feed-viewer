const Parser = require('rss-parser');
const parser = new Parser();

const getFeedContent = async () => {
    try {
        let feed = await parser.parseURL('https://www.reddit.com/.rss');
        return feed;
    } catch (e) {
        throw new Error(e.message)
    }
};

module.exports = {
    getFeedContent
}
