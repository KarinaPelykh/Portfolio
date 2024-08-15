import { data } from "../../../assets/data/project";
import { ItemProject } from "../ItemProject/ItemProject";

export const ListProject = ({ handelToggle }) => {
  return (
    <ul>
      {data.map(
        ({
          id,
          item,
          alt,
          title,
          linkProject,
          linkGithub,
          position,
          technologies,
          description,
        }) => (
          <ItemProject
            key={id}
            id={id}
            item={item}
            alt={alt}
            title={title}
            linkProject={linkProject}
            linkGithub={linkGithub}
            position={position}
            technologies={technologies}
            description={description}
            handelToggle={handelToggle}
          />
        )
      )}
    </ul>
  );
};
