import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-antonio text-xl font-extrabold">TEST BONJOUR INTER</h1>
      <h2 className="font-inter text-sm">TEST INTER lorem</h2>
      <Link href="/about">
      Lien page A Propos</Link>
      <p className="bg-background1">background1</p>
      <p className="bg-background2">background2</p>
      <p className="bg-text1">text1</p>
      <p className="bg-text2">text2</p>
      <p className="bg-text3">text3</p>
    </div>
  );
}
