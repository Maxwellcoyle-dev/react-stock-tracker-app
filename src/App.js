import styles from "./App.module.css";
import { StockTracker } from "./StockTracker";

function App() {
  return (
    <div className={styles.App}>
      <StockTracker />
    </div>
  );
}

export default App;
