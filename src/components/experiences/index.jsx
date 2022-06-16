import React from 'react'
import './experiences.css'

const Experiences = () => {
  return (
    <div class="experiences">
      <h3 class="experiences__header">Experience</h3>
      <div class="experiences__company">
        <div class="experiences__company-header">
          <span class="experiences__company-header-durability">2020 - now</span>
          <h3 class="experiences__company-header-name">University projects</h3>
          <p class="experiences__company-header-description">I was a bit lazy so there are not many projects
            except the ones I <i>had</i> to make. Gonna fix this in the future since I'm still learning a lot of
            stuff.</p>
        </div>

        <div class="experiences__company-project">
          <span class="experiences__company-project-role">All-in-one person</span>
          <h3 class="experiences__company-project-name">TetriX Reverse</h3>
          <p class="experiences__company-project-description">Basically a Tetris but with two players at one
            keyboard. It was my first year course project, done on C# + WPF. I got really fired up with an idea
            of creating a nice full-pledged game with my own art and music.</p>
          <ul class="experiences__company-project-responsibilities">
            <li>Written a bunch of code</li>
            <li>Copypasted another bunch of code</li>
            <li>Drawn the art <span class="spoiler-text">(don't tell anyone it was a bunch of anime
              girls)</span></li>
            <li>Written background music <span class="spoiler-text">(for the first time in my life)</span></li>
          </ul>
        </div>

        <div class="experiences__company-project">
          <span class="experiences__company-project-role">sub-full-stack dev</span>
          <h3 class="experiences__company-project-name">Travel Agency</h3>
          <p class="experiences__company-project-description">A combo of Java (Spring), MongoDB and React. It's
            my second year course project, and I'm still working on it.</p>
          <ul class="experiences__company-project-responsibilities">
            <li>Typed some abc's</li>
            <li>Erased them and wrote a proper code</li>
            <li>Learned how to work with NoSQL</li>
            <li>Made sure that I hate Java</li>
          </ul>
        </div>
      </div>

      <div class="experiences__company">
        <div class="experiences__company-header">
          <span class="experiences__company-header-durability">For my whole life</span>
          <h3 class="experiences__company-header-name">Planet Earth</h3>
          <p class="experiences__company-header-description">The best place for creatures like us.</p>
        </div>

        <div class="experiences__company-project">
          <span class="experiences__company-project-role">A mere hooman</span>
          <h3 class="experiences__company-project-name">Staying alive</h3>
          <p class="experiences__company-project-description">Quite an important deed, indeed.</p>
          <ul class="experiences__company-project-responsibilities">
            <li>Ate</li>
            <li>Slept</li>
            <li>Studied JS</li>
            <li>Studied Japanese <span class="spoiler-text">(man, what a weeb)</span></li>
            <li>Procrastinated (only a bit) ((seriously))</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experiences