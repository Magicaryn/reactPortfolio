import Apps from "../components/Apps";

export default function PortfolioPage(){
    return (
        <div>
            <main>
                <div>
                    <h2>
                   Some of the applications i have previously worked on:
                   </h2>
                    <br />
                    <br />
                </div>
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                     <Apps />
                    </div>
                </div>
            </div>
            </main>
        </div>
    )
}