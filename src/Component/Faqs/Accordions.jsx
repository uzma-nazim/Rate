import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import iconminus from "@/assets/images/icon-minus-light.svg";
import iconplus from "@/assets/images/icon-plus-light.svg";
import { useContext } from "react";
import AccordionContext from "react-bootstrap/AccordionContext";
import { theme } from "@/utils/theme";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
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
      <div onClick={decoratedOnClick} className="accrodion-header bg2">
        <p className="p1 dark-white-text">{question}</p>
        {/* <img src={isCurrentEventKey ? iconminus.src : iconplus.src} alt="" /> */}
        {isCurrentEventKey ? (
          <AiOutlineMinus className="mode-icon" />
          ) : (
          <AiOutlinePlus className="mode-icon" />
        )}
      </div>
    </>
  );
}

function AccordionsComp() {
  return (
    <Accordion className="accordion-box  border-color" defaultActiveKey="0">
      <Card className="bg2">
        <Card.Header
          style={{ backgroundColor: theme.dark ? "#2d2f40" : "#fff" }}
          className="bg2"
        >
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
              evaluation, punch-in/out, our system almost covers all aspects of
              HR management. It's available both as a web application and a
              mobile app, ensuring you have access to crucial HR functions
              anytime, anywhere.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="bg2">
        <Card.Header>
          <CustomToggle
            eventKey="1"
            question=" Can I use your HRM Management System on my mobile device?"
          />
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <p className="p2">
              Absolutely! We understand the importance of mobility in today's
              fast-paced business environment. Our HRM Management System is
              available as a dedicated mobile app, compatible with both Android
              and iOS devices. This means you can manage your workforce, approve
              leave requests, view reports, and perform other essential HR tasks
              on the go, giving you unparalleled flexibility and control.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="bg2">
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
            <p className="p2">
              Our HRM Management System brings numerous benefits to your
              business. By automating repetitive HR tasks, it frees up valuable
              time for your HR team to focus on strategic initiatives. The
              system's real-time reporting and insights enable data-driven
              decision-making. The self-service options empower employees,
              enhancing their engagement and satisfaction. Plus, with both web
              and app access, you can ensure seamless HR operations whether
              you're at your desk or on the move
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default AccordionsComp;
