import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        // Implement deep linking or react to window location change here
        // console.log(location);
    }, [location]);

    return null;
};

export default RouteUpdater;
