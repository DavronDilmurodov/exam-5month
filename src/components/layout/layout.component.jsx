import { Sidebar } from "./sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto px-5 pt-[72px]">{children}</div>
    </div>
  );
};
