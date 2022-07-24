import Header from '../Header';
import Footer from '../Footer';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
