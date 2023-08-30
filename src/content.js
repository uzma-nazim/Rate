import locations from "@/assets/images/locations.png"
import attendance from "@/assets/images/attendance.png"
import user from "@/assets/images/user.png"
import people from "@/assets/images/people.png"
import theme from "@/assets/images/theme.png"
import chat from "@/assets/images/chat.png"
import interview from "@/assets/images/interview.png"
import arabic from "@/assets/images/arabic.png"
import map from "@/assets/images/map.png"
import active from "@/assets/images/active.png"
import layout from "@/assets/images/layout.png"
import ratehr from "@/assets/images/ratehr.png"
import exchange from "@/assets/images/exchange.png"
import bars from "@/assets/images/bars.png"

const content = {
    services: [

        {
            tittle: "Rate HR",
            content: "Rate HR is a workforce performance management tool for making informed decisions",
            icon: null,
            img: ratehr.src

        },
        {
            tittle: "Rate Exchange",
            content: "Rate Exchange makes currency conversion effortless, smooth and simple",
            
            icon: null,
            img: exchange.src

        },
        {
            tittle: "Rate Finance",
            content: "Rate Finance effortlessly aids you in tracking, budgeting, and optimizing your funds",
            icon: null,
            img: bars.src

        },
        {
            tittle: "User Management",
            content: "Role onboarding process involves email usernames and passwords for users.",
            icon: null,
            img: user.src

        },
        {
            tittle: "Multi-branch Support",
            content: "Centralised management of multiple branches and efficient employee allocation.",
            icon: null,
            img: people.src

        },
        {
            tittle: "Request Management",
            content: "Streamlined request submission and approval   process for various types of requests",
            icon: null,
            img: interview.src

        },
        {
            tittle: "Theme Customisation",
            content: "Personalise viewing experience with multiple themes",
            icon: null,
            img: theme.src

        },
        {
            tittle: "Messaging Features",
            content: "Chat features one-to-one and group messaging, audio, images, and videos",
            icon: null,
            img: chat.src

        },
        {
            tittle: "Multi-language Support",
            content: "Localises 7 languages seamlessly ",
            icon: null,
            img: arabic.src

        },
        {
            tittle: "Location Tracking ",
            content: "Real-time location tracking of employees ",
            icon: null,
            img: map.src
        },
        {
            tittle: "Push Notifications ",
            content: "Push Notifications for important events and updates ",
            icon: null,
            img: active.src
        },
        {
            tittle: "Timeline ",
            content: "Access employee data for informed HR decision ",
            icon: null,
            img: layout.src
        }
    ]
}

export { content }