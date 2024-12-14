export function metaToDict(meta: NodeList | null): { [key: string]: string } {
    const dict: { [key: string]: string } = {};
    if (meta === null) { return dict; }

    meta.forEach(element => {
        const name: string | null = (element as Element).getAttribute('name');
        const content: string | null = (element as Element).getAttribute('content');

        if (name !== null && content !== null) {
            dict[name] = content;
        }

        // if theme contains "/" seperate it to another dict called themeMode
        if (name == 'theme' && content !== null) {
            const themeMode: string = content.split('/')[1];
            dict['themeMode'] = themeMode;
            dict['theme'] = content.split('/')[0];
        }
    });

    return dict;
}