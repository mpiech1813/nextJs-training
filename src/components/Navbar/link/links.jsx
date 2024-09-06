// use Link instead of <a> to use cached page

import Link from "next/link";

const Links = () => {
  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <div>
      {links.map((link, idx) => (
        <Link href={link.path} key={idx}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
