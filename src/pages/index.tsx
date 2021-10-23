import Nav from "@components/navbar/menuNav";
import Header from "@partials/header/header";
import SectionOne from "@partials/sections/section1/section1";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <SectionOne />
      </main>
    </>
  );
}
