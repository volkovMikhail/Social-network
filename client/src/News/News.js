import styles from './News.module.css';

function News() {
    return (
        <div className="content">
            <div className={styles.post}>
                <div className={styles.textContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati libero expedita laborum
                    quia! Obcaecati expedita nesciunt at enim omnis molestiae, reprehenderit architecto quisquam
                    molestias magni, amet alias ea dolorem!
                </div>
                <div className={styles.imageContent} style={{ backgroundImage: "url(/images/test1.jpg)" }}></div>
            </div>
            <div className={styles.post}>
                <div className={styles.textContent}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ex dolores totam sequi enim eius,
                    quisquam repudiandae eos, dolorem repellendus, amet mollitia ad nesciunt. Blanditiis molestiae vero
                    harum labore rem.
                </div>
                <div className={styles.imageContent} style={{ backgroundImage: "url(/images/test3.jpg)" }}></div>
            </div>
            <div className={styles.post}>
                <div className={styles.textContent}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ex dolores totam sequi enim eius,
                    quisquam repudiandae eos, dolorem repellendus, amet mollitia ad nesciunt. Blanditiis molestiae vero
                    harum labore rem.
                </div>
                <div className={styles.imageContent} style={{ backgroundImage: "url(/images/test4.jpg)" }}></div>
            </div>
        </div>
    );
}

export default News;
