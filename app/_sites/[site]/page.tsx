import { domains } from "@/utils/data";

export function generateStaticParams() {
  return Object.keys(domains).map((domain) => ({
    site: domain,
  }));
}

const Page = () => {
  return <></>;
};

export default Page;
