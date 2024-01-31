import PLTS_cirata from '../../public/plts cirata.jpg';
import Cimmory from '../../public/cimmory dairyland.png';
import Cluster from '../../public/cluster jaksel.jpg';

export const PortfolioData = [
    {
        id: 1,
        name: 'PLTS Cirata',
        description : 'pembangunan PLTS di Cirata',
        // image: 'https://via.placeholder.com/50'
        image: PLTS_cirata
    },
    {
        id: 2,
        name: 'cimmory dairyland',
        description : 'pembangunan cimmory dairyland',
        // image: 'https://via.placeholder.com/50'
        image: Cimmory
    },
    {
        id: 3,
        name: 'Cluster jakarta selatan',
        description : 'pembangunan cluster jakarta selatan',
        image: Cluster
    },
    // {
    //     id: 4,
    //     name: '4',
    //     description : 'descripstion here',
    //     image: 'https://via.placeholder.com/50'
    // },
    
] as const;