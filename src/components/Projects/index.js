// import { Divider } from '@mui/material';
// import { Container, Wrapper, Title, Desc, ToogleGroups, ToogleButton, Divider } from './ProjectsStyle'
// import React, { useState } from 'react'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';


const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 10px 0px 100px 0;
  
  @media (max-width: 960px) {
    flex-direction: column;
    }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
  margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
      font-size: 16px;
  }
`;

const ToogleGroups = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ToogleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
    
`;


const Projects = ({ openModal,setOpenModal }) => {
    const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
        <Wrapper>
            <Title>Projects</Title>
            <Desc>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
            </Desc>
            <ToogleGroups>
                {toggle === "all" ? (
                <ToogleButton active value="all" onClick={()=> setToggle('all') }>All</ToogleButton>
                ) : (
                    <ToogleButton value="all" onClick={()=> setToggle('all') }>All</ToogleButton>
                )}
                <Divider />
                {toggle === "web app" ? (
                <ToogleButton active onClick={() => setToggle('web app')}>WEB APP'S</ToogleButton>
                ) : (
                    <ToogleButton onClick={() => setToggle('web app')}>WEB APP</ToogleButton>
                )}
                <Divider />
                {toggle === "android app" ? (
                <ToogleButton active onClick={() => setToggle('android app')}>ANDROID APP'S</ToogleButton>
                ) : (
                    <ToogleButton onClick={() => setToggle('android app')}>ANDROID APP</ToogleButton>
                )}
                <Divider />
                {toggle === "machine learning" ? (
                <ToogleButton active onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToogleButton>
                ) : (
                    <ToogleButton onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToogleButton>
                )}
            </ToogleGroups>
            <CardContainer>
            {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Projects
