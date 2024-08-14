import {
  Item,
  Title,
  Images,
  Text,
  Description,
  Span,
  Thumb,
  Div,
  TextTechnologies,
} from "./ItemProject.styled";
import { LinkOnNetwork } from "../../LinkOnNetwork/LinkOnNetwork";
export const ItemProject = ({
  id,
  item,
  alt,
  title,
  linkProject,
  linkGithub,
  position,
  technologies,
  description,
  handelToggle,
}) => {
  return (
    <>
      <Item onClick={() => handelToggle(id)}>
        <Title>{title}</Title>
        <Thumb>
          <Images src={item} alt={alt} width={550} height={400} />
          <div>
            <Description>
              <Span> Description:</Span> {description}
            </Description>
            <TextTechnologies>
              <Span>Technologies: </Span>
              {technologies}
            </TextTechnologies>
            <Div>
              <Text>
                <Span>Position: </Span> {position}
              </Text>
              <LinkOnNetwork
                linkProject={linkProject}
                linkGithub={linkGithub}
                height={30}
                width={30}
              />
            </Div>
          </div>
        </Thumb>
      </Item>
    </>
  );
};
