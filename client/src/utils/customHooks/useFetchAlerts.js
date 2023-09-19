import { useEffect } from 'react';
import axios from 'axios';
import { displayNotifications } from '../functions/displayNotifications';

const useFetchAlerts = (backendURL, alertInterval) => {

    useEffect(() => {
        const fetchAlerts = () => {
            try {
                axios
                    .get(backendURL)
                    .then((response) => {
                        if (response.data.length > 0 && Notification.permission === 'granted') {
                            displayNotifications(response.data);
                        }
                    })
                    .catch((error) => console.log(error));
            } catch (error) {
                console.error('Error fetching alerts:', error);
            }
        };

        const interval = setInterval(fetchAlerts, alertInterval);

        return () => clearInterval(interval);
    }, [backendURL, alertInterval]);
};

export default useFetchAlerts;