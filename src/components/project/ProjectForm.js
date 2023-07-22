import { useState, useEffect } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitBtn from '../form/SubmitBtn';
import styles from './ProjectForm.module.css';

export default function ProjectForm({handleSubmit, btnText, projectData}) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

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
    
    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);

    }

    const handleProjectEdit = (e) => {
        setProject({...project, [e.target.name]: e.target.value});
        console.log(project);
    }

    const handleCategory = (e) => {
        setProject({...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }   
        })
        console.log(project);
    }
    
    return(
        <form onSubmit={submit}>
            <Input type={"text"} 
                   text="Nome do Projeto" 
                   name={"nomeProject"} 
                   placeholder={"Insira o Nome do Projeto"} 
                   handleOnChange={handleProjectEdit}
                   value={project.name}/>
            <Input type={"number"} 
                   text="Orçamento do Projeto" 
                   name={"budgetProject"} 
                   placeholder={"Insira o Orçamento Total"} 
                   handleOnChange={handleProjectEdit}
                   value={project.budget}/>
            <Select name={"category_id"} 
                    text={"Selecione a Categoria"} 
                    options={categories} 
                    handleOnChange={handleCategory} 
                    value={project.category ? project.category.id : ''}/>
            <SubmitBtn text={btnText}/>
        </form>
    )
}