import React from "react";

import { Intro, Experience, Descr, Header, Link,  
         Title, SubTitle, Date, P,
         Bar, Item, ItemIm, 
       } from "./styles";
import { Line, Img, RHS } from "../../styles/index";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import Me from '../../images/vegas3.png';

import CV from '../../tex/cv.pdf';
import PAWS from './image/cs91r.png'
import PAWSDOC from './documents/PereaRojas-CS91R.pdf'
import HUFPI from './image/hufpi.png';
import HUFPIdoc from './documents/PereaRojas-PeruPolicyProject.pdf';
import Interface from './image/interface.png';
import Interfacedoc from './documents/PereaRojas-WebBasedInterface.pdf';
import YSPA from './image/yspa.png';
import YSPAdoc from './documents/Team4-YSPA.pdf';

const Home = () => {
    return (
        <>
        <NavBar background={false} />
        <Intro>
            <Img src={Me}></Img>
            <p>
            Hi! My name is Alejandra, and I'm a rising senior at Harvard 
            studying computer science and physics. 
            I'm also working towards fluency in Japanese and Mandarin Chinese.
            On this website, you can learn more about my interests and experience.
            <br></br><br></br>
            I grew up in Peru and immigrated to the United States in 2014. 
            As a first-generation immigrant, 
            I have been immensely grateful for all the opportunities I have obtained.
            You may find that I have explored various fields, and 
            I'm still finding my way through them. 
            However, I have learned that I love studying computer science and physics 
            because they allow me to use my critical thinking skills and creativity 
            to solve important problems. 
            There are so many ways to make a positive impact on the world, 
            and they feel like the most natural fit for me.
            I now look forward to continue finding innovative ways to help the planet! 
            I received legal status at the end of 2022 in the U.S, 
            so I'm eager to find what I can do. Thanks for reading!
            </p>
        </Intro>

        <Experience>
            <Link>
                <RHS>
                <a href={CV} target="blank">🖨 <u>printable resume here</u> </a>
                </RHS>
            </Link>
            <Title>Work Experience</Title>
            <Line></Line>
            <SubTitle>TeamCore PAWS</SubTitle>
            <p>Jun-Dec 2022</p>
            <Descr>
                <Date>
                    Software Engineer<br></br>
                    Cambridge, MA
                </Date>
                <P>
                <Link>Implemented a testing interface to the <a href={'https://github.com/lily-x/paws-smart-api'} target="blank">PAWS SMART API</a> for improved error handling and data validation. Built data through QGIS and Python, developed JSON scripts for a suite of data, and developed a testing interface to automate testing requests to Azure.</Link>
                </P>
            </Descr>
            <Line></Line>
            <SubTitle>Wildlife Conservation Society</SubTitle>
            <p>May-Aug 2022</p>
            <Descr>
                <Date>
                    Drones and Sensors Intern<br></br>
                    Remote / NYC
                </Date>
                <P>
                    Created an online library using SQL and Python web scraping. Wrote a white-paper on camera trap distance sampling and related tools. Developed a Python script to automate news and scholar article processing.
                    {/* ok TODO: add github and paper */}
                </P>
            </Descr>
            <Line></Line>
            <SubTitle>C Minds</SubTitle>
            <p>Apr-Aug 2021</p>
            <Descr>
                <Date>
                    Summer Program at DRCLAS<br></br>
                    Remote / MX
                </Date>
                <P>
                <Link>Worked at a women-led action tank for ethical AI in Mexico, assisted in the early stages of installing a Living Lab in Yucatan and a Diabetic Retinopathy AI-based Screening Program in Jalisco.</Link>
                </P>
            </Descr>

            <Title>Relevant Projects</Title>
            <Line></Line>
            <Bar>
                <Item>
                    <Header>
                        <Link>
                            <p>COMPSCI 182<br></br> 
                            <a href={'http://procaccia.info/courses/CS182-F22/pset2.pdf'} target="blank">Sudoku Solver </a>
                            <a href={'http://procaccia.info/courses/CS182-F22/pset3.pdf'} target="blank">and Ghost AI</a>
                            <br></br>
                            Oct-Dec 2022</p>
                        </Link> 
                    </Header>
                    <p>Implemented a Sudoku Solver using forward checking and MRV heuristics as a CSP. Created a Ghost AI using Minimax and Alpha Beta Agents with alpha-beta pruning. Implemented value iteration and Q-learning on a variation of the Frozen Lake Environment.</p>
                </Item>
                <Item>
                    <Header>
                        <Link><p>COMPSCI 51<br></br>
                        <a href={'https://book.cs51.io/pdfs/abstraction-21-project.pdf'} target="blank">MiniML</a><br></br>
                        May 2022</p></Link>
                    </Header>
                    <p>
                        Implemented an OCaml interpreter with various features, including unary and binary types, operators, conditionals, and higher-order and recursive functions, using the substitution and dynamic scoped environment models. 
                    </p>
                </Item>
                <Item>
                    <Header>
                        <Link><p>COMPSCI 61<br></br>
                        <a href={"https://cs61.seas.harvard.edu/site/2021/Shell/"} target="blank">Shell</a><br></br>
                        Nov 2021</p></Link>
                    </Header>
                    <p>Designed and implemented an interface to handle bash shell's commands (i.e. simple sequence commands, command lists, foreground and background processes, pipelines, conditionals, the cd command, redirections, zombie process handler, and the interrupt signal.
                    </p>
                </Item>
                <Item>
                    <Header>
                        <Link><p>COMPSCI61<br></br> 
                        <a href={'https://cs61.seas.harvard.edu/site/2021/WeensyOS/'} target="blank">WeensyOS</a><br></br>
                        Oct 2021</p></Link> 
                    </Header>
                    <p>Implemented a WeensyOS kernel with features such as kernel isolation, process isolation, virtual page allocation, forking, shared memory, and overlapping virtual memory address spaces, as well as an exiting function. </p>
                </Item>
            </Bar>

            <Title>Leadership & Activities</Title>
            <Line></Line>
            <Bar>
                <Item>
                    <Header><br></br>
                        Harvard Psychedelics Club (HPC)<br></br>
                        Web Director<br></br>
                        Jun 2022-Present
                    </Header>
                    <Link><p>Oversee, manage, and lead web-related projects at <a href="https://harvardpsychedelicsclub.org" target="blank"><u>harvardpsychedelicsclub.org</u></a>. 
                    Develop strategies to improve user experience, increase website traffic, and achieve the organization's objectives. </p></Link>
                </Item>
                <Item>
                    <Header><br></br>
                        Systems Programming and Machine Organization<br></br>
                        Course Assistant<br></br>
                        Sep-Dec 2022
                    </Header>
                    <p>Facilitate college-lever course of about 200 students on Systems Programming and Machine Organizations with C++. Hold office hours and review sections twice weekly, covering data memory and representation, assembly, kernel, caching, shell, and synchronization.</p>
                </Item>
                <Item>
                    <Header><br></br>
                        Women in Computer Science (WiCS)<br></br>
                        DIB Advocacy Director<br></br>
                        Aug-Dec 2022
                    </Header> 
                    <p>Led initiatives to promote diversity and inclusion within the computer science community, collaborating with the advocacy team to create events and support for underrepresented groups.</p>
                </Item>
            </Bar>
            
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
                        {/* PHYSICS 143, COMPSCI 161, COMPSCI 124*/}
                    </span>
                </Header>
            </Descr>
            
            <Title>Write-ups</Title>
            <Line></Line>
            <Descr>
                <Bar>
                    {/* 
                        <a href={WCSDoc} target="blank">
                            <ItemIm src={WCS} class="doc-img"></ItemIm>
                        </a>
                    */}
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

export default Home;