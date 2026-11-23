/**
 * Point d'entrée minimal du frontend CEFISI.
 * Ce dépôt est une initialisation : les écrans et la logique métier seront
 * ajoutés par l'équipe selon le cahier des charges et le WBS (docs/).
 */
export function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-base-200 px-6 text-center">
      <div>
        <span className="badge badge-primary">Socle initial</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-ink">CEFISI</h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-600">
          Le projet est initialisé et prêt à être utilisé en équipe. Le site sera implémenté
          conformément au cahier des charges et au WBS disponibles dans <code>docs/</code>.
        </p>
      </div>
    </main>
  )
}
