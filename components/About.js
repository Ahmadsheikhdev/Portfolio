import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '30+' },
    { label: 'Satisfied Clients', value: '20+' },
    { label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Profile Image with Gradient Border */}
            <div className="relative mx-auto lg:mx-0 max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                {/* Using your actual profile image */}
                <div className="aspect-w-4 aspect-h-5 bg-gray-800 relative h-[500px]">
                  <Image 
                    src="/abp.jpg" 
                    alt="Ahmad Bilal" 
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
              <div className="bg-gray-900 rounded-full px-4 py-1">
                <span className="text-white font-medium">About Me</span>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              Passionate Developer Creating Digital Solutions
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                I'm Ahmad Bilal, a software developer with a passion for creating elegant, efficient, and user-friendly applications. With over 5 years of experience in the industry, I've developed a deep understanding of the full software development lifecycle.
              </p>
              <p>
                My expertise spans across frontend and backend development, with a focus on modern JavaScript frameworks like React and Node.js. I'm also well-versed in DevOps practices, ensuring smooth deployment and operation of applications.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices. My goal is to deliver solutions that not only meet but exceed client expectations.
              </p>
            </div>
            
            {/* Experience Timeline */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-white mb-6">Experience</h3>
              <div className="space-y-6">
                {[
                  {
                    period: '2021 - Present',
                    role: 'Senior Software Developer',
                    company: 'Tech Innovations Inc.',
                    description: 'Leading development of enterprise web applications using React, Node.js, and AWS.',
                  },
                  {
                    period: '2019 - 2021',
                    role: 'Full Stack Developer',
                    company: 'Digital Solutions Ltd.',
                    description: 'Developed and maintained multiple client projects using the MERN stack.',
                  },
                  {
                    period: '2017 - 2019',
                    role: 'Junior Developer',
                    company: 'WebCraft Studios',
                    description: 'Assisted in building responsive websites and web applications.',
                  },
                ].map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-gray-700"
                  >
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <div className="text-sm text-blue-400">{experience.period}</div>
                    <div className="text-lg font-semibold text-white">{experience.role}</div>
                    <div className="text-gray-400">{experience.company}</div>
                    <div className="text-gray-500 mt-1">{experience.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 