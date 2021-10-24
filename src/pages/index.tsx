import Nav from "@components/navbar/menuNav";
import Header from "@partials/header/header";
import SectionOne from "@partials/sections/section1/section1";
import SectionTwo from "@partials/sections/section2/section2";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <SectionOne />
        <SectionTwo />
      </main>
    </>
  );
}
