import { env } from '@/config/env'
import type {
  Dossier,
  DocumentCours,
  Formation,
  MembreEquipe,
  MessageContact,
  Page,
  Parametre,
  Session,
} from '@/types/domain'

export class ApiError extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${env.apiBaseUrl}${path}`, {
    ...init,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  })

  if (!response.ok) {
    throw new ApiError(response.status, `Requête API échouée (${response.status}) : ${path}`)
  }

  return (await response.json()) as T
}

/**
 * Contrat d'appel unique vers l'API Spring Boot.
 * Le front utilise aujourd'hui les données de `src/data/` ; ces méthodes
 * constituent la cible de branchement des lots 3 à 6.
 */
export const api = {
  getFormations: () => request<Formation[]>('/formations'),
  getFormation: (slug: string) => request<Formation>(`/formations/${slug}`),
  getSessions: () => request<Session[]>('/sessions/next'),
  getEquipe: () => request<MembreEquipe[]>('/equipe'),
  getCandidatureUrl: () => request<Parametre>('/parametres/candidature-url'),
  sendContactMessage: (message: Omit<MessageContact, 'id' | 'date'>) =>
    request<MessageContact>('/contact', { method: 'POST', body: JSON.stringify(message) }),
  getDossiers: (formationId: string) =>
    request<Dossier[]>(`/dossiers?formationId=${encodeURIComponent(formationId)}`),
  getDocuments: (dossierId: string) =>
    request<DocumentCours[]>(`/documents?dossierId=${encodeURIComponent(dossierId)}`),
  getAdminPages: () => request<Page[]>('/admin/pages'),
}
