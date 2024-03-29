import { TypeAnimation } from "react-type-animation"
// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
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
            <p className="name">Olá, meu nome é</p>
            <h1>Pedro <span>Carazza</span></h1>
            <DivAbout>
              <p>Eu sou desenvolvedor</p>
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
            Desenvolvedor Web iniciando sua jornada no mundo da tecnologia como profissional. Sempre fui fascinado na evolução da tecnologia e na criação de suas ferramentas e aparelhos para o avanço da sociedade. Através de projetos possuo o domínio nas tecnologias em HTML5, CSS3, Javascript, Typescript, Python. Experiência em soluções baseadas em React JS, Node JS, Express, TypeORM e PostgreSQL. Prática no uso de bibliotecas como Axios, React Router, React Hook Form, Zod, Styled Components, TailwindCSS, dentre outras. Sou uma pessoa bem comunicativa e extrovertida, mas sempre trabalhando com muita responsabilidade e comprometimento. O que busco em minha carreira profissinal é o aperfeiçoamento das minhas habilidades técnicas e também a consolidação, não só minha, mas também da empresa no qual estou vinculado. Sempre buscando excelência técnica e a melhor experiência possível do usuário.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Meus Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href="https://drive.google.com/file/d/1PF6Zddx50FfQt9g4d2f3JmXG8HvUogRP/view?usp=sharing">
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
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos meus{" "}
                <Text as="span" color="brand5">
                  Projetos
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
