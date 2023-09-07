import 'server-only'

const dictionaries: any = {
    ca: () => import('./ca-ES.json').then((module) => module.default),
    es: () => import('./es-ES.json').then((module) => module.default),
}

export const getDictionary = async (locale: string|undefined): Promise<any> => {
    if (locale === undefined) {
        return dictionaries['ca']();
    }

    if (dictionaries[locale] === undefined) {
        return dictionaries['ca']();
    }

    return dictionaries[locale]();
}