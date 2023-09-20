import { BASE_URL } from "@/Base_URL";
import { useTheme } from "@/context/ThemeContext";
import { theme } from "@/utils/theme";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import Toast from "../Toast/Toast";

function MyVerticallyCenteredModal(props) {
  const { isDarkMode, toggleTheme } = useTheme();

  const [state, setState] = useState({
    email: "",

    loading: false,
    summary: "",
    description: "",
    // gAuth: props.authDetails,
    start: {
      dateTime: "",
      timeZone: moment().format("UTCZ"),
    },
    end: {
      dateTime: "",
      timeZone: moment().format("UTCZ"),
    },
  });
  const handleConfirmMeeting = () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    axios({
      method: "post",
      url: `${BASE_URL}/meetLink`,
      data: {
        summary: state.summary,
        description: state.description,
        // gAuth: props.authDetails,
        start: state.start,
        end: state.end,
        email: state.email,
        gAuth: props.authDetails,
      },
    })
      .then((res) => {
        console.log("res", res);
        props.onClose();
        toast.success("Successfully sent emial", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setState((prev) => {
          return {
            ...prev,
            summary: "",
            loading: false,
            description: "",
            // gAuth: props.authDetails,
            start: {
              dateTime: "",
              timeZone: moment().format("UTCZ"),
            },
            end: {
              dateTime: "",
              timeZone: moment().format("UTCZ"),
            },
          };
        });
      })
      .catch((err) => {
        console.log("err", err);
        props.onClose();
        toast.error("Error!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setState((prev) => {
          return {
            ...prev,
            summary: "",
            loading: false,
            description: "",
            // gAuth: props.authDetails,
            start: {
              dateTime: "",
              timeZone: moment().format("UTCZ"),
            },
            end: {
              dateTime: "",
              timeZone: moment().format("UTCZ"),
            },
          };
        });
      });
  };
  const inputSTyle = {
    backgroundColor: isDarkMode == theme.light ? "#fff" : "#252a42 ",
    color: isDarkMode == theme.light ? "#252a42" : "#fff  ",
    borderColor: isDarkMode == theme.light ? "#eeeeee" : "#2d2f40 ",
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // className="bg1"
    >
      <Modal.Header
        // style={{backgroundColor:"red"}}
        className="bg"
        style={{
          borderColor: isDarkMode == theme.light ? "#eeeeee" : "#2d2f40 ",

          backgroundColor: isDarkMode == theme.light ? "#fff" : "#181c31 ",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h4
            className="h5"
            style={{ color: isDarkMode == theme.light ? "#181c31" : "#fff  " }}
          >
            Scehdule Meeting
          </h4>
          {/* <GrClose
            onClick={props.onClose}
            style={{
              '& path': {
                
                color: isDarkMode == theme.light ? "#181c31" : "#fff",
                stroke: isDarkMode == theme.light ? "#181c31" : "#fff",
              },
              path:{


                
            },
              cursor: "pointer",

            }}
          /> */}
        </div>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: isDarkMode == theme.light ? "#fff" : "#181c31 ",
        }}
        // className="bg"
      >
        <div className="payment-modal">
          <input
            type="email"
            style={inputSTyle}
            onChange={(e) => {
              setState((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              });
            }}
            value={state.email}
            className="input1"
            placeholder="Enter Email "
          />
          <input
            type="text"
            style={inputSTyle}
            onChange={(e) => {
              setState((prev) => {
                return {
                  ...prev,
                  summary: e.target.value,
                };
              });
            }}
            value={state.summary}
            className="input1"
            placeholder="Enter title "
          />
          <input
            type="text"
            style={inputSTyle}
            onChange={(e) => {
              setState((prev) => {
                return {
                  ...prev,
                  description: e.target.value,
                };
              });
            }}
            value={state.description}
            className="input1"
            placeholder="description "
          />
          <input
            style={inputSTyle}
            onChange={(e) => {
              setState((prev) => {
                return {
                  ...prev,
                  start: {
                    dateTime: moment(e.target.value).format(
                      "YYYY-MM-DDTHH:mm:ss"
                    ),
                    timeZone: moment().format("UTCZ"),
                  },
                };
              });
            }}
            value={state.start.dateTime}
            type="datetime-local"
            className="input1"
            placeholder="description "
          />
          <input
            type="datetime-local"
            style={inputSTyle}
            onChange={(e) => {
              setState((prev) => {
                return {
                  ...prev,
                  end: {
                    dateTime: moment(e.target.value).format(
                      "YYYY-MM-DDTHH:mm:ss"
                    ),
                    timeZone: moment().format("UTCZ"),
                  },
                };
              });
            }}
            value={state.end.dateTime}
            className="input1"
            placeholder="description "
          />
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <button
              onClick={handleConfirmMeeting}
              className="round-btn bg-blue bg2 "
              style={{
                width: "100px",
                borderRadius: "10px",
                backgroundColor:
                  isDarkMode == theme.light ? "#181c31" : "#252a42  ",
              }}
            >
              {state.loading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Confirm"
              )}
            </button>
            <button
              onClick={props.onClose}
              className="round-btn light-blue bg2 "
              style={{
                borderRadius: "10px",
                backgroundColor:
                  isDarkMode == theme.light ? "#181c31" : "#252a42  ",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function PymentPlanModal({ authDetails, open, setOpen }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        authDetails={authDetails}
        show={open}
        onHide={() => setOpen(false)}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default PymentPlanModal;
