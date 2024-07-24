import { useRef } from "react";
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offSet: ["start start", "end start"]

    });
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    return (
        <div className="parallax" style={{ background: "linear-gradient(180deg, #111132, #0c0c1d)" }}>
            <motion.div style={{ y: yText }} className="about-me">
                <motion.h1>About Me</motion.h1>
                <motion.p>
                A passionate software developer with a proven track record of delivering high-performing distributed software solutions that propel competitive cloud systems forward. Leveraging 3+ years of IT experience and a master’s degree in computer science at Virginia Tech, I bring a unique blend of technical expertise, strategic vision, strong coding skills, and empathy to tackle complex challenges and build scalable systems that solve real-world problems. With a growth mindset and unwavering commitment for innovation, I am passionate about continuously learning and mastering new technologies. In my free time, I indulge in crafting personalized gestures and lose track of time with puppies and babies. A badminton enthusiast and meticulous planner, I balance my life between tech innovation and personal joys.
                </motion.p>
            </motion.div>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: yBg, backgroundImage: "url('/planets.png')" }} className="planets"></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    )
}

export default Parallax
