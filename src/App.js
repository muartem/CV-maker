import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import Main from "./Main/Main";
import Info from "./Info/Info";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Languages from "./Languages/Languages";
import Finish from "./Finish/Finish";

import s from './App.module.css';


function App() {
    const [profile, setProfile] = useState({
        Date: (new Date()).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        })
    })

  let color = 0

  const changeColor = () =>{
      color +=30
      if (color >= 360) color = 0
      document.body.style.backgroundColor = `hsl(${color},70%,60%)`
  }

  const updateProfile = (data) =>{
        setProfile(state => ({
            ...state,
            ...data
        }))
  }
    return (
    <div className="App">
        <div className={s.container}>
            <Router>
            <nav className={s.nav}>
                <NavLink
                    exact
                    to="/"
                    onClick={changeColor}
                    activeClassName={s.selected}
                >Start</NavLink >
                <NavLink  to="/info" activeClassName={s.selected} onClick={changeColor} >User</NavLink>
                <NavLink to="/edu" activeClassName={s.selected} onClick={changeColor}>Education</NavLink>
                <NavLink to="/exp" activeClassName={s.selected} onClick={changeColor}>Experience</NavLink>
                <NavLink to="/skill" activeClassName={s.selected} onClick={changeColor}>Skills</NavLink>
                <NavLink to="/lang" activeClassName={s.selected} onClick={changeColor}>Languages</NavLink>
                <NavLink to="/end" activeClassName={s.selected} onClick={changeColor}>Finish</NavLink>
            </nav>
            <section>
                <Switch>
                    <Route exact path="/">
                        <Main update={updateProfile} profile={profile}/>
                    </Route>
                    <Route path="/info">
                        <Info  update={updateProfile} profile={profile}/>
                    </Route>
                    <Route path="/edu">
                        <Education  update={updateProfile} profile={profile}/>
                    </Route>
                    <Route path="/exp">
                        <Experience  update={updateProfile} profile={profile}/>
                    </Route>
                    <Route path="/skill">
                        <Skills  update={updateProfile} profile={profile}/>
                    </Route>
                    <Route path="/lang">
                        <Languages  update={updateProfile} profile={profile}/>
                    </Route>
                    <Route path="/end">
                        <Finish profile={profile}/>
                    </Route>
                </Switch>
            </section>
            </Router>
        </div>
    </div>
  );
}

export default App;
