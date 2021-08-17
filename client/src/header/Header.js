import link from "../helpers/link";
import styles from './Header.module.css';

function Header() {
    return (
        <header>
            <div className={styles.content}>
                <h4 onClick={() => link("/a")}>volkov.network</h4>
            </div>
        </header>
    );
}

export default Header;
