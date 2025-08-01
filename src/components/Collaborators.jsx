import FadeSlideIn from "./FadeSlideIn";
import "./Collaborators.scss";

const collaboratorsData = [
  { id: 1, logo: "aisec.png", alt: "AIESEC logosu" },
  { id: 2, logo: "qampus.png", alt: "Qampus logosu" },
  { id: 3, logo: "choco-labs.jpg", alt: "Choco Labs logosu" },
  { id: 4, logo: "colombia-coffee.jpg", alt: "Colombia Coffee logosu" },
  { id: 5, logo: "madrid.png", alt: "Coffee de Madrid logosu" },
  { id: 6, logo: "meet-n-study.png", alt: "Meet and Study logosu" },
  { id: 7, logo: "cartoon-lab.jpg", alt: "Cartoon Lab Coffee logosu" },
  { id: 8, logo: "ezgi-cafe.jpg", alt: "Ezgi Cafe logosu" },
  { id: 9, logo: "fafello.png", alt: "Fafello logosu" },
  { id: 10, logo: "koi.png", alt: "Koi Coffee logosu" },
  { id: 11, logo: "zaytung-zone.png", alt: "Zaytung Zone logosu" },
];

function Collaborators({ size = "default" }) {
  const basePath = "/assets/media/collaboration-logos/";
  const containerClassName = `collaborators collaborators--${size}`;
  return (
    <div className={containerClassName}>
      {collaboratorsData.map((collaborator, i) => (
        <FadeSlideIn key={collaborator.id} delay={i * 0.2}>
          <div className="collaborator">
            <img
              src={`${basePath}${collaborator.logo}`}
              alt={collaborator.alt}
            />
          </div>
        </FadeSlideIn>
      ))}
    </div>
  );
}

export default Collaborators;
