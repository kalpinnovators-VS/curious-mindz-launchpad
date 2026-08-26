import projectRobotCar from "@/assets/project-robot-car.jpg";
import projectRoboticArm from "@/assets/project-robotic-arm.jpg";
import projectSmartHome from "@/assets/project-smart-home.jpg";
import projectDrone from "@/assets/project-drone.jpg";
import courseElectronics from "@/assets/course-electronics.jpg";
import courseCoding from "@/assets/course-coding.jpg";
import courseInnovation from "@/assets/course-innovation.jpg";

export const WHATSAPP_NUMBER = "919999999999";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Curious Mindz! I'd like to know more about your robotics workshops.",
)}`;

export type Project = {
  title: string;
  image: string;
  blurb: string;
  grade: string;
  duration: string;
  skills: string[];
  details: string;
};

export const projects: Project[] = [
  {
    title: "Line-Following Robot Car",
    image: projectRobotCar,
    blurb: "A self-driving car that reads the track with infrared eyes.",
    grade: "Class 5-7",
    duration: "Built in 2 sessions",
    skills: ["IR sensors", "Motor drivers", "Logic loops"],
    details:
      "Students wired IR sensor arrays to a microcontroller, calibrated thresholds for black and white surfaces, and wrote the decision loop that steers the two motors. They finished with a track race where every team tuned their own speed constants.",
  },
  {
    title: "Pick-and-Place Robotic Arm",
    image: projectRoboticArm,
    blurb: "A four-servo arm that sorts objects on command.",
    grade: "Class 8-11",
    duration: "Built in 4 sessions",
    skills: ["Servo control", "Kinematics", "3D assembly"],
    details:
      "Teams assembled an acrylic arm, mapped joint angles to servo pulses, and programmed a repeatable pick-and-place routine. The advanced group added a colour sensor so the arm sorts blocks by colour without human input.",
  },
  {
    title: "Smart Home Model",
    image: projectSmartHome,
    blurb: "A model house with automatic lights, alarms and climate sensing.",
    grade: "Class 4-6",
    duration: "Built in 3 sessions",
    skills: ["LDR & DHT sensors", "Relays", "Circuit design"],
    details:
      "Beginning with cardboard fabrication, students installed light-dependent resistors for automatic night lighting, a temperature-humidity sensor for the fan, and a buzzer-based intrusion alarm — then explained the whole system to their parents on demo day.",
  },
  {
    title: "Mini Quadcopter Drone",
    image: projectDrone,
    blurb: "A hand-built drone that lifts off after its first calibration.",
    grade: "Class 9-11",
    duration: "Built in 5 sessions",
    skills: ["Flight controllers", "PID tuning", "Aerodynamics"],
    details:
      "The most-requested project of the year. Students soldered motor connections, balanced propellers, configured the flight controller and tuned PID values through supervised test flights in our indoor flight cage.",
  },
];

export type Course = {
  title: string;
  image: string;
  tagline: string;
  grade: string;
  offerings: string[];
};

export const courses: Course[] = [
  {
    title: "Robotics Starter",
    image: courseElectronics,
    tagline: "First circuits, first robots, first spark.",
    grade: "Class 4-6",
    offerings: [
      "8 in-person hands-on sessions",
      "Circuits, sensors & motors from scratch",
      "3 take-home robot builds",
      "Personal kit included",
    ],
  },
  {
    title: "Code & Control",
    image: courseCoding,
    tagline: "From block coding to real embedded C.",
    grade: "Class 6-9",
    offerings: [
      "12 in-person hands-on sessions",
      "Block coding to Arduino C progression",
      "Autonomous robot capstone",
      "Weekly parent progress note",
    ],
  },
  {
    title: "Innovation Lab",
    image: courseInnovation,
    tagline: "Design, prototype and pitch a real product.",
    grade: "Class 9-11",
    offerings: [
      "16 in-person hands-on sessions",
      "3D design, printing & IoT integration",
      "Competition & science-fair mentoring",
      "Portfolio-ready project documentation",
    ],
  },
];

export const steps = [
  {
    step: "01",
    title: "Book a free trial workshop",
    text: "Pick a weekend slot near you. Your child builds a working circuit in the very first 90 minutes — no prior experience needed.",
  },
  {
    step: "02",
    title: "Join a small in-person batch",
    text: "Batches of 8 students, grouped by grade. Every child gets their own kit, their own bench and a mentor within arm's reach.",
  },
  {
    step: "03",
    title: "Build, demo, innovate",
    text: "Each module ends with a working project your child demos to you, plus a clear roadmap for what they will invent next.",
  },
];

export const stats = [
  { value: 1200, suffix: "+", label: "Students taught" },
  { value: 45, suffix: "+", label: "Workshops delivered" },
  { value: 96, suffix: "%", label: "Parents recommend us" },
  { value: 8, suffix: "", label: "Students per batch" },
];

export const testimonials = [
  {
    quote:
      "My daughter used to see science as textbook chapters. After two months here she is explaining sensor logic to me at dinner. The in-person format made all the difference.",
    name: "Sneha Rao",
    role: "Parent, Class 6 · Whitefield",
  },
  {
    quote:
      "As a software engineer I am picky about how coding is taught. The progression from block coding to real embedded C is genuinely well designed.",
    name: "Karthik Menon",
    role: "Parent, Class 8 · HSR Layout",
  },
  {
    quote:
      "Small batches, patient mentors, and a working project in his hands every month. My son now asks for extra lab time instead of screen time.",
    name: "Ritu Agarwal",
    role: "Parent, Class 5 · Powai",
  },
];

export const plans = [
  {
    name: "Trial Workshop",
    price: "Free",
    period: "90 minutes",
    description: "One session to see if your child loves building things.",
    features: ["Full hands-on session", "All materials provided", "Mentor feedback call", "No commitment"],
    cta: "Book free trial",
    featured: false,
  },
  {
    name: "Module Plan",
    price: "₹6,900",
    period: "per 8-session module",
    description: "Our most popular way to start a real robotics journey.",
    features: [
      "8 in-person sessions",
      "Personal robotics kit included",
      "3 take-home projects",
      "Batch size capped at 8",
      "Certificate & project report",
    ],
    cta: "Reserve a seat",
    featured: true,
  },
  {
    name: "Innovator Annual",
    price: "₹24,900",
    period: "per year",
    description: "Full-year mentoring for children who want to go deep.",
    features: [
      "40+ in-person sessions",
      "Advanced kits: drones, IoT, 3D printing",
      "Competition & science-fair mentoring",
      "1:1 project mentorship",
      "Innovation portfolio for applications",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export const faqs = [
  {
    q: "Does my child need any prior coding or electronics experience?",
    a: "No. Every module starts from first principles and is grouped by grade, so a class 4 beginner and a class 10 tinkerer are never in the same batch.",
  },
  {
    q: "Are the classes really in person?",
    a: "Yes — every session is live, in person and hands-on. Robotics is a tactile skill: children learn by wiring, soldering, breaking and fixing real hardware at their own bench.",
  },
  {
    q: "How large are the batches?",
    a: "A maximum of 8 students per mentor. That cap is the reason children finish a working project in every module instead of watching a demo.",
  },
  {
    q: "Do we need to buy components separately?",
    a: "No. Kits, tools and consumables are included in the module fee, and the take-home projects stay with your child.",
  },
  {
    q: "What are the timings, and will it clash with school?",
    a: "Batches run on weekends and weekday evenings. You choose a slot at enrolment and we keep your child in that same batch for the whole module.",
  },
  {
    q: "How do you keep children safe during hands-on work?",
    a: "Low-voltage kits, supervised soldering with fume extraction, mandatory safety briefings and a mentor present at every bench at all times.",
  },
];
