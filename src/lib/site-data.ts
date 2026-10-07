import portrait from "@/assets/ferhi-portrait.jpg";
import poster from "@/assets/laser-amplification-poster.pdf";
import cvDoc from "@/assets/cv.pdf";

export const PORTRAIT_URL = portrait;
export const POSTER_URL = poster;
export const CV_URL = cvDoc;
export const SCHOLAR_URL = "https://scholar.google.com/citations?user=v1Gq0I8AAAAJ";
export const GITHUB_URL = "https://github.com/lordaldebaran";
export const LINKEDIN_URL = "https://www.linkedin.com/in/yassine-ferhi/";
export const EMAIL = "yassine.ferhi@institutoptique.fr";

export const TAGLINE = "Optics & Photonics Engineering Student · Quantum Technologies & AI";

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  summary: string;
  links: { label: string; href: string }[];
};

export const PEER_REVIEWED: Publication[] = [
  {
    title: "Pattern Matching Using Sliding Windows on Quantum Computers",
    authors: "Y. Ferhi, A. Geng, M. Kiefer-Emmanouilidis, A. Moghiseh",
    venue: "QUEST-IS 2025 — Communications in Computer and Information Science, Springer Nature",
    summary:
      "Quantum pattern matching using QSVMs and sliding-window approaches, with validation on IBM quantum hardware.",
    links: [
      { label: "Springer", href: "https://doi.org/10.1007/978-3-032-13855-2_18" },
      { label: "Google Scholar", href: SCHOLAR_URL },
    ],
  },
  {
    title:
      "Fourier finite-difference method and proper orthogonal decomposition for the quick spectral study of 2D periodic photonic structures",
    authors: "M. Besbes, Y. Ferhi, H. Benisty, C. Sauvan",
    venue: "Published research article",
    summary:
      "An electromagnetic solver for 2D-periodic photonic structures accelerated by model-order reduction with Proper Orthogonal Decomposition.",
    links: [
      { label: "HAL", href: "https://hal.science/hal-05339190" },
      { label: "Google Scholar", href: "https://scholar.google.com/scholar?oi=bibs&cluster=7120572677928014550&btnI=1&hl=fr" },
    ],
  },
];

export const PREPRINTS: Publication[] = [
  {
    title: "Schmidt-Decomposition-Based Methods for Efficient Quantum Image Encoding",
    authors: "A.-M. Pangeva, Y. Ferhi, A. Geng, A. Weinmann, D. Ivanova, A. Moghiseh",
    venue: "arXiv, 2026",
    summary:
      "Low-rank state approximation via Schmidt decomposition to reduce the circuit depth of FRQI, QPIE and NEQR image encodings.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.10874" }],
  },

];

export const MANUSCRIPTS: Publication[] = [
  {
    title: "Quantum Approximation of Hadamard Products without Postprocessing",
    authors: "Y. Ferhi, A. Geng, M. Kiefer-Emmanouilidis, A. Moghiseh",
    venue: "Manuscript, under review",
    summary:
      "A quantum algorithm approximating the element-wise product of two quantum states without classical postprocessing.",
    links: [],
  },
];

export type Experience = {
  org: string;
  team: string;
  dates: string;
  location?: string;
  focus: string;
  tags: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    org: "ENS Paris-Saclay — ARIA",
    team: "Année de Recherche en Intelligence Artificielle",
    dates: "2026 – 2027",
    location: "Gif-sur-Yvette, France",
    focus:
      "One-year research leave from the engineering degree. Current project: Quantum Cellular Automata & Learning of Local Dynamics.",
    tags: ["Quantum dynamics", "Machine learning", "Quantum simulation", "Hybrid quantum-classical methods"],
  },
  {
    org: "University of Trieste / CNR-INO — ArQuS Lab",
    team: "Atomic, Quantum & Subatomic Physics",
    dates: "May – Sep 2026",
    location: "Trieste, Italy",
    focus:
      "Experimental research on ultracold ytterbium atoms in optical traps. Worked on fluorescence imaging and laser control, and developed Python tools for automated optimization of MOT/CMOT loading and machine-learning-based laser-frequency stabilization.",
    tags: ["Optical systems", "Laser control", "Fluorescence imaging", "Experimental automation", "Optimization", "ML-based control"],
  },
  {
    org: "Fraunhofer Institute ITWM",
    team: "Quantum Image Processing Department",
    dates: "Jun – Aug 2025",
    location: "Kaiserslautern, Germany",
    focus:
      "Developed and benchmarked quantum image-processing algorithms: QSVM-based pattern matching with sliding windows and QFT-based approximations of image convolutions in Qiskit, validated on quantum hardware.",
    tags: ["Quantum algorithms", "Qiskit", "QSVM", "QFT", "Quantum hardware validation"],
  },
  {
    org: "Institut d'Optique — Charles Fabry Laboratory",
    team: "Nanophotonics Research Group",
    dates: "Apr 2025",
    location: "Palaiseau, France",
    focus:
      "Developed a numerical electromagnetic method for periodic photonic structures based on Fourier expansion, finite-difference discretization and model-order reduction using Proper Orthogonal Decomposition.",
    tags: ["Computational electromagnetics", "Nanophotonics", "Model-order reduction"],
  },
];

export const EDUCATION = [
  { period: "2026 – 2027", school: "ENS Paris-Saclay", detail: "ARIA — Année de Recherche en Intelligence Artificielle" },
  {
    period: "2024 – 2027",
    school: "Institut d'Optique Graduate School",
    detail: "Engineering Degree in Optical & Photonics Engineering",
  },
  { period: "2025 – 2026", school: "Université Paris-Saclay", detail: "M1 Fundamental Physics" },
  { period: "2024 – 2025", school: "Université Paris-Saclay", detail: "L3 Fundamental Physics — Mention Bien" },
  { period: "2022 – 2024", school: "CPGE MP2I / MPI*", detail: "Lycée Hoche, Versailles" },
];

export const SKILL_GROUPS = [
  {
    title: "Experimental Quantum Physics",
    items: [
      "Cold atoms / ultracold atoms",
      "Laser physics & stabilization",
      "Optical alignment & characterization",
      "Experimental automation",
      "Feedback and control",
    ],
  },
  {
    title: "AI & Scientific Computing",
    items: [
      "Python",
      "NumPy / SciPy / scikit-learn",
      "Machine learning & optimization",
      "Numerical modelling",
      "Scientific data analysis",
      "Experimental control software",
    ],
  },
  {
    title: "Quantum Technologies",
    items: ["Quantum computing", "Quantum information", "Quantum machine learning", "Qiskit", "Quantum simulation", "Quantum algorithms"],
  },
  {
    title: "Photonics",
    items: ["Quantum optics", "Laser systems", "Electromagnetic modelling", "Nanophotonics", "Fourier optics", "Optical experimental methods"],
  },
];


