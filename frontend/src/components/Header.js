import "./Header.css";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <div className="header-div">
      <img src="./logo.png" className="logo"></img>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        What factors correlate with a school's/district's PSSA Scores?
      </Typography>
    </div>
  );
};

export default Header;
