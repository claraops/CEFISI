import type { Formation, MembreEquipe, Session } from '@/types/domain'

/**
 * Données de démonstration — CONTENUS FICTIFS.
 * À remplacer par les appels API du lot 3 (src/lib/api.ts) et à faire valider
 * par la cliente : les durées, dates et lieux du site actuel sont à confirmer
 * (cf. docs/06-hypotheses-et-questions.md).
 */

export const formations: Formation[] = [
  {
    id: 'f-moa-si',
    slug: 'moa-si',
    titre: 'MOA en système d’information',
    niveau: 'Bac+5',
    duree: '12 mois',
    financement: 'Alternance ou plan de formation',
    descriptionCourte:
      'Pilotez la transformation numérique : recueil des besoins, conception et conduite de projet SI.',
    objectifs: [
      'Recueillir et formaliser les besoins métier',
      'Modéliser les processus et les systèmes d’information',
      'Piloter un projet de transformation numérique',
    ],
    programme: [
      'Analyse et modélisation des besoins',
      'Architecture et urbanisation du SI',
      'Gestion de projet et conduite du changement',
      'Qualité, tests et sécurité des systèmes',
      'Projet fil rouge en entreprise',
    ],
    blocsCompetences: [
      'Cadrer et analyser un projet SI',
      'Concevoir une solution numérique',
      'Piloter la réalisation et la qualité',
      'Accompagner le changement',
    ],
    debouches: ['Chef de projet SI', 'Business analyst', 'Consultant transformation digitale'],
    plaquetteUrl: null,
    published: true,
  },
  {
    id: 'f-concepteur-dev',
    slug: 'concepteur-developpeur-applications',
    titre: 'Concepteur développeur d’applications',
    niveau: 'Bac+3/4',
    duree: '12 mois',
    financement: 'Alternance ou contrat de professionnalisation',
    descriptionCourte:
      'Concevez, développez et déployez des applications web et mobiles de bout en bout.',
    objectifs: [
      'Concevoir une application à partir d’un cahier des charges',
      'Développer des composants front et back sécurisés',
      'Déployer et maintenir une application en équipe',
    ],
    programme: [
      'Fondamentaux du développement et de la programmation orientée objet',
      'Développement web front (HTML, CSS, JavaScript, React)',
      'Développement back-end et API REST',
      'Bases de données et modélisation',
      'Tests, DevOps et déploiement',
    ],
    blocsCompetences: [
      'Analyser et concevoir une application',
      'Développer des composants d’accès aux données',
      'Réaliser une interface utilisateur',
      'Sécuriser et déployer une application',
    ],
    debouches: ['Développeur web', 'Développeur full-stack', 'Ingénieur logiciel junior'],
    plaquetteUrl: null,
    published: true,
  },
  {
    id: 'f-no-code',
    slug: 'no-code',
    titre: 'No code & low code',
    niveau: 'Bac+2',
    duree: '6 mois',
    financement: 'Alternance ou financement personnel',
    descriptionCourte:
      'Créez des applications et automatisez des processus sans écrire une ligne de code.',
    objectifs: [
      'Construire une application métier sans développement',
      'Automatiser des flux entre outils',
      'Industrialiser et sécuriser ses créations no code',
    ],
    programme: [
      'Bases du no code et du low code',
      'Création d’applications avec outils visuels',
      'Automatisation et intégrations',
      'Données, tableaux de bord et sécurité',
      'Projet de création d’application métier',
    ],
    blocsCompetences: [
      'Cadrer un besoin métier',
      'Créer une application no code',
      'Automatiser des traitements',
      'Administrer et sécuriser une application',
    ],
    debouches: ['Consultant no code', 'Chargé d’automatisation', 'Product builder'],
    plaquetteUrl: null,
    published: true,
  },
  {
    id: 'f-blockchain',
    slug: 'blockchain',
    titre: 'Blockchain & Web3',
    niveau: 'Bac+5',
    duree: '9 mois',
    financement: 'Alternance ou plan de formation',
    descriptionCourte:
      'Découvrez les architectures décentralisées, les smart contracts et leurs cas d’usage métier.',
    objectifs: [
      'Comprendre les principes cryptographiques de la blockchain',
      'Développer et sécuriser des smart contracts',
      'Évaluer la pertinence d’une solution décentralisée',
    ],
    programme: [
      'Fondamentaux de la blockchain',
      'Smart contracts et sécurité',
      'Développement d’applications décentralisées',
      'Cas d’usage : supply chain, finance, identité',
      'Projet de bout en bout',
    ],
    blocsCompetences: [
      'Analyser un cas d’usage blockchain',
      'Développer un smart contract',
      'Sécuriser une application décentralisée',
      'Déployer une solution Web3',
    ],
    debouches: ['Développeur smart contracts', 'Consultant blockchain', 'Ingénieur Web3'],
    plaquetteUrl: null,
    published: true,
  },
]

export const prochainesSessions: Session[] = [
  {
    id: 's-janvier-2027',
    formationId: 'f-concepteur-dev',
    dates: 'Rentrée de janvier 2027',
    lieu: 'Paris & en alternance',
    statutRecrutement: 'ouvert',
  },
  {
    id: 's-mars-2027',
    formationId: 'f-moa-si',
    dates: 'Rentrée de mars 2027',
    lieu: 'Paris & à distance',
    statutRecrutement: 'ouvert',
  },
  {
    id: 's-fevrier-2027',
    formationId: 'f-no-code',
    dates: 'Rentrée de février 2027',
    lieu: 'À distance',
    statutRecrutement: 'a-venir',
  },
  {
    id: 's-avril-2027',
    formationId: 'f-blockchain',
    dates: 'Rentrée d’avril 2027',
    lieu: 'Paris',
    statutRecrutement: 'a-venir',
  },
]

export const equipe: MembreEquipe[] = [
  {
    id: 'm-1',
    nom: 'Camille Martin',
    fonction: 'Directrice pédagogique',
    biographie:
      'Pilote les programmes et veille à l’adéquation entre les compétences enseignées et les besoins des entreprises.',
    photoUrl: null,
  },
  {
    id: 'm-2',
    nom: 'Sofiane Benali',
    fonction: 'Formateur développement',
    biographie:
      'Développeur full-stack, accompagne les apprenants sur les projets web et les bonnes pratiques de génie logiciel.',
    photoUrl: null,
  },
  {
    id: 'm-3',
    nom: 'Élodie Laurent',
    fonction: 'Formatrice systèmes & réseaux',
    biographie:
      'Spécialiste de l’urbanisation du SI et de la conduite de projet, intervient sur le parcours MOA.',
    photoUrl: null,
  },
  {
    id: 'm-4',
    nom: 'Nicolas Petit',
    fonction: 'Responsable des partenariats',
    biographie:
      'Construit les relations avec les entreprises et accompagne les candidats dans leur recherche d’alternance.',
    photoUrl: null,
  },
]

export const chiffresCles = [
  { valeur: '4', libelle: 'formations spécialisées' },
  { valeur: '12', libelle: 'mois de formation en alternance' },
  { valeur: '250+', libelle: 'apprenants accompagnés' },
  { valeur: '92%', libelle: 'd’insertion à six mois (à confirmer)' },
] as const

export const financements = [
  'Contrat d’apprentissage et de professionnalisation',
  'Prise en charge par un OPCO',
  'Plan de formation d’entreprise',
  'France Travail et dispositifs régionaux',
] as const

export const labelsEtPartenaires = [
  'Qualiopi',
  'France Compétences',
  'OPCO',
  'Partenaires entreprises',
] as const

export const valeursPedagogiques = [
  {
    titre: 'Apprendre en faisant',
    description:
      'Des projets concrets et fil rouges pour mettre en pratique chaque compétence dès le premier mois.',
  },
  {
    titre: 'Un suivi individualisé',
    description:
      'Un référent pédagogique, des points réguliers et un accompagnement vers l’alternance.',
  },
  {
    titre: 'Une formation ancrée dans l’emploi',
    description:
      'Des programmes construits avec les entreprises et alignés sur les besoins du marché.',
  },
  {
    titre: 'Une équipe disponible',
    description:
      'Formateurs et responsables pédagogiques accessibles pour lever les blocages rapidement.',
  },
] as const
