import logo from "../assets/logo-no-text.png";
import "./PageHeader.scss";

function PageHeader({ title }) {
  return (
    <div className="page-header">
      <img className="logo-right" src={logo} alt="biltek-logo" />
      <h1>{title}</h1>
      <img className="logo-left" src={logo} alt="biltek-logo" />
    </div>
  );
}
export default PageHeader;
