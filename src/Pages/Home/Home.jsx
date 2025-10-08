import React, { useEffect, useState } from 'react';
import useAppdata from '../../hooks/useAppdata';
import loadLogo from '../../assets/logo.png';
import Banner from '../../Components/Banner/Banner';

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
            <Banner></Banner>
        </div>
    );
};

export default Home;