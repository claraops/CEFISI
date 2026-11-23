const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export function formatDate(isoDate: string): string {
  // Une date « AAAA-MM-JJ » est interprétée en UTC par le moteur JS ; on la
  // force à midi local pour éviter un décalage d'un jour selon le fuseau.
  const date = new Date(/^\d{4}-\d{2}-\d{2}$/.test(isoDate) ? `${isoDate}T12:00:00` : isoDate)
  if (Number.isNaN(date.getTime())) {
    return 'Date invalide'
  }
  return dateFormatter.format(date)
}

export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function pluralize(count: number, singular: string, plural = `${singular}s`): string {
  return count > 1 ? plural : singular
}
