import React from 'react';
import Virtual from '../../assets/images/virtual-guardian.png';
import Game from '../../assets/images/gameSearch.png';
import Thank from '../../assets/images/ThankYou.jpg';
import Bday from '../../assets/images/tristan-smile.jpg';
import Run from '../../assets/images/run.jpg';

function Portfolio() {
 
  return (
    <section>
    <h1 data-testid="h1tag" id="portfolio">Portfolio</h1>
    <div>



    <div className="projects">
        <ul>
            <li className="larger">
                <a className="guard" href="https://password-manager-gadaell.herokuapp.com/" target="_blank">
                <img  src={Virtual}  alt="Virtual Guardian" />
                    <h3 className="searchtext">Virtual Guardian</h3>
                </a>
            </li>
            <li>
                <a className="birthday" href="https://absius.github.io/tristan-birthday" target="_blank">
                <img  src={Bday}  alt="Virtual Guardian" />
                    <h3 className="btext">Tristan's Birthday RSVP</h3>
                </a>
            </li>
            <li>
                <a className="search" href="https://katharinechumble.github.io/miniature-fiesta/" target="_blank">
                <img  src={Game}  alt="Virtual Guardian" />
                    <h3 className="searchtext">Game Search</h3>
                </a>
            </li>
            <li>
                <a className="run" href="https://absius.github.io/run-buddy" target="_blank">
                <img  src={Run}  alt="Virtual Guardian" />
                    <h3 className="runtext">Run Buddy</h3>
                </a>
            </li>
            <li>
                <a className="thank" href="https://absius.github.io/thank-you" target="_blank">
                <img  src={Thank}  alt="Virtual Guardian" />
                    <h3 className="thanktext">Thank You</h3>
                </a>
            </li>
        </ul>
    </div>
</div>
</section>
  );
}

export default Portfolio;
