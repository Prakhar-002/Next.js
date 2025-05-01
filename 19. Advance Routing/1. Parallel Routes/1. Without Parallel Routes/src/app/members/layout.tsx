import { ReactNode } from "react";

import Members from "@/components/members";
import Comments from "@/components/comments";

const MembersLayout = ({ children }: ReactNode) => {
  return (
    <div>
      <h1>{children}</h1>
      <div className="flex">
        <Members />
        <Comments />
      </div>
    </div>
  );
};

export default MembersLayout;
