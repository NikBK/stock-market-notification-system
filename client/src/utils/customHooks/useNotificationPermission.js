import { useEffect } from "react";

const useNotificationPermission = () => {
    useEffect(() => {
        if (Notification.permission === "denied") {
            alert("Notifications blocked. Please enable them in your browser.");
        }
        else if (Notification.permission === "default") {
            Notification.requestPermission()
                .then((permission) => console.log("Browser notification permission " + permission));
        }
    }, [])
}

export default useNotificationPermission;