import { Outlet } from 'react-router-dom'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-content"
      >
        Aller au contenu principal
      </a>
      <SiteHeader />
      <main id="contenu-principal" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
