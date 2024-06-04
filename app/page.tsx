import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Bienvenue chez software shaper",
}

export default function Web() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
                    <div className="mx-auto place-self-center max-w-2xl ">
                        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                            Bienvenue chez software shaper
                        </h1>

                        <section>
                            <h2 className="mb-6 lg:mb-8 text-4xl font-extrabold dark:text-white">Qui sommes-nous ?</h2>
                            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl ">
                                Chez software shaper, nous sommes passionnés par l&apos;innovation et la technologie. Fondée en 2023,
                                notre société est spécialisée dans la création de logiciels web et la fourniture d&apos;outils SaaS (Software as a Service)
                                de pointe. Notre mission est de transformer la manière dont les entreprises utilisent la technologie pour améliorer
                                leur efficacité, leur productivité et leur rentabilité.
                            </p>
                        </section>
                        <section>
                            <h2 className="mb-6 max-w-2xl lg:mb-8 text-4xl font-extrabold dark:text-white">Nos valeurs</h2>
                            <h3 className="mb-6 max-w-2xl lg:mb-8 text-3xl"  >Innovation</h3>
                            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                                Nous croyons fermement que l&apos;innovation est la clé du succès. Nous investissons continuellement dans la recherche
                                et le développement pour vous offrir des solutions à la pointe de la technologie.
                            </p>
                            <h3 className="mb-6 max-w-2xl lg:mb-8 text-3xl" >Qualité</h3>
                            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                                La qualité est au cœur de tout ce que nous faisons. Nos produits sont rigoureusement testés pour garantir leur
                                fiabilité et leur performance, répondant ainsi aux besoins les plus exigeants de nos clients.
                            </p>
                            <h3 className="mb-6 max-w-2xl lg:mb-8 text-3xl">Service client</h3>
                            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                                Votre satisfaction est notre priorité. Notre équipe dédiée est toujours prête à vous accompagner et à répondre
                                à vos questions, assurant ainsi une expérience utilisateur optimale.
                            </p>
                        </section>
                        <section>
                            <h2 className="mb-6 max-w-2xl lg:mb-8 text-4xl font-extrabold dark:text-white">Nos produits et services</h2>
                            <h3 className="mb-6 lg:mb-8 text-3xl">Outils SaaS sur mesure</h3>
                            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                                Nous développons des outils SaaS personnalisés pour répondre aux besoins spécifiques de chaque entreprise.
                                Que vous ayez besoin d&apos;une plateforme de gestion de projet, d&apos;un CRM, ou d&apos;une solution de commerce en ligne,
                                nous avons la compétence pour créer des solutions sur mesure qui s&apos;intègrent parfaitement à votre workflow.
                            </p>
                            <h3 className="mb-6 lg:mb-8 text-3xl">Développement web</h3>
                            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                                Notre équipe d&apos;experts en développement web est capable de réaliser des sites web performants et attrayants,
                                de la conception à la mise en ligne. Nous utilisons les technologies les plus récentes pour garantir que votre
                                site est non seulement beau, mais aussi rapide et sécurisé.
                            </p>
                            <h3 className="mb-6 lg:mb-8 text-3xl">Intégration et automatisation</h3>
                            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                                Nous offrons des services d&apos;intégration et d&apos;automatisation pour connecter vos différents outils et systèmes.
                                Grâce à l&apos;automatisation, nous vous aidons à réduire les tâches répétitives et à augmenter l&apos;efficacité de votre
                                entreprise.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-6 max-w-2xl lg:mb-8 text-4xl font-extrabold dark:text-white">Pourquoi nous choisir ?</h2>
                            <h3 className="mb-6 lg:mb-8 text-3xl">Expertise</h3>
                            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                                Avec des années d&apos;expérience dans le développement de logiciels et de solutions web, notre équipe possède une
                                expertise approfondie qui nous permet de comprendre et de répondre précisément à vos besoins.
                            </p>
                            <h3 className="mb-6 lg:mb-8 text-3xl">Flexibilité</h3>
                            <p className="mb-6 max-w-2xl font-light md:text-lg lg:mb-8 lg:text-xl">
                                Nous comprenons que chaque entreprise est unique. C&apos;est pourquoi nous offrons des solutions flexibles et évolutives,
                                adaptées à la croissance et aux changements de votre entreprise.
                            </p>
                            <h3 className="mb-6 lg:mb-8 text-3xl">Support dédié</h3>
                            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                                Notre support client est toujours à votre disposition pour vous assister. Que ce soit pour une question technique
                                ou pour une assistance à l&apos;utilisation de nos produits, notre équipe est là pour vous aider à chaque étape.
                            </p>
                        </section>
                        <section>
                            <h2 className="mb-6 max-w-2xl lg:mb-8 text-4xl font-extrabold dark:text-white">Témoignages de nos clients</h2>
                            <blockquote>
                                &ldquo;Grâce à Software shaper, nous avons pu automatiser de nombreuses tâches répétitives, ce qui nous a permis
                                de nous concentrer sur notre cœur de métier. Leur service client est exceptionnel et toujours disponible pour nous
                                aider.&ldquo; - Day 1
                            </blockquote>
                            <blockquote>
                                &ldquo;Leur équipe a su comprendre nos besoins spécifiques et développer une solution sur mesure qui a transformé notre
                                manière de travailler. Nous recommandons vivement Software shaper !&ldquo; - Future
                            </blockquote>
                        </section>

                        <section>
                            <h2 className="mb-6 max-w-2xl lg:mb-8 text-4xl font-extrabold dark:text-white">Contactez-nous</h2>
                            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">Prêt à transformer votre entreprise avec nos solutions SaaS innovantes ? Contactez-nous dès aujourd&apos;hui pour une consultation gratuite.</p>
                            <ul>
                                <li><strong>Adresse</strong> : 29 bd des belges</li>
                                <li><strong>Email</strong> : <a href="mailto:contact.web@softwareshaper.com">contact.web@softwareshaper.com</a></li>
                            </ul>
                        </section>
                    </div >
                </div>
            </section >
        </>
    )
}
