import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabsContent from "./TabsContent";
import ProductGrowth from "../ProductGrowth/ProductGrowth";
import aboutlight01 from "@/assets/images/features-light-01.png";
import shapedottedlight from "@/assets/images/shape-dotted-light.svg";

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
          title={<TabButtun title={"Clean User Interface"} count={"01"} />}
        >
          <ProductGrowth
            title={"Solid Has Neat & Clean User Interface."}
            para={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le."
            }
            image={aboutlight01}
            disableBtn
          />
        </Tab>
        <Tab
          eventKey="profile"
          title={<TabButtun title={"Cloud Data Save Options"} count={"02"} />}
        >
          <ProductGrowth
            title={"Solid Has Cloud Data Save Options."}
            para={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le."
            }
            image={aboutlight01}
            disableBtn
          />
        </Tab>
        <Tab
          eventKey="longer-tab"
          title={
            <TabButtun title={"Management And Collaboration"} count={"03"} />
          }
        >
          <ProductGrowth
            title={"Solid Has Management And Collaboration."}
            para={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le."
            }
            image={aboutlight01}
            disableBtn
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default FeatureTabs;
