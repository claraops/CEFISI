import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

type FieldName = 'nom' | 'email' | 'objet' | 'message' | 'consentement' | 'website'

interface ContactValues {
  nom: string
  email: string
  objet: string
  message: string
  consentement: boolean
  website: string
}

const initialValues: ContactValues = {
  nom: '',
  email: '',
  objet: '',
  message: '',
  consentement: false,
  website: '',
}

type ContactErrors = Partial<Record<FieldName, string>>

function validate(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}

  if (!values.nom.trim()) errors.nom = 'Indiquez votre nom.'
  if (!values.email.trim()) {
    errors.email = 'Indiquez votre adresse email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Adresse email invalide.'
  }
  if (!values.objet.trim()) errors.objet = 'Indiquez l’objet de votre message.'
  if (values.message.trim().length < 10) {
    errors.message = 'Votre message doit contenir au moins 10 caractères.'
  }
  if (!values.consentement) {
    errors.consentement = 'Votre consentement est obligatoire pour nous écrire.'
  }

  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [isValidated, setIsValidated] = useState(false)

  function update<K extends FieldName>(field: K, value: ContactValues[K]) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Honeypot anti-spam : un bot qui remplit ce champ est rejeté silencieusement.
    if (values.website.trim() !== '') return

    const nextErrors = validate(values)
    setErrors(nextErrors)
    setIsValidated(Object.keys(nextErrors).length === 0)
  }

  return (
    <form
      className="card border border-sky-100 bg-base-100 shadow-sm"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="card-body gap-5">
        <h2 className="card-title text-2xl text-brand-ink">Envoyer un message</h2>

        {isValidated ? (
          <div className="alert alert-success" role="status">
            <span>
              Formulaire validé côté client. L’envoi réel sera branché sur l’API Spring Boot au lot
              3 (besoin F5).
            </span>
          </div>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="form-control w-full">
            <label className="label" htmlFor="contact-nom">
              <span className="label-text font-semibold">Nom</span>
            </label>
            <input
              id="contact-nom"
              className={`input input-bordered w-full ${errors.nom ? 'input-error' : ''}`}
              value={values.nom}
              onChange={(event) => update('nom', event.target.value)}
              aria-invalid={Boolean(errors.nom)}
              aria-describedby={errors.nom ? 'contact-nom-erreur' : undefined}
              autoComplete="name"
            />
            {errors.nom ? (
              <p className="label-text-alt mt-1 text-error" id="contact-nom-erreur">
                {errors.nom}
              </p>
            ) : null}
          </div>

          <div className="form-control w-full">
            <label className="label" htmlFor="contact-email">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              id="contact-email"
              type="email"
              className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
              value={values.email}
              onChange={(event) => update('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-erreur' : undefined}
              autoComplete="email"
            />
            {errors.email ? (
              <p className="label-text-alt mt-1 text-error" id="contact-email-erreur">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor="contact-objet">
            <span className="label-text font-semibold">Objet</span>
          </label>
          <input
            id="contact-objet"
            className={`input input-bordered w-full ${errors.objet ? 'input-error' : ''}`}
            value={values.objet}
            onChange={(event) => update('objet', event.target.value)}
            aria-invalid={Boolean(errors.objet)}
            aria-describedby={errors.objet ? 'contact-objet-erreur' : undefined}
          />
          {errors.objet ? (
            <p className="label-text-alt mt-1 text-error" id="contact-objet-erreur">
              {errors.objet}
            </p>
          ) : null}
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor="contact-message">
            <span className="label-text font-semibold">Message</span>
          </label>
          <textarea
            id="contact-message"
            className={`textarea textarea-bordered h-36 w-full ${errors.message ? 'textarea-error' : ''}`}
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-erreur' : undefined}
          />
          {errors.message ? (
            <p className="label-text-alt mt-1 text-error" id="contact-message-erreur">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="form-control">
          <label className="label cursor-pointer items-start justify-start gap-3">
            <input
              type="checkbox"
              className={`checkbox checkbox-primary mt-0.5 ${errors.consentement ? 'checkbox-error' : ''}`}
              checked={values.consentement}
              onChange={(event) => update('consentement', event.target.checked)}
              aria-invalid={Boolean(errors.consentement)}
              aria-describedby={errors.consentement ? 'contact-consentement-erreur' : undefined}
            />
            <span className="label-text leading-relaxed">
              J’accepte que mes données soient utilisées pour traiter ce message, conformément à la{' '}
              <Link className="link link-primary" to="/confidentialite">
                politique de confidentialité
              </Link>
              . <span className="text-error">*</span>
            </span>
          </label>
          {errors.consentement ? (
            <p className="label-text-alt mt-1 text-error" id="contact-consentement-erreur">
              {errors.consentement}
            </p>
          ) : null}
        </div>

        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="contact-website">Laissez ce champ vide</label>
          <input
            id="contact-website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => update('website', event.target.value)}
          />
        </div>

        <div className="card-actions">
          <button className="btn btn-primary" type="submit">
            Envoyer le message
          </button>
        </div>
      </div>
    </form>
  )
}
