export interface Feed {
    items: Item[];
    link: string;
    feedUrl: string;
    title: string;
    lastBuildDate: string;
}

interface Item {
    title: string;
    link: string;
    pubDate: string;
    author: string;
    content: string;
    contentSnippet: string;
    id: string;
    isoDate: string;
}