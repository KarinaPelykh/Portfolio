import {
  Item,
  Title,
  Images,
  Text,
  Description,
  Link,
  LinkGithub,
  Span,
  Thumb,
  Svg,
} from "./ItemProject.styled";
import icon from "../../../images/sprite.svg";
export const ItemProject = ({
  id,
  item,
  alt,
  title,

  linkProject,
  linkGithub,
  position,
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
            <Text>
              <Span>Position:</Span> {position}
            </Text>
            <Description>Description: {description}</Description>
            <Link href={linkProject}>
              <Svg height={30} width={30}>
                <use xlinkHref={icon + "#link"}></use>
              </Svg>
            </Link>
            <LinkGithub href={linkGithub}>
              <Svg height={30} width={30}>
                <use xlinkHref={icon + "#github"}></use>
              </Svg>
            </LinkGithub>
          </div>
        </Thumb>
      </Item>
    </>
  );
};
