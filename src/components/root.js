// * Import
import { Outlet } from "react-router-dom";

// * Components
import Navigation from "../components/navigation";

export default function Root() {
  return (
    <div id="detail">
      <Outlet />
      <Navigation />
    </div>
  );
}
