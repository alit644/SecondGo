'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Package, Settings, ShoppingCart, Store } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Create your seller account',
    description: 'Set up your profile in minutes with our easy onboarding process.'
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Add your products',
    description: 'List your items with high-quality photos and detailed descriptions.'
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'Start selling',
    description: 'Reach millions of customers and manage orders from your dashboard.'
  }
];

const BecomeSellerSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            Start Selling in Minutes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Join our community and turn your ideas into income with our powerful selling tools.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                <span className="text-primary font-bold">0{index + 1}.</span> {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/seller/signup"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20"
          >
           <Store className="w-4 h-4 mr-2" />
            Start Selling Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>No monthly fees. No long-term commitments.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomeSellerSection;
