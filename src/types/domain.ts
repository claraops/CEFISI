/**
 * Modèle de données TypeScript — 12 entités du cahier des charges (section 6).
 * Les champs slug/descriptionCourte/published sont des ajouts côté front pour
 * le catalogue et l'édition sans code ; ils seront confirmés avec l'API au lot 3.
 * Le mot de passe haché n'est volontairement pas exposé ici : il reste côté API.
 */

export type RoleName = 'super_admin' | 'admin' | 'enseignant' | 'etudiant'
export type StatutRecrutement = 'ouvert' | 'complet' | 'a-venir'
export type TypeDocument = 'cours' | 'td' | 'tp'
export type StatutInscription = 'en-attente' | 'confirmee' | 'refusee'

export interface Utilisateur {
  id: string
  nom: string
  prenom: string
  email: string
  actif: boolean
  role: RoleName
}

export interface Role {
  id: string
  nom: RoleName
  libelle: string
}

export interface Formation {
  id: string
  slug: string
  titre: string
  niveau: string
  duree: string
  financement: string
  descriptionCourte: string
  objectifs: string[]
  programme: string[]
  blocsCompetences: string[]
  debouches: string[]
  plaquetteUrl: string | null
  published: boolean
}

export interface Session {
  id: string
  formationId: string
  dates: string
  lieu: string
  statutRecrutement: StatutRecrutement
}

export interface Inscription {
  id: string
  utilisateurId: string
  sessionId: string
  date: string
  statut: StatutInscription
}

export interface Dossier {
  id: string
  formationId: string
  nom: string
  parentId: string | null
}

/** Entité « Document » du cahier, renommée pour éviter le conflit avec le DOM. */
export interface DocumentCours {
  id: string
  dossierId: string
  auteurId: string
  titre: string
  type: TypeDocument
  dateDepot: string
  /** URL protégée servie par l'API — jamais un lien public vers le fichier. */
  downloadUrl: string
}

export interface Page {
  id: string
  adresse: string
  titre: string
  contenu: string
  publiee: boolean
  auteurId: string
  dateCreation: string
  dateModification: string
}

export interface MessageContact {
  id: string
  nom: string
  email: string
  objet: string
  message: string
  date: string
  consentement: boolean
}

export interface MembreEquipe {
  id: string
  nom: string
  fonction: string
  biographie: string
  photoUrl: string | null
}

export interface Parametre {
  cle: string
  valeur: string
}

export interface JournalConnexion {
  id: string
  utilisateurId: string | null
  adresseIp: string
  date: string
  resultat: 'succes' | 'echec' | 'blocage'
}
