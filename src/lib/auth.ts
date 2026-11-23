import type { RoleName } from '@/types/domain'

export type Permission =
  | 'voir-site-public'
  | 'envoyer-message-contact'
  | 'voir-documents-inscription'
  | 'deposer-documents'
  | 'gerer-utilisateurs'
  | 'gerer-pages'
  | 'gerer-parametres'

/**
 * Hypothèses de droits du cahier des charges (section 3).
 * À valider par la cliente (Q1 à Q3) et à reproduire côté API : ce masque
 * front sert uniquement à masquer des actions, jamais à autoriser un accès.
 */
const permissionsParRole: Record<RoleName, readonly Permission[]> = {
  etudiant: ['voir-site-public', 'envoyer-message-contact', 'voir-documents-inscription'],
  enseignant: [
    'voir-site-public',
    'envoyer-message-contact',
    'voir-documents-inscription',
    'deposer-documents',
  ],
  admin: [
    'voir-site-public',
    'envoyer-message-contact',
    'voir-documents-inscription',
    'deposer-documents',
    'gerer-utilisateurs',
    'gerer-pages',
  ],
  super_admin: [
    'voir-site-public',
    'envoyer-message-contact',
    'voir-documents-inscription',
    'deposer-documents',
    'gerer-utilisateurs',
    'gerer-pages',
    'gerer-parametres',
  ],
}

export function can(role: RoleName | null, permission: Permission): boolean {
  if (!role) {
    return permission === 'voir-site-public' || permission === 'envoyer-message-contact'
  }
  return permissionsParRole[role].includes(permission)
}
