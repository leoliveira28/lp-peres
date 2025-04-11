"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, FileText, Clock, ClipboardCheck, Calculator, HardHat, MessageSquare } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useCallback } from "react";

// Custom hook for Google Ads conversion tracking
const useGtagConversion = () => {
  const trackConversion = useCallback((url: string) => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16890255640/UrJjCLmm8bYaEJiy8_U-',
        'event_callback': function() {
          window.location.href = url;
        }
      });
      return false;
    } else {
      window.location.href = url;
      return false;
    }
  }, []);

  return trackConversion;
};

const services = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Projeto de construção",
    description: "Desenvolvimento de projetos arquitetônicos e estruturais para sua construção",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Projeto de regularização",
    description: "Regularização de imóveis junto aos órgãos competentes",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Financiamento habitacional", 
    description: "Assessoria completa para financiamento do seu imóvel",
  },
  {
    icon: <Calculator className="h-6 w-6" />,
    title: "Avaliação de imóveis",
    description: "Laudos técnicos e avaliações para diversos fins",
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "Habite-se, CND, Averbação",
    description: "Documentação e processos para regularização",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Cronograma de obras",
    description: "Planejamento e controle de prazos da sua obra",
  },
  {
    icon: <HardHat className="h-6 w-6" />,
    title: "Gerenciamento de obras",
    description: "Acompanhamento técnico durante a execução",
  },
] as const;

const whatsappLink = "https://wa.me/5517992120217?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const trackConversion = useGtagConversion();

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Peres Engenharia"
              width={100}
              height={100}
              className="w-20 h-20"
            />
            <span className="font-semibold text-lg">Peres Engenharia</span>
          </div>
          <Button
            variant="default"
            onClick={() => trackConversion(whatsappLink)}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Fale Conosco
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Marcos Roberto Peres Junior
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Engenheiro Civil - CREA 5070476780
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={() => trackConversion(whatsappLink)}
              className="text-lg"
            >
              Solicitar Orçamento
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Nossos Serviços
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para realizar seu projeto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma consulta gratuita e descubra como podemos ajudar você a transformar suas ideias em realidade.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => trackConversion(whatsappLink)}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Falar com Especialista
          </Button>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        onClick={(e) => {
          e.preventDefault();
          trackConversion(whatsappLink);
        }}
      >
        <MessageSquare className="h-6 w-6" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Marcos Roberto Peres Junior</p>
          <p className="text-gray-400">CREA 5070476780</p>
          <p className="text-gray-400 mt-4">© {new Date().getFullYear()} Peres Engenharia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}