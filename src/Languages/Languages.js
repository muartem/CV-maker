import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import {Add} from "@material-ui/icons";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import s from "./Languages.module.css";

function Languages({update, profile}) {

    const [data, setData] = useState({
        Languages: (profile.Languages instanceof Array) ? [...profile.Languages] : []
    })
    const [input, setInput] = useState({})

    const [error, setError] = useState(false)

    const changeHandler = (e) => {
        !e.target.value && setError(true)
        setInput(state => ({
            ...state,
            id: performance.now().toString(),
            Language: e.target.value
        }))
    }

    const selectHandler = (e) => {
        setInput(state=>({
            ...state,
            Level: e.target.value
        }))
        setError(false)
    }

     const add = () => {
         if (input.Language !== "" &&
             input.Level !== "" &&
             !!input.Level) {
             setData(data => ({
                 ...data,
                 Languages: [...data.Languages, {
                     ...input
                 }]
             }))

             setInput({})
         } else {
             setError(true)
         }
     }

    const remove = (e) => {
        setData(data => {
            const newLang = data.Languages.filter(i => i.id.toString() !== e.target.id)
            return {
                ...data,
                Languages: [...newLang]
            }
        })
    }

    const submit = () => {
        update(data)
    }

    return (
        <div className={s.lang}>
            <form className={s.form}>
            <TextField required error={error} value={input.Language || ""} onChange={changeHandler} id="Languages" label="Languages" />
            <div className={s.select}>
                <InputLabel required id="demo-simple-select-label">Level</InputLabel>
                <Select
                    value={input.Level || ""}
                    error={error}
                    disabled={!input.Language}
                    labelId="demo-simple-select-label"
                    id="Level"
                    onChange={selectHandler}
                >
                    <MenuItem value={"Beginner(A1)"}>Beginner (A1)</MenuItem>
                    <MenuItem value={"Elementary(A2)"}>Elementary (A2)</MenuItem>
                    <MenuItem value={"Intermediate(B1)"}>Intermediate (B1)</MenuItem>
                    <MenuItem value={"UpperIntermediate(B2)"}>Upper Intermediate (B2)</MenuItem>
                    <MenuItem value={"Advanced(C1)"}>Advanced (C1)</MenuItem>
                    <MenuItem value={"Fluent(C2)"}>Fluent (C2)</MenuItem>
                </Select>
            </div>

            <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={add}
                startIcon={<Add />}
            >
                Add
            </Button>
        </form>
            <div className={s.rightSide}>
                <h3>Languages</h3>
                <ul>
                    {data.Languages.map(e => (
                        <li key={e.id}>
                            {e.Language}: {e.Level}
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

export default Languages;
