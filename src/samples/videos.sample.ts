export interface VideoI {
    id: string;
    title: string;
    slug: string;
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
            slug: 'intolerancia-religiosa',
            thumbImg: '/assets/thumbnail-example.jpg',
            description: '',
            author: 'Leandro Karnal',
            videoId: 'i8bIjrXmv68'
        },
        {
            id: '2',
            title: 'Felicidade é aqui e agora',
            slug: 'felicidade-e-aqui-e-agora',
            thumbImg: '/assets/thumbnail-example-2.jpg',
            description: '',
            author: 'Clóvis de Barros',
            videoId: 'HsQx02JdZ2Q'
        },
        {
            id: '1',
            title: 'Como enfrentar os canalhas',
            slug: 'como-enfrentar-os-canalhas',
            thumbImg: 'https://i.ytimg.com/vi/sQ9G_ArkUx0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbXlzZZ8w6EiqRP-_MuIV2mFxavg',
            description: '',
            author: 'Clóvis de Barros',
            videoId: 'sQ9G_ArkUx0'
        },
        {
            id: '3',
            title: 'Friedrich Nietzsche por Scarlett Marton',
            slug: 'friedrich-nietzsche-por-scarlett-marton',
            thumbImg: 'https://i.ytimg.com/vi/5L2K6HKrEyA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjyHWALfKzilnAfsXKyeriTEMAgw',
            description: '',
            author: 'Scarlett Marton',
            videoId: '5L2K6HKrEyA'
        },
        {
            id: '4',
            title: 'Seja importante para alguém',
            slug: 'sja-importante-para-alguem',
            thumbImg: 'https://i.ytimg.com/vi/98TJP8uD7f8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGJkE61SU_Bjpb8H5FlsihiCUrFg',
            description: '',
            author: 'Mario Sergio Cortella',
            videoId: '98TJP8uD7f8'
        },
        {
            id: '5',
            title: 'Intolerância Religiosa',
            slug: 'intolerancia-religiosa',
            thumbImg: '/assets/thumbnail-example-2.jpg',
            description: '',
            author: 'Leandro Karnal',
            videoId: ''
        },
        {
            id: '6',
            title: 'Intolerância Religiosa',
            slug: 'intolerancia-religiosa',
            thumbImg: '/assets/thumbnail-example.jpg',
            description: '',
            author: 'Leandro Karnal',
            videoId: ''
        },
        {
            id: '7',
            title: 'Intolerância Religiosa',
            slug: 'intolerancia-religiosa',
            thumbImg: '/assets/thumbnail-example-2.jpg',
            description: '',
            author: 'Leandro Karnal',
            videoId: ''
        },
    ]
}