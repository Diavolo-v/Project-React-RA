import React from "react";

function card(props) {
    const cardstyle = {
        width: 200 + "px",
        height: 300 + "px",
        border: "1px solid black",
        flexWrap: "wrap",
        overflow: "hidden",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "lightblue",
        borderRadius: "10px",
    }
    const photo = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }
    const iconcount = props.id % 40 +1;
    const formattedIconCount = iconcount < 10 ? `0${iconcount}` : iconcount;
    const icon = `./icons/Icon14_${formattedIconCount}.png`;
    return(
        <div style={cardstyle} key={props.UserId}>
        <h4>{props.title}</h4>
        <hr/>
        <img src={icon} alt="icon" style={photo}/>
        <hr/>
          <p>{props.desc}</p>
      </div>
    )
}

export default card;