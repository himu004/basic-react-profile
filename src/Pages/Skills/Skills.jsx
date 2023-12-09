import { useEffect, useState } from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {

    const [skills, setSkils] = useState([]);

    useEffect(() => {
        fetch('skills.json')
        .then(res => res.json())
        .then(data => setSkils(data))
    },[]);

    console.log(skills);



    return (
        <div>
            <div className="text-center">
                <h2>Take a look at my Skills.</h2>
                <p>These are my skills and this contains all the technologies and programming languages that I have learnt until now. I am constantly learning, therefore I may update this section more often.</p>
            </div>
            <div className="grid grid-cols-4 gap-5 ">
                {
                    skills.map(skill => <SkillsCard key={skill.id} skill={skill}></SkillsCard>)
                }
            </div>
        </div>
    );
};

export default Skills;