"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Link from next prefetches the page, this can cause slowdown if there are many links
// and may need to disable this feature

const NavigationTestPage = () => {
  const router = useRouter();

  // CLIENT SIDE NAVIGATION

  // const pathname = usePathname()
  // pathname to show just the path no url parameters

  // const searchParams = useSearchParams()
  // const paramName = searchParams.get("paramName")
  // geting just the url params
  // use .set() method to add new params

  const handleClick = () => {
    console.log("clicked");
    router.push("/");
    // router.replace("/");
    // use replace if you do not want to add new entry in the history stack
    // router.refresh()
    // refreshes or re-renders the components
    // router.back() or .forward()
    // works like arrows
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and redired</button>
    </div>
  );
};

export default NavigationTestPage;
