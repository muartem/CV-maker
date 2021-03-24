import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import {Add} from "@material-ui/icons";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import s from "./Education.module.css";

function Education({update, profile}) {

    const [data, setData] = useState({
        Education: (profile.Education instanceof Array) ? [...profile.Education] : []
    })

    const inputINIT = {
        id: performance.now().toString(),
        Degree: "",
        Finished: true,
        Graduation: "PRESENT"
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
        setInput(state=>({
            ...state,
            Finished: e.target.checked
        }))

        !e.target.checked && setInput(state=>({
            ...state,
            Graduation: "PRESENT"
        }))
        setError(false)
    }

    const selectHandler = (e) => {
        setInput(state=>({
            ...state,
            Degree: e.target.value
        }))
        setError(false)
    }

    const add = () => {
        if (input.Institute !== "" &&
            input.Speciality !== "" &&
            input.Degree !== "" &&
            input.Admission >= 1940 &&
            input.Admission <= ((new Date()).getFullYear()) &&
            ((input.Graduation > input.Admission) || (input.Graduation === "PRESENT") )
        ) {
            setData(data => ({
                ...data,
                Education: [...data.Education, input]
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
           const newEdu = data.Education.filter(i => i.id !== e.target.id)
            return {
               ...data,
                Education: [...newEdu]
            }
        })
    }

    const submit = () => {
        update(data)
    }

    return (
        <div className={s.edu}>
            <form className={s.form}>
            <TextField
                onChange={changeHandler}
                value={input?.Institute || ""}
                error={error} id="Institute"
                label="Institute" />
            <TextField
                onChange={changeHandler}
                value={input?.Speciality || ""}
                error={error} id="Speciality"
                label="Speciality" />
            <div className={s.select}>
                <InputLabel id="lDegree">Degree</InputLabel>
                <Select
                    error={error}
                    labelId="lDegree"
                    id="Degree"
                    value={input.Degree}
                    onChange={selectHandler}
                >
                    <MenuItem value={"Junior bachelor"}>Junior bachelor</MenuItem>
                    <MenuItem value={"Bachelor"}>Bachelor</MenuItem>
                    <MenuItem value={"Master"}>Master</MenuItem>
                    <MenuItem value={"Ph.D"}>Ph.D</MenuItem>
                </Select>
            </div>
            <TextField
                onChange={changeHandler}
                error={error}
                value={input?.Admission || ""}
                id="Admission"
                label="Admission"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={input.Finished}
                        onChange={switchHandler}
                        name="checkedB"
                        id="Finished"
                        color="primary"
                    />
                }
                label="Finished"
            />
            <TextField
                disabled={!input.Finished}
                onChange={changeHandler}
                value={input?.Graduation || ""}
                id="Graduation"
                label="Graduation"
                type="number"
                error={error}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<Add />}
                onClick={add}
            >
                Add
            </Button>
        </form>
            <div className={s.rightSide}>
                <h3>Education</h3>
                <ul>
                    {data.Education.map(e => (
                        <li key={e.id}>
                            {e.Institute}  -
                            {e.Speciality}<br/>
                            {e.Degree } :
                            {e.Admission } - {e.Graduation}
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

export default Education;
