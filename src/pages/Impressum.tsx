import { Link } from "react-router-dom";

const Impressum = () => {
    return (
        <main className="min-h-screen px-6 md:px-12 py-20 lg:ml-64">
            <div className="max-w-3xl">
                <Link
                    to="/"
                    className="inline-block mb-6 text-sm font-sans text-primary hover:underline"
                >
                    ← Back to Home
                </Link>

                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                    Impressum
                </h1>

                <div className="space-y-6 text-foreground/80 leading-relaxed font-sans">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 DDG</h2>
                        <p>
                            Antonio Coppola
                            <br />
                            Wendelsteinstraße 3
                            <br />
                            81541, Munich
                            <br />
                            Germany
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
                        <p>
                            E-Mail: <a href="mailto:antonio.coppola@tum.de" className="underline">antonio.coppola@tum.de</a>
                            <br />
                            Telefon: +393396348089
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">
                            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                        </h2>
                        <p>
                            Antonio Coppola
                            <br />
                            Wendelsteinstraße 3
                            <br />
                            81541, Munich
                            <br />
                            Germany
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Haftung für Inhalte</h2>
                        <p>
                            The contents of this website were created with great care. However, I cannot guarantee
                            the accuracy, completeness, or timeliness of the content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Haftung für Links</h2>
                        <p>
                            This website may contain links to external websites of third parties, over whose contents
                            I have no control. Therefore, I cannot assume any liability for these external contents.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Urheberrecht</h2>
                        <p>
                            The content and works on this website are subject to copyright. Reproduction, editing,
                            distribution, or any kind of use outside the limits of copyright law require prior written consent.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Impressum;