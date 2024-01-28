import logo from './logo.svg';
import './App.css';
import InfoBlock from './InfoBlock';
import info from './info.json'
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from 'react-router';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate
 } from 'react-router';

function About() {

    const navigate = useNavigate();

    const navigateTo = (string) => { 
        navigate(string);
    }

    return (
        <Fragment>
            <div className="App">
                <div className="navBar">
                <button onClick={() => navigateTo('/')} className="pretendButton">Emily's Portfolio</button>
                    <div className="buttonContainer">
                        <button onClick={() => navigateTo('/about')} className="button">About</button>
                        <button onClick={() => navigateTo('/experience')} className="button">Experience</button>
                        <button onClick={() => navigateTo('/projects')} className="button">Projects</button>
                    </div>
                </div>
                <hr className="separator"></hr>
                <InfoBlock heading={info.AboutPage.heading} description={info.AboutPage.description} paragraph={info.AboutPage.paragraph} />
            </div>
        </Fragment>
    );
}

export default About;
