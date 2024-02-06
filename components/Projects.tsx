import React from 'react'
import {motion} from "framer-motion"
import ProjectSlides from './ProjectSlides'

type Props = {}

export default function Projects({}: Props) {
    const projects = [{
        num: 6,
        projectAvatar: "/portfolio/redesign-banner.jpg",
        projectName: "Website Redesign: Taipei City Office of Commerce",
        projectTitle: "User Researcher, Master of User Experience, Arizona State University",
        projectTags: ["UX design", "UX research"],
        projectAttrs: ["Academic", "2023"],
        projectIntro: "Usability study on redesigning a legacy government website with better user experiences"
    },{
        num: 5,
        projectAvatar: "/portfolio/infortrend.jpg",
        projectName: "NAS Scale-Out Function Design",
        projectTitle: "Product Manager, Infortrend Technology Inc.",
        projectTags: ["UX research", "Tech research"],
        projectAttrs: ["Corporation", "2022", "2021"],
        projectIntro: "Introducing a panacea backstage management UI for Storage Systems across different devices"
    },{
        num: 4,
        projectAvatar: "/portfolio/richi.jpg",
        projectName: "Public Decision Making Map System",
        projectTitle: "Full Stack Engineer, RiChi Technology Inc.",
        projectTags: ["UX design", "Front-end Design"],
        projectAttrs: ["Corporation", "2021", "2020"],
        projectIntro: "Developing a fancy digital map operation and dashboard GUI for government users"
    },{
        num: 3,
        projectAvatar: "/portfolio/nslab.jpg",
        projectName: "An Investigation of Cyber Autonomy on Government Websites",
        projectTitle: "Researcher, Network Security Lab, National Taiwan University",
        projectTags: ["UX design", "Tech research", "Presentation"],
        projectAttrs: ["Laboratory", "2018", "2019"],
        projectIntro: "Two-year scale analysis with data mining on G7 government websites cyber autonomy issues"
    },{
        num: 2,
        projectAvatar: "/portfolio/oop.jpg",
        projectName: "Taiwan High Speed Rail Booking System",
        projectTitle: "Final Project, Object-oriented Analysis and Design Course",
        projectTags: ["Front-end Design", "Presentation"],
        projectAttrs: ["Academic", "2019"],
        projectIntro: "A simulated booking system of THSR to demonstrate object-oriented programming using software engineering techniques"
    },{
        num: 1,
        projectAvatar: "/portfolio/nchc.jpg",
        projectName: "Certificate Verification System on Blockchain",
        projectTitle: "Internship, National Center for High-performance Computing",
        projectTags: ["Tech research", "Presentation"],
        projectAttrs: ["Corporation", "2017"],
        projectIntro: "Introducing a verifiable system for schools to upload certificates onto Ethereum smart contracts"
    }]

    return (
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='relative flex flex-col justify-center items-center mx-auto px-10 space-y-5
        max-w-full'>
            <h3 className='flex flex-row uppercase tracking-[20px] text-[#71d7ff] font-[1100] text-2xl'>
                Projects
            </h3>

            <div className='flex flex-wrap space-x-1 w-[100vw] items-center justify-center'>
                {/* iterate through projects */}
                {projects.map((project, i) => <ProjectSlides obj={project} key={i}/>)}
            </div>
        </motion.div>
    )
}