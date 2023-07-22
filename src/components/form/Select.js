import styles from './Select.module.css';

export default function Select({text, name, options, handleOnChange, value}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} defaultValue={"default"}>
                <option value="default" disabled>Selecione uma opção</option>
                {options.map(categ => (
                    <option key={categ.id} value={categ.name}>{categ.name}</option>
                ))}
            </select>
        </div>
    )
}