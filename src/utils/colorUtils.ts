function hexToRgb(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

function rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function getBrightness(color: string): number {
    const [r, g, b] = hexToRgb(color);
    // Use the luminance formula to calculate brightness
    return (0.299 * r + 0.587 * g + 0.114 * b);
}

function adjustColorBrightness(color: string, percent: number): string {
    let r: number, g: number, b: number;
    if (color.startsWith('#')) {
        const hex = color.slice(1);
        [r, g, b] = hexToRgb(color);
    } else {
        const rgb = color.match(/\d+/g);
        if (rgb) {
            r = parseInt(rgb[0]);
            g = parseInt(rgb[1]);
            b = parseInt(rgb[2]);
        } else {
            throw new Error('Invalid RGB color format');
        }
    }

    // Adjust the color brightness
    r = Math.round(r * (1 + percent));
    g = Math.round(g * (1 + percent));
    b = Math.round(b * (1 + percent));

    // Clamp values to [0, 255]
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    // Convert back to HEX
    return rgbToHex(r, g, b);
}

export function getAdjustedBackgroundColor(color: string, adjustPercentage: number): string {
    const brightness: number = getBrightness(color);

    // Automatically adjust brightness
    return brightness < 128
        ? adjustColorBrightness(color, adjustPercentage)
        : adjustColorBrightness(color, -adjustPercentage);
}