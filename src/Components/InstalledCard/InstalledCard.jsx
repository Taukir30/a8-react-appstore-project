import React from 'react';
import downIcon from '../../assets/icon-downloads.png'
import starIcon from '../../assets/icon-ratings.png'
import { deleteFromInstallList } from '../../assets/utility/localMemory';
import { toast } from 'react-toastify';



const InstalledCard = ({installedApp, installedAppList, setInstalledAppList}) => {
    
    // console.log(installedApp)

    const handleDelete = () => {

        deleteFromInstallList(installedApp.id);

        const newInstalledAppList = installedAppList.filter( singleApp => singleApp.id !== installedApp.id );
        setInstalledAppList(newInstalledAppList);

        toast("App Uninstalled !!!");
    }

    return (
        <div className='flex justify-between items-center bg-white p-3 rounded'>
            <div className='flex gap-5 items-center'>

                <img className='h-[80px] rounded-md border border-gray-300' src={installedApp.image} alt="app" />
                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold'>{installedApp.title}</h3>
                    <div className='flex gap-3'>
                        <span className='badge text-success text-xs'><img className='h-[12px]' src={downIcon} alt="badge" />{installedApp.downloads / 100000} M</span>
                        <span className="badge border-0 text-xs text-[#FF8811]"> <img className='h-[12px]' src={starIcon} alt="badge" /> {installedApp.reviews} </span>
                        <span className="badge border-0 text-xs text-gray-500"> {installedApp.size} MB</span>
                    </div>
                </div>

            </div>
            <div>
                <button onClick={handleDelete} className='btn bg-[#00D390]'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledCard;