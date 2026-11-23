import { FileText, FolderOpen, ShieldCheck, UploadCloud } from 'lucide-react'
import { Link } from 'react-router-dom'

const fonctionnalites = [
  {
    titre: 'Dossiers de formation',
    description: 'Arborescence de dossiers et sous-dossiers rattachés à chaque formation (F12).',
    icon: FolderOpen,
    roles: 'Étudiant inscrit · Enseignant · Admin',
  },
  {
    titre: 'Dépôt de PDF',
    description: 'Cours, TD et TP déposés par l’enseignant et l’administrateur (F12).',
    icon: UploadCloud,
    roles: 'Enseignant · Admin · Super admin',
  },
  {
    titre: 'Téléchargement protégé',
    description:
      'Aucun fichier public : l’API vérifie le rôle et l’inscription à chaque appel (F13, F14, N3).',
    icon: FileText,
    roles: 'Étudiant inscrit · Enseignant · Admin',
  },
]

export function IntranetPlaceholderPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <span className="badge badge-warning">Lot 6 — en cours de réalisation</span>
        <h1 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">
          Intranet de documents
        </h1>
        <p className="mt-3 text-slate-600">
          Le socle de l’espace est en place. L’arborescence, le dépôt de fichiers et le contrôle
          d’accès seront branchés à l’API Spring Boot au lot 6.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {fonctionnalites.map(({ titre, description, icon: Icon, roles }) => (
          <article key={titre} className="card border border-sky-100 bg-base-100">
            <div className="card-body">
              <Icon className="text-brand-sky-dark" size={24} aria-hidden="true" />
              <h2 className="card-title mt-2 text-lg text-brand-ink">{titre}</h2>
              <p className="text-sm text-slate-600">{description}</p>
              <p className="mt-auto pt-3 text-xs text-slate-500">{roles}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="alert alert-info mt-8 text-sm">
        <ShieldCheck size={18} aria-hidden="true" />
        <span>
          Règle d’accès : un étudiant ne voit un document que s’il est inscrit à une session de la
          formation du dossier. Le masquage dans l’interface ne remplace jamais le contrôle serveur.
        </span>
      </div>

      <p className="mt-8 text-center text-sm">
        <Link className="link link-primary" to="/">
          Retour au site public
        </Link>
      </p>
    </div>
  )
}
