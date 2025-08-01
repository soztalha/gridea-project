import Collaborators from "../components/Collaborators";
import FadeSlideIn from "../components/FadeSlideIn";
import PageHeader from "../components/PageHeader";
import "./IsBirliklerimizPage.scss";

function IsBirliklerimizPage() {
  return (
    <div className="isbirliklerimiz">
      <FadeSlideIn>
        <PageHeader title="İŞ BİRLİKLERİMİZ" />
      </FadeSlideIn>
      <div className="section-container">
        <Collaborators size="large" />
      </div>
    </div>
  );
}
export default IsBirliklerimizPage;
