import Sandwich from "./model/Sandwich";

export const data = {
    sandwiches: [
        {
            id: 1,
            name: 'Sandwich jambon beurre',
            description: 'Un délicieux sandwich avec du jambon et du beurre',
            imageUrl: require('../assets/img/1.jpg'),
            userId: 1,
        },
        {
            id: 2,
            name: 'Sandwich au poulet',
            description: 'Un savoureux sandwich au poulet grillé',
            imageUrl: require('../assets/img/2.jpg'),
            userId: 1,
        },
        {
            id: 3,
            name: 'Sandwich végétarien',
            description: 'Un sandwich frais rempli de légumes croquants',
            imageUrl: require('../assets/img/3.jpg'),
            userId: 1,
        },
        {
            id: 4,
            name: 'Sandwich au fromage',
            description: 'Un sandwich gourmand avec différentes variétés de fromage',
            imageUrl: require('../assets/img/4.jpg'),
            userId: 1,
        },
        {
            id: 5,
            name: 'Sandwich au thon',
            description: 'Un délicieux sandwich au thon avec des légumes frais',
            imageUrl: require('../assets/img/5.jpg'),
            userId: 1,
        },
    ],
    users: [
        {
            id: 1,
            name: 'Donovan',
            email: 'test@test.com',
            password: 'admin',
            bio: 'J\'aime les sandwichs',
        }
    ]
};