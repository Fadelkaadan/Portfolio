import React from 'react'

import './Footer.css'

import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <a href="https://twitter.com/fadeleus" className="footer__links--twitter">
                    <FaTwitter/>
                </a>
                <a href="mailto:fadelkaadan@gmail.com" className="footer__links--email">
                    <FaEnvelope/>
                </a>
                <a href="https://github.com/fadelkaadan" className="footer__links--github">
                    <FaGithub/>
                </a>
            </div>
            <p className="legal">&copy; Built by Fadel Kaadan</p>
        </footer>
    )
}

export default Footer