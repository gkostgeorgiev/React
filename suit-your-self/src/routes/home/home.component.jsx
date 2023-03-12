import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Headwear',
            imageUrl: 'https://i.ibb.co/n0G5ct2/pexels-pixabay-35185.jpg',
        },
        {
            id: 2,
            title: 'Coats',
            imageUrl: 'https://i.ibb.co/jhp22Gj/pexels-andrea-piacquadio-840916.jpg',
        },
        {
            id: 3,
            title: 'Shoes',
            imageUrl: 'https://i.ibb.co/FJ7fS7T/pexels-dominika-roseclay-1021816.jpg',
        },
        {
            id: 4,
            title: 'Ladies',
            imageUrl: 'https://i.ibb.co/dpLV2zB/pexels-radu-florin-2646841.jpg',
        },
        {
            id: 5,
            title: 'Gentlemen',
            imageUrl: 'https://i.ibb.co/3SBX8Gj/pexels-jordan-bergendahl-10402661.jpg',
        },
    ];

    return (
        <div>
            <Outlet />
            <Directory categories={categories} />
        </div>
    );
};

export default Home;