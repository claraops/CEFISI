import { ArrowLeft, LockKeyhole } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { env } from '@/config/env'

export function PortalLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      <header className="border-b border-sky-100 bg-base-100">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-brand-ink">
            <LockKeyhole size={20} aria-hidden="true" className="text-brand-sky-dark" />
            Espace sécurisé — {env.siteName}
          </Link>
          <Link className="btn btn-ghost btn-sm inline-flex items-center gap-1" to="/">
            <ArrowLeft size={16} aria-hidden="true" />
            Retour au site
          </Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6">
        <Outlet />
      </main>
      <footer className="py-6 text-center text-xs text-slate-500">
        Accès réservé — les droits sont vérifiés par l’API Spring Boot, côté serveur.
      </footer>
    </div>
  )
}
