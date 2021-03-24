import React, {createRef, Fragment} from 'react';
import html2pdf from 'html2pdf.js'
import {Button} from "@material-ui/core";
import {Call, GetApp, GitHub, LinkedIn, LocationCity, Mail} from "@material-ui/icons";

import s from "./Finish.module.css";

function Finish({profile}) {

    const CV = createRef()

    const options = {
        filename: `CV_${profile?.FullName}_${profile?.Date}`
    }
    const download = async () =>{
        await html2pdf().from(CV.current).set(options).save()
    }

    return (
        <div>
            {profile.FullName ?
                <Fragment>
                <h2>Preview:</h2>
                <section className={s.preview}>
                <div ref={CV} className={s.cv}>
                <header>
                    {profile.img &&<img alt="user" className={s.img} src={profile?.img}/>}
                    <div className={s.title}>
                        <h1>{profile.FullName}</h1>
                        <h2 className={s.light}>{profile.Position}</h2>
                    </div>
                    <div className={s.contacts}>
                        <p><LocationCity/>{profile.Location}</p>
                        <p><Call/>{profile.Phone}</p>
                        <p><Mail/>{profile.Email}</p>
                        {profile.Git && <p><GitHub/>{profile.Git}</p>}
                        {profile.LinkedIn && <p><LinkedIn/>{profile.LinkedIn}</p>}
                    </div>
                </header>
                {profile.ProfSkills && (profile.ProfSkills.length > 0) &&
                <div className={s.skill}>
                    <h2>Professional Skills:</h2>
                    <ul>
                        {
                            profile.ProfSkills.map(i => (
                                <li key={i.id}>{i.string}</li>
                            ))
                        }
                    </ul>
                </div>}
                {profile.SoftSkills && (profile.SoftSkills.length > 0) &&
                <div className={s.skill}>
                    <h2>Soft Skills:</h2>
                    <ul>
                        {
                            profile.SoftSkills.map(i => (
                                <li key={i.id}>{i.string}</li>
                            ))
                        }
                    </ul>
                </div>}
                {profile.Experience && (profile.Experience.length > 0) &&
                <div className={s.exp}>
                    <h2>Work Experience:</h2>
                    <ul>
                        {
                            profile.Experience
                                .sort((a, b) => new Date(b.Start) - new Date(a.Start))
                                .map(i => (
                                    <div key={i.id}>
                                        <header><h3>{i.Position}</h3> <h3
                                            className={s.light}>{i.Start} - {i.Finish}</h3></header>
                                        <h3 className={s.light}>{i.Company}</h3>
                                        <p>{i.Description}</p>
                                    </div>
                                ))
                        }
                    </ul>
                </div>}
                {profile.Education && (profile?.Education.length > 0) &&
                <div className={s.exp}>
                    <h2>Education:</h2>
                    <ul>
                        {
                            profile.Education
                                .sort((a, b) => new Date(b.Admission) - new Date(a.Admission))
                                .map(i => (
                                    <div key={i.id}>
                                        <header><h3>{i.Institute}</h3> <h3
                                            className={s.light}>{i.Admission} - {i.Graduation}</h3></header>
                                        <h3 className={s.light}>{i.Degree}</h3>
                                        <p>{i.Speciality}</p>
                                    </div>
                                ))
                        }
                    </ul>
                </div>}
                {profile.Languages && (profile.Languages.length > 0) &&
                <div className={s.skill}>
                    <h2>Languages:</h2>
                    <ul>
                        {
                            profile.Languages.map(i => (
                                <li key={i.id}>{i.Language} - {i.Level}</li>
                            ))
                        }
                    </ul>
                </div>}
                <footer><h2>{profile.Date}</h2></footer>
            </div>
            </section>
            </Fragment>:
                <h2>CV is not filled</h2>
            }
            <Button
                disabled={!profile.FullName}
                variant="contained"
                color="primary"
                size="small"
                onClick={download}
                startIcon={<GetApp />}
            >
                Download
            </Button>
        </div>
    );
}

export default Finish;
