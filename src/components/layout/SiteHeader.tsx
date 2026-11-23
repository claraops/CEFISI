import { ArrowUpRight, GraduationCap, Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { env } from '@/config/env'

const navigation = [
  { to: '/', label: 'Accueil' },
  { to: '/formations', label: 'Formations' },
  { to: '/approche', label: 'Notre approche' },
  { to: '/equipe', label: 'Équipe' },
  { to: '/contact', label: 'Contact' },
]

function navClass({ isActive }: { isActive: boolean }): string {
  return isActive ? 'text-brand-sky-dark font-semibold' : 'text-slate-600 hover:text-brand-sky-dark'
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-sky-100 bg-base-100/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={`${env.siteName} — Accueil`}>
          <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-content">
            <GraduationCap size={22} aria-hidden="true" />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-brand-ink">
            {env.siteName}
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={env.candidatureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            Candidater
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <details className="dropdown dropdown-end lg:hidden">
            <summary className="btn btn-ghost btn-square" aria-label="Ouvrir le menu de navigation">
              <Menu size={22} aria-hidden="true" />
            </summary>
            <ul className="menu dropdown-content z-50 mt-2 w-56 rounded-box border border-sky-100 bg-base-100 p-2 shadow-lg">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a href={env.candidatureUrl} target="_blank" rel="noopener noreferrer">
                  Candidater
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </header>
  )
}
