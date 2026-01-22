import Footer from "@/components/ui/animated-footer";
import StackedCircularFooter from "@/components/ui/stacked-circular-footer";

export const FooterSection = () => {
  return (
    <div id="footer" className="bg-black font-mono">
      <StackedCircularFooter />
      <Footer barCount={23} />
    </div>
  );
};
