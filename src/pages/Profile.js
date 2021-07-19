import React from 'react'
import { hjwasim } from '../data'
import { motion, useViewportScroll } from "framer-motion"

const Profile = () => {

    const { scrollYProgress } = useViewportScroll()


    return (
        <div className="main">
            <motion.path
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{ pathLength: scrollYProgress }}
            />
            <div className="container py-4">
                <motion.div animate={{ y: 0 }} initial={{ y: -100 }} className="card p-3 d-flex mt-4 mb-2 flex-column align-items-center justify-content-center">
                    <img alt="" className="profile_dp" src={hjwasim.avatar} />
                    <motion.h4 drag dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }} className="lead my-2">
                        {
                            hjwasim.name
                        }
                    </motion.h4>
                    <p id="about_text">
                        {
                            hjwasim.tagline
                        }
                    </p>
                </motion.div>
                <div className="row">
                    <div className="col-9">
                        <motion.div animate={{ x: 0 }} initial={{ x: -100 }} className="card mt-3 p-4">
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
                                                <motion.li drag dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }} className="mx-2">
                                                    <motion.img id="skill_icons" whileHover={{ scale: 1.3 }}
                                                        whileTap={{ scale: 1 }} className="mx-1" alt="" src={skill.icon} />
                                                    <small className="mx-2">{skill.name}</small>
                                                </motion.li>
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
                                                <motion.li drag dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }} className="mx-2">
                                                    {
                                                        project.icons.map(icon => (
                                                            <motion.img id="skill_icons" whileHover={{ scale: 1.3 }}
                                                                whileTap={{ scale: 1 }} className="mx-1" alt={icon.name} src={icon.icon} />
                                                        ))
                                                    }
                                                    <small className="mx-2">{project.name}</small>
                                                </motion.li>
                                            )
                                        })
                                    }


                                </ul>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-3">

                        <motion.div animate={{ x: 0 }} initial={{ x: 100 }} className="card my-3 p-3">
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
                        </motion.div>

                        <motion.div animate={{ x: 0 }} initial={{ x: 100 }} className="card p-3">
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
                        </motion.div>

                        <motion.div animate={{ x: 0 }} initial={{ x: 100 }} className="card my-3 p-3">
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
                        </motion.div>

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
