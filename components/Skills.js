import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Next.js', level: 85 },
    { name: 'MongoDB', level: 70 },
    { name: 'Express.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Git', level: 85 },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Communication', level: 90 },
    { name: 'Teamwork', level: 95 },
    { name: 'Time Management', level: 85 },
    { name: 'Adaptability', level: 90 },
    { name: 'Leadership', level: 80 },
    { name: 'Critical Thinking', level: 90 },
    { name: 'Creativity', level: 85 },
  ];

  const devOpsSkills = [
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 75 },
    { name: 'CI/CD', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'Azure', level: 70 },
    { name: 'Linux', level: 85 },
    { name: 'Terraform', level: 70 },
    { name: 'Jenkins', level: 75 },
  ];

  const [skills, setSkills] = useState(technicalSkills);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    switch (activeTab) {
      case 'technical':
        setSkills(technicalSkills);
        break;
      case 'soft':
        setSkills(softSkills);
        break;
      case 'devops':
        setSkills(devOpsSkills);
        break;
      default:
        setSkills(technicalSkills);
    }
    setAnimated(false);
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Skills</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I've developed a diverse set of skills throughout my career. Here's a glimpse of what I bring to the table.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm bg-gray-800 p-1">
            {['technical', 'soft', 'devops'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Skills
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={animated ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-blue-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
            <div className="bg-gray-900 rounded-full px-6 py-2">
              <span className="text-white font-medium">Expertise Highlights</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { name: 'Frontend', icon: '🎨', count: '10+ Projects' },
              { name: 'Backend', icon: '⚙️', count: '8+ Projects' },
              { name: 'DevOps', icon: '🚀', count: '5+ Projects' },
              { name: 'Mobile', icon: '📱', count: '3+ Projects' },
            ].map((highlight) => (
              <motion.div
                key={highlight.name}
                whileHover={{ y: -5 }}
                className="bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <div className="text-3xl mb-3">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1">{highlight.name}</h3>
                <p className="text-blue-400">{highlight.count}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 