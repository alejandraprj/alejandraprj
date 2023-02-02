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
        work: "TeamCore PAWS",
        title: "Software Engineer",
        date: "Jun-Dec 2022",
        place: "Cambridge, MA",
        description: `
            <ul>
            <li>Revamped error handling for the PAWS SMART API by programming an interface that expedited testing requests.</li> 
            <li>Worked with QGIS to craft a set of artificial data used to verify predictions of poaching trap locations.</li>
            <li>Developed the interface with Python to handle requests in JSON form and wrote a document to detail procedures.</li>
            </ul>`
    },
    {
        work: "Wildlife Conservation Society",
        title: "Drones and Sensors Intern",
        date: "May-Aug 2022",
        place: "Remote / NY",
        description: `
            <ul>
            <li>Built three article processing programs with Python and crafted a set of SQL queries to help develop an online database. </li>
            <li>Researched and drafted a 
            <a href="https://bit.ly/AI-Advancing-Video-Processing-and-CTDS" target="blank">white-paper</a> to review state-of-the-art AI-based video processing and conservation-related tools.</li>
            </ul>`
    },
    {
        work: "C Minds",
        title: "AI Intern",
        date: "Apr-Aug 2021",
        place: "Remote / MX",
        description: `
            <ul>
            <li>Interned at a women-led action tank for ethical AI through the David Rockefeller Center for Latin American Studies. </li>
            <li>Helped install an AI Living Lab in Yucatan and establish a Diabetic Retinopathy AI-based Screening Program in Jalisco.</li>
            </ul>`
    }
];

export const activitiesList = [
    {
        activity: "Harvard Psychedelics Club",
        title: "Web Director",
        date: "Jun 2022-Present",
        description: `
            <ul> 
                <li> Oversee, lead, and manage HPC web-related projects. Started, launched, and deployed
                      <a href="https://harvardpsychedelicsclub.org" target="blank"><u>harvardpsychedelicsclub.org</u></a>.
                </li>
                <li>
                    Teaming up with designers to improve the client-side of the site. Also working to automate the editorial section of the app.
                </li>
            </ul>`
    },
    {
        activity: "Systems Programming and Machine Organization",
        title: "Course Assistant",
        date: "Sep-Dec 2022",
        description: `
            <ul>
                <li>Facilitated college class of about 200 students by holding office hours and a section of about 25 students weekly.</li>
                <li>Covered data memory and representation, assembly, kernel, caching, shell, and process synchronization using C++.
                </li>
            </ul>`
    },
    {
        activity: "Women in Computer Science",
        title: "DIB Advocacy Director",
        date: "Aug-Dec 2022",
        description: `<ul><li>
            Oversaw and collabaroateed with 8 members on initiatives to promote diversity and inclusion. Organized events to provide more resources to underrepresented groups.
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
