import { getAdjustedBackgroundColor } from '../utils/colorUtils';

// Themes
import { vscodeTheme } from '../themes/vscode';
import { forestTheme } from '../themes/forest';

export function applyThemeStyleCodeBlockElement(element: HTMLElement, blockWidth: string, theme?: any, themeName?: string, styleMode?: string): void {
    if (!theme || styleMode == 'off') {
        return;
    }

    element.style.position = 'relative';

    const elementPre: HTMLElement | null = element.querySelector('pre');
    const elementTitle: HTMLElement | null = element.querySelector('div');
    const elementBtn: HTMLElement | null = element.querySelector('button');

    if (!elementPre) {
        console.error('styleCodeBlockElement: Element does not contain a pre element');
        return;
    }

    if (elementTitle) {
        elementTitle.style.borderRadius = '12px 12px 0 0';

        elementTitle.style.fontFamily = 'monospace';
        elementTitle.style.fontSize = '1rem';
        elementTitle.style.lineHeight = '1.5rem';
        elementTitle.style.whiteSpace = 'pre-wrap';
        elementTitle.style.overflowWrap = 'break-word';
        elementTitle.style.display = 'block';
        elementTitle.style.width = blockWidth;
        elementTitle.style.padding = '10px';
        elementTitle.style.minHeight = '1.5rem'

        if (themeName != 'custom') {
            elementTitle.style.color = theme['text'];
            elementTitle.style.backgroundColor = theme['background'];
            elementTitle.style.backgroundColor = getAdjustedBackgroundColor(theme['background'], 0.24);
        }

        elementPre.style.borderRadius = '0 0 12px 12px';
    } else {
        elementPre.style.borderRadius = '12px';
    }

    elementPre.style.fontFamily = 'monospace';
    elementPre.style.fontSize = '1rem';
    elementPre.style.lineHeight = '1.5rem';
    elementPre.style.overflowWrap = 'break-word';
    elementPre.style.display = 'block';
    elementPre.style.width = blockWidth;
    elementPre.style.padding = '10px';
    elementPre.style.minHeight = '1.5rem'

    if (themeName != 'custom') {
        elementPre.style.color = theme['text'];
        elementPre.style.backgroundColor = theme['background'];
    }

    elementPre.style.overflowX = 'auto';
    elementPre.style.whiteSpace = 'pre';
    elementPre.style.maxWidth = '100%';

    if (elementBtn) {
        // Btn Style
        elementBtn.style.position = 'absolute';
        elementBtn.style.top = '0.5rem';
        elementBtn.style.right = '25px';
        elementBtn.style.fontSize = '1rem';
        elementBtn.style.border = 'transparent';
        elementBtn.style.borderRadius = '8px';
        elementBtn.style.cursor = 'pointer';
        elementBtn.style.backgroundColor = 'transparent';
        elementBtn.style.color = theme['text'];
        elementBtn.style.padding = '5px 10px';

        // Btn hover 
        elementBtn.addEventListener('mouseenter', () => {
            elementBtn.style.backgroundColor = theme['background'];
            elementBtn.style.color = theme['text'];
        });

        elementBtn.addEventListener('mouseleave', () => {
            elementBtn.style.backgroundColor = 'transparent';
            elementBtn.style.color = theme['text'];
        });
    }
}

export function applyThemeToCodeBlock(element: HTMLElement, theme: { [key: string]: string }): void {
    if (!theme || !theme['background'] || !theme['text']) {
        console.warn('Theme not found or incomplete.', theme);
        return;
    }

    // Apply background and text color from the theme
    element.style.backgroundColor = theme['background'];
    element.style.color = theme['text'];

    // Temporarily hold the HTML content and apply replacements
    let highlightedContent = element.innerHTML
        .replace(/<span class="tboyc-keyword">([^<]+)<\/span>/g, `<span style="color: ${theme['keyword']}">$1</span>`)
        .replace(/<span class="tboyc-variable">([^<]+)<\/span>/g, `<span style="color: ${theme['variable']}">$1</span>`)
        .replace(/<span class="tboyc-string">([^<]+)<\/span>/g, `<span style="color: ${theme['string']}">$1</span>`)
        .replace(/<span class="tboyc-number">([^<]+)<\/span>/g, `<span style="color: ${theme['number']}">$1</span>`)
        .replace(/<span class="tboyc-comment">([^<]+)<\/span>/g, `<span style="color: ${theme['comment']}">$1</span>`)
        .replace(/<span class="tboyc-function">([^<]+)<\/span>/g, `<span style="color: ${theme['function']}">$1</span>`)
        .replace(/<span class="tboyc-class">([^<]+)<\/span>/g, `<span style="color: ${theme['class']}">$1</span>`)
        .replace(/<span class="tboyc-type">([^<]+)<\/span>/g, `<span style="color: ${theme['type']}">$1</span>`)
        .replace(/<span class="tboyc-attribute">([^<]+)<\/span>/g, `<span style="color: ${theme['property']}">$1</span>`)
        .replace(/<span class="tboyc-constant">([^<]+)<\/span>/g, `<span style="color: ${theme['constant']}">$1</span>`)
        .replace(/<span class="tboyc-symbol">([^<]+)<\/span>/g, `<span style="color: ${theme['interface']}">$1</span>`);
    // Add more replacements as needed...

    element.innerHTML = highlightedContent;

    const spans = element.querySelectorAll('span');
    spans.forEach(span => {
        const color = span.style.color;
        span.style.color = color;
        span.style.backgroundClip = 'text';
    });

}

function getOSColorScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getTheme(themeName: string, themeMode: 'dark' | 'light'): { [key: string]: string } {
    if (themeName === 'vscode') {
        return vscodeTheme[themeMode] || vscodeTheme[getOSColorScheme() as 'dark' | 'light'];
    }

    if (themeName === 'forest') {
        return forestTheme['default'];
    } else {
        return vscodeTheme['dark'];
    }
}