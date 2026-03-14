/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Truck, 
  Package, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle2,
  Globe,
  Search,
  CreditCard,
  Briefcase,
  User,
  HelpCircle,
  ExternalLink,
  Box,
  FileText,
  Warehouse,
  Info
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Tarifas', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#100075]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="#home" className="flex items-center gap-3">
            <img 
              src="/assets/logo-verde-hbr.png" 
              alt="HBR Logística" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden flex items-center gap-2">
              <div className="w-10 h-10 bg-lime-accent rounded-lg flex items-center justify-center">
                <Truck className="text-[#100075] w-6 h-6" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tighter">HBR<span className="text-lime-accent">.</span></span>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/80 hover:text-lime-accent transition-colors font-medium text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://hbr-internacional.epresis.com/seguimiento/seguimiento" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-lime-accent text-[#100075] px-6 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors flex items-center gap-2"
          >
            TRACKING <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#100075] p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-lg font-medium border-b border-white/10 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://hbr-internacional.epresis.com/seguimiento/seguimiento"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime-accent text-[#100075] px-6 py-3 rounded-xl font-bold mt-2 text-center flex items-center justify-center gap-2"
              >
                TRACKING <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-28 pb-12">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover object-center"
          poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
        >
          <source src="/assets/intro-hbr2.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-cargo-ship-sailing-in-the-ocean-41002-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#100075]/60 md:bg-[#100075]/[9%] backdrop-brightness-75"></div>
      </div>

   <div className="md:hidden w-full flex justify-center relative z-10">
        <div className="w-[92%] max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[40px] shadow-2xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-accent/10 border border-lime-accent/20 text-lime-accent text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-accent"></span>
              </span>
              Logística Internacional
            </motion.span>

            <h1 className="text-5xl font-bold text-white leading-[1.1] tracking-tighter mb-6">
              Tu carga en <br />
              <span className="text-lime-accent">buenas manos.</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-[300px] mx-auto">
              Simplificamos tus importaciones desde EE.UU a Argentina con la mayor rapidez y transparencia del mercado.
            </p>

            <div className="flex flex-col gap-4">
              <a href="#contact" className="w-full bg-lime-accent text-[#100075] py-4 rounded-2xl font-bold hover:bg-white hover:scale-105 transition-all shadow-xl shadow-lime-accent/20 flex items-center justify-center gap-3 group">
                INICIAR ENVÍO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#pricing" className="w-full border border-white/30 text-white py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center">
                Ver Tarifas
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: 'Envíos Mensuales', value: '5000+' },
    { label: 'Clientes Felices', value: '12000+' },
    { label: 'Años de Experiencia', value: '10+' },
    { label: 'Depósitos Propios', value: '2' },
  ];

  return (
    <section id="about" className="py-24 bg-[#100075] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-accent/5 -skew-x-12 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-lime-accent font-bold tracking-widest uppercase text-sm">Sobre Nosotros</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
              Conectamos tus deseos con <br />
              <span className="text-lime-accent">soluciones reales.</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Brindamos soluciones integrales en logística aérea internacional con la solidez de nuestra licencia R.N.P.S.P N° 983. En HBR Logística SRL, combinamos experiencia técnica en comercio exterior con una red de transporte global para garantizar entregas puerta a puerta eficientes, sin importar la complejidad del origen o destino.
            </p>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Nuestra misión es eliminar las barreras de la importación, brindando un servicio transparente, rápido y con el respaldo legal que necesitás para operar con tranquilidad.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-lime-accent mb-1">{stat.value}</p>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border-2 border-white/10 p-4">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000" 
                alt="Logistics Operations" 
                className="w-full h-full object-cover rounded-[2.5rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-lime-accent p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-[#100075] font-black text-4xl mb-1">48hs</p>
              <p className="text-[#100075]/60 font-bold text-sm uppercase tracking-tighter">Entrega Promedio</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Tips = () => {
  const tips = [
    { title: 'Límite de Compra', desc: 'Podés comprar hasta 3000 dólares por día.', icon: CreditCard },
    { title: 'Envíos Anuales', desc: 'Podés hacer hasta 5 envíos en un año calendario.', icon: Package },
    { title: 'Consolidación', desc: 'Enviá varios paquetes a nuestro depósito para optimizar costos.', icon: Globe },
    { title: 'Medios de Pago', desc: 'Aceptamos todos los medios de pago disponibles.', icon: CreditCard },
    { title: 'Clave Fiscal', desc: 'Necesitás Clave Fiscal nivel 3 de AFIP para operar.', icon: ShieldCheck },
    { title: 'Rapidez', desc: 'Tus paquetes llegan en un promedio de 48hs a tu casa.', icon: Clock },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-[#100075]/40 font-bold tracking-widest uppercase text-sm">Recordá que...</span>
              <h2 className="text-4xl font-bold text-[#100075] mt-4">Información clave para tus envíos</h2>
            </div>
  
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {tips.map((tip, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                  <tip.icon className="text-lime-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#100075] mb-2">{tip.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const mainServices = [
    {
      title: 'Empresas',
      desc: 'Soluciones logísticas integrales para optimizar la cadena de suministro corporativa.',
      icon: Briefcase,
    },
    {
      title: 'Reseller',
      desc: 'Apoyo estratégico para revendedores con tarifas preferenciales y gestión ágil.',
      icon: Globe,
    },
    {
      title: 'Particulares',
      desc: 'Traé tus compras del exterior de forma simple, segura y al mejor precio.',
      icon: User,
    },
  ];

  const features = [
    { title: 'Análisis', desc: 'Estudiamos ítem por ítem tu carga.', icon: Search },
    { title: 'Búsqueda', desc: 'Encontramos exactamente lo que necesitás.', icon: Search },
    { title: 'Pago', desc: 'Realizamos pagos al exterior por vos.', icon: CreditCard },
    { title: 'Trade', desc: 'Te representamos legalmente al importar.', icon: ShieldCheck },
    { title: 'Entrega', desc: 'Facturamos el monto total y entregamos en puerta.', icon: Truck },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-lime-accent font-bold tracking-widest uppercase text-sm">Nuestros Servicios</span>
          <h2 className="section-title mt-4">Logística inteligente para cada necesidad</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {mainServices.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-lime-accent/30 transition-all group"
            >
              <div className="w-16 h-16 bg-[#100075] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-lime-accent transition-colors">
                <service.icon className="text-white group-hover:text-[#100075] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#100075] rounded-[3rem] p-12 md:p-20 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {features.map((f, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <f.icon className="text-lime-accent w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{f.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {

  const weightTiers = [

    { range: 'Hasta 2 Kg', price: '40', unit: 'por Kilo', icon: <Package className="w-6 h-6" /> },

    { range: 'Hasta 10 Kg', price: '35', unit: 'por Kilo', icon: <Box className="w-6 h-6" />, popular: true },

    { range: '+ de 10 Kg', price: '33', unit: 'por Kilo', icon: <Truck className="w-6 h-6" /> },

  ];



  const additionalCosts = [

    { label: 'Honorarios', value: 'USD 90', detail: 'POR GUÍA', icon: <FileText className="w-5 h-5" /> },

    { label: 'Almacenaje', value: 'USD 0,69', detail: 'POR KG POR DÍA', icon: <Warehouse className="w-5 h-5" /> },

    { label: 'Seguro Opcional', value: '1%', detail: 'Mín. USD 10 + IVA', icon: <ShieldCheck className="w-5 h-5" /> },

  ];



  return (

    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">

      {/* Background Decorative Image */}

      <div className="absolute -right-20 top-0 w-1/2 opacity-[0.5] pointer-events-none rotate-9">

        <img 

          src="/assets/cajashbr.png" 

          alt="" 

          className="w-full h-auto"

          referrerPolicy="no-referrer"

        />

      </div>

      <div className="absolute -left-20 bottom-0 w-1/2 opacity-[0.03] pointer-events-none -rotate-12">

        <img 

          src="/assets/cajashbr.png" 

          alt="" 

          className="w-full h-auto"

          referrerPolicy="no-referrer"

        />

      </div>



      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-[#100075]/40 font-bold tracking-widest uppercase text-sm">Cotización</span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#100075]">Tarifas Transparentes</h2>

          <p className="text-slate-500 text-lg">

            Calculamos tu envío de forma clara y sin sorpresas.

          </p>

        </div>



        {/* Weight Tiers */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {weightTiers.map((tier, idx) => (

            <motion.div 

              key={idx}

              whileHover={{ y: -10 }}

              className={`p-8 rounded-[2rem] border bg-white flex flex-col items-center text-center transition-all ${tier.popular ? 'border-lime-accent shadow-2xl shadow-lime-accent/10 ring-4 ring-lime-accent/5' : 'border-slate-200 shadow-xl shadow-slate-200/50'}`}

            >

              {tier.popular && (

                <span className="bg-lime-accent text-[#100075] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-6">

                  Más Solicitado

                </span>

              )}

              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-[#100075] mb-6">

                {tier.icon}

              </div>

              <h3 className="text-2xl font-black text-[#100075] mb-2">{tier.range}</h3>

              <div className="flex items-baseline gap-1 mb-2">

                <span className="text-2xl font-bold text-[#100075]/40">USD</span>

                <span className="text-6xl font-black text-[#100075]">{tier.price}</span>

              </div>

              <p className="text-[#100075]/60 font-bold uppercase text-xs tracking-widest mb-8">{tier.unit}</p>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-lime-accent text-[#100075] hover:bg-[#100075] hover:text-white' : 'bg-[#100075] text-white hover:bg-lime-accent hover:text-[#100075]'}`}>

                Seleccionar

              </button>

            </motion.div>

          ))}

        </div>



        {/* Additional Costs Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {additionalCosts.map((cost, idx) => (

            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center gap-4 shadow-sm">

              <div className="w-12 h-12 bg-lime-accent/10 rounded-xl flex items-center justify-center text-lime-accent">

                {cost.icon}

              </div>

              <div>

                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{cost.label}</p>

                <div className="flex items-baseline gap-2">

                  <span className="text-xl font-black text-[#100075]">{cost.value}</span>

                  <span className="text-[10px] text-slate-400 font-bold">{cost.detail}</span>

                </div>

              </div>

            </div>

          ))}

        </div>



        {/* Important Notes - Bento Style */}

                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-12 border-t border-slate-200">
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#100075] mb-6 flex items-center gap-2">
              <Info className="w-4 h-4 text-lime-accent" /> Términos y Condiciones
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex gap-3 text-xs text-slate-500 leading-relaxed">
                  <div className="w-1 h-1 bg-lime-accent rounded-full mt-1.5 shrink-0"></div>
                  Dólar oficial de la República Argentina.
                </li>
                <li className="flex gap-3 text-xs text-slate-500 leading-relaxed">
                  <div className="w-1 h-1 bg-lime-accent rounded-full mt-1.5 shrink-0"></div>
                  Peso volumétrico: (L x W x H en CM) / 5.000.
                </li>
                <li className="flex gap-3 text-xs text-slate-500 leading-relaxed">
                  <div className="w-1 h-1 bg-lime-accent rounded-full mt-1.5 shrink-0"></div>
                  No incluye Fuel ni COVID Surcharge.
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-3 text-xs text-slate-500 leading-relaxed">
                  <div className="w-1 h-1 bg-lime-accent rounded-full mt-1.5 shrink-0"></div>
                  No incluye tasas, derechos, estadística ni IVA.
                </li>
                <li className="flex gap-3 text-xs text-slate-500 leading-relaxed">
                  <div className="w-1 h-1 bg-lime-accent rounded-full mt-1.5 shrink-0"></div>
                  Seguro: Mínimo USD 10 + IVA.
                </li>
                <li className="flex gap-3 text-xs text-slate-500 leading-relaxed">
                  <div className="w-1 h-1 bg-lime-accent rounded-full mt-1.5 shrink-0"></div>
                  Pick-up mundial cotizado a medida.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#100075] rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-accent/10 blur-3xl rounded-full"></div>
            <p className="text-xs font-bold text-lime-accent uppercase tracking-widest mb-2">Asesoramiento</p>
            <h5 className="text-xl font-bold mb-4">¿Dudas sobre tu carga?</h5>
            <p className="text-white/50 text-xs mb-6 leading-relaxed">Nuestro equipo técnico está listo para ayudarte con la clasificación y costos.</p>
            <a 
              href="https://wa.me/5491134991652" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-center bg-white text-[#100075] py-3 rounded-xl font-bold text-sm hover:bg-lime-accent transition-colors"
            >
              Contactar Ahora
            </a>
          </div>
        </div>

      </div>

    </section>

  );

};

const FAQ = () => {
  const faqs = [
    { q: '¿Qué puedo traer del exterior?', a: 'Ropa, accesorios, electrónica, repuestos para autos y todo lo que no esté prohibido por la Resolución General de AFIP.' },
    { q: '¿Cuántos elementos puedo traer?', a: 'Hasta 3 unidades iguales por envío. No hay límite de peso anual, pero cada bulto no debe superar los 50kg y USD 3.000.' },
    { q: '¿Qué es consolidar un envío?', a: 'Si comprás en diferentes sitios, podés marcar tus paquetes en nuestra plataforma para que salgan todos juntos en un solo envío, optimizando costos.' },
    { q: '¿Cuántos envíos puedo hacer al año?', a: 'La normativa actual permite hasta 5 envíos por año calendario por persona.' },
    { q: '¿Necesito clave fiscal?', a: 'Sí, necesitás Clave Fiscal nivel 3 de AFIP. El trámite es simple y nosotros te asesoramos.' },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-lime-accent mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-[#100075]">Preguntas Frecuentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 cursor-pointer">
              <summary className="list-none flex justify-between items-center font-bold text-lg text-[#100075]">
                {faq.q}
                <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform text-lime-accent" />
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-[#100075] p-12 md:p-20 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Contacto Directo</h2>
              <p className="text-white/60 text-lg mb-12">
                Estamos en Buenos Aires y Miami para brindarte el mejor soporte global.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-lime-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase font-bold tracking-widest mb-1">Oficina AR</p>
                    <p className="text-lg">Pino 1908, Morón (1685) Buenos Aires</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="text-lime-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase font-bold tracking-widest mb-1">Warehouse Miami</p>
                    <p className="text-lg">7102 NW 50 St. Miami, Florida 33166</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-lime-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase font-bold tracking-widest mb-1">Teléfonos</p>
                    <p className="text-lg">11 3499 1652 (AR)</p>
                    <p className="text-lg text-white/60">+54 011 5365 8744 int.1003 (MIA)</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-lime-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase font-bold tracking-widest mb-1">Emails</p>
                    <p className="text-lg">info@hbr.com.ar</p>
                    <p className="text-sm text-white/40">ventas@hbr.com.ar | administracion@hbr.com.ar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 md:p-20">
            <h3 className="text-3xl font-bold text-[#100075] mb-8">Envianos tu consulta</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#100075]/60 uppercase tracking-wider">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-lime-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#100075]/60 uppercase tracking-wider">Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Nombre de empresa"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-lime-accent transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#100075]/60 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  placeholder="email@ejemplo.com"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-lime-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#100075]/60 uppercase tracking-wider">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-lime-accent transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-lime-accent text-[#100075] py-4 font-bold rounded-xl hover:bg-white transition-colors mt-4">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/assets/logo-verde-hbr.png" 
                alt="HBR Logística" 
                className="h-12 w-auto object-contain mb-2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden flex items-center gap-2">
                <div className="w-8 h-8 bg-[#100075] rounded flex items-center justify-center">
                  <Truck className="text-lime-accent w-5 h-5" />
                </div>
                <span className="text-[#100075] font-bold text-xl tracking-tighter">HBR<span className="text-lime-accent">.</span></span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Líderes en logística internacional entre Argentina y el mundo. Especialistas en consolidación de carga y gestión aduanera simplificada.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#100075] mb-6 uppercase text-xs tracking-widest">Regulación</h4>
            <ul className="space-y-4">
              <li><a href="https://www.afip.gob.ar/envios-internacionales/courier/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#100075] text-sm transition-colors">Regulación ARCA (AFIP)</a></li>
              <li><a href="https://www.enacom.gob.ar/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#100075] text-sm transition-colors">ENACOM</a></li>
              <li><a href="https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#100075] text-sm transition-colors">Defensa al Consumidor</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#100075] mb-6 uppercase text-xs tracking-widest">Soporte</h4>
            <ul className="space-y-4">
              <li><a href="#faq" className="text-slate-400 hover:text-[#100075] text-sm transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="https://www.argentina.gob.ar/servicio/iniciar-un-reclamo-ante-defensa-del-consumidor" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#100075] text-sm transition-colors">Iniciar Reclamo</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#100075] text-sm transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} HBR Logística Argentina. R.N.P.S.P N° 983.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 text-xs">Powered by</span>
            <span className="text-[#100075] font-bold text-sm tracking-widest">GOestudi<span className="text-lime-accent">.</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491134991652"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-8 h-8 text-white fill-current"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.8-16.4-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
      </svg>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-lime-accent selection:text-[#100075]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tips />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
