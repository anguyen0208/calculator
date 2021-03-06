import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p>
                    © Copyright 2020 -
                    <a className="footer-link"
                       href="https://github.com/anguyen0208"
                       target="_blank"
                       rel="noopener noreferrer">
                        Anh Nguyen
                    </a>
                    <span> <span> </span>| </span>
                    <span>
                    Repo Link: {'  '}
                        <a className="footer-link"
                           href="https://github.com/anguyen0208/calculator"
                           target="_blank"
                           rel="noopener noreferrer">
                        <i className="fab fa-github"/>
                    </a>
                </span>
                </p>
            </footer>
        );
    }
}

export default Footer;

