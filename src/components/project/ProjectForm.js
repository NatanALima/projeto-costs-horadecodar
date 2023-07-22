import { useState, useEffect } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitBtn from '../form/SubmitBtn';
import styles from './ProjectForm.module.css';

export default function ProjectForm({btnText}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => setCategories(data))
        .catch(err => console.log(err));
        
    }, []);  
    
    return(
        <form>
            <Input type={"text"} text="Nome do Projeto" name={"nomeProject"} placeholder={"Insira o Nome do Projeto"}/>
            <Input type={"number"} text="Orçamento do Projeto" name={"budgetProject"} placeholder={"Insira o Orçamento Total"}/>
            <Select name={"category_id"} text={"Selecione a Categoria"} options={categories}/>
            <SubmitBtn text={btnText}/>
        </form>
    )
}