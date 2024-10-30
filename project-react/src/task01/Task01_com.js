import React,{ useState } from "react";
import Card from "./card";
import data from "./posts.json";
function Task01() {


  const generalstyle = {
    display: "grid",
    gridTemplateColumns: "repeat(6,1fr)",
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    flexWrap: "wrap",
  };
 const sliderstyle = {
    marginleft: "auto",
    marginRight: "auto",
 }
 const style = {
    width:100+"%",
 }
const [sliderValue, setSliderValue] = useState();

const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
};
return (
    <div style={style}>
        <input 
            type="range" 
            min={0} 
            max={100} 
            style={sliderstyle} 
            onChange={handleSliderChange} 
        />
        <div style={generalstyle}>
            {data && data.slice(0, sliderValue).map((post, index) => (
                <Card key={post.userId} title={post.title} id={post.id} desc={post.body} />
            ))}
        </div>
    </div>
);
}

export default Task01;
