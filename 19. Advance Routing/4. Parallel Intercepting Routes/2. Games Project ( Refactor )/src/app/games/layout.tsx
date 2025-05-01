import { ReactNode } from "react";

const GamesLayout = ({
  children,
  login,
}: {
  children: ReactNode;
  login: ReactNode;
}) => {
  return (
    <div>
      {children}
      {login}
    </div>
  );
};

export default GamesLayout;
