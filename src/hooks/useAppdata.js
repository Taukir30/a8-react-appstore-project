import axios from "axios";
import { useEffect, useState } from "react"

const useAppdata = () => {

    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        setLoading(true);

        axios('../appsData.json')
            .then(data => setApps(data.data))
            .catch(err => setError(err))
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            });
            
    }, [])

    return { apps, loading, error }
}

export default useAppdata