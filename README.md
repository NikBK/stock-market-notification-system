# stock-market-notification-system

I have used MERN stack to implement this stock market notification system.

All the Backend related setup and code can be seen under "server" folder whereas Frontend code can be seen inside "client" folder.

Backend uses Node.js, Express.js and MongoDB to store stocks & alerts information and handle API's to manage the data.

Frontend uses React.js, TailwindCSS and necessary dependencies to make UI better.

## Details

User gets the popup to allow application to send push notification.

User will see all NSE and BSE stocks under separate columns.

User see the stock name, price and option to get alert whenever the current price exceeds the previous price.

They can also turn off the alerts if they are no more interested in that stock.

Update to a stock can be only done from the backend and once the price is increased for the subscribed stock the user gets the push notification.

## Hosted

https://stock-market-notification-system-client.vercel.app/
