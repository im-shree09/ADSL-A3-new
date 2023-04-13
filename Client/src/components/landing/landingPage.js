import React from "react";

function Landing() {
    return (
        <div>
            <div style={{ float: "right", padding: "5px" }}>
                <button style={{ margin: "7px", backgroundColor: "white", color: "white", borderRadius: "5px" }}><a href="/studentLogin"> Student login</a></button>
                <button style={{ margin: "7px", backgroundColor: "white", color: "white", borderRadius: "5px" }}><a href="/instructorLogin"> Instructor login</a></button>

            </div>
            <h1 style={{ textAlign: "center", paddingTop: "70px" }}>Welcome to Walchand College Of Engineering</h1>
            <div className="homeImg">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/49/WCE_Sangli.jpg"
                    alt="WCE"
                />
                <br /><br /><br />
                <p>
                    Walchand College Of Engineering is a college in Sangli established in 1947 with a campus of 90 acres. It is one of the best colleges of Maharashtra having a very good placement stats.
                </p>
            </div>
        </div>
    );
}

export default Landing;