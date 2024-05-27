import { Link } from 'react-router-dom';

export default function ResumePage() {
    return (
        <div>
            <main>
                <h1>Caryn Behnke</h1>
                <p></p>
                <h3>Summary:</h3>
                <p>Results-focused management professional offering 10+ years of progressive leadership
                experience. Slowly branching out into the technical world with the completion of the
                6 month full stack software development course. Would love to expand my knowledge in the
                world of UI/UX.</p>
                <h3>Work History:</h3>
                <ul>
                <li>Portillos Hot Dogs, Manager</li>
                <li>Buffalo Wild Wings, Assistant General Manager</li>
                <li>Dave and Busters, Areo Operations Manager</li>
                <li>Famous Daves, Manager</li>
                <li>Taco Bell, Restaurant General Manager</li>
                </ul>
                <h3>Education:</h3>
                <p>Northwestern University Full stack coding bootcamp, June 2024.
                    Joliet Junior College GED, 2006.
                </p>
                <h3>Skills:</h3>
                <ul>
                    <li>Team management</li>
                    <li>Leadership Skills</li>
                    <li>Budgeting</li>
                    <li>Profit and Loss</li>
                    <li>Labor Cost Analysis</li>
                    <li>Budgeting</li>
                    <li>Scheduling software</li>
                    <li>Root Cause Analysis and Problem Solving</li>
                </ul>

                <br />
                <Link to="/public/assets/Caryn-Behnke.pdf" target="_blank" download>Download Resume</Link>
            </main>
        </div>
    )
}