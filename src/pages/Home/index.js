import React from "react";

import { Intro, Experience, Descr, Header, ForLink,  
         Title, Bar, ItemIm, 
       } from "./styles";
import { Line, Img, RHS } from "../../styles/index";

import Item from "../../components/Item";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import Me from '../../images/vegas3.png';

import PAWS from './image/cs91r.png'
import PAWSDOC from './documents/PereaRojas-CS91R.pdf'
import HUFPI from './image/hufpi.png';
import HUFPIdoc from './documents/PereaRojas-PeruPolicyProject.pdf';
import Interface from './image/interface.png';
import Interfacedoc from './documents/PereaRojas-WebBasedInterface.pdf';
import YSPA from './image/yspa.png';
import YSPAdoc from './documents/Team4-YSPA.pdf';

import Resume from "../../latex/resume/cv.pdf";

class Home extends React.Component {
    onResumeClick() {
        window.open(Resume);
    };

    render() {   

    const computerProjects = [
        {
            course: "COMPSCI 182",
            date: "Oct-Dec 2022",
            link: 'http://procaccia.info/courses/CS182-F22/pset2.pdf',
            name: "Sudoku Solver ",
            link2: 'http://procaccia.info/courses/CS182-F22/pset3.pdf',
            name2: "and Ghost AI",
            description: "Implemented a Sudoku Solver using forward checking and MRV heuristics as a computer satisfaction problem. Created a Ghost AI using Minimax and Alpha Beta Agents with alpha-beta pruning. Implemented value iteration and Q-learning on a variation of the Frozen Lake Environment.",
        },
        {
            course: "COMPSCI 51",
            name: "MiniML",
            link: 'https://book.cs51.io/pdfs/abstraction-21-project.pdf',
            date: "May 2022",
            description: "Implemented an OCaml interpreter with various features, including unary and binary types, operators, conditionals, and higher-order and recursive functions, using the substitution and dynamic scoped environment models.",
        },
        {
            course: "COMPSCI 61",
            name: "Shell",
            link: "https://cs61.seas.harvard.edu/site/2021/Shell/",
            date: "Nov 2021",
            description: "Designed and implemented an interface to handle bash shell's commands (i.e. simple sequence commands, command lists, foreground and background processes, pipelines, conditionals, the cd command, redirections, zombie process handler, and the interrupt signal."
        },
        {
            course: "COMPSCI 61",
            name: "WeensyOS",
            link: 'https://cs61.seas.harvard.edu/site/2021/WeensyOS/',
            date: "Oct 2021",
            description: "Implemented a WeensyOS kernel with features such as kernel isolation, process isolation, virtual page allocation, forking, shared memory, and overlapping virtual memory address spaces, as well as an exiting function."
        }
    ];

    const Activities = [
        {
            activity: "Harvard Psychedelics Club",
            title: "Web Director",
            date: "Jun 2022-Present",
            description: "Oversee, lead, and manage HPC web-related projects. Started, developed, and launched harvardpsychedelicsclub.org. And currently teaming up with designers to improve the client-side of the site. Also working to automate the editorial section of the app.",
            html: `<a href="https://harvardpsychedelicsclub.org" target="blank"><u></u></a>`
        },
        {
            activity: "Systems Programming and Machine Organization",
            title: "Course Assistant",
            date: "Sep-Dec 2022",
            description: "Facilitate college-lever course of about 200 students on Systems Programming and Machine Organizations with C++. Hold office hours and review sections twice weekly, covering data memory and representation, assembly, kernel, caching, shell, and synchronization."
        },
        {
            activity: "Women in Computer Science",
            title: "DIB Advocacy Director",
            date: "Aug-Dec 2022",
            description: "Led initiatives to promote diversity and inclusion within the computer science community, collaborating with the advocacy team to create events and support for underrepresented groups."
        }
    ];

    const workExperience = [
        {
            work: "TeamCore PAWS",
            title: "Software Engineer",
            date: "Jun-Dec 2022",
            place: "Cambridge, MA",
            description: "Improved error handling for the PAWS SMART API dedicated to help detect poaching traps with AI by programming an interface and framework that expedited the API's local deployment and set-up. Also worked with QGIS to craft in Python the large set of artificial data used for testing. Developed the interface with Python to handle a suite of requests in JSON form and wrote a document to detail procedures."
        },
        {
            work: "Wildlife Conservation Society",
            title: "Drones and Sensors Intern",
            date: "May-Aug 2022",
            place: "Remote / NY",
            description: "Built an article processing program with Python and crafted a set of SQL queries to help develop an online database. Researched and drafted a white-paper to review state-of-the-art AI-based video processing and conservation-related tools."
        },
        {
            work: "C Minds",
            title: "AI Intern",
            date: "Apr-Aug 2021",
            place: "Remote / MX",
            description: "Interned at a women-led action tank for ethical AI through the David Rockefeller Center for Latin American Studies. Helped install an AI Living Lab in Yucatan and establish a Diabetic Retinopathy AI-based Screening Program in Jalisco."
        }
    ];

    return (
        <>
        <NavBar background={false} />
        <Intro>
            <Img src={Me}></Img>
            <p>
                Hi! My name is Alejandra, and I'm a rising senior at Harvard studying computer science and physics. 
                I'm also working towards fluency in Japanese and Mandarin Chinese.
                On this website, you can learn more about my interests and experience.
                <br></br><br></br>
                I grew up in Peru and immigrated to the United States in 2014. 
                As a first-generation immigrant, 
                I have been immensely grateful for all the opportunities I have obtained.
                You may find that I have explored various fields, and I'm still finding my way through them. 
                However, I have learned that I love studying computer science and physics because they allow me to use my critical thinking skills and creativity to solve important problems. 
                There are so many ways to make a positive impact on the world, and they feel like the most natural fit for me.
                I now look forward to continue finding innovative ways to help the planet! 
                I received legal status at the end of 2022 in the U.S, so I'm eager to find what I can do. Thanks for reading!
            </p>
        </Intro>

        <Experience>

            <ForLink>
                <RHS>
                    <a href="/" onClick={this.onResumeClick}>🖨 <u>printable resume here</u> </a>
                </RHS>
            </ForLink>

            <Title>Work Experience</Title>
            { workExperience.map (
                (item, index) => (
                    <> <Line></Line>
                        <Item key={index} index={index} post={item}/>
                    </>)
                )
            }

            <Title>Computer Projects</Title><Line></Line>
            <Bar> {
                computerProjects.map (
                    (item, index) => (<Item key={index} index={index} post={item}/>)
                )
            } </Bar>

            <Title>Leadership & Activities</Title><Line></Line>
            <Bar> {
                    Activities.map (
                        (item, index) => (<Item key={index} index={index} post={item}/>)
                    )
            } </Bar>
            
            <Title>Relevant Coursework</Title>
            <Line></Line>
            <Descr>
                <Header>
                    <span>
                        COMPSCI 51 - Abstraction and Design in Computation,<br></br>
                        COMPSCI 61 - Systems Programming and Machine Organization,<br></br>
                        COMPSCI 120 - Introduction to Algorithms,<br></br>
                        PHYSICS 15 - Mechanics and Electromagnetism,<br></br>
                        APPMATH 120 - Applied Linear Algebra and Big Data,<br></br>
                        COMPSCI 182 - Artificial Intelligence
                    </span>
                </Header>
            </Descr>
            
            <Title>Write-ups</Title>
            <Line></Line>
            <Descr>
                <Bar>
                    <a href={PAWSDOC} target="blank">
                        <ItemIm src={PAWS} class="doc-img"></ItemIm>
                    </a>
                    <a href={HUFPIdoc} target="blank">
                        <ItemIm src={HUFPI} class="doc-img"></ItemIm></a>
                    <a href={Interfacedoc} target="blank">
                        <ItemIm src={Interface} class="doc-img"></ItemIm></a>
                    <a href={YSPAdoc} target="blank">
                        <ItemIm src={YSPA} class="doc-img"></ItemIm></a> 
                </Bar>
            </Descr>
            <Line></Line>
        </Experience>

        <Footer background={false} /> 
        </>
    );
    };
};

export default Home;