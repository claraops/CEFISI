import { History, LayoutDashboard, Mail, PencilLine, Settings2, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const modules = [
  { titre: 'Tableau de bord', besoin: 'F15', icon: LayoutDashboard, roles: 'Admin · Super admin' },
  {
    titre: 'Pages et contenus sans code',
    besoin: 'F16',
    icon: PencilLine,
    roles: 'Admin · Super admin',
  },
  { titre: 'Médias', besoin: 'F17', icon: Settings2, roles: 'Admin · Super admin' },
  { titre: 'Messages de contact', besoin: 'F18', icon: Mail, roles: 'Admin' },
  {
    titre: 'Historique des modifications',
    besoin: 'F19',
    icon: History,
    roles: 'Admin · Super admin',
  },
  {
    titre: 'Utilisateurs et inscriptions',
    besoin: 'F11',
    icon: Users,
    roles: 'Admin · Super admin',
  },
]

export function AdminPlaceholderPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <span className="badge badge-warning">Lot 5 — en cours de réalisation</span>
        <h1 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">Back-office</h1>
        <p className="mt-3 text-slate-600">
          Les écrans d’administration seront construits au lot 5. L’objectif (F16) reste de modifier
          pages et contenus sans écrire de code, avec un éditeur simple et des modèles de pages.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map(({ titre, besoin, icon: Icon, roles }) => (
          <article key={besoin} className="card border border-sky-100 bg-base-100">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <Icon className="text-brand-sky-dark" size={24} aria-hidden="true" />
                <span className="badge badge-outline badge-primary">{besoin}</span>
              </div>
              <h2 className="card-title mt-2 text-lg text-brand-ink">{titre}</h2>
              <p className="mt-auto pt-3 text-xs text-slate-500">{roles}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="alert alert-warning mt-8 text-sm">
        <span>
          Le lien « Candidater » (F6) et les paramètres de sécurité seront modifiables ici par le
          super admin, une fois le back-office branché à l’API.
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
