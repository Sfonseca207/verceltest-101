'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Menu, X } from "lucide-react"
import Link from "next/link"

type ImageData = [string, string];

export function PazEnCsjb() {
  const imagesInfo: ImageData[] =[
    ["Elias Raad", "elias_raad.bmp"],
    ["Catalina Costa", "catalina_costa_silva.bmp"],
    ["Luisa Fernanda", "illera_mora.png"],
    ["Johana Nieto", "johana_nieto_peña.png"],
    ["Luis Angel Serna", "luis_angel_serna.bmp"],
    ["Emanuel Vasquez", "emanuel_vasquez_quintero.png"],
    ["Juan Delgadillo", "juan_delgadillo.jpg"],
    ["Becca", "becca.jpg"]
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Mural", href: "#mural" },
    { name: "Programa", href: "#programa" },
    { name: "Video", href: "#video" }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/escudo_colegio.png" alt="Colegio San José Logo" className="h-20 w-20" />
              <div>
                <span className="text-2xl font-bold text-blue-900">Colegio San José</span>
                <span className="block text-sm text-gray-600">Barranquilla</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 transition duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button 
              className="md:hidden text-blue-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-900 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div id="inicio" className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Paz en Colegio San José de Barranquilla</h1>
          <p className="text-xl mb-8">Formando líderes para un mundo mejor</p>
           <img src="/images/escudo_colegio.png" alt="Colegio San José Logo" className="mx-auto h-25 w-25" />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Modified Section: Nuestro mural de la paz */}
        <section id="mural" className="mb-16">
          <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden group">
            <img 
              src="/images/placeholder.svg" 
              alt="Nuestro mural de la paz" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center transition-opacity duration-300 group-hover:opacity-0">Nuestro mural de la paz</h2>
            </div>
          </div>
        </section>

        {/* Vision de Paz */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Nuestra Visión de Paz</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                En el Colegio San José de Barranquilla, creemos que la paz es el fundamento de una educación exitosa y una sociedad próspera. Nuestra visión de paz va más allá de la ausencia de conflictos; es un compromiso activo con el respeto mutuo, la comprensión y la justicia social.
              </p>
              <p className="text-gray-700 mb-4">
                Trabajamos diariamente para cultivar un ambiente de paz que permita a nuestros estudiantes desarrollar su máximo potencial y convertirse en agentes de cambio positivo en Barranquilla y más allá.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Nuestro Compromiso con la Paz</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Fomentar el diálogo y la resolución pacífica de conflictos</li>
                <li>Promover la empatía y el entendimiento intercultural</li>
                <li>Desarrollar proyectos de servicio comunitario</li>
                <li>Integrar prácticas de mindfulness en la rutina escolar</li>
                <li>Celebrar la diversidad y la inclusión en nuestra comunidad</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Galería de Paz */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Galería de Paz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {imagesInfo.map((image, index) => (
              <div
               key={index}
               className="relative aspect-square rounded-lg overflow-hidden group"
               onClick={() => setSelectedImage(image)}
               >
                <img 
                  src={`/images/${image[1]}`}
                  alt={image[0]}
                  className="object-cover h-fit w-fit transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <p className="absolute bottom-2 left-2 right-2 text-white text-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image[0]}</p>
              </div>
            ))}
          </div>
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div 
                className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{selectedImage[0]}</h3>
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>
                <img 
                  src={`/images/${selectedImage[1]}`}
                  alt={selectedImage[0]}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </section>
        {/* Programas de Paz */}
        <section id="programa" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Programas de Paz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Diálogo Intercultural",
                description: "Fomentamos el entendimiento entre culturas a través de intercambios y proyectos colaborativos.",
                icon: "🌍"
              },
              {
                title: "Mediación Escolar",
                description: "Capacitamos a nuestros estudiantes en técnicas de mediación para resolver conflictos de manera pacífica.",
                icon: "🤝"
              },
              {
                title: "Ecología y Paz",
                description: "Conectamos la paz con el cuidado del medio ambiente a través de proyectos ecológicos.",
                icon: "🌱"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{program.title}</h3>
                <p className="text-gray-700">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Nuestro Mensaje de Paz</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div key="0" className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden group">
              <img 
                src="/images/placeholder.svg?height=300&width=300&text=Peace+Video"
                alt="Peace Video"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <p className="absolute bottom-2 left-2 right-2 text-white text-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Video placeholder</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Construyendo un Futuro de Paz</h3>
              <p className="text-gray-700 mb-4">
                En este video, nuestros estudiantes y profesores comparten sus experiencias y reflexiones sobre cómo estamos construyendo una cultura de paz en el Colegio San José de Barranquilla.
              </p>
              <p className="text-gray-700">
                Descubre cómo nuestros programas y actividades están formando a la próxima generación de líderes comprometidos con la paz y el cambio positivo en nuestra comunidad y más allá.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Colegio San José</h3>
              <p className="mb-4">Educando para la paz y un futuro brillante en el corazón de Barranquilla.</p>
              <div className="flex items-center space-x-4">
                <a href="tel:+5753598520" className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-1" /> (+57) 5 3598520
                </a>
                <a href="mailto:info@colsanjose.edu.co" className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-1" /> info@colsanjose.edu.co
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-blue-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><Phone className="mr-2 h-5 w-5" /> (+57) 5 3598520</li>
                <li className="flex items-center"><Mail className="mr-2 h-5 w-5" /> info@colsanjose.edu.co</li>
                <li className="flex items-center"><MapPin className="mr-2 h-5 w-5" /> Calle 66 No. 42 - 45, Barranquilla, Colombia</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <p>Pagina creada por los estudiantes:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://github.com/LRoenes"
                  className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <span className="font-medium mr-2">Luis Roenes Soto</span>
                  <img src="/images/github.svg" className="h-4 w-4" />
                </Link>
                <Link
                  href="https://github.com/Sfonseca207"
                  className="inline-flex items-center px-3 py-1 rounded-full bg-green-600 hover:bg-green-700 transition-colors"
                >
                  <span className="font-medium mr-2">Samuel Elias Fonseca</span>
                  <img src="/images/github.svg" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}