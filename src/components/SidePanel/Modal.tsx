import { ReactNode } from "react";

export const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overlay">
      <div className="modal">{children}</div>
    </div>
  );
};
