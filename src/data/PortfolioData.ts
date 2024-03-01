import PLTS_cirata from '../../public/plts cirata.jpg';
import Cimmory from '../../public/cimmory dairyland.png';
import Cluster from '../../public/cluster jaksel.jpg';

export const PortfolioData = [
    {
        id: 1,
        name: 'PLTS Cirata',
        description : 'pembangunan PLTS di Cirata',
        image: PLTS_cirata
    },
    {
        id: 2,
        name: 'cimory dairyland',
        description : 'pembangunan cimmory dairyland',
        image: Cimmory
    },
    {
        id: 3,
        name: 'Cluster jakarta selatan',
        description : 'pembangunan cluster jakarta selatan',
        image: Cluster
    },
    {
        id: 4,
        name: 'ariandri hotel and resort',
        description : 'pembangunan ariandri hotel and resort',
        image: ''
    },
    {
        id: 5,
        name: 'rumah tinggal pancamarya',
        description : 'pembangunan rumah tinggal pancamarya',
        image: ''
    },
    
] as const;