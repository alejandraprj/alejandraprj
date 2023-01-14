import React from "react";
import { Container, Header, Content,
         Work, SubContainer, Title, Description } from "./styles";

// const parse = require('html-react-parser');

const Item = ({ post: { activity, course, date, description, link, link2, name, name2, title, work, place } }) => {
    return (  
      <>
      {course && 
        <Container>
        <Header>
            <Content> 
                <p>
                    {course}<br></br> 
                    <a href={link} target="blank">{name} </a>
                    {name2 && <a href={link2} target="blank">{name2}</a>}<br></br>
                    {date}
                </p>
            </Content> 
        </Header>
        <p>{description}</p>
        </Container>
      }
      {activity && 
        <Container>
            <Header><br></br>
                {activity}<br></br>
                {title}<br></br>
                {date}
            </Header>
            <Content>
                <p>{description}</p>
            </Content>
        </Container>
      }
      {work &&
        <>
        <Work>{work}</Work>
        <p>{date}</p>
        <SubContainer>
            <Title>
                {title}<br></br>
                {place}
            </Title>
            <Description>
                <Content>
                    {description}
                </Content>
            </Description>
        </SubContainer>
        </>
      }
      </>
    );
};
    
export default Item;