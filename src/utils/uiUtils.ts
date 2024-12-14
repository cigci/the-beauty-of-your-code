import { normalizeIndentation } from "./syntaxHighlightUtils";

export function addCopyButton(code: string): HTMLElement {
    const copyButtonElement: HTMLElement = document.createElement('button');
    copyButtonElement.textContent = 'Copy to Clipboard';

    // Function to copy text to the clipboard
    function copyToClipboard(text: string): void {
        navigator.clipboard.writeText(text)
            .then(() => {
                copyButtonElement.textContent = 'Copied!';
                setTimeout(() => copyButtonElement.textContent = 'Copy to Clipboard', 1000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    }

    // Add event listener to the button
    copyButtonElement.addEventListener('click', () => {
        copyToClipboard(normalizeIndentation(code));
    });

    return copyButtonElement;
}

export function addTitle(text: string, codeSection: HTMLElement): HTMLElement {
    const titelHtmlElement: HTMLElement = document.createElement('div')
    titelHtmlElement.textContent = text;
    codeSection.insertBefore(titelHtmlElement, codeSection.firstChild);
    return titelHtmlElement;
}