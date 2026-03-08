import { motion } from "framer-motion";

interface ServiceDetailProps {
  title: string;
  description: string;
  features: { title: string; desc: string; icon: React.ReactNode }[];
  process: { step: string; title: string; desc: string }[];
}

export default function ServiceDetailLayout({ title, description, features, process }: ServiceDetailProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-20 border-b border-border/40">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-outfit mb-6 text-foreground"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-outfit mb-4">Hizmet Ayrıcalıklarımız</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-background border border-border/50 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-outfit">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-outfit mb-4">Nasıl Çalışıyoruz?</h2>
            <p className="text-muted-foreground">Sürecimiz şeffaf, planlı ve noter güvencesi altındadır.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-primary/20 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-outfit">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-border -z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
