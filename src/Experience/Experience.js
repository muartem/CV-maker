import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import {Add} from "@material-ui/icons";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import s from "./Experience.module.css";

function Experience({update, profile}) {

    const [data, setData] = useState({
        Experience: (profile.Experience instanceof Array) ? [...profile.Experience] : []
    })

    const inputINIT = {
        id: performance.now().toString(),
        StillWorking: false
    }

    const [input, setInput] = useState(inputINIT)
    const [error, setError] = useState(false)

    const changeHandler = (e) => {
        setInput(state => ({
            ...state,
            [e.target.id]: e.target.value
        }))
        setError(false)
    }
    const switchHandler = (e) => {
        setInput(state => ({
            ...state,
            StillWorking: e.target.checked
        }))

        e.target.checked && setInput(state => ({
            ...state,
            Finish: "PRESENT"
        }))
        setError(false)
    }

    const add = () => {
        if (input.Company !== "" &&
            input.Position !== "" &&
            (new Date(input.Start)).getFullYear() >= 1950 &&
            (new Date(input.Start)) <= (new Date()) &&
            (((new Date(input.Finish)) > (new Date(input.Start))) || (input.Finish === "PRESENT") )
        ) {
            setData(data => ({
                ...data,
                Experience: [...data.Experience, input]
            }))

            setInput({
                ...inputINIT, id: performance.now()
            })
        } else {
            setError(true)
        }
    }

    const remove = (e) => {
        setData(data => {
            const newExp = data.Experience.filter(i => i.id !== e.target.id)
            return {
                ...data,
                Experience: [...newExp]
            }
        })
    }

    const submit = () => {
        update(data)
    }

    return (
        <div className={s.exp}>
            <form className={s.form}>
            <TextField
                required
                   value={input?.Position || ""}
                   onChange={changeHandler}
                   error={error}
                   id="Position" label="Position" />
            <TextField
                required
                   value={input?.Company || ""}
                   onChange={changeHandler}
                   error={error}
                   id="Company" label="Company" />
            <TextField
                id="Description"
               value={input?.Description || ""}
               onChange={changeHandler}
               label="Description" />
            <TextField
                value={input?.Start || ""}
                id="Start"
                label="Start"
                type="date"
                onChange={changeHandler}
                error={error}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={input.StillWorking}
                        onChange={switchHandler}
                        id="StillWorking"
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Still Working"
            />
            <TextField
                disabled={input.StillWorking}
                value={input?.Finish || ""}
                id="Finish"
                label="Finish"
                type="date"
                onChange={changeHandler}
                error={(!input.StillWorking && error)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
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
                <h3>Experience</h3>
                <ul>
                    {data.Experience.map(e => (
                        <li key={e.id}>
                            {e.Position}  -
                            {e.Company}<br/>
                            {e.Start } - {e.Finish}
                            <span id={e.id} onClick={remove}>✘</span>
                        </li>
                    ))}
                </ul>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={submit}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </div>
        </div>
    );
}

export default Experience;
