export interface IVideo {
    id: string;
    title: string;
    slug: string;
    thumbImg: string;
    description: string;
    author: {
        name: string;
        avatar: string;
    };
    videoId: string;
    tags: string[];

}

export interface IVideos {
   videos: IVideo[];
}


export const data: IVideos = {
    videos:  [
        {
            id: '1',
            title: 'Reflexão sobre Intolerância Religiosa',
            slug: 'reflexao-sobre-intolerancia-religiosa',
            thumbImg: '/assets/thumbnail-example-filosoflix-1.jpg',
            description: '',
            author: {
                name: 'Autor de Exemplo',
                avatar: 'https://i.pravatar.cc/300',
            },
            tags: ['intoleranciareligiosa', 'religiao'],
            videoId: 'AvZzlw6izMw',
        },
        {
            id: '2',
            title: 'Felicidade é aqui e agora',
            slug: 'felicidade-e-aqui-e-agora',
            thumbImg: '/assets/thumbnail-example-filosoflix-2.jpg',
            description: '',
            author: {
                name: 'Autor de Exemplo',
                avatar: 'https://i.pravatar.cc/300',
            },
            tags: ['felicidade', 'reflexao', 'vidafeliz'],
            videoId: 'gsnqXt7d1mU'
        },
        {
            id: '1',
            title: 'Como enfrentar os canalhas',
            slug: 'como-enfrentar-os-canalhas',
            thumbImg: '/assets/thumbnail-example-filosoflix-3.jpg',
            description: '',
            author: {
                name: 'Autor de Exemplo',
                avatar: 'https://i.pravatar.cc/300',
            },
            tags: ['etica', 'reflexao', 'canalha'],
            videoId: 'eg2g6FPsdLI'
        },
        {
            id: '3',
            title: 'Friedrich Nietzsche',
            slug: 'friedrich-nietzsche',
            thumbImg: '/assets/thumbnail-example-filosoflix-4.jpg',
            description: '',
            author: {
                name: 'Autor de Exemplo',
                avatar: 'https://i.pravatar.cc/300',
            },
            tags: ['nietszche', 'reflexao', 'biografia'],
            videoId: '4N8oOj_aue8'
        },
        {
            id: '4',
            title: 'Seja importante para alguém',
            slug: 'sja-importante-para-alguem',
            thumbImg: '/assets/thumbnail-example-filosoflix-5.jpg',
            description: '',
            author: {
                name: 'Autor de Exemplo',
                avatar: 'https://i.pravatar.cc/300',
            },
            tags: ['necessario', 'reflexao', 'vidafeliz'],
            videoId: 'oe70Uhjc_F4'
        },
        {
            id: '5',
            title: 'Platão - A República',
            slug: 'platao-a-republica',
            thumbImg: '/assets/thumbnail-example-filosoflix-1.jpg',
            description: '',
            author: {
                name: 'Autor de Exemplo',
                avatar: 'https://i.pravatar.cc/300',
            },
            tags: ['intoleranciareligiosa', 'religiao'],
            videoId: 'J3tAwjqAuow'
        },
        {
            id: '6',
            title: 'Ética a Nicômaco - Aristóteles',
            slug: 'etica-a-nicomaco',
            thumbImg: '/assets/thumbnail-example-filosoflix-3.jpg',
            description: '',
            author: {
                name: 'Autor de Exemplo',
                avatar: 'https://i.pravatar.cc/300',
            },
            tags: ['intoleranciareligiosa', 'religiao'],
            videoId: 'HccqokXN2n8'
        },
        {
            id: '7',
            title: 'Baruch Espinosa',
            slug: 'baruch-espinosa',
            thumbImg: '/assets/thumbnail-example-filosoflix-5.jpg',
            description: '',
            author: {
                name: 'Autor de Exemplo',
                avatar: 'https://i.pravatar.cc/300',
            },
            tags: ['intoleranciareligiosa', 'religiao'],
            videoId: 'HHBsvKnCkwI'
        },
    ]
}