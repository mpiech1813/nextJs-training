// use Link instead of <a> so the application can use cache

import Links from "./link/links";

export default function Navbar() {
  return (
    <div>
      <div>Logo</div>
      <Links />
    </div>
  );
}
