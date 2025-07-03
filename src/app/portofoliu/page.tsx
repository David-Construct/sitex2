export const metadata = {
  title: "Portofoliu | David Construct - Proiecte Case și Construcții din Lemn",
  description: "Vezi portofoliul David Construct: case din lemn, cabane A-frame, foișoare și alte proiecte realizate cu pasiune și atenție la detalii.",
  keywords: "portofoliu case lemn, proiecte cabane lemn, lucrari David Construct, case a-frame, foișoare lemn"
}

import ClientPortfolio from "./ClientPortfolio";

export default function PortfolioPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Portofoliu de Construcții din Lemn
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explorați o galerie cu proiectele noastre din lemn. Fiecare imagine reprezintă un vis împlinit și o dovadă a calității, măiestriei și dedicării noastre. Filtrați proiectele pentru a explora domeniul de interes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ClientPortfolio />
    </>
  );
}
