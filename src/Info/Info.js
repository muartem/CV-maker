import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";

import s from "./Info.module.css";

function Info({update, profile}) {

    const [data, setData] = useState({
        FullName: profile.FullName,
        img: profile.img,
        Position: profile.Position,
        Location: profile.Location,
        Phone: profile.Phone,
        Email: profile.Email,
        Git: profile.Git,
        LinkedIn: profile.LinkedIn
    })

    const validate = () => (data.FullName && data.Position && data.Location && data.Phone && data.Email)

    const [error, setError] = useState(!validate())

    const changeHandler = (e) => {
        setData(state=>({
            ...state,
            [e.target.id]: e.target.value
        }))
    }

    const getPhoto = async (e) => {

        const fileReader = new FileReader();

        fileReader.onload = () => {
             setData( state=>({
                ...state,
                img: fileReader.result
            }))
        }

        fileReader.readAsDataURL(e.target.files[0])
    }

    const submit = () =>{
        setError(!validate())
        if (!error) update(data)
        else {
            for (let d in data){
                if (!data[d]) setData(data => ({...data, [d]: ""}))
            }
        }
        update(data)
    }
    return (
        <form className={s.form}>
            {data.img &&<img className={s.img} alt="User" src={data?.img}/>}
            <div className={s.full}>
            <TextField required defaultValue={data.FullName || ""} onChange={changeHandler} error={(data.FullName === "")} id="FullName" label="Full name" />
            <input accept="image/*" id="img" onChange={getPhoto}  type="file" />
            <label htmlFor="img">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
            </div>
            <TextField required defaultValue={data.Position || ""} onChange={changeHandler} error={(data.Position === "")} id="Position" label="Position" />
            <TextField required  defaultValue={data.Location || ""} onChange={changeHandler} error={(data.Location === "")} id="Location" label="Location" />
            <TextField required  defaultValue={data.Phone || ""} onChange={changeHandler} error={(data.Phone === "")} id="Phone" label="Phone" />
            <TextField required  defaultValue={data.Email || ""} onChange={changeHandler} error={(data.Email === "")} id="Email" label="Email" />
            <TextField id="Git" defaultValue={data.Git || ""} onChange={changeHandler} label="Git" />
            <TextField id="LinkedIn" defaultValue={data.LinkedIn || ""} onChange={changeHandler} label="LinkedIn" />
            <Button
                onClick={submit}
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
        </form>
    );
}

export default Info;
