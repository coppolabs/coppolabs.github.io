import { Link } from "react-router-dom";

const Privacy = () => {
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
                    Privacy Policy
                </h1>
                <div className="space-y-6 text-foreground/80 leading-relaxed font-sans">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">1. Controller</h2>
                        <p>
                            Antonio Coppola
                            <br />
                            Wendelsteinstraße 3
                            <br />
                            81541, Munich
                            <br />
                            Germany
                            <br />
                            E-Mail: <a href="mailto:antonio.coppola364@gmail.com" className="underline">antonio.coppola364@gmail.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">2. General information</h2>
                        <p>
                            I take the protection of your personal data seriously. This website is processed in
                            accordance with the General Data Protection Regulation (GDPR) and applicable German data
                            protection law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">3. Server log files</h2>
                        <p>
                            When you visit this website, the hosting provider may automatically collect information
                            such as IP address, browser type, operating system, referrer URL, time of access, and
                            requested pages. This processing is carried out to ensure the technical operation,
                            security, and stability of the website.
                        </p>
                        <p>
                            Legal basis: Art. 6(1)(f) GDPR.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">4. Contact by e-mail</h2>
                        <p>
                            If you contact me by e-mail, the data you provide will be processed for the purpose of
                            handling your request and any follow-up communication.
                        </p>
                        <p>
                            Legal basis: Art. 6(1)(b) GDPR if your request relates to pre-contractual communication,
                            otherwise Art. 6(1)(f) GDPR.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">5. Recipients</h2>
                        <p>
                            Your data may be processed by technical service providers involved in hosting and
                            delivering this website. Data is only shared where necessary for the operation of the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">6. Storage period</h2>
                        <p>
                            Personal data is stored only for as long as necessary for the relevant processing purpose
                            or as required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">7. Your rights</h2>
                        <p>
                            Under the GDPR, you have the right of access, rectification, erasure, restriction of
                            processing, data portability, and objection. You also have the right to lodge a complaint
                            with a competent supervisory authority.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">8. Third-country transfers</h2>
                        <p>
                            If individual services used on this website involve data transfers to countries outside
                            the EU/EEA, this will only take place in accordance with the applicable GDPR requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">9. Changes</h2>
                        <p>
                            I may update this Privacy Policy from time to time to reflect legal, technical, or
                            operational changes.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Privacy;