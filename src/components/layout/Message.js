import { useState, useEffect } from 'react';
import styles from './Message.module.css';

export default function Message({type, msg}) {
    const [visible, setVisible] = useState(false);
    const [animate, setAnimate] = useState("");

    useEffect(() => {
        if(!msg) {
            setVisible(false);
            return

        }

        setVisible(true);
        setAnimate("fadeInMessage");

        const timer = setTimeout(() => {
            setAnimate("fadeOutMessage");
            setTimeout(() => {
                setVisible(false);
                setAnimate("");
            }, 500)
        }, 3000);

        return () => clearTimeout(timer);

    }, [msg])

    return( 
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]} ${styles[animate]}`}>
                    <p>{msg}</p>
                </div>
            )}
            
        </>
    )
}