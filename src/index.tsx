import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <Layout>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  )
})

// ── Layout ──────────────────────────────────────────────
function Layout({ children }: { children: any }) {
  return html`
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fidassur — Agent Wafa Assurance, Maroc</title>
  <meta name="description" content="Fidassur, agent Wafa Assurance au Maroc. Solutions auto, santé, habitation, épargne et professionnelle." />
  <meta name="keywords" content="assurance, agent, Wafa, Maroc, Fidassur, auto, santé, habitation" />
  <meta property="og:title" content="Fidassur — Agent Wafa Assurance" />
  <meta property="og:description" content="Agent Wafa Assurance au Maroc." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://fidassur.ma" />
  <link rel="canonical" href="https://fidassur.ma" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: { DEFAULT: '#1a5c3a', light: '#2a8c5a', dark: '#0f4030' },
            accent:  { DEFAULT: '#c8a45c', light: '#dcc082', dark: '#a8853a' },
          },
          fontFamily: { sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'] },
        }
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
    .fade-in { opacity: 0; transform: translateY(20px); animation: fadeIn 0.8s ease forwards; }
    @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }
  </style>
</head>
<body class="bg-white text-gray-800 antialiased">
  ${children}
</body>
</html>`
}

// ── Navigation ──────────────────────────────────────────
function Nav() {
  return (
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a href="#" class="flex items-center gap-2">
            <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">F</span>
            </div>
            <span class="font-semibold text-primary text-lg hidden sm:block">Fidassur</span>
          </a>
          <div class="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#about" class="hover:text-primary transition-colors">À propos</a>
            <a href="#services" class="hover:text-primary transition-colors">Services</a>
            <a href="#contact" class="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ── Hero ────────────────────────────────────────────────
function Hero() {
  return (
    <section class="relative min-h-screen flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 25px 25px, white 1px, transparent 1px); background-size: 50px 50px;" />
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="fade-in">
              <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-accent-light text-sm font-medium mb-6">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span>Agent Wafa Assurance</span>
              </div>
            </div>
            <h1 class="fade-in delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Fidassur<br />
              <span class="text-accent">Assurance</span>
            </h1>
            <p class="fade-in delay-2 text-xl text-white/80 max-w-xl leading-relaxed">
              Votre agent <strong class="text-white">Wafa Assurance</strong> de confiance.
              Solutions d'assurance complètes pour particuliers et professionnels.
            </p>
            <div class="fade-in delay-3 flex flex-wrap gap-4">
              <a href="#contact" class="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl">
                Demander un devis
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="#services" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-xl transition-all backdrop-blur-sm border border-white/20">
                Découvrir nos services
              </a>
            </div>
          </div>
          <div class="fade-in delay-4 hidden lg:flex justify-center">
            <div class="relative">
              <div class="w-80 h-80 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div class="text-center">
                  <div class="text-7xl font-bold text-accent">Wafa</div>
                  <div class="text-white/60 text-lg mt-2">Assurance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── About ───────────────────────────────────────────────
function About() {
  return (
    <section id="about" class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase">
              <span class="w-8 h-px bg-accent" />
              À propos
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-primary-dark">
              Votre agent <span class="text-accent">Wafa Assurance</span>
            </h2>
            <p class="text-gray-600 leading-relaxed text-lg">
              <strong>Fidassur</strong> est un agent <strong>Wafa Assurance</strong> basé au Maroc.
              Nous accompagnons les particuliers et les entreprises avec des solutions
              d'assurance adaptées à leurs besoins.
            </p>
            <p class="text-gray-600 leading-relaxed text-lg">
              En tant qu'<strong>agent Wafa Assurance</strong>, nous représentons une compagnie
              d'assurance leader et vous proposons des solutions claires et personnalisées.
            </p>
            <div class="grid grid-cols-3 gap-6 pt-4">
              {[
                { value: 'Wafa', label: 'Agent assurance' },
                { value: 'Maroc', label: 'Couverture nationale' },
                { value: 'Particulier', label: 'Pro & Entreprise' },
              ].map((stat) => (
                <div key={stat.label} class="text-center">
                  <div class="text-3xl font-bold text-primary">{stat.value}</div>
                  <div class="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 class="text-xl font-bold text-primary mb-6">Notre mission</h3>
            <ul class="space-y-4">
              {[
                'Protéger ce qui vous est le plus cher avec des solutions adaptées',
                'Vous accompagner dans le choix de votre couverture avec transparence',
                'Assurer un suivi personnalisé et une réactivité en cas de sinistre',
                'Vous proposer les garanties Wafa les plus adaptées à votre situation',
                'Simplifier l\'assurance pour nos clients avec des conseils clairs',
              ].map((item) => (
                <li key={item} class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Services ────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: (
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      ),
      title: 'Assurance Auto & Moto',
      desc: 'Protection complète pour vos véhicules : responsabilité civile, tous risques, vol, incendie, bris de glace.',
    },
    {
      icon: (
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
      ),
      title: 'Assurance Habitation',
      desc: 'Protégez votre foyer et vos biens : multirisque habitation, incendie, dégâts des eaux, vol, responsabilité civile.',
    },
    {
      icon: (
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
      ),
      title: 'Assurance Santé',
      desc: 'Couverture médicale pour vous et votre famille : hospitalisation, soins courants, maternité, optique, dentaire.',
    },
    {
      icon: (
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      ),
      title: 'Épargne & Prévoyance',
      desc: 'Solutions d\'épargne et de prévoyance pour sécuriser l\'avenir : assurance-vie, retraite, épargne éducation.',
    },
    {
      icon: (
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A24.174 24.174 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      ),
      title: 'Assurance Professionnelle',
      desc: 'Solutions pour les entreprises : multirisque professionnelle, responsabilité civile, flotte automobile, chantier.',
    },
    {
      icon: (
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      ),
      title: 'Conseil & Accompagnement',
      desc: 'Audit de vos contrats existants, optimisation de votre couverture, assistance en cas de sinistre.',
    },
  ]

  return (
    <section id="services" class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            <span class="w-8 h-px bg-accent" />
            Nos services
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-primary-dark">
            Des solutions adaptées à vos besoins
          </h2>
          <p class="text-gray-600 mt-4 text-lg">
            Forts de notre partenariat avec Wafa Assurance, nous vous proposons une gamme complète
            de produits d'assurance pour les particuliers et les professionnels.
          </p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} class="group bg-gray-50 rounded-2xl p-8 hover:bg-primary hover:text-white transition-all duration-300 cursor-default">
              <div class="w-14 h-14 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center text-primary group-hover:text-white transition-all mb-5">
                {s.icon}
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-white transition-colors">{s.title}</h3>
              <p class="text-gray-600 group-hover:text-white/80 transition-colors leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ─────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            <span class="w-8 h-px bg-accent" />
            Contact
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-primary-dark">
            Prenez rendez-vous
          </h2>
          <p class="text-gray-600 mt-4 text-lg">
            Notre équipe est à votre écoute pour vous conseiller et vous accompagner
            dans le choix de votre couverture.
          </p>
        </div>
        <div class="grid lg:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div class="space-y-6">
                {[
                  {
                    icon: (
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    ),
                    label: 'Adresse',
                    value: 'Maroc',
                  },
                  {
                    icon: (
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    ),
                    label: 'Téléphone',
                    value: 'Contactez-nous',
                    href: 'mailto:contact@fidassur.ma',
                  },
                  {
                    icon: (
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    ),
                    label: 'Email',
                    value: 'contact@fidassur.ma',
                    href: 'mailto:contact@fidassur.ma',
                  },
                  {
                    icon: (
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    ),
                    label: 'Horaires',
                    value: 'Lun–Ven: 8h30–18h30 | Sam: 9h–14h',
                  },
                ].map((item) => (
                  <div key={item.label} class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-500">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} class="text-lg font-semibold text-primary hover:text-primary-light transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div class="text-lg font-semibold text-gray-800">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Contactez-nous par email</h3>
            <p class="text-gray-600 mb-6 max-w-sm">
              Pour toute demande de devis ou d'information, écrivez-nous à :
            </p>
            <a
              href="mailto:contact@fidassur.ma"
              class="inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              contact@fidassur.ma
            </a>
            <p class="text-xs text-gray-400 mt-4">Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ──────────────────────────────────────────────
function Footer() {
  return (
    <footer class="bg-primary-dark text-white/60">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div class="sm:col-span-2 lg:col-span-1">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span class="text-primary-dark font-bold text-sm">F</span>
              </div>
              <span class="font-semibold text-white">Fidassur</span>
            </div>
            <p class="text-sm leading-relaxed">
              Agent Wafa Assurance au Maroc.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Services</h4>
            <ul class="space-y-2 text-sm">
              <li>Auto & Moto</li>
              <li>Habitation</li>
              <li>Santé</li>
              <li>Épargne & Prévoyance</li>
              <li>Professionnel</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Contact</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@fidassur.ma" class="hover:text-white transition-colors">contact@fidassur.ma</a>
              </li>
              <li>Lun–Ven: 8h30–18h30 | Sam: 9h–14h</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Wafa Assurance</h4>
            <div class="space-y-2 text-sm">
              <a href="https://www.wafaassurance.ma" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                wafaassurance.ma
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Fidassur. Tous droits réservés.</p>
          <p class="text-white/40">Agent Wafa Assurance — Maroc</p>
        </div>
      </div>
    </footer>
  )
}

export default app
