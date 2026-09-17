export type Detail = {
    slug: string
    title: string
    text: string
}

export const details: Detail[] = [
    {
        slug: 'background',
        title: '背景',
        text: 'Hello world!'
    },
    {
        slug: 'objective',
        title: '目的',
        text: 'Hello world!'

    }, {
        slug: 'methods',
        title: '手法',
        text: 'Hello world!'

    }, {
        slug: 'results',
        title: '結論',
        text: 'Hello world!'
    }, {
        slug: 'summury',
        title: '要約',
        text: 'Hello world!'
    }
]

export function findDetail(slug: string) {
    return details.find((detail) => detail.slug === slug)
}
