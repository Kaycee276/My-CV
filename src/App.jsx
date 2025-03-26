import React, { useState } from "react";

const App = () => {
  const [showCopied, setShowCopied] = useState(false);
  const phoneNumber = "+234 912 717 8874";

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ""));
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {showCopied && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg">
            Phone number copied!
          </div>
        )}
        {/* Header with Profile Picture */}
        <div className="bg-orange-500 p-6 text-white flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Profile Picture */}
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img
              src="/kaycee-2.jpeg"
              alt="Izuaba Kenneth Kelechukwu"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-3xl font-bold">Izuaba Kenneth Kelechukwu</h1>
            <p className="text-orange-100">
              Full-Stack Developer | Blockchain Enthusiast
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-sm bg-orange-600 px-2 py-1 rounded">
                📍 Nsukka, Enugu
              </span>
              <span className="text-sm bg-orange-600 px-2 py-1 rounded">
                📧 kizuaba@gmail.com
              </span>
              <span
                className="text-sm bg-orange-600 px-2 py-1 rounded cursor-pointer"
                onClick={copyPhoneNumber}
              >
                📞 {phoneNumber}
              </span>
            </div>
            <div className="mt-2">
              <a
                href="https://www.linkedin.com/in/kenneth-izuaba-245658294/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-100 hover:text-white mr-3"
              >
                LinkedIn
              </a>
              <a
                href="https://www.github.com/Kaycee276"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-100 hover:text-white mr-3"
              >
                GitHub
              </a>
              <a
                href="https://kaycee276.github.io/My-Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-100 hover:text-white"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Rest of your CV content remains unchanged */}
        <div className="p-6">
          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-orange-700 border-b border-orange-200 pb-1 mb-3">
              Professional Summary
            </h2>
            <p className="text-gray-700 mb-2">
              Passionate self-taught developer with proven ability to master
              complex technologies through project execution. Built multiple
              production-grade systems in blockchain and web development while
              pursuing computer science education. Special talent for:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>Full-stack development</strong> - Building complete
                systems from database to UI
              </li>
              <li>
                <strong>Blockchain integration</strong> - Implementing smart
                contracts and Web3 features
              </li>
              <li>
                <strong>Problem-solving</strong> - Developing solutions for
                real-world technical challenges
              </li>
            </ul>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-orange-700 border-b border-orange-200 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-medium text-orange-600">Frontend</h3>
                <ul className="list-disc list-inside text-gray-700 pl-2">
                  <li>React, JavaScript (ES6+)</li>
                  <li>HTML5, CSS3, TailwindCSS</li>
                  <li>Responsive Web Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-orange-600">Backend</h3>
                <ul className="list-disc list-inside text-gray-700 pl-2">
                  <li>Node.js, Express</li>
                  <li>RESTful API Design</li>
                  <li>PostgreSQL, Database Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-orange-600">Blockchain</h3>
                <ul className="list-disc list-inside text-gray-700 pl-2">
                  <li>Solidity, Smart Contracts</li>
                  <li>Hardhat, Ethers.js</li>
                  <li>Ethereum, Solana</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Project-Based Learning */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-orange-700 border-b border-orange-200 pb-1 mb-3">
              Project-Based Learning
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800">
                  Blockchain Game Development
                </h3>
                <ul className="list-disc list-inside text-gray-700 pl-2 mt-1">
                  <li>
                    Mastered{" "}
                    <strong>decentralized application architecture</strong> by
                    creating a multiplayer betting game with deposit escrows and
                    commit-reveal schemes
                  </li>
                  <li>
                    Gained <strong>smart contract security</strong> knowledge
                    through implementing anti-cheat mechanisms and gas
                    optimization
                  </li>
                </ul>
                <a
                  href="https://github.com/Kaycee276/Codewars/blob/master/RockPaperScissor.sol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline text-sm ml-6"
                >
                  View Project Code
                </a>
              </div>

              <div>
                <h3 className="font-medium text-gray-800">
                  Backend Systems Development
                </h3>
                <ul className="list-disc list-inside text-gray-700 pl-2 mt-1">
                  <li>
                    Developed <strong>REST API expertise</strong> by building a
                    PDF processing service with Express and PostgreSQL
                  </li>
                  <li>
                    Learned <strong>data extraction techniques</strong> through
                    implementing regex patterns for JAMB registration number
                    parsing
                  </li>
                </ul>
                <a
                  href="https://github.com/Kaycee276/Node-reg-no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline text-sm ml-6"
                >
                  View Project Code
                </a>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-orange-700 border-b border-orange-200 pb-1 mb-3">
              Work Experience
            </h2>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800">
                Frontend Developer | Kels Hair Service
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                November 2024 - December 2024
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Developed responsive, mobile-first user interfaces using{" "}
                  <strong>React and TailwindCSS</strong>, improving page load
                  speed by 30%
                </li>
                <li>
                  Implemented interactive features with{" "}
                  <strong>JavaScript</strong> to enhance customer booking
                  experience
                </li>
                <li>
                  Collaborated with designers to translate UI/UX wireframes into
                  functional components
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800">
                Frontend Developer | SuperSpace (Solana-powered platform)
              </h3>
              <p className="text-sm text-gray-500 mb-2">Mar 2020 - Dec 2021</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Built the <strong>React-based frontend</strong> for a
                  decentralized platform using <strong>Solana Web3.js</strong>
                </li>
                <li>
                  Integrated <strong>wallet authentication</strong> (Phantom,
                  Solflare) and designed UI for blockchain interactions
                </li>
                <li>
                  Optimized <strong>real-time updates</strong> for Solana
                  transaction feeds using WebSocket connections
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-semibold text-orange-700 border-b border-orange-200 pb-1 mb-3">
              Education
            </h2>
            <div>
              <h3 className="font-medium text-gray-800">
                BSc in Computer Science | University of Nigeria, Nsukka
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Expected Graduation: 2026 | Current GPA: 3.8/4.0
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Currently in <strong>third year</strong> with focus on
                  software engineering and distributed systems
                </li>
                <li>
                  Relevant coursework: Data Structures, Algorithms, Database
                  Systems, Web Technologies
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
