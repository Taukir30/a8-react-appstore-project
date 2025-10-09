import React, { useEffect, useState } from 'react';
import useAppdata from '../../hooks/useAppdata';
import loadLogo from '../../assets/logo.png';
import Card from '../../Components/Card/Card';


const AllAps = () => {
    const { apps } = useAppdata();
    const [isloading, setIsLoading] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    // console.log(search)

    useEffect( () => {
        setIsLoading(true);

        setTimeout(()=>{

            const term = search.trim().toLowerCase();
            const searchedApps = term? apps.filter( app => app.title.toLowerCase().includes(term)) : apps ;
            setFilteredData(searchedApps);
            setIsLoading(false);

        },400);
    }, [apps,search,])

    // if (isloading) {
    //     return (
    //         <div className='w-10 mx-auto my-20'> <img className='h-[50px] animate-spin' src={loadLogo} alt="" /></div>
    //     )
    // }


    return (
        <div className='w-[92%] mx-auto text-center my-15'>
            <div className=' text-center my-15'>
                <h2 className='text-4xl font-bold my-3'>Our All Applications</h2>
                <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className=' flex gap-2 justify-between items-center'>
                <h3 className='text-xl font-bold'> {filteredData.length} Apps Found</h3>

                <label className="input">
                    <input onChange={ (e) => setSearch(e.target.value) } value={search} type='search' placeholder="URL" />
                </label>
            </div>

            <div className={`w-10 mx-auto my-20 ${isloading? "block" : "hidden" }`}> <img className='h-[50px] animate-spin' src={loadLogo} alt="" /></div>

            <div className="card_section my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    filteredData.map(app => <Card key={app.id} app={app}></Card>)
                }
            </div>
        </div>
    );
};

export default AllAps;