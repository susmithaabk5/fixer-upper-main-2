import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  title: string;
}

export default function NavLink({ to, title }: NavLinkProps) {
  return (
    <div className="col">
      <Link to={to} className="link" title={title}>
        {title}
      </Link>
    </div>
  );
}
