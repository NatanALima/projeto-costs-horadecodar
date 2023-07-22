import styles from './SubmitBtn.module.css';

export default function SubmitBtn({text}) {
    return(
        <div className={styles.form_control}>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}