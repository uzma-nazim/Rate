import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabsContent from "./TabsContent";
import ProductGrowth from "../ProductGrowth/ProductGrowth";
import aboutlight01 from "@/assets/images/features-light-01.png";
import shapedottedlight from "@/assets/images/shape-dotted-light.svg";
import HrFeature from "../HrFeature/HrFeature";

const TabButtun = ({ title, count }) => {
  return (
    <div>
      <div className="tabs-button">
        <div className="circle-box">
          <p className="p3">{count}</p>
        </div>
        <div>
          <p className="p2">{title}</p>
        </div>
      </div>
    </div>
  );
};

function FeatureTabs() {
  return (
    <div className="feature-tabs-box">
      <img src={shapedottedlight.src} className="doted-image" alt="" />
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3 container featureTab"
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
}

export default FeatureTabs;
