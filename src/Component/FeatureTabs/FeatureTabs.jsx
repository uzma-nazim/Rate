import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabsContent from "./TabsContent";
import ProductGrowth from "../ProductGrowth/ProductGrowth";
import aboutlight01 from "@/assets/images/features-light-01.png";
import shapedottedlight from "@/assets/images/shape-dotted-light.svg";
import HrFeature from "../HrFeature/HrFeature";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";

const TabButtun = ({ title, count }) => {
  const { elementRef, mainControls } = useInViewAnimation();

  return (
    <div>
      <div className="tabs-button">
        {/* <div className="circle-box">
          <p className="p3 dark-white-text">{count}</p>
        </div> */}
        <div>
          <p className="p2 dark-white-text">{title}</p>
        </div>
      </div>
    </div>
  );
};

const FeatureTabs = () => {
  return (
    <div id="feature" className="feature-tabs-box ">
      <img src={shapedottedlight.src} className="doted-image" alt="" />
      <Tabs
        defaultActiveKey="home"
        id="fill-tab-example"
        className="mb-3 container featureTab bg2 border-color"
        fill
      >
        <Tab
          eventKey="home"
          title={<TabButtun title={"Rate HR"} count={"01"} />}
        >
          <HrFeature />
        </Tab>
        <Tab
          eventKey="profile"
          title={<TabButtun title={"Rate Exchange"} count={"02"} />}
        >
          <HrFeature />
        </Tab>
        <Tab
          eventKey="longer-tab"
          title={<TabButtun title={"Rate Finance"} count={"03"} />}
        >
          <HrFeature />
        </Tab>
      </Tabs>
    </div>
  );
};

export default FeatureTabs;
