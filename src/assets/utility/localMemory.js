const getInstallList = () => {

    const installListSTR = localStorage.getItem('installList');

    if(installListSTR){
        
        const installList = JSON.parse(installListSTR);
        return installList;
    }else{
        return [];
    }
}

const setInstallList = (id) => {

    const currentInstallList = getInstallList();

    if(currentInstallList.includes(id)){
        alert("Already Installed !");
    }else{
        currentInstallList.push(id);

        const newInstallList = JSON.stringify(currentInstallList);

        localStorage.setItem('installList', newInstallList);
    }
}

const deleteFromInstallList = (id) => {

    const currentInstallList = getInstallList();

    const updatedInstallList = currentInstallList.filter( installId => installId !== id );

    const newInstallList = JSON.stringify(updatedInstallList);

    localStorage.setItem('installList', newInstallList);
}


export {getInstallList, setInstallList, deleteFromInstallList};