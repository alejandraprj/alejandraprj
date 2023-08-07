export const introP =`
    Hi! My name is Alejandra, and I'm a rising senior at Harvard studying computer science and physics. 
    I'm also working towards fluency in Japanese and Mandarin Chinese.
    On this website, you can learn more about my interests and experience. <br><br>
    I grew up in Peru and immigrated to the United States in 2014. 
    As a first-generation immigrant, I have been immensely grateful for all the opportunities I have obtained.
    You may find that I have explored various fields, and I'm still finding my way through them. 
    However, I have learned that I love studying computer science and physics because they allow me to use my critical thinking skills and creativity to solve important problems. 
    There are so many ways to make a positive impact on the world, and they feel like the most natural fit for me.
    I now look forward to continue finding innovative ways to help the planet! 
    I received legal status at the end of 2022 in the U.S, so I'm eager to find what I can do. Thanks for reading!
`;

export const relevantCoursework = `
    COMPSCI 51 - Abstraction and Design in Computation,<br>
    COMPSCI 61 - Systems Programming and Machine Organization,<br>
    COMPSCI 120 - Introduction to Algorithms,<br>
    PHYSICS 15 - Mechanics and Electromagnetism,<br>
    APPMATH 120 - Applied Linear Algebra and Big Data,<br>
    COMPSCI 182 - Artificial Intelligence
`;

export const workExperience = [
    {
        work: "IBM",
        title: "Quantum Software Developer Intern",
        date: "May-Aug 2023",
        place: "Yorktown Heights, NY",
        description: `
            <ul>
            <li>Contributed to job compilation efficiency in Qiskit Runtime by implementing a Go endpoint for owner-verified deletion of compiled quantum payloads, complemented by a mock API for unit testing and to verify the functionality of the endpoint.</li> 
            <li>Augmented Qiskit Runtime's reliability by designing over 20 error types and 30 unit tests. Implemented various forms of error propagation, logging, and handling across different Python codebases, including the Near-Time Compute services.</li>`
    },
    {
        work: "Entrevista",
        title: "Chief Technical Officer and Co-Founder",
        date: "Apr-May 2023",
        place: "New York, NY",
        description: `
            <ul>
            <li>Created and launched the MVP of <a href="https://www.entrevista.ai" target="blank">Entrevista</a> by developing a web-based JavaScript recorder and text-to-speech that simulates a real-time casing interview via a REST API framework and a Python video-processor, an open-source text-generator, and AWS S3 handlers. Deployed in the span of a month, leveraging Heroku, GitHub, and AWS.</li> 
            <li>Earned a finalist position in the Y-Combinator application with two Co-Founders, initiating team and user acquisition.</li>
            </ul>`
    },
    {
        work: "Teamcore Lab at Harvard University",
        title: "Software Engineer Intern",
        date: "Jun-Dec 2022",
        place: "Cambridge, MA",
        description: `
            <ul>
            <li>Boosted efficiency and reliability of the PAWS SMART API by developing a Python HTTP API. This facilitated simultaneous multi-case testing, supplanted manual Postman HTTP requests, and yielded substantial time savings.</li> 
            <li>Broadened the testing scope and enhanced error handling by leveraging Azure for data storage and creating 15 additional mock QGIS parks, enabling bulk request processing, thorough testing, and accelerating the integration of new features.</li>
            </ul>`
    },
    {
        work: "Wildlife Conservation Society",
        title: "Drones and Sensors Intern",
        date: "May-Aug 2022",
        place: "Remote / NY",
        description: `
            <ul>
            <li>Developed an article processing interface with Python and SQL for Google News and Scholar. Contributed with over 1,500 parsed articles from the first use of the program, which helped identify quality sources to start the <a href="https://library.wcs.org" target="blank">WCS Library</a>.</li>
            <li>With the parser algorithm, researched and drafted an 8-page <a href="https://bit.ly/AI-Advancing-Video-Processing-and-CTDS" target="blank">white-paper</a> on state-of-the-art AI video processing and conservation tools that helped advance multiple projects at WCS throughout months after the internship.</li>
            </ul>`
    },
    {
        work: "C Minds",
        title: "AI Intern",
        date: "Apr-Aug 2021",
        place: "Remote / MX",
        description: `
            <ul>
            <li>Expedited three research briefings to assist in the set-up of a Diabetic Retinopathy AI-based Screening Program in Jalisco.</li>
            <li>Assisted in the installing of a Living Lab in Yucatan with the finalization of three AI-based conservation projects.</li>
            </ul>`
    }
];

export const activitiesList = [
    {
        activity: "Systems Programming and Machine Organization",
        title: "Teaching Fellow",
        date: "Sep-Dec 2022",
        description: `
            <ul>
                <li>Facilitated a <a href="https://cs61.seas.harvard.edu/site/2022" target="blank">Systems Programming</a> class of about 200 students by section and office hours of 20+ students.</li>
                <li>Covered 6 topics using C++ and GNU: data memory and representation, assembly, kernel, caching, shell, and threading.</li>
            </ul>`
    },
    {
        activity: "Harvard Women in Computer Science",
        title: "DIB Advocacy Director",
        date: "Aug-Dec 2022",
        description: `<ul><li>
            Oversaw and collaborated with 8 members on initiatives to promote inclusion. With a budget of approximately $300, helped organized events throughout the semester, providing resources and support to diverse groups of over 100 students.
            </li></ul>`
    }
];

export const computerProjects = [
    {
        course: "COMPSCI 182",
        date: "Oct-Dec 2022",
        link: null,
        name: `<a href='http://procaccia.info/courses/CS182-F22/pset2.pdf' target='blank'>Sudoku Solver</a>
               <a href='http://procaccia.info/courses/CS182-F22/pset3.pdf' target='blank'> and Ghost AI</a>`,
        description: "Implemented a Sudoku Solver using forward checking and MRV heuristics as a computer satisfaction problem. Created a Ghost AI using Minimax and Alpha Beta Agents with alpha-beta pruning. Implemented value iteration and Q-learning on a variation of the Frozen Lake Environment.",
    },
    {
        course: "COMPSCI 51",
        name: "MiniML",
        link: 'https://book.cs51.io/pdfs/abstraction-21-project.pdf',
        date: "May 2022",
        description: "Implemented an OCaml interpreter with various features, including unary and binary types, operators, conditionals, and higher-order and recursive functions, using the substitution and dynamic scoped environment models.",
    },
    {
        course: "COMPSCI 61",
        name: "Shell",
        link: "https://cs61.seas.harvard.edu/site/2021/Shell/",
        date: "Nov 2021",
        description: "Designed and implemented an interface to handle bash shell's commands (i.e. simple sequence commands, command lists, foreground and background processes, pipelines, conditionals, the cd command, redirections, zombie process handler, and the interrupt signal."
    },
    {
        course: "COMPSCI 61",
        name: "WeensyOS",
        link: 'https://cs61.seas.harvard.edu/site/2021/WeensyOS/',
        date: "Oct 2021",
        description: "Implemented a WeensyOS kernel with features such as kernel isolation, process isolation, virtual page allocation, forking, shared memory, and overlapping virtual memory address spaces, as well as an exiting function."
    }
];
