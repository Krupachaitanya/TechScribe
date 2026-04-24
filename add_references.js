import fs from 'fs';

let content = fs.readFileSync('./src/data/courses.js', 'utf8');

// Only add references if they don't already exist
if (!content.includes('references: [')) {
    content = content.replace(/chapter: '(.*?)',/g, (match, chapterTitle) => {
        // Remove leading numbers like "1. " or "10. "
        let cleanTitle = chapterTitle.replace(/^[0-9\.\s]+/, '');
        let query = encodeURIComponent(cleanTitle);
        
        let referencesStr = `references: [\n          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+${query}' },\n          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+${query}' }\n        ],`;
        
        return `${match}\n        ${referencesStr}`;
    });

    fs.writeFileSync('./src/data/courses.js', content);
    console.log('Successfully injected references into courses.js');
} else {
    console.log('References already exist in courses.js');
}
