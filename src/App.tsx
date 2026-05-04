import React from 'react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const dishes = [
  {
    name: "Udon au Curry Vert",
    description: "Nouilles udon fraîches dans un curry vert onctueux, lait de coco et légumes croquants.",
    price: "16.50€",
    image: "https://images.unsplash.com/photo-1564675310209-9bae28805eae?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Pad Thaï Traditionnel",
    description: "Le classique thaïlandais : nouilles de riz sautées, cacahuètes, citron vert et pousses de soja.",
    price: "15.00€",
    image: "https://images.unsplash.com/photo-1705658372340-578384811f0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Soupe Udon aux Fruits de Mer",
    description: "Un bouillon parfumé à la citronnelle, nouilles udon et sélection de fruits de mer frais.",
    price: "18.50€",
    image: "https://images.unsplash.com/photo-1658713064058-9ed13ce542e6?auto=format&fit=crop&q=80&w=800"
  }
]

const containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FEF3E2] text-[#2D161B] font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FEF3E2]/80 backdrop-blur-md border-b border-[#E5D8C1]">
        <div className={`${containerClass} h-16 flex items-center justify-between`}>
          <span className="text-2xl font-serif font-bold text-[#E07B54]">Thai Udon</span>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#menu" className="hover:text-[#E07B54] transition-colors">La Carte</a>
            <a href="#story" className="hover:text-[#E07B54] transition-colors">Notre Histoire</a>
            <a href="#avis" className="hover:text-[#E07B54] transition-colors">Avis</a>
            <a href="#contact" className="hover:text-[#E07B54] transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:0492618440" className="hidden sm:flex bg-[#E07B54] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#D06A43] transition-colors items-center gap-2">
              <PhoneIcon size={16} /> 0492 61 84 40
            </a>
            <div className="md:hidden text-[#E07B54]">
               <MenuIcon />
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1672842035316-d21a9a5614d1?auto=format&fit=crop&q=80&w=1920" 
              alt="Thai Food Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className={`${containerClass} relative z-10`}>
            <div className="max-w-2xl text-white">
              <div className="inline-block mb-6 bg-[#E07B54] text-white rounded-full px-4 py-1 text-sm font-bold uppercase tracking-wider">Nouveau à Liège</div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                L'Authentique Saveur Thaïlandaise à <span className="text-[#E07B54]">Liège</span>
              </h1>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                Découvrez Thai Udon : des produits frais, des recettes traditionnelles et une passion pour l'excellence culinaire.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#menu" className="bg-[#E07B54] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#D06A43] transition-colors flex items-center">
                  Découvrir la Carte <ChevronRightIcon className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-[#F5E6D3]">
          <div className={containerClass}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-[#E07B54]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#E07B54]">
                  <UtensilsIcon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-[#2D161B]">Sur Place</h3>
                <p className="text-[#5A4549]">Une ambiance chaleureuse pour savourer nos plats à Rue Saint-Julien.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#E07B54]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#E07B54]">
                  <ShoppingBagIcon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-[#2D161B]">À Emporter</h3>
                <p className="text-[#5A4549]">Commandez et venez chercher vos plats préférés rapidement.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#E07B54]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#E07B54]">
                  <TruckIcon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-[#2D161B]">Livraison</h3>
                <p className="text-[#5A4549]">Nous livrons vos saveurs thaïlandaises directement chez vous à Liège.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section id="menu" className="py-24">
          <div className={containerClass}>
            <div className="text-center mb-16">
              <div className="inline-block mb-4 border border-[#E07B54] text-[#E07B54] rounded-full px-4 py-1 text-sm font-bold uppercase tracking-wider">Nos Incontournables</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D161B]">Sélection du Chef</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {dishes.map((dish, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#E5D8C1]">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif font-bold text-[#2D161B]">{dish.name}</h3>
                      <span className="text-[#E07B54] font-bold text-xl">{dish.price}</span>
                    </div>
                    <p className="text-[#5A4549] mb-6 line-clamp-2">{dish.description}</p>
                    <button className="w-full border border-[#E07B54] text-[#E07B54] py-3 rounded-xl font-bold hover:bg-[#E07B54] hover:text-white transition-colors">
                      Commander
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="py-24 bg-[#F5E6D3] overflow-hidden">
          <div className={containerClass}>
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1655091273851-7bdc2e578a88?auto=format&fit=crop&q=80&w=1000" 
                    alt="Authentic Thai Cooking" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="inline-block mb-4 bg-[#E07B54] text-white rounded-full px-4 py-1 text-sm font-bold uppercase tracking-wider">Notre Histoire</div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#2D161B]">Plus qu'un restaurant, une expérience.</h2>
                <p className="text-lg text-[#5A4549] mb-6 leading-relaxed">
                  Chez Thai Udon, nous croyons que la cuisine est un langage universel. Nos chefs utilisent des produits frais de saison pour recréer les saveurs authentiques des rues de Bangkok, ici même à Liège.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-10">
                  <div>
                    <div className="text-4xl font-serif font-bold text-[#E07B54] mb-2">100%</div>
                    <div className="text-xs uppercase tracking-widest font-black text-[#2D161B]">Produits Frais</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-bold text-[#E07B54] mb-2">5/5</div>
                    <div className="text-xs uppercase tracking-widest font-black text-[#2D161B]">Avis Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="avis" className="py-24">
          <div className={containerClass}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D161B]">Ce que disent nos clients</h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-10 text-center relative shadow-2xl rounded-3xl border border-[#E5D8C1]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#E07B54] rounded-full flex items-center justify-center text-white shadow-lg">
                  <StarIcon fill="currentColor" size={24} />
                </div>
                <div className="flex justify-center gap-1 mb-6 mt-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} size={20} className="text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-2xl font-serif italic mb-8 leading-relaxed text-[#2D161B]">
                  "Les plats sont vraiment très bons avec des produits frais, service parfait. Possibilité de manger sur place ou livraison ou à emporter."
                </p>
                <div className="font-bold text-[#2D161B]">Raphaël Copès</div>
                <div className="text-[#E07B54] text-xs uppercase tracking-widest font-black">Client Satisfait</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-[#F5E6D3]">
          <div className={containerClass}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-10 text-[#2D161B]">Retrouvez-nous</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E07B54] shrink-0 shadow-sm">
                      <MapPinIcon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-[#2D161B]">Adresse</h4>
                      <p className="text-[#5A4549] text-lg">Rue Saint-Julien 2, 4020 Liège</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E07B54] shrink-0 shadow-sm">
                      <PhoneIcon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-[#2D161B]">Téléphone</h4>
                      <p className="text-[#5A4549] text-lg">0492 61 84 40</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E07B54] shrink-0 shadow-sm">
                      <ClockIcon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-[#2D161B]">Heures d'ouverture</h4>
                      <p className="text-[#5A4549] text-lg">Mardi - Dimanche : 11:30 - 21:30</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.4357367808266!2d5.589883577000868!3d50.63756857162985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0fa0f5e555555%3A0x7b4a4b4b4b4b4b4b!2sRue%20Saint-Julien%202%2C%204020%20Li%C3%A8ge!5e0!3m2!1sfr!2sbe!4v1714834015000!5m2!1sfr!2sbe" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-[#2D161B] text-[#FEF3E2]">
        <div className={containerClass}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="text-3xl font-serif font-bold text-[#E07B54]">Thai Udon</span>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
              <a href="#menu">Carte</a>
              <a href="#story">Histoire</a>
              <a href="#contact">Localisation</a>
            </div>
            <p className="text-xs opacity-40">&copy; {new Date().getFullYear()} Thai Udon Liège.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PhoneIcon({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> }
function MenuIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg> }
function ChevronRightIcon({ className }: { className?: string }) { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg> }
function UtensilsIcon({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg> }
function ShoppingBagIcon({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> }
function TruckIcon({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v10Z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg> }
function MapPinIcon({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> }
function ClockIcon({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> }
function StarIcon({ size, fill, className }: { size: number, fill?: string, className?: string }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> }
