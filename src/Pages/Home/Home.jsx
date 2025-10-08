import React, { useEffect, useState } from 'react';
import useAppdata from '../../hooks/useAppdata';
import loadLogo from '../../assets/logo.png';
import Banner from '../../Components/Banner/Banner';
import Stats from '../../Components/Stats/Stats';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';


const Home = () => {

    const [featured, setFeatured] = useState();

    const { apps, loading, error} = useAppdata();

    useEffect( () => {

        const featuredApps = apps.filter( app => app.isfeatured==true );
        setFeatured(featuredApps);
        
    }, [apps])

    if(loading){
        return(
            <div className='w-10 mx-auto my-20'> <img className='h-[50px] animate-spin' src={loadLogo} alt="" /></div>
        )
    }

    // console.log(featured)

    return (
        <div>
            <div className='w-[92%] mx-auto'>
                <Banner></Banner>
            </div>

            <Stats></Stats>

            <TrendingApps featured={featured}></TrendingApps>
        </div>
    );
};

export default Home;