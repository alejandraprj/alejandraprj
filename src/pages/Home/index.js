import React from "react";

import { Intro, Descr, Link,  
         Experience, Pub, Pubs,
         Title, SubTitle, Date, P,
         Bar, Item,
         B, LB, RB
       } from "./styles";
import { Line, Img } from "../../styles/index";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import CV from '../../tex/cv.pdf';
import Me from '../../images/IMG_0223.jpg';

import HUFPI from './image/hufpi.png';
import Peru from './image/PeruHMUN.png';
import Interface from './image/interface.png';
import YSPA from './image/yspa.png';
import HUFPIdoc from './documents/PereaRojas-PeruPolicyProject.pdf';
import Perudoc from './documents/PERUMUN2020-LEGAL.pdf';
import Interfacedoc from './documents/PereaRojas-WebBasedInterface.pdf';
import YSPAdoc from './documents/Team4-YSPA.pdf';

const Home = () => {
    return (
        <>
        <NavBar background={false} />
        <Intro>
            <Img src={Me}></Img>
            <p>
                hi! my name is Alejandra, and i'm a rising senior at harvard. i'm studying computer science and a little bit of physics. i find making this website as a continuous stream of updates about my passions and interests throughout my "academic career".
                <br></br><br></br>
                i came to the united states in 2014, and i grew up in peru. naturally, i grew a passion to learn languages soon after  mastering english. i'm currently trying to reach fluency in both japanese and mandarin chinese. there are more chinese restaurants in lima (peru) than in nyc. we call them chifas (吃饭-chi1fan4 means eating a meal). parallels like these are endless in the capital of peru. our last dictator to date was of japanese descent (wrote a paper on it btw).  
                <br></br><br></br>
                going back to my main passions. i love computer science and physics because they give me the freedom to use critical thinking skills and creativity to solve problems we direly need answers to. there are so many venues to helping our planet in so many fields, and i find that these two are the most natural to me. 
                <br></br><br></br>
                you can read more about my experience in the remainder of this website.
                <br></br><br></br>
                as a first generation immigrant, i'm in the process of *hopefully* obtaining a greencard. but as of november 2022, i am able to officially work a job that will not require citizenship (rip NASA). i know that my experience so far is only just the start.
            </p>
        </Intro>

        <Experience>
            <B>
                <LB><Title>Work Experience</Title></LB>
                <RB>
                    <Link><a href={CV} target="blank">
                        <u>printable version here</u>
                    </a></Link>
                </RB>
            </B>
            <Line></Line>
            <SubTitle>TeamCore PAWS</SubTitle>
            <p>Jun 2022-Present</p>
            <Descr>
                <Date>
                    Software Engineer<br></br>
                    Camrbridge, MA
                </Date>
                <P>
                    Implement a testing interface to the PAWS SMART API with improved error handling and data validation. Build data through QGIS, test interface with JSON scripts in Postman, process tests in Azure cloud computing servers, and develop an automated data processing framework in Python.
                    Deploy a new version of the PAWS API infrastructure on SMART with improved error handling and data validation. Build data-sets through QGIS and Python, test interface with JSON scripts in Postman, work with test data in Azure, and develop an automated data test processing framework with Python.
                </P>
            </Descr>
            <Line></Line>
            <SubTitle>Wildlife Conservation Society</SubTitle>
            <p>May-Aug 2022</p>
            <Descr>
                <Date>
                    Drones and Sensors Intern<br></br>
                    Remote / New York
                </Date>
                <P><br></br>
                    Built an online library through web-queries with SQL and web scraping with Python. Wrote a white-paper about the current state of camera trap distance sampling through automated tools.
                    {/* ok TODO: add github and paper */}
                </P>
            </Descr>

            <Title>Relevant Projects</Title>
            <Line></Line>
            <Bar>
                <Item>
                    <Date>
                        <p>COMPSCI51<br></br>
                        MiniML<br></br>
                        May 2022</p>
                    </Date>
                    <p>
                        Used the substitution model and dynamic scoped environment model to build an OCaml interpreter that is a subset of the OCaml language and is Turing-complete. Implemented unary and binary types and operators, higher-order functions, recursive functions, and conditionals.
                    </p>
                </Item>
                <Item>
                    <Date>
                        <p>COMPSCI61<br></br>
                        Shell<br></br>
                        Nov 2021</p>
                    </Date>
                    <p>
                        Designed and implemented an interface to handle bash shell's commands (i.e. simple sequence commands, command lists, foreground and background processes, pipelines, conditionals, the cd command, redirections, zombie process handler, and the interrupt signal.
                    </p>
                </Item>
                <Item>
                    <Date>
                        COMPSCI61<br></br> 
                        WeensyOS <br></br>
                        Oct 2021
                    </Date>
                    <p>Implemented kernel for WeensyOS, a mini x86-64 operating system. Developed kernel and process isolation, virtual page allocation, forking, shared memory, overlapping virtual memory address spaces, and an exiting function.</p>
                </Item>
            </Bar>

            <Title>Leadership & Activities</Title>
            <Line></Line>
            <SubTitle>Systems Programming Course Assistant</SubTitle>
            <Descr>
                <Date><br></br>Sep 2022-Present</Date>
                <P>Facilitate college-lever course of about 200 students on Systems Programming and Machine Organizations with C++. Hold office hours and review sections twice weekly, covering data memory and representation, assembly, kernel, caching and stdio, shell, and process synchronization.</P>
            </Descr>
            
            <Title>Relevant Coursework</Title>
            <Line></Line>
            <Descr>
                <Date><p><br></br>Relevant Classes</p></Date>
                <P>
                    Multivariable Calculus, Linear Algebra, Intro to Probability, Discrete Mathematics, Applied Linear Algebra and Big Data, Mechanics, Electromagnetism, Abstraction and Design in Computation, Systems Programming and Machine Organization, Introduction to Algorithms, and Artificial Intelligence.
                </P>
            </Descr>
            
            <Title>Writing</Title>
            <Line></Line>
            <Descr>
                <Pubs>
                    <a href={HUFPIdoc} target="blank">
                        <Pub src={HUFPI} class="doc-img"></Pub></a>
                    <a href={Perudoc} target="blank">
                        <Pub src={Peru} class="doc-img"></Pub></a>
                    <a href={Interfacedoc} target="blank">
                        <Pub src={Interface} class="doc-img"></Pub></a>
                    <a href={YSPAdoc} target="blank">
                        <Pub src={YSPA} class="doc-img"></Pub></a> 
                </Pubs>
            </Descr>
            <Line></Line>
        </Experience>

        <Footer background={false} /> 
        </>
    );
};

export default Home;