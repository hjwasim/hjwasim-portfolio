import React from 'react'
import { hjwasim } from '../data'

const Profile = () => {
    return (
        <div className="main">
            <div className="container py-4">
                <div className="card p-3 d-flex mt-4 mb-2 flex-column align-items-center justify-content-center">
                    <img alt="" className="profile_dp" src={hjwasim.avatar} />
                    <h4 className="lead my-2">
                        {
                            hjwasim.name
                        }
                    </h4>
                    <p id="about_text">
                        {
                            hjwasim.tagline
                        }
                    </p>
                </div>
                <div className="row">
                    <div className="col-9">
                        <div className="card mt-3 p-4">
                            <div className="px-2">
                                <div>About</div>
                                <p>
                                    {
                                        hjwasim.about
                                    }
                                </p>
                            </div>
                            <hr />

                            <div className="px-2">
                                <div>Skills</div>
                                <ul className="skills nav d-flex ">
                                    {
                                        hjwasim.skills.map(skill => {
                                            return (
                                                <li className="mx-2">
                                                    <img id="skill_icons" className="mx-1" alt="" src={skill.icon} />
                                                    <small className="mx-2">{skill.name}</small>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <hr />
                            <div className="px-2">
                                <div>Projects</div>
                                <ul className="skills nav d-flex flex-column justify-content-evenly">
                                    {
                                        hjwasim.projects.map(project => {
                                            return (
                                                <li className="mx-2">
                                                    {
                                                        project.icons.map(icon => (
                                                            <img id="skill_icons" className="mx-1" alt={icon.name} src={icon.icon} />
                                                        ))
                                                    }
                                                    <small className="mx-2">{project.name}</small>
                                                </li>
                                            )
                                        })
                                    }


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">

                        <div className="card my-3 p-3">
                            <div>
                                {
                                    hjwasim.mail.name
                                }
                            </div>
                            <hr />
                            <div>
                                <a href={hjwasim.mail.uri} className="d-flex align-items-center text-white">
                                    {
                                        hjwasim.mail.icon
                                    }
                                    <small className="mx-2">{hjwasim.mail.text}</small>
                                </a>
                            </div>
                        </div>

                        <div className="card p-3">
                            <div>Contact</div>
                            <hr />
                            <div>

                                {
                                    hjwasim.contact.map(list => (
                                        <a href={list.uri} target="_blank" rel="noreferrer" className="d-flex my-2 align-items-center text-white">
                                            {
                                                list.icon
                                            }
                                            <small className="mx-2">{list.text}</small>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="card my-3 p-3">
                            <div>Github</div>
                            <hr />
                            <div>
                                <a href={hjwasim.github.uri} target="_blank" rel="noreferrer" className="d-flex align-items-center text-white">
                                    {
                                        hjwasim.github.icon
                                    }
                                    <small className="mx-2">{hjwasim.github.text}</small>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-3 d-flex my-4 flex-column align-items-center justify-content-center">
                    <div>This Portfolio is done in love 🎉by
                        <a href={hjwasim.github.uri} target="_blank" rel="noreferrer" className="text-white">
                            <small className="mx-2">{hjwasim.name}</small>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
