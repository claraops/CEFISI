import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/features/contact/ContactForm'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ContactPage() {
  return (
    <>
      <section className="bg-brand-sky-light py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Parlons de votre projet"
            description="Une question sur une formation, un financement ou une rentrée ? Écrivez-nous, l’équipe vous répondra."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-5 lg:col-span-1">
          <div className="card border border-sky-100">
            <div className="card-body gap-4">
              <h2 className="card-title text-lg text-brand-ink">Nos coordonnées</h2>
              <p className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="shrink-0 text-brand-sky-dark" size={18} aria-hidden="true" />
                contact@cefisi.fr <span className="text-xs text-slate-400">(à confirmer)</span>
              </p>
              <p className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="shrink-0 text-brand-sky-dark" size={18} aria-hidden="true" />
                01 XX XX XX XX <span className="text-xs text-slate-400">(à confirmer)</span>
              </p>
              <p className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin className="shrink-0 text-brand-sky-dark" size={18} aria-hidden="true" />
                Paris, France <span className="text-xs text-slate-400">(à confirmer)</span>
              </p>
            </div>
          </div>

          <div className="alert alert-info">
            <span className="text-sm">
              Vos données sont utilisées uniquement pour traiter votre demande. Consentement
              obligatoire conformément au RGPD (N4).
            </span>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
