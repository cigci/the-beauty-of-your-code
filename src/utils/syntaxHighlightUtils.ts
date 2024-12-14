import {
    keywords,
    types,
    constants,
    groupingSymbols,
    functionKeywords
} from '../tokenizers/baseTokenizer';

function getArrayStringFromString(code: string): Array<string> {
    // This function uses regular expressions to identify different types of tokens:
    // 1. Strings in quotes: "double quotes", 'single quotes', or `backticks`
    // 2. Line comments (//...) or block comments (/*...*/)
    // 3. Words: keywords, types, variable names, etc.
    // 4. Dot-prefixed words (attributes): ".attribute"
    // 5. Whitespace
    // 6. Symbols (punctuation, operators, etc.)
    // Returns an array of tokens found in the code or an empty array if none are found.
    return code.match(/(["'`])(?:(?=(\\?))\2.)*?\1|\/\/.*|\/\*[\s\S]*?\*\/|\b\w+\b|\.\w+|[\s]+|[^\s\w]/g) || [];
}

function tokenizeAndHighlightKeywords(tokens: Array<string>): string {
    return tokens.map((token) => { // Maps (processes) each token in the array individually
        // 1. Checks if token is a string: Starts and ends with " ' or `
        if (/^["'`].*["'`]$/.test(token.toLowerCase())) {
            return `<span class="tboyc-string">${token}</span>`
        }
        // 2. Checks if token is a comment (either // or /* */)
        else if (/^\/\/.*|\/\*[\s\S]*?\*\/$/.test(token.toLowerCase())) {
            return `<span class="tboyc-comment">${token}</span>`;
        }
        // 3. Checks if token is an attribute (e.g., starts with a dot, like ".attributeName")
        else if (/^\.\w+$/.test(token.toLowerCase())) {
            return `<span class="tboyc-attribute">${token}</span>`;
        }
        // 4. Checks if token is a keyword (from the imported keywords set)
        else if (keywords.has(token.toLowerCase())) {
            return `<span class="tboyc-keyword">${token}</span>`;
        }
        // 5. Checks if token is a type (from the imported types set)
        else if (types.has(token.toLowerCase())) {
            return `<span class="tboyc-type">${token}</span>`;
        }
        // 6. Checks if token is a variable name (starts with a letter or underscore, followed by letters, numbers, or underscores)
        else if (constants.has(token.toLowerCase())) {
            return `<span class="tboyc-constant">${token}</span>`;
        }
        // 7. Checks if token is a grouping symbol (e.g., parentheses, curly braces, square brackets)
        else if (groupingSymbols.has(token.toLowerCase())) {
            return `<span class="tboyc-symbol">${token}</span>`;
        }
        // 8. Checks if token is a function keyword (from the imported functionKeywords set)
        else if (functionKeywords.has(token.toLowerCase())) {
            return `<span class="tboyc-function">${token}</span>`;
        }
        // 9. Checks if token is a number
        else if (!isNaN(Number(token)) && token.trim() !== '') {
            return `<span class="tboyc-number">${token}</span>`;
        }

        return token; // Returns the token as-is if no condition matches
    }).join(''); // Joins all processed tokens into a single string for final highlighted code
}

export function getSyntaxHighlight(code: string | '', theme?: any) {
    if (code === '') {
        console.warn('getSyntaxHighlight: Code is empty');
    }
    const tokens: Array<string> = getArrayStringFromString(code);
    const highlightedCode = tokenizeAndHighlightKeywords(tokens);

    return highlightedCode;
}

export function normalizeIndentation(code: string): string {
    // Normalize indentation by finding the minimum indentation in the code
    const lines = code.split('\n');

    // Get the leading spaces of the first non-empty line
    const leadingSpaces = lines.find(line => line.trim().length > 0)?.match(/^\s*/)?.[0] || '';
    const leadingSpacesCount = leadingSpaces.length;

    // Normalize each line by removing the leading spaces
    const normalizedLines = lines.map(line => {
        return line.slice(leadingSpacesCount);
    });

    return normalizedLines.join('\n');
}