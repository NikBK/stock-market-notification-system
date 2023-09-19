export const displayNotifications = (alerts) => {
    alerts.forEach((alert) => {
        const { name, price } = alert;
        const notificationOptions = {
            body: `Alert! Price for ${name} has reached ${price}`
        };

        new Notification('Stock Alert', notificationOptions);
    });
};