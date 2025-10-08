import React, { useEffect, useState } from 'react';
import { getInstallList } from '../../assets/utility/localMemory';
import useAppdata from '../../hooks/useAppdata';
import loadLogo from '../../assets/logo.png';
import InstalledCard from '../../Components/InstalledCard/InstalledCard';


const InstalledPage = () => {

    const [installedAppList, setInstalledAppList] = useState();

    const { apps, loading } = useAppdata();

    useEffect(() => {

        const installedIds = getInstallList();

        const installedApps = apps.filter(app => installedIds.includes(app.id));

        setInstalledAppList(installedApps)

    }, [apps])

    // console.log(installedAppList)

    if (loading) {
        return (
            <div className='w-10 mx-auto my-20'> <img className='h-[50px] animate-spin' src={loadLogo} alt="" /></div>
        )
    }


    return (
        <div>

            <div className='w-[92%] mx-auto flex flex-col gap-2 items-center justify-center py-5 my-3'>
                <h2 className='text-4xl font-bold my-3'>Your Installed Apps</h2>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='w-[92%] mx-auto flex gap-2 justify-between items-center'>
                <h3 className='text-xl font-bold'> {installedAppList.length} Apps Found</h3>

                <select defaultValue="Sort by downloads" className="select w-45">
                    <option disabled={true}>Sort by downloads</option>
                    <option>High-Low</option>
                    <option>Low-High</option>
                </select>
            </div>

            <div className='w-[92%] mx-auto my-3 pb-5'>
                <div className='flex flex-col gap-3'>
                    {
                        installedAppList.map( installedApp => <InstalledCard key={installedApp.id} installedApp={installedApp} installedAppList={installedAppList} setInstalledAppList={setInstalledAppList}></InstalledCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default InstalledPage;