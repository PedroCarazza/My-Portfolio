import { TypeAnimation } from "react-type-animation"
// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";
import { About } from "@/components/About";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  DivAbout
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <p className="name">Hello, my name is</p>
            <h1>Leandro <span>Alves</span></h1>
            <DivAbout>
              <p>I am a developer </p>
              <TypeAnimation sequence={[
                "Frontend",
                2000,
                "Backend",
                2000,
              ]}
                speed={50}
                className="text-change"
                wrapper="span"
                repeat={Infinity}
              />
            </DivAbout>
            <Text type="body1" color="grey2">
            Web developer passionate about creating incredible digital solutions. Completing one year of experience in the field, I have strong skills in programming languages such as HTML, CSS, JavaScript, TypeScript, and Python, as well as popular frameworks like React and Node.js. Additionally, I have knowledge in code versioning using Git and in relational databases, especially PostgreSQL. My approach combines creativity and functionality to deliver efficient and visually appealing web products. I have worked on a variety of challenging projects, from corporate websites to complex web applications, always striving for technical excellence and user experience.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href="https://docs.google.com/document/d/1nzNOmFaPkBNkKEqHl1WPiUyu8-W3MrMR/edit?usp=share_link&ouid=103914030317596112553&rtpof=true&sd=true">
                Download CV
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <About />
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{" "}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
