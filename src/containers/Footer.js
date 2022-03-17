import React from "react";

function Footer() {
  return (
    <footer className="footer" style={{padding: '10px'}}>
      <div className="content has-text-centered">
        <p>
         A React project by{" "}
          <a href="https://github.com/MeenaAlemiJalal" target="_blank" rel="noreferrer">
            Meena Alemi Jalal
          </a>
        </p>

        <hr />
        <a
          href=""
          target="_blank" rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
        style={{marginLeft: '20px'}}
          target="_blank" 
          rel="noreferrer"
          href="https://github.com/MeenaAlemiJalal">
          Github
        </a>
      </div>
    </footer>

  )
}

export default Footer
