/*
moctave.net - My personal website.
Copyright (C) 2026 mOctave

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const projects = [
	{
		"name": "Flagrank",
		"thumbnail": "project/flagrank.webp",
		"description": "Have you ever felt personally offended by a bad flag design? Sat down and spent hours of your life trying to build a tier flaglist? Watched that one CGP Grey video on loop? Well, here's the site for you. Pit flags against each other in an infinite series of head-to-head matches and let your (clearly superior) opinions on vexillology influence the flags' online Elo ratings in real time.",
		"link": "https://flagrank.moctave.net",
		"stack": [
			"lang:ejs",
			"lang:js",
			"env:nodejs",
			"frame:express",
			"frame:mongoose",
			"data:mongodb",
			"serve:nginx",
		]
	},
	{
		"name": "Bitwise",
		"thumbnail": "project/bitwise.webp",
		"description": "Bitwise is a novel RISC simulator designed to provide a stepping stone between simple graphical demos and more complicated technical systems. It provides both a GUI and CLI to allow the user to write, execute, and understand the instructions a simple computer could use to process data.",
		"link": "https://github.com/mOctave/bitwise",
		"stack": [
			"lang:java",
			"tool:actions",
			"tool:checkstyle",
			"tool:jspecify",
			"tool:junit",
		]
	},

	{
		"name": "Weftspace",
		"thumbnail": "project/weftspace.webp",
		"description": "Weftspace is my library designed to offer the maximum possible level of support for Endless Sky datafile syntax. I maintain versions of the library for both Java and Python and recently transitioned to a test-driven development approach.",
		"link": "https://github.com/mOctave/weftspace",
		"stack": [
			"lang:esdf",
			"lang:java",
			"lang:python",
			"tool:actions",
			"tool:checkstyle",
			"tool:jspecify",
			"tool:junit",
			"tool:pyright",
			"tool:pytest",
		]
	},
	{
		"name": "Trivial",
		"thumbnail": "project/trivial.webp",
		"description": "A recent project of mine, using NodeJS, Express, and Mongoose to create a competitive multiplayer trivia quiz. Now you, too, can compete for the title of ultimate party bore.",
		"link": "https://trivial.moctave.net",
		"stack": [
			"lang:ejs",
			"lang:js",
			"env:nodejs",
			"frame:express",
			"frame:mongoose",
			"data:mongodb",
			"serve:nginx",
		]
	},
	{
		"name": "Blended Ships",
		"thumbnail": "project/blended-ships.webp",
		"description": "Blended Ships is by far my largest and most polished ES plugin, attempting to introduce some element of realism (sorry Azure) into ship splicing.",
		"link": "https://github.com/mOctave/blended-ships",
		"stack": [
			"lang:esdf",
			"tool:actions",
			"tool:blender",
		]
	},
	{
		"name": "270-50",
		"thumbnail": "project/270-50.webp",
		"description": "A fun little CLI game where you can compete against a bot or a fellow human being to bribe large quantities of people into voting for you.",
		"link": "./projects/270-50.html",
		"stack": [
			"lang:java",
		]
	},
	{
		"name": "Endless Sky",
		"thumbnail": "project/es.webp",
		"description": "Endless Sky is a sandbox-style space exploration game similar to Elite, Escape Velocity, or Star Control. I do content review for the game when I have time, and also have a number of plugins and development tools for it, many of which are on this page.",
		"link": "https://github.com/endless-sky/endless-sky",
		"stack": [
			"lang:cpp",
			"lang:esdf",
			"tool:blender"
		]
	},
	{
		"name": "Eratosthenes Benchmark",
		"thumbnail": "project/eratosthenes.webp",
		"description": "An old project of mine where I benchmarked different programming languages and tried to learn a bit more about them in the process. As far as I'm aware, all the code there still should work, and you're welcome to PR another language. However, I'm not actively working on this anymore.",
		"link": "https://github.com/mOctave/eratosthenes-benchmark",
		"stack": [
			"lang:cpp",
			"lang:csharp",
			"lang:fortran",
			"lang:java",
			"lang:python",
			"lang:rust",
			"lang:swift",
		]
	},
	{
		"name": "Endless Sky Map Generator",
		"thumbnail": "project/mapgen.webp",
		"description": "At some point in 2023 I decided that Endless Sky's map needed an update, and so I pieced together a new map out of a whole bunch of screenshots. Fast forward a year and I got fed up with spending so much time doing such repetitive work, and so I made a tool to generate more professional-looking betterer maps automatically.",
		"link": "https://github.com/mOctave/mapgen",
		"stack": [
			"lang:esdf",
			"lang:java",
			"tool:actions",
		]
	},
	{
		"name": "Grapher",
		"thumbnail": "project/grapher.webp",
		"description": "An exercise in systematic design I put myself through between May 2024 and March 2025. It is a functional graphing calculator, capable of plotting two different kinds of trendline and custom error bars, and works with a custom binary file format. Considered finished, no longer maintained.",
		"link": "https://github.com/mOctave/grapher",
		"stack": [
			"lang:java",
			"tool:actions",
		]
	},
	{
		"name": "Phrasemaker",
		"thumbnail": "project/phrasemaker.webp",
		"description": "An old NodeJS module I threw together that procedurally generates random phrases, with some basic support for verb conjugation and articles.",
		"link": "https://github.com/mOctave/phrasemaker",
		"stack": [
			"lang:js",
			"env:nodejs",
		]
	},
	{
		"name": "ES Community Directory",
		"thumbnail": "project/directory.webp",
		"description": "My attempt to provide a community directory of everyone involved in Endless Sky. Now (vaguely) maintained with the help of a couple other members of the community.",
		"link": "https://moctave.github.io/es-community-directory/",
		"stack": [
			"lang:js",
		]
	},
	{
		"name": "This website!",
		"thumbnail": "project/website.webp",
		"description": "Yes, this website is also one of my projects! It is built directly from raw HTML and CSS (plus a little bit of Javascript kicking around), and hosted on a private server. Click here to view the code that makes it work.",
		"link": "https://github.com/mOctave/website",
		"stack": [
			"lang:js",
			"serve:nginx",
		]
	},
]

const stack = {
	"lang:cpp": {
		"name": "C++",
		"icon": "tech/cpp.svg",
		"category": "Languages",
	},
	"lang:csharp": {
		"name": "C#",
		"icon": "tech/csharp.svg",
		"category": "Languages",
	},
	"lang:ejs": {
		"name": "EJS",
		"icon": "tech/ejs.svg",
		"category": "Languages",
	},
	"lang:esdf": {
		"name": "ESDF",
		"icon": "tech/esdf.png",
		"category": "Languages",
	},
	"lang:fortran": {
		"name": "Fortran",
		"icon": "tech/fortran.svg",
		"category": "Languages",
	},
	"lang:java": {
		"name": "Java",
		"icon": "tech/java.svg",
		"category": "Languages",
	},
	"lang:js": {
		"name": "JavaScript",
		"icon": "tech/js.svg",
		"category": "Languages",
	},
	"lang:python": {
		"name": "Python",
		"icon": "tech/python.svg",
		"category": "Languages",
	},
	"lang:rust": {
		"name": "Rust",
		"icon": "tech/rust.svg",
		"category": "Languages",
	},
	"lang:swift": {
		"name": "Swift",
		"icon": "tech/swift.svg",
		"category": "Languages",
	},
	"env:nodejs": {
		"name": "Node.js",
		"icon": "tech/nodejs.png",
		"category": "Environments",
	},
	"frame:express": {
		"name": "express.js",
		"icon": "tech/express.svg",
		"category": "Frameworks",
	},
	"frame:mongoose": {
		"name": "Mongoose",
		"icon": "tech/mongoose.png",
		"category": "Frameworks",
	},
	"data:mongodb": {
		"name": "MongoDB",
		"icon": "tech/mongodb.ico",
		"category": "Databases",
	},
	"serve:nginx": {
		"name": "nginx",
		"icon": "tech/nginx.ico",
		"category": "Servers",
	},
	"tool:actions": {
		"name": "GitHub Actions",
		"icon": "tech/actions.svg",
		"category": "Tools",
	},
	"tool:blender": {
		"name": "Blender",
		"icon": "tech/blender.svg",
		"category": "Tools",
	},
	"tool:checkstyle": {
		"name": "Checkstyle",
		"icon": "tech/checkstyle.png",
		"category": "Tools",
	},
	"tool:jspecify": {
		"name": "JSpecify",
		"icon": "tech/jspecify.ico",
		"category": "Tools",
	},
	"tool:junit": {
		"name": "JUnit",
		"icon": "tech/junit.png",
		"category": "Tools",
	},
	"tool:pyright": {
		"name": "Pyright",
		"icon": "tech/pyright.png",
		"category": "Tools",
	},
	"tool:pytest": {
		"name": "pytest",
		"icon": "tech/pytest.webp",
		"category": "Tools",
	},
}

const categories = [
	"Languages",
	"Environments",
	"Frameworks",
	"Databases",
	"Servers",
	"Tools"
]

var cardLimit;
var activeFilters = [];
var imgPath;

// Populates all projectcontainer divs.
function populateContainers(limit, pathToImages) {
	cardLimit = limit;
	imgPath = pathToImages;
	for (let container of document.getElementsByClassName("projectcontainer")) {
		console.log("Populating container with projects");
		let projectsSoFar = 0;
		container.innerText = "";

		for (let project of projects) {
			if (projectsSoFar >= limit)
				return;

			if (match(project, activeFilters)) {
				projectsSoFar++;

				let projectDiv = document.createElement("a");
				projectDiv.classList.add("project");
				projectDiv.setAttribute("href", project.link);

				let projectIcon = document.createElement("img");
				projectIcon.setAttribute("src", pathToImages + project.thumbnail);
				projectIcon.setAttribute("alt", project.name + "'s thumbnail image");
				projectDiv.appendChild(projectIcon);

				let projectBody = document.createElement("div");
				projectBody.classList.add("projectbody");

				let projectHeader = document.createElement("h3");
				projectHeader.innerText = project.name;
				projectBody.appendChild(projectHeader);

				let projectDescription = document.createElement("p");
				projectDescription.innerText = project.description;
				projectBody.appendChild(projectDescription);
				projectDiv.appendChild(projectBody);

				let projectGlue = document.createElement("div");
				projectGlue.classList.add("projectglue");
				projectDiv.appendChild(projectGlue);

				let projectStack = document.createElement("div");
				projectStack.classList.add("projectstack");

				for (let tech of project.stack) {
					makeTechBadge(tech, projectStack);
				}
				projectDiv.appendChild(projectStack);

				container.appendChild(projectDiv);
			}
		}

		for (let i = 0; i < 8; i++) {
			let blankDiv = document.createElement("div");
			blankDiv.classList.add("project");
			blankDiv.classList.add("blank");
			container.appendChild(blankDiv);
		}
	}
}


// Determines whether the given project matches the filter
function match(project) {
	if (activeFilters.length == 0) {
		return true;
	}

	let score = 0;
	for (let filter of activeFilters) {
		if (project.stack.includes(filter))
			score++;
	}
	return (score > 0);
}

// Makes a badge for a given tech and adds it to the parent
function makeTechBadge(tech, parent) {
	const techInfo = stack[tech];

	if (!techInfo)
		return "";

	let techBadge = document.createElement("span");
	techBadge.classList.add("techbadge");

	let techIcon = document.createElement("img");
	techIcon.setAttribute("src", imgPath + techInfo.icon);
	techBadge.appendChild(techIcon);

	let techName = document.createElement("span");
	techName.innerText = techInfo.name;
	techBadge.appendChild(techName);

	parent.appendChild(techBadge);
}

// Populate all projectcontroller divs
function populateControllers() {
	for (let controller of document.getElementsByClassName("projectcontroller")) {
		console.log("Populating container");
		let categoryDivs = {};
		for (let category of categories) {
			let div = document.createElement("div");
			div.classList.add("projectcontrolpane");

			let header = document.createElement("h4");
			header.innerText = category;
			div.appendChild(header);

			controller.appendChild(div);
			categoryDivs[category] = div;
		}


		for (let tech in stack) {
			const catDiv = categoryDivs[stack[tech].category];

			let checkbox = document.createElement("input");
			checkbox.id = tech;
			checkbox.setAttribute("type", "checkbox");
			checkbox.setAttribute("name", "check:" + tech);
			checkbox.onchange = () => { changeFilter(checkbox) }
			catDiv.appendChild(checkbox);

			let checklabel = document.createElement("label");
			checklabel.setAttribute("for", "check:" + tech);
			checklabel.innerText = stack[tech].name;
			catDiv.appendChild(checklabel);

			let br = document.createElement("br");
			catDiv.appendChild(br);
		}
	}
}


// Change the currently active filters
function changeFilter(element) {
	if (element.checked) {
		activeFilters.push(element.id);
	} else {
		activeFilters.splice(activeFilters.indexOf(element.id), 1);
	}

	populateContainers(cardLimit, imgPath);
}