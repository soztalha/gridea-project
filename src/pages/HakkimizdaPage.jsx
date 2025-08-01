import PageHeader from "../components/PageHeader";
import Slider from "../components/Slider";
import Description from "../components/Description";
import Collaborators from "../components/Collaborators";
import FadeSlideIn from "../components/FadeSlideIn";
import "./HakkimizdaPage.scss";

function HakkimizdaPage() {
  return (
    <div className="hakkimizda">
      <FadeSlideIn>
        <PageHeader title="BİLİM VE TEKNOLOJİ TOPLULUĞU" />
      </FadeSlideIn>
      <section className="section-container">
        <div className="about-section">
          <div className="content">
            <FadeSlideIn delay={0}>
              <Slider />
            </FadeSlideIn>
            <FadeSlideIn delay={0.2}>
              <Description />
            </FadeSlideIn>
          </div>
          <Collaborators />
        </div>
      </section>
    </div>
  );
}
export default HakkimizdaPage;
