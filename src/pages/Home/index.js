import React from "react";

import { Intro, Descr, 
         Img, Link, LHS, RHS,  
         Experience, Pub, Pubs,
         Title, SubTitle, Date, P,
         Bar, Item 
       } from "./styles";
import { Line } from "../../styles/index";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import Me from "../../images/IMG_8171.JPG"
import CV from '../../resume/cv.pdf';

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
            <LHS><Img src={ Me }></Img></LHS>
            <RHS>
                <p> Hello! My name is Alejandra, and I do a bunch of things. One of them is coding this website, which is in the works for sure. I do this in my free time, which does not exist, unfortunately, at the moment. However, thanks for stalking me! Hope you like the color scheme. <br></br><br></br>
                I'm currently a junior at Harvard University studying Computer Science with a minor in Physics. I like languages, so I'm learning Mandaring Chinese. I'm also in many clubs, and I tend to focus on technology and inclusivity. I will be graduating in 2024. <br></br><br></br>
                I work part time as a teaching fellow for my favorite class in Systems Programming and Machine Organization. And yes, I'm currently looking for a full-time job! I have been undocumented for most of my life in the United States (I grew up in Peru ✌️). I obtained a work permit a bit ago (July 2022), so I'm barely getting started in learning about the ins and outs of recruitment. Wish me luck! <br></br><br></br>
                Email me at <b>aperearojas@college.harvard.edu</b> </p>
            </RHS>
        </Intro>

        <Experience>

            <Title>Work Experience</Title>
            <br></br>
                <Link>read a concise resume
                <a href={CV} target="blank"> here</a>!</Link>
            <br></br>
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
            {/* C Minds ? TODO : leave */}

            <Title>Relevant Projects</Title>
            <Line></Line>
            <Bar>
                {/* TODO: AI CS182 add last homework
                TODO: CS120 problem sets - compile and describe the class? */}
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
            <Line></Line><br></br><br></br><br></br>
        </Experience>

        <Footer background={false} /> 
        </>
    );
};

export default Home;