import CareerStep from "./CarreerStep";

export default function Career() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-28 font-inter text-xs md:text-sm xl:text-lg">
      <div className="mx-4 grid gap-4 sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-3">
          <div className="pb-12 text-center md:text-left">
            <h3 className="text-3xl font-semibold">Mon Parcours</h3>
            <span className="text-sm font-bold uppercase tracking-wider">
              en quelques années ...
            </span>
          </div>
        </div>
        <div className="relative col-span-12 space-y-6 px-4 sm:col-span-9">
          <div className="relative col-span-12 space-y-12 px-4 before:bg-text3 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:-left-3 sm:before:bottom-0 sm:before:top-2 sm:before:w-0.5">
            <CareerStep
              title="Les Origines"
              year="1999"
              description="un jour, je reçois une carte postale de Chicago représentant un tableau d’une chanteuse de blues. Le déclic, quelque chose enfouit en moi s’est réveillé. Je décide de le reproduire, ce sera ma première toile. Depuis cette carte postale reçue il y a 25 ans, je n’ai pas cessé de peindre."
            />
            <CareerStep
              title="Jackson Pollock"
              year="2012"
              description="Je découvre à New-York les œuvres du peintre Jackson Pollock. L’énergie qui se dégage de ses toiles gigantesques, éveille en moi le désir d’explorer l’univers des expressionnistes abstraits."
            />
            <CareerStep
              title="Première exposition"
              year="2019"
              description="Première grande exposition, 25 toiles seront exposées, les retours très positifs m’encouragent à continuer. Une seconde exposition aura lieu en décembre de la même année. Aujourd’hui, j’exerce la profession d’Artiste Peintre, cela me permet de passer le temps nécessaire dans mon atelier, à peindre, à imaginer, à créer, à tester…"
            />
            {/* Ajoutez d'autres étapes ici si besoin */}
          </div>
        </div>
      </div>
    </section>
  );
}