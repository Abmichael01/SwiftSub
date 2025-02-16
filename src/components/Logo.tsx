import { Zap } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  icon?: boolean;
}

const Logo: React.FC<Props> = ({ icon }) => {
  return (
    <Link to="/" className="flex items-center gap-2">
      {/* Swift movement icon */}
      <Zap className="text-primary" size={30} />

      {/* Brand Name */}
     {!icon && (
       <h2 className="text-xl font-semibold tracking-wide">SwiftSub</h2>
     )}
    </Link>
  );
};

export default Logo;
