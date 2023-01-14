import React from "react";
import parse from 'html-react-parser';

import { Line, Img, RHS } from "../../styles/index";
import { Intro, Experience, Title, Bar, Link, Content, ItemIm } from "./styles";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Item from "../../components/Item";

import Me from '../../images/vegas3.png';
import Resume from "../../latex/resume/cv.pdf";

import { introP, relevantCoursework, 
         workExperience, 
         activitiesList, computerProjects } from "../../latex/resume/data";

// documents
import PAWS from './image/cs91r.png'
import PAWSDOC from './documents/PereaRojas-CS91R.pdf'
import HUFPI from './image/hufpi.png';
import HUFPIdoc from './documents/PereaRojas-PeruPolicyProject.pdf';
import Interface from './image/interface.png';
import Interfacedoc from './documents/PereaRojas-WebBasedInterface.pdf';
import YSPA from './image/yspa.png';
import YSPAdoc from './documents/Team4-YSPA.pdf';

class Home extends React.Component {

    onResumeClick() { 
        window.open(Resume); 
    };

    render() {   

    return (
        <>
        
        <NavBar/>

        <Intro>
            <Img src={Me}></Img>
            <p>{parse(introP)}</p>
        </Intro>

        <Experience>

            <RHS>
                <Link href="/" onClick={this.onResumeClick}>🖨 <u>printable resume here</u></Link>
            </RHS>

            <Title>Work Experience</Title> 
            { workExperience.map (
                    (item, index) => (<Item key={index} index={index} post={item}/>)
                )
            }

            <Title>Computer Projects</Title> <Line/>
            <Bar> 
            { computerProjects.map (
                    (item, index) => (<Item key={index} index={index} post={item}/>)
                )
            } 
            </Bar>

            <Title>Leadership & Activities</Title> <Line/>
            <Bar> 
            { activitiesList.map (
                    (item, index) => (<Item key={index} index={index} post={item}/>)
                )
            } 
            </Bar>
            
            <Title>Relevant Coursework</Title> <Line/>
            <Content> {parse(relevantCoursework)} </Content>
            
            <Title>Write-ups</Title><Line/>
            <Content>
                <Bar>
                    <a href={PAWSDOC} target="blank"><ItemIm src={PAWS}></ItemIm></a>
                    <a href={HUFPIdoc} target="blank"><ItemIm src={HUFPI}></ItemIm></a>
                    <a href={Interfacedoc} target="blank"><ItemIm src={Interface}></ItemIm></a>
                    <a href={YSPAdoc} target="blank"><ItemIm src={YSPA}></ItemIm></a> 
                </Bar>
            </Content>
            <Line/>
        </Experience>

        <Footer/> 
        </>
    );
    };
};

export default Home;