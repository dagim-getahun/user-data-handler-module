// {
//     user_id: "dagim", x
//     subject: "Biology", grade: "10", col x 60
//     chapter: "1", x
//     sec: "1", x
//     complete: false
// }

const document = {
  covered: true,
  name: "Biology",
  sub_depth: 2,
  subject_id: 1212,
  subtopics: [
    {
      name: "Cell Biology bitch",
      covered: true,
      sub1: [
        {
          id: 2e2342,
          name: "Organelles",
          sub2: [
            { id: 123123, name: "Nucleus", covered: true },
            { id: 90980, name: "Mitochondria", covered: true },
          ],
          covered: true,
        },
      ],
    },
  ],
};

const respopnse = { Nucleus: true, Mitocondoria: false, aondfa: true };
// biology - grade 10 + > (123123)

// progress
//{ name: "Mitochondria", covered: true }, id

const data = {
  user_id: 101010,
  subect: "bioloy",
  grade: 10,
  topics: [
    {
      id: 23423,
      sub2: 123123,
      sub1: 2e2342,
      couter: 20,
      complete: false,
    },
    {
      id: 234234,
      end_id: 909800,
      template_id: 2e2342,
      couter: 20,
      complete: false,
    },
    // { template_id: 10233, couter: 20, complete: false },
    // { template_id: 10233, couter: 20, complete: false },
  ],
};
const prpgress = {
  covered: true,
  name: "Biology",
  subtopics: [
    {
      name: "Cell Biology",
      covered: true,
      subtopics: [
        {
          name: "Organelles",
          templet_id: 2e2342,
          subtopics: [
            { name: "Nucleus", covered: true },
            // loc
          ],
          covered: true,
        },
      ],
    },
  ],
};

export const contentData = {
  1: {
    title: "The Cell – Structure and Function",
    1: {
      title: "Introduction to Cells",
      1: {
        title: "History of Cell Discovery",
        complete: false,
      },
      2: {
        title: "The Cell Theory",
        complete: false,
      },
    },
    2: {
      title: "Types of Cells: Prokaryotic and Eukaryotic",
      1: {
        title: "Characteristics of Prokaryotic Cells",
        complete: false,
      },
      2: {
        title: "Characteristics of Eukaryotic Cells",
        complete: false,
      },
    },
    3: {
      title: "Cell Organelles and Their Functions",
      1: {
        title: "Nucleus and Ribosomes",
        complete: false,
      },
      2: {
        title: "Mitochondria and Chloroplasts",
        complete: false,
      },
    },
    4: {
      title: "The Cell Membrane and Transport Mechanisms",
      1: {
        title: "Structure of the Cell Membrane",
        complete: false,
      },
      2: {
        title: "Types of Transport: Active vs. Passive",
        complete: false,
      },
    },
    5: {
      title: "Cell Division: Mitosis and Meiosis",
      1: {
        title: "The Cell Cycle",
        complete: false,
      },
      2: {
        title: "Stages of Mitosis and Meiosis",
        complete: false,
      },
    },
  },
  2: {
    title: "Biomolecules – The Chemistry of Life",
    1: {
      title: "Introduction to Biomolecules",
      1: {
        title: "Importance of Biomolecules",
        complete: false,
      },
      2: {
        title: "Overview of Biological Macromolecules",
        complete: false,
      },
    },
    2: {
      title: "Carbohydrates: Structure and Function",
      1: {
        title: "Monosaccharides, Disaccharides, and Polysaccharides",
        complete: false,
      },
      2: {
        title: "Functions of Carbohydrates in Living Organisms",
        complete: false,
      },
    },
    3: {
      title: "Proteins: Enzymes and Structural Components",
      1: {
        title: "Amino Acids and Peptide Bonds",
        complete: false,
      },
      2: {
        title: "Enzyme Function and Regulation",
        complete: false,
      },
    },
    4: {
      title: "Lipids: Structure and Importance",
      1: {
        title: "Types of Lipids: Fats, Oils, and Steroids",
        complete: false,
      },
      2: {
        title: "Functions of Lipids in Cells",
        complete: false,
      },
    },
    5: {
      title: "Nucleic Acids: DNA and RNA",
      1: {
        title: "Structure of DNA and RNA",
        complete: false,
      },
      2: {
        title: "Role of Nucleic Acids in Protein Synthesis",
        complete: false,
      },
    },
  },
  3: {
    title: "Tissues and Levels of Organization",
    1: {
      title:
        "Types of Animal Tissues: Epithelial, Connective, Muscle, and Nervous",
      1: {
        title: "Epithelial Tissue Types",
        complete: false,
      },
      2: {
        title: "Muscle Tissue Types",
        complete: false,
      },
    },
    2: {
      title: "Types of Plant Tissues: Meristematic and Permanent",
      1: {
        title: "Meristematic Tissue Types",
        complete: false,
      },
      2: {
        title: "Permanent Tissue Types",
        complete: false,
      },
    },
    3: {
      title: "Organ Systems and Their Functions",
      1: {
        title: "Major Organ Systems in Humans",
        complete: false,
      },
      2: {
        title: "Functions of Plant Systems",
        complete: false,
      },
    },
    4: {
      title: "The Hierarchical Structure of Life: Cells to Organisms",
      1: {
        title: "Levels of Biological Organization",
        complete: false,
      },
      2: {
        title: "Interdependence of Levels",
        complete: false,
      },
    },
  },
  4: {
    title: "Nutrition and Digestive System",
    1: {
      title: "Nutrients and Their Importance",
      1: {
        title: "Macronutrients vs. Micronutrients",
        complete: false,
      },
      2: {
        title: "Role of Water in Nutrition",
        complete: false,
      },
    },
    2: {
      title: "Human Digestive System: Structure and Function",
      1: {
        title: "Major Organs of the Digestive System",
        complete: false,
      },
      2: {
        title: "Accessory Organs and Their Roles",
        complete: false,
      },
    },
    3: {
      title: "Digestive Enzymes and Their Roles",
      1: {
        title: "Types of Digestive Enzymes",
        complete: false,
      },
      2: {
        title: "Mechanism of Enzyme Action",
        complete: false,
      },
    },
    4: {
      title: "Nutrition in Plants: Photosynthesis and Mineral Absorption",
      1: {
        title: "Process of Photosynthesis",
        complete: false,
      },
      2: {
        title: "Importance of Mineral Nutrients",
        complete: false,
      },
    },
  },
  5: {
    title: "Respiration and Energy Production",
    1: {
      title: "Cellular Respiration Overview",
      1: {
        title: "Aerobic vs. Anaerobic Respiration",
        complete: false,
      },
      2: {
        title: "Importance of ATP",
        complete: false,
      },
    },
    2: {
      title: "Aerobic vs. Anaerobic Respiration",
      1: {
        title: "Glycolysis: The First Step",
        complete: false,
      },
      2: {
        title: "Krebs Cycle and Electron Transport Chain",
        complete: false,
      },
    },
    3: {
      title: "Structure and Function of the Human Respiratory System",
      1: {
        title: "Major Components of the Respiratory System",
        complete: false,
      },
      2: {
        title: "Mechanism of Breathing",
        complete: false,
      },
    },
    4: {
      title: "Gas Exchange in Plants and Animals",
      1: {
        title: "Mechanism of Gas Exchange in Animals",
        complete: false,
      },
      2: {
        title: "Gas Exchange in Leaves",
        complete: false,
      },
    },
  },
  6: {
    title: "Circulatory and Excretory Systems",
    1: {
      title: "Structure and Function of the Human Circulatory System",
      1: {
        title: "Components of Blood",
        complete: false,
      },
      2: {
        title: "The Heart and Its Function",
        complete: false,
      },
    },
    2: {
      title: "Blood Composition and Function",
      1: {
        title: "Types of Blood Cells",
        complete: false,
      },
      2: {
        title: "Blood Plasma and Its Functions",
        complete: false,
      },
    },
    3: {
      title: "The Human Excretory System: Kidneys and Urine Formation",
      1: {
        title: "Structure of the Kidneys",
        complete: false,
      },
      2: {
        title: "Mechanism of Urine Formation",
        complete: false,
      },
    },
    4: {
      title: "Osmoregulation and Homeostasis",
      1: {
        title: "Importance of Osmoregulation",
        complete: false,
      },
      2: {
        title: "Role of Kidneys in Homeostasis",
        complete: false,
      },
    },
  },
  7: {
    title: "Control and Coordination",
    1: {
      title: "The Human Nervous System: Brain and Nerves",
      1: {
        title: "Structure of the Brain",
        complete: false,
      },
      2: {
        title: "Peripheral Nervous System",
        complete: false,
      },
    },
    2: {
      title: "Neurons and Nerve Impulses",
      1: {
        title: "Structure of Neurons",
        complete: false,
      },
      2: {
        title: "Mechanism of Nerve Impulse Transmission",
        complete: false,
      },
    },
    3: {
      title: "The Endocrine System: Hormones and Glands",
      1: {
        title: "Major Endocrine Glands",
        complete: false,
      },
      2: {
        title: "Role of Hormones in Regulation",
        complete: false,
      },
    },
    4: {
      title: "Coordination in Plants: Tropisms and Hormones",
      1: {
        title: "Types of Plant Tropisms",
        complete: false,
      },
      2: {
        title: "Role of Plant Hormones",
        complete: false,
      },
    },
  },
  8: {
    title: "Reproduction and Heredity",
    1: {
      title: "Asexual and Sexual Reproduction",
      1: {
        title: "Types of Asexual Reproduction",
        complete: false,
      },
      2: {
        title: "Stages of Sexual Reproduction",
        complete: false,
      },
    },
    2: {
      title: "Human Reproductive System: Structure and Functions",
      1: {
        title: "Male Reproductive System",
        complete: false,
      },
      2: {
        title: "Female Reproductive System",
        complete: false,
      },
    },
    3: {
      title: "Basics of Heredity: Genes and Chromosomes",
      1: {
        title: "Structure of DNA and Genes",
        complete: false,
      },
      2: {
        title: "Chromosomal Inheritance",
        complete: false,
      },
    },
    4: {
      title: "Mendel’s Laws and Patterns of Inheritance",
      1: {
        title: "Mendel's Experiments with Pea Plants",
        complete: false,
      },
      2: {
        title: "Inheritance Patterns: Dominant and Recessive Traits",
        complete: false,
      },
    },
  },
  9: {
    title: "Evolution and Diversity of Life",
    1: {
      title: "Theories of Evolution: Darwin and Natural Selection",
      1: {
        title: "Overview of Darwin’s Theory",
        complete: false,
      },
      2: {
        title: "Mechanisms of Natural Selection",
        complete: false,
      },
    },
    2: {
      title: "Fossils and Evidence of Evolution",
      1: {
        title: "Types of Fossils",
        complete: false,
      },
      2: {
        title: "Fossil Record and Evolutionary History",
        complete: false,
      },
    },
    3: {
      title: "Classification of Living Organisms",
      1: {
        title: "Taxonomy and Linnaean System",
        complete: false,
      },
      2: {
        title: "Modern Classification: Cladistics",
        complete: false,
      },
    },
    4: {
      title: "Biodiversity and Conservation",
      1: {
        title: "Importance of Biodiversity",
        complete: false,
      },
      2: {
        title: "Conservation Strategies",
        complete: false,
      },
    },
  },
  10: {
    title: "Ecology and Environmental Science",
    1: {
      title: "Basics of Ecology: Ecosystems and Biomes",
      1: {
        title: "Types of Ecosystems",
        complete: false,
      },
      2: {
        title: "Major Biomes of the World",
        complete: false,
      },
    },
    2: {
      title: "Food Chains and Food Webs",
      1: {
        title: "Trophic Levels and Energy Flow",
        complete: false,
      },
      2: {
        title: "Interdependence of Organisms",
        complete: false,
      },
    },
    3: {
      title: "Human Impact on the Environment",
      1: {
        title: "Pollution and Its Effects",
        complete: false,
      },
      2: {
        title: "Climate Change and Biodiversity Loss",
        complete: false,
      },
    },
    4: {
      title: "Sustainable Practices and Conservation Efforts",
      1: {
        title: "Renewable Resources",
        complete: false,
      },
      2: {
        title: "Community-Based Conservation",
        complete: false,
      },
    },
  },
};
