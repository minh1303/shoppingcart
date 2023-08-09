import styles from "./App.module.css";
import Navbar from "./Components/header/Navbar";

// eslint-disable-next-line react/prop-types
function App({cartCounter}) {
  return (
    <>
      <header>
        <Navbar cartCounter={cartCounter}></Navbar>
      </header>
      <main className={styles.main}>
          <h1>Welcome to Super Fake Store</h1>
          <p>Super Fake Store is where you could buy any product with <strong>high quality</strong> and <strong>reasonable price</strong></p>
      </main>
    </>
  );
}

export default App;
