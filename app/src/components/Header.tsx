import { Link } from "react-router-dom";
import "../assets/layout/_header.scss";
import universityBackgroundImg from "../assets/images/university-background.jpg";
import NavLink from "./NavLink";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="header-container container-fluid bg-gradient">
      <div className="row align-items-center">
        <div className="col-3">
          <Link to="/">
            <img
              src={universityBackgroundImg}
              width={350}
              height={250}
              alt="University Logo"
              className="img-fluid rounded"
            />
          </Link>
        </div>
        <div className="col-7 text-center">
          <h1 className="m-0">{title}</h1>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <div className="row">
            <NavLink to="/list" title="View Bookings" />
            <NavLink to="/add" title="Create Booking" />
          </div>
        </div>
      </div>
    </div>
  );
}
