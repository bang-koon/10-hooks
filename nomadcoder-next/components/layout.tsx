import { PropsWithChildren } from "react";
import Navbar from "./navBar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
