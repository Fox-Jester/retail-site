import { Link } from "react-router-dom";
import "./IconGroup.css";
import type { ReactNode } from "react";

interface IconGroupProps {
  children: ReactNode;
  text: string;
}

export default function IconGroup({ children, text }: IconGroupProps) {
  return (
    <>
      <Link to="login">
        <div className="icon-group">
          {children}
          <span>{text}</span>
        </div>
      </Link>
    </>
  );
}
