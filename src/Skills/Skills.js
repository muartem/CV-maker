import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import {Add} from "@material-ui/icons";

import s from "./Skills.module.css";

function Skills({update, profile}) {

    const [data, setData] = useState({
        ProfSkills: (profile.ProfSkills instanceof Array) ? [...profile.ProfSkills] : [],
        SoftSkills: (profile.SoftSkills instanceof Array) ? [...profile.SoftSkills] : []
    })
    const [input, setInput] = useState({})

    const changeHandler = (e) => {
        setInput(state => ({
            ...state,
            [e.target.id]: {
                id: performance.now(),
                string: e.target.value
            }
        }))
    }

    const add = () => {
        setData(data => ({
            ...data,
            ProfSkills: input.ProfSkills?.string ? [...data.ProfSkills, input.ProfSkills] : [...data.ProfSkills],
            SoftSkills: input.SoftSkills?.string ? [...data.SoftSkills, input.SoftSkills] : [...data.SoftSkills]
        }))

        setInput({})
    }

    const remove = (e) => {
        setData(data => {
            const newProf = data.ProfSkills.filter(i => i.id.toString() !== e.target.id)
            const newSoft = data.SoftSkills.filter(i => i.id.toString() !== e.target.id)
            return {
                ...data,
                ProfSkills: [...newProf],
                SoftSkills: [...newSoft]
            }
        })
    }

    const submit = () => {
        update(data)
    }


    return (
        <div className={s.skill}>
            <form className={s.form}>
            <TextField value={input?.ProfSkills?.string || ""}
                       onChange={changeHandler} id="ProfSkills" label="Professional skills" />
            <TextField value={input?.SoftSkills?.string || ""}
                       onChange={changeHandler} id="SoftSkills" label="Soft skill" />

            <Button
                onClick={add}
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<Add />}
            >
                Add
            </Button>
        </form>
            <div className={s.rightSide}>
                <h3>Professional Skills</h3>
                <ul>
                    {data.ProfSkills.map(e => (
                        <li key={e.id}>
                            {e.string}
                            <span id={e.id} onClick={remove}>✘</span>
                        </li>
                    ))}
                </ul>
                <h3>Soft Skills</h3>
                <ul>
                    {data.SoftSkills.map(e => (
                        <li key={e.id}>
                            {e.string}
                            <span id={e.id} onClick={remove}>✘</span>
                        </li>
                    ))}
                </ul>
                <Button
                    onClick={submit}
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </div>
        </div>
    );
}

export default Skills;
