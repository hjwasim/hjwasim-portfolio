import nodeIcon from './assets/nodejs.svg'
import jsIcon from './assets/js.svg'
import reactIcon from './assets/reactjs.svg'
import css3Icon from './assets/css3.svg'
import k8sIcon from './assets/k8s.svg'
import laravelIcon from './assets/laravel.svg'
import mongodbIcon from './assets/mongodb.svg'
import dockerIcon from './assets/docker.svg'
import gcpIcon from './assets/google-cloud.svg'
import expressIcon from './assets/expressjs.svg'
import firebaseIcon from './assets/firebase.svg'
import socketioIcon from './assets/socketio.svg'

import { AiOutlineMail, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';


export const hjwasim = {
    name: 'Hjwasim',
    avatar: require('./assets/dp.jpg').default,
    tagline: 'Cyber Security Student — Full Stack Dev | Cloud Enthusiast',
    about: "I'm hjwasim from Chennai 🎉 , I'm a Engineering Student at Hindustan University, Chennai. I love in making Apps and exploring new Technologies.🚀",
    skills: [
        {
            icon: reactIcon,
            name: 'ReactJS'
        },
        {
            icon: gcpIcon,
            name: 'Google Cloud'
        },
        {
            icon: jsIcon,
            name: 'JavaScript'
        },
        {
            icon: expressIcon,
            name: 'ExpressJS'
        },
        {
            icon: firebaseIcon,
            name: 'Firebase'
        },
        {
            icon: nodeIcon,
            name: 'NodeJS'
        },
        {
            icon: css3Icon,
            name: 'CSS3'
        },
        {
            icon: k8sIcon,
            name: 'Kubernetes'
        },
        {
            icon: laravelIcon,
            name: 'Laravel'
        },
        {
            icon: socketioIcon,
            name: 'Socket IO'
        },
        {
            icon: mongodbIcon,
            name: 'MongoDB'
        },
        {
            icon: dockerIcon,
            name: 'Docker'
        },
    ],
    projects: [
        {
            name: 'NodeJs Rest API Service',
            icons: [
                {
                    icon: nodeIcon,
                    name: 'NodeJS'
                }
            ]
        },
        {
            name: 'Laravel Rest API Service',
            icons: [
                {
                    icon: laravelIcon,
                    name: 'Laravel'
                }
            ]
        },
        {
            name: 'React + Firebase Form',
            icons: [
                {
                    icon: reactIcon,
                    name: 'React'
                },
                {
                    icon: firebaseIcon,
                    name: 'Firebase'
                }
            ]
        },
        {
            name: 'React - SocketIO Chat App',
            icons: [
                {
                    icon: reactIcon,
                    name: 'ReactJS'
                },
                {
                    icon: socketioIcon,
                    name: 'Socket IO'
                }
            ]
        },
        {
            name: 'MERN - JWT Authentication System using Refresh Token',
            icons: [
                {
                    icon: reactIcon,
                    name: 'ReactJS'
                },
                {
                    icon: expressIcon,
                    name: 'ExpressJS'
                },
                {
                    icon: nodeIcon,
                    name: 'NodeJS'
                },
                {
                    icon: mongodbIcon,
                    name: 'MongoDB'
                }
            ]
        },
        {
            name: 'Kubernetes Multi-tenancy Cluster',
            icons: [
                {
                    icon: k8sIcon,
                    name: 'Kubernetes'
                },
                {
                    icon: dockerIcon,
                    name: 'Docker'
                }
            ]
        }
    ],
    mail: {
        name: 'Mail',
        icon: <AiOutlineMail />,
        text: 'hjwasim001@gmail.com',
        uri: 'mailto: hjwasim001@gmail.com',
    },
    github: {
        name: 'Github',
        uri: 'https://github.com/hjwasim',
        text: 'github.com/hjwasim',
        icon: <AiFillGithub />
    },
    contact: [
        {
            name: 'Twitter',
            icon: <AiOutlineTwitter />,
            text: '/hjwasim',
            uri: 'https://twitter.com/hjwasim'
        },
        {
            name: 'LinkedIn',
            icon: <AiFillLinkedin />,
            text: '/hjwasim',
            uri: 'https://linkedin.com/in/hjwasim'
        },
        {
            name: 'Instagram',
            icon: <AiFillInstagram />,
            text: '/hj_wazim',
            uri: 'https://instagram.com/hj_wazim'
        }
    ]

}
