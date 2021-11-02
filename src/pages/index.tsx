import Nav from "@components/navbar/menuNav";
import Header from "@partials/header/header";
import SectionOne from "@partials/sections/section1/section1";
import SectionTwo from "@partials/sections/section2/section2";
import SectionThree from "@partials/sections/section3/section3";
import SectionFour from "@partials/sections/section4/section4";
import SectionFive from "@partials/sections/section5/section5";
import SectionSix from "@partials/sections/section6/section6";
import Footer from '@components/footer/footer'
import SectionSeven from "@partials/sections/sessao7-3/sessao7";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionSeven />
        <SectionThree />
        {/* <SectionFour /> */}
        {/* <SectionFive /> */}
        <SectionSix />
      </main>
      <Footer />
    </>
  );
}
