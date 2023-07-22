import Input from '../form/Input';
import Select from '../form/Select';
import SubmitBtn from '../form/SubmitBtn';
import styles from './ProjectForm.module.css';

export default function ProjectForm({btnText}) {
    return(
        <form>
            <Input type={"text"} text="Nome do Projeto" name={"nomeProject"} placeholder={"Insira o Nome do Projeto"}/>
            <Input type={"number"} text="Orçamento do Projeto" name={"budgetProject"} placeholder={"Insira o Orçamento Total"}/>
            <Select name={"category_id"} text={"Selecione a Categoria"}/>
            <SubmitBtn text={btnText}/>
        </form>
    )
}