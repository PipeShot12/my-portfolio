import "./projects.css";
import json from "./json";
import { spin, loadOrNot } from "../helpers";
import useFakePagination from "../hook";
export default function Projects() {
  const { items, current, setProjects, isFakeLoading } = useFakePagination({
    json
  });

  return (
    <section id="projects" className="projects">
      <h2>These are some of my projects</h2>
      <div className="ajust">
        {items.map((item, index) => {
          return (
            <div className="border" key={`project + ${index}`}>
              <a
                className="project-tile"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <img className="images" src={item.src} alt={item.alt} />
                <p>
                  <span>{item.title}</span>
                </p>
              </a>
            </div>
          );
        })}
      </div>
      <button
        disabled={isFakeLoading}
        className="loadProjects"
        onClick={() => setProjects(loadOrNot(json, current))}
      >
        <p className={spin(json, current, isFakeLoading)}></p>
      </button>
    </section>
  );
}
