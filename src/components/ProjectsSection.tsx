import NextIcon from "../icons/NextIcon";
import ReduxIcon from "../icons/ReduxIcon";
import ProjectCard from "./ProjectCard";
import ReactIcon from "../icons/ReactIcon";
import catwiki from "../assets/catwiki.png";
import redditClone from "../assets/reddit-clone.png"
import mapAppScreen from "../assets/mapapp.png"
import BootstrapIcon from "../icons/BootstrapIcon";
import ApiIcon from "../icons/ApiIcon";

const ProjectsSection = () => {
  return (
    <section className="w-full flex flex-col gap-8 items-center py-12 px-6">
      <h2 className="text-4xl font-bold">Projects</h2>
      <div className="w-full flex flex-col items-center gap-8">
        <ProjectCard
          stack={[NextIcon, ReduxIcon, ApiIcon]}
          title="CatWiki"
          description="At Cat Wiki, we're passionate about cats and we want to share our knowledge with the world. That's why we've created a library of articles covering everything you could ever want to know about cats, from their history and biology to their behavior and care."
          imgSrc={catwiki}
          githubLink="https://github.com/fernandouy/cat-wiki"
          previewLink="https://cat-wiki-inky-ten.vercel.app/"
        />
        <ProjectCard
          stack={[ReactIcon, ReduxIcon, ApiIcon]}
          title="Reddit Clone"
          description="This project is a clone of Reddit, a popular social network and discussion website. The project is built using React, Redux Toolkit, and consumes data from the Reddit API."
          imgSrc={redditClone}
          githubLink="https://github.com/fernandouy/reddit-clon/"
          previewLink="https://taupe-mooncake-66e5a0.netlify.app/"
        />
        <ProjectCard
          stack={[ReactIcon, BootstrapIcon, ApiIcon]}
          title="MapsApp"
          description="Map application for searching locations and tracing routes between two places. This map application was created using Bootstrap, React technologies and we use useContext to maintain the application state, in addition we consume the Mapbox API which we use to display the map, pins and routes."
          imgSrc={mapAppScreen}
          previewLink="https://mapapp-fg.netlify.app/"
          githubLink="https://github.com/fernandouy/maps-app"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
