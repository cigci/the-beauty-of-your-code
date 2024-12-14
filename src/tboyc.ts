import { getSyntaxHighlight, normalizeIndentation } from './utils/syntaxHighlightUtils';
import { applyThemeStyleCodeBlockElement, applyThemeToCodeBlock, getTheme } from './utils/styleUtils';
import { metaToDict } from './utils/metaUtils';
import { addCopyButton, addTitle } from './utils/uiUtils';

const defaultTheme: string = 'vscode';
const defaultThemeMode: string = 'dark';

function processCodeBlock(section: HTMLElement) {
    const meta: NodeList | null = section.querySelectorAll('meta');
    const metaDict = metaToDict(meta);

    const themeName: string = metaDict['theme'] || defaultTheme;
    const themeMode: 'dark' | 'light' = (metaDict['themeMode'] === 'dark' || metaDict['themeMode'] === 'light') ? metaDict['themeMode'] as 'dark' | 'light' : defaultThemeMode as 'dark' | 'light';
    const theme: { [key: string]: string } = getTheme(themeName, themeMode);
    const styleMode: string = metaDict['styleMode'] || '';

    const code: HTMLElement | null = section.querySelector('code');
    if (code == null) return;

    // Skip re-formatting if the code is already formatted
    if (code.innerHTML.includes('<span')) {
        console.info("Code is already formatted. Skipping re-formatting.");
        return;
    }

    // Add title if present in meta
    const title: string = metaDict['title'] || '';
    if (title) {
        addTitle(title, section);
    }

    // Add copy button if not explicitly disabled
    if (metaDict['btn'] !== 'off') {
        const copyButtonElement = addCopyButton(code.textContent || '');
        section.appendChild(copyButtonElement);
    }

    // Normalize and highlight code
    const preCode: HTMLElement = document.createElement('pre');
    preCode.innerHTML = code.innerHTML;
    preCode.innerHTML = getSyntaxHighlight(preCode.innerHTML);
    preCode.innerHTML = normalizeIndentation(preCode.innerHTML);

    // Apply theme if not custom
    if (metaDict['theme'] !== 'custom') {
        applyThemeToCodeBlock(preCode, theme);
    }

    // Replace old code block with updated pre element
    code.outerHTML = preCode.outerHTML;

    // Apply block-level styles
    const blockWidth: string = metaDict['width'] || '100%';
    applyThemeStyleCodeBlockElement(section, blockWidth, theme, themeName, styleMode);
}

function applyCodeStyling() {
    const codeSections = document.querySelectorAll('[id="tboyc-code"]');
    codeSections.forEach(section => processCodeBlock(section as HTMLElement));
}

function update() {
    const codeSections = document.querySelectorAll('[id="tboyc-code"]');
    codeSections.forEach(section => processCodeBlock(section as HTMLElement));
}

window.addEventListener('load', function () {
    applyCodeStyling();
});

const tboyc = {
    applyCodeStyling,
    update,
};

(window as any).tboyc = tboyc;