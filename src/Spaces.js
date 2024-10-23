export const Spaces = [
    {
        label: 'Space One',
        id: 'S1',
        pages: ['P1', 'P2'],
    },
    {
        label: 'Space Two',
        id: 'S2',
        pages: ['P1', 'P2'],
    },
]

export const Pages = [
    {
        id: 'P1',
        label: 'Page One',
        contentId: 'C1',
        subPages: [
            {
                id: 'P2',
                label: 'Sub Page One',
                contentId: 'C3',
                subPages: [
                    {
                        id: 'P6',
                        label: 'Sub Sub Page One',
                        contentId: 'C3',
                        subPages: [],
                        spaceId: 'S1',
                    },
                ],
                spaceId: 'S1',
            },
        ],
        spaceId: 'S1',
    },
    {
        id: 'P5',
        label: 'Page Two',
        contentId: 'C2',
        subPages: [],
        spaceId: 'S1',
    },
    {
        id: 'P21',
        label: 'Page One',
        contentId: 'C1',
        subPages: [
            {
                id: 'P2',
                label: 'Sub Page One',
                contentId: 'C3',
                subPages: [
                    {
                        id: 'P6',
                        label: 'Sub Sub Page One',
                        contentId: 'C3',
                        subPages: [],
                        spaceId: 'S1',
                    },
                ],
                spaceId: 'S1',
            },
        ],
        spaceId: 'S2',
    },
]

export const Content = [
    { id: 'C1', label: 'Page One', description: 'Description 1', pageId: 'P1' },
    { id: 'C2', label: 'Page Two', description: 'Description 2', pageId: 'P5' },
    {
        id: 'C3',
        label: 'Sub Page One',
        description: 'Description Sub Page One',
        pageId: 'P2',
    },
    {
        id: 'C8',
        label: 'Sub Sub Page One',
        description: 'Description Sub1 Sub Page One',
        pageId: 'P6',
    },
]
