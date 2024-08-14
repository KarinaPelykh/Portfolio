import { LinkGithub, WrapperLink, Svg } from "./LinkOnNetwork.styled";
import icon from "../../images/sprite.svg";
export const LinkOnNetwork = ({ linkProject, linkGithub, height, width }) => {
  return (
    <WrapperLink>
      <a href={linkProject} target="_blank">
        <Svg height={height} width={width}>
          <use xlinkHref={icon + "#link"}></use>
        </Svg>
      </a>
      <LinkGithub href={linkGithub} target="_blank">
        <Svg height={height} width={width}>
          <use xlinkHref={icon + "#github"}></use>
        </Svg>
      </LinkGithub>
    </WrapperLink>
  );
};
