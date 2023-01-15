import React from "react";
import parse from 'html-react-parser';
import { Container, Header, Content,
         Work, SubContainer, Title, Description } from "./styles";

const Item = ({ post: { activity, course, date, description, link, name, title, work, place } }) => {
    return (  
      <>
      {course && 
        <Container>
            <Header>
                <Content> 
                    <p>
                        {course}<br></br> 
                        {/* eslint-disable-next-line  */}
                        {link && <a href={link} target="blank">{name} </a> || parse(name)}<br></br>
                        {date}
                    </p>
                </Content> 
            </Header>
            <p>{parse(description)}</p>
        </Container>
      }
      {activity && 
        <Container>
            <Header><br></br>
                {activity}<br></br>
                {title}<br></br>
                {date}
            </Header>
            <Content> <p>{parse(description)}</p> </Content>
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
                    {parse(description)}
                </Content>
            </Description>
        </SubContainer>
        </>
      }
      </>
    );
};
    
export default Item;