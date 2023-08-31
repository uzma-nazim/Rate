import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import iconminus from "@/assets/images/icon-minus-light.svg";
import iconplus from "@/assets/images/icon-plus-light.svg";
import { useContext } from "react";
import AccordionContext from "react-bootstrap/AccordionContext";
function CustomToggle({ children, eventKey, callback, question }) {
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
        <p className="p1">{question}</p>
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
          <CustomToggle
            eventKey="0"
            question=" What features does your HRM Management System provide?"
          />
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p className="p2">
              Our HRM Management System offers a comprehensive suite of features
              designed to streamline your workforce management. From employee
              onboarding, attendance tracking, leave management, and performance
              evaluation, to payroll processing and reporting, our system covers
              all aspects of HR management. It's available both as a web
              application and a mobile app, ensuring you have access to crucial
              HR functions anytime, anywhere.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle
            eventKey="1"
            question=" Can I use your HRM Management System on my mobile device?"
          />
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Absolutely! We understand the importance of mobility in today's
            fast-paced business environment. Our HRM Management System is
            available as a dedicated mobile app, compatible with both Android
            and iOS devices. This means you can manage your workforce, approve
            leave requests, view reports, and perform other essential HR tasks
            on the go, giving you unparalleled flexibility and control.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle
            eventKey="2"
            question={
              "What advantages does your HRM Management System bring to my business?"
            }
          />
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            Our HRM Management System brings numerous benefits to your business.
            By automating repetitive HR tasks, it frees up valuable time for
            your HR team to focus on strategic initiatives. The system's
            real-time reporting and insights enable data-driven decision-making.
            The self-service options empower employees, enhancing their
            engagement and satisfaction. Plus, with both web and app access, you
            can ensure seamless HR operations whether you're at your desk or on
            the move
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default AccordionsComp;
