import React from "react";
import "./template.css";


const Template = ({ data }) => {
return (
<div className="canvas">
<h1 className="title">Scrum Team Charter Canvas</h1>
<p className="subtitle">Who we are, what matters to us and how we use Scrum</p>


<div className="row">
<div className="box large">
<h2>Who Are We And What Do We Do</h2>
<p>{data?.whoWeAre}</p>
</div>
<div className="col">
<div className="box">
<h2>Team Name</h2>
<p>{data?.teamName}</p>
</div>
<div className="box">
<h2>Our Purpose/Mission/Goals</h2>
<p>{data?.purpose}</p>
</div>
<div className="box">
<h2>Our Values/Principles/Prime Directive</h2>
<p>{data?.values}</p>
</div>
</div>
</div>


<div className="row">
<div className="box medium">
<h2>Things We Always Do</h2>
<p>{data?.alwaysDo}</p>
</div>
<div className="box medium">
<h2>How Do We Make Decisions?</h2>
<p>{data?.decisions}</p>
</div>
</div>


<div className="row">
<div className="box medium">
<h2>Things We Never Do</h2>
<p>{data?.neverDo}</p>
</div>
<div className="box medium">
<h2>What do we do when the rules are broken?</h2>
<p>{data?.rulesBroken}</p>
</div>
</div>


<div className="row">
<div className="box medium">
<h2>When & How Do We Raise Issues / Ask For Help?</h2>
<p>{data?.askHelp}</p>
</div>
<div className="box medium">
<h2>...</h2>
<p>{data?.extraNorms}</p>
</div>
</div>


<div className="row scrum">
<div className="box">
<h2>How Will We Keep The Sprint Backlog Updated?</h2>
<p>{data?.sprintBacklog}</p>
</div>
<div className="box">
<h2>How We Ensure An Increment Is Created Each Sprint?</h2>
<p>{data?.increment}</p>
</div>
<div className="box">
<h2>What Are The Boundaries Of Our Self-Management?</h2>
<p>{data?.boundaries}</p>
</div>
<div className="box">
<h2>...</h2>
<p>{data?.extraScrum}</p>
</div>
</div>


<div className="row">
<div className="box large">
<h2>Team Strengths & Advantages</h2>
<p>{data?.strengths}</p>
</div>
<div className="box large">
<h2>Team Weaknesses & Risks</h2>
<p>{data?.weaknesses}</p>
</div>
</div>
</div>
);
};


export default Template;