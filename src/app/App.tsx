import { Route, Routes } from 'react-router-dom'
import { PortalLayout } from '@/app/layouts/PortalLayout'
import { PublicLayout } from '@/app/layouts/PublicLayout'
import { AdminPlaceholderPage } from '@/pages/AdminPlaceholderPage'
import { ApprochePage } from '@/pages/ApprochePage'
import { ConnexionPage } from '@/pages/ConnexionPage'
import { ContactPage } from '@/pages/ContactPage'
import { EquipePage } from '@/pages/EquipePage'
import { FormationDetailPage } from '@/pages/FormationDetailPage'
import { FormationsPage } from '@/pages/FormationsPage'
import { HomePage } from '@/pages/HomePage'
import { IntranetPlaceholderPage } from '@/pages/IntranetPlaceholderPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PolitiqueConfidentialitePage } from '@/pages/PolitiqueConfidentialitePage'

export function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="formations" element={<FormationsPage />} />
        <Route path="formations/:slug" element={<FormationDetailPage />} />
        <Route path="approche" element={<ApprochePage />} />
        <Route path="equipe" element={<EquipePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="confidentialite" element={<PolitiqueConfidentialitePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route element={<PortalLayout />}>
        <Route path="connexion" element={<ConnexionPage />} />
        <Route path="intranet/*" element={<IntranetPlaceholderPage />} />
        <Route path="admin/*" element={<AdminPlaceholderPage />} />
      </Route>
    </Routes>
  )
}
