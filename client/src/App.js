import { DailyStocks, Home, Navbar } from './components';
import { useNotificationPermission, useFetchAlerts } from './utils/customHooks';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const STOCK_ALERT_URL = `${BACKEND_URL}/alerts/checkStockUpdate`;
const ALERT_INTERVAL = 10000;

function App() {

  useNotificationPermission();
  useFetchAlerts(STOCK_ALERT_URL, ALERT_INTERVAL);

  return (
    <div className="App">
      <Navbar />
      <DailyStocks />
      <Home />
    </div>
  );
}

export default App;
