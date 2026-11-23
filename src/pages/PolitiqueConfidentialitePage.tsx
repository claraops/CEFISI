import { SectionHeading } from '@/components/ui/SectionHeading'
import { env } from '@/config/env'

export function PolitiqueConfidentialitePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="RGPD"
        title="Politique de confidentialité"
        description="Document de travail — à faire valider par la maîtrise d’ouvrage avant mise en ligne (exigence N4)."
      />

      <div className="prose mt-10 max-w-none space-y-8 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-brand-ink">Responsable du traitement</h2>
          <p>
            {env.siteName}, organisme de formation. Les coordonnées définitives du responsable de
            traitement et du délégué à la protection des données seront précisées par la cliente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-ink">Données collectées</h2>
          <p>
            Formulaire de contact : nom, adresse email, objet, message, date et consentement.
            Comptes des espaces protégés : identité, adresse email, rôle, journal de connexion.
            Aucune donnée de candidature n’est collectée par ce site : le lien redirige vers la
            plateforme dédiée.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-ink">Finalités et base légale</h2>
          <p>
            Les données du formulaire servent uniquement à répondre aux demandes. Le consentement
            est recueilli explicitement à l’envoi. Les données des comptes servent à l’accès aux
            cours et aux documents selon les droits de chaque rôle.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-ink">Conservation et accès</h2>
          <p>
            Les données sont conservées le temps nécessaire au traitement de la demande et aux
            obligations légales. L’accès est limité aux personnes habilitées ; les mots de passe
            sont hachés et les documents sont servis par une URL protégée.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-ink">Vos droits</h2>
          <p>
            Vous pouvez demander l’accès, la rectification, la suppression ou la limitation du
            traitement de vos données, ainsi que vous opposer à un traitement. Ces demandes se font
            via le formulaire de contact.
          </p>
        </section>

        <p className="text-sm text-slate-500">
          Brouillon — les durées de conservation, les coordonnées et la politique de cookies doivent
          être arrêtées avec la cliente.
        </p>
      </div>
    </section>
  )
}
