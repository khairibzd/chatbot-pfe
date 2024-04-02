const { dockStart } = require('@nlpjs/basic');

export async function loadCorpora(filenames: string[]): Promise<any> {
    const dock = await dockStart({
        settings: {
            nlp: {
                forceNER: true,
                languages: ['en'],
                corpora: filenames.map(filename => `./src/nlu/corpora/${filename}`),
            }
        },
        use: ['Basic', 'LangEn'],
    });
    return dock.get('nlp');
}
