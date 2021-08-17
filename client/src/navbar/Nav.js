import link from "../helpers/link";
import styles from './Nav.module.css';

function Nav() {
    return (
        <nav>
            <div className={styles.item} onClick={() => link("/s")}>
                <span>Profile</span>
            </div>
            <div className={styles.item} onClick={() => link("/")}>
                <span>News</span>
            </div>
            <div className={styles.item} onClick={() => link("/")}>
                <span>Messages</span>
            </div>
            <div className={styles.item} onClick={() => link("/")}>
                <span>Music</span>
            </div>
            <div className={styles.item} onClick={() => link("/")}>
                <span>Photos</span>
            </div>
            <div className={styles.item} onClick={() => link("/")}>
                <span>Videos</span>
            </div>
            <div className={styles.item} onClick={() => link("/")}>
                <span>Games</span>
            </div>
        </nav>
    );
}

export default Nav;