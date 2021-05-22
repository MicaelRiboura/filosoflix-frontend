export interface VideoI {
    id: string;
    title: string;
    thumbImg: string;
    description: string;
    author: string;
    videoId: string;
}

export interface VideosI {
   videos : VideoI[];
}


export const videos: VideosI = {
    videos:  [
        {
            id: '1',
            title: 'Intolerância Religiosa',
            thumbImg: '/assets/thumbnail-example.jpg',
            description: '',
            author: 'Leandro Karnal',
            videoId: ''
        },
        {
            id: '2',
            title: 'Intolerância Religiosa',
            thumbImg: '/assets/thumbnail-example-2.jpg',
            description: '',
            author: 'Leandro Karnal',
            videoId: ''
        },
        {
            id: '3',
            title: 'Intolerância Religiosa',
            thumbImg: '/assets/thumbnail-example.jpg',
            description: '',
            author: 'Leandro Karnal',
            videoId: ''
        },
        {
            id: '4',
            title: 'Intolerância Religiosa',
            thumbImg: '/assets/thumbnail-example.jpg',
            description: '',
            author: 'Leandro Karnal',
            videoId: ''
        },
        {
            id: '5',
            title: 'Intolerância Religiosa',
            thumbImg: '/assets/thumbnail-example.jpg',
            description: '',
            author: 'Leandro Karnal',
            videoId: ''
        },
        {
            id: '6',
            title: 'Intolerância Religiosa',
            thumbImg: '/assets/thumbnail-example.jpg',
            description: '',
            author: 'Leandro Karnal',
            videoId: ''
        },
        {
            id: '7',
            title: 'Intolerância Religiosa',
            thumbImg: '/assets/thumbnail-example.jpg',
            description: '',
            author: 'Leandro Karnal',
            videoId: ''
        }
    ]
}