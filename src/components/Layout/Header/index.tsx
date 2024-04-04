import Header_Background from "../../../../public/images/bg-header-desktop.svg";

const Header = () => {
  return (
    <div
      className="w-full h-48 bg-cyanPrimary"
      style={{
        backgroundImage: `url(${Header_Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Header;
