import ExhibitionsCard from "../../../components/ExhibitionCard";

export default function UpcomingExhibitions() {
    return (
        <section className="min-h-screen bg-background1 font-antonio text-text1">
            <h2 className="p-20 text-center text-4xl md:text-left md:text-5xl lg:text-7xl"><span className="text-text3">Expositions</span> à venir</h2>
            <ExhibitionsCard isUpcoming={true} />
        </section>
    );
};