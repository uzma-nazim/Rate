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
import client1 from "@/assets/images/client1.jpg"
import client2 from "@/assets/images/client2.jpeg"
import client3 from "@/assets/images/client2.jpg"
import client4 from "@/assets/images/client3.jpg"
import client5 from "@/assets/images/client5.jpeg"

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
            content: "Rate Finance seamlessly aids you in tracking, budgeting, and optimizing your funds",
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
    ],
    testimonial: [
        {
            name: "Jane Smith",
            email: "jane.smith@fictitioustech.com",
            profilePic: client1.src,
            review: "I can't believe the incredible transformation Rate products have brought to our company! Before using their  HR , our operations were a complete mess. But ever since we integrated their cutting-edge technology, everything has become seamless and efficient beyond imagination"
        },
        {
            name: "DreamSolutions ",
            email: "info@dreamsolutions.com",
            profilePic: client2.src,
            review: "I'm thrilled with Rate's HR product! It's transformed the way we manage our workforce. Tasks that used to take hours are now completed in minutes, thanks to the intuitive interface and automation features. Our team is more organized, and I can't imagine running our company without it"
        },
        {
            name: " NexusSolutions  ",
            email: "contact@nexussolutions.com",
            profilePic: client3.src,
            review: "At NexusSolutions Ltd. (contact@nexussolutions.com), Rate's HR product has been a lifesaver. It's made employee management a breeze with its user-friendly interface and automation. Our HR team is now more effective, and the self-service options are a hit with our staff. Couldn't be happier with the results!"
        },
        {
            name: " stellarsynergyz  ",
            email: "contact@stellarsynergy.org",
            profilePic: client4.src,
            review: "Rate's HR product has transformed our workforce management at StellarSynergy Ltd. (contact@stellarsynergy.org). The efficiency it brings to our HR processes is remarkable. Our team can now focus on strategic initiatives, and the automation has eliminated repetitive tasks. A must-have for any growing business!"
        }
    ],
    contact:{
        mailLink:'mailto:rateeehr@gmail.com',

    }
}

export { content }