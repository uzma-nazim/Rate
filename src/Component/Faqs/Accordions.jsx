import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import iconminus from "@/assets/images/icon-minus-light.svg";
import iconplus from "@/assets/images/icon-plus-light.svg";
import { useContext } from "react";
import AccordionContext from "react-bootstrap/AccordionContext";
function CustomToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    // <button
    //   type="button"
    //   style={{ backgroundColor: 'pink' }}
    //   onClick={decoratedOnClick}
    // >
    //   {children}
    // </button>
    <>
      <div onClick={decoratedOnClick} className="accrodion-header">
        <p className="p1">Lorem ipsum dolor sit amet, consectetur.</p>
        <img src={isCurrentEventKey ? iconminus.src : iconplus.src} alt="" />
      </div>
    </>
  );
}

function AccordionsComp() {
  return (
    <Accordion className="accordion-box" defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0" />
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p className="p2">
              We provide digital experience services to startups and small
              businesses. We help our clients succeed by creating brand
              identities, digital experiences.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default AccordionsComp;
