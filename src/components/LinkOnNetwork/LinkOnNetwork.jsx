import { Link, WrapperLink, Svg } from "./LinkOnNetwork.styled";
import icon from "../../images/sprite.svg";
export const LinkOnNetwork = ({ linkProject, linkGithub, height, width }) => {
  return (
    <WrapperLink>
      <Link href={linkProject} target="_blank">
        <Svg height={height} width={width}>
          <use xlinkHref={icon + "#link"}></use>
        </Svg>
      </Link>
      <Link href={linkGithub} target="_blank">
        <Svg height={height} width={width}>
          <use xlinkHref={icon + "#github"}></use>
        </Svg>
      </Link>
    </WrapperLink>
  );
};
