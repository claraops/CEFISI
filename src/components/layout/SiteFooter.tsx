import { Link } from 'react-router-dom'
import { env } from '@/config/env'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-sky-100 bg-base-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-extrabold text-brand-ink">{env.siteName}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
            Organisme de formation en informatique : reconversion et alternance.
          </p>
        </div>

        <nav aria-label="Liens du pied de page">
          <p className="mb-3 text-sm font-bold text-brand-ink">Découvrir</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <Link className="hover:text-brand-sky-dark" to="/formations">
                Nos formations
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-sky-dark" to="/approche">
                Notre approche pédagogique
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-sky-dark" to="/equipe">
                L’équipe
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-sky-dark" to="/contact">
                Nous contacter
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-sm font-bold text-brand-ink">Candidater</p>
          <p className="mb-4 text-sm text-slate-600">
            Le suivi des candidatures se fait sur la plateforme dédiée.
          </p>
          <a
            className="btn btn-outline btn-primary btn-sm"
            href={env.candidatureUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Accéder à la plateforme
          </a>
          <p className="mt-4 text-sm">
            <Link className="text-slate-500 underline underline-offset-4" to="/confidentialite">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t border-sky-100 py-5 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {env.siteName} — Projet de refonte (Master 1 Informatique).
        </p>
        <p className="mt-1">
          Site de démonstration : contenus fictifs en attente de validation par la cliente.
        </p>
      </div>
    </footer>
  )
}
