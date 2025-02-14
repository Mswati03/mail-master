"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import {
  BarChart,
  Zap,
  Users,
  Layout,
  Shield,
  Sparkles,
  Check,
} from "lucide-react";
import Component from "@/components/StickyNavBar";
import HeroGeometric from "@/components/GeometricHero";
import CustomerTestimonials from "@/components/CustomerTestimonials";

export default function Home() {
  return (
    <div className="relative flex min-h-screen   bg-blue-100 flex-col">
      <Component />
      <main className="flex-1">
        {/*<section className="flex min-h-screen flex-col items-center justify-center space-y-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container flex flex-col items-center justify-center gap-6 text-center"
          >
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="#"
              className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium"
            >
              🎉 <Separator className="mx-2 h-4" orientation="vertical" /> Introducing MailMaster
            </motion.a>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]"
            >
              Powerful Email Marketing
              <br />
              Made Simple
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
            >
              Create, send, and analyze your email campaigns with ease using MailMaster.
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <Button  className="h-12 px-8">
                Start Building
              </Button>
              <Button   className="h-12 px-8">
                View Demo
              </Button>
            </motion.div>
          </motion.div>
        </section>*/}
        <HeroGeometric />

        <Separator className="my-12" />

        <section className="container items-center mx-auto space-y-12 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Features built for growth
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {" "}
              MailMaster provides all the tools you need to create and send
              effective email campaigns that can reach thousands of subscribers
              and drive real results for your business.
            </p>
          </motion.div>
          <div className="mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  rotateX: index % 2 === 0 ? 5 : -5,
                  rotateY: index % 3 === 0 ? 5 : -5,
                  transition: { duration: 0.3 },
                }}
                className="relative overflow-hidden rounded-lg border bg-background p-2"
              >
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <feature.icon className="h-12 w-12 text-primary" />
                  <div className="space-y-2">
                    <h3 className="font-bold">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section
          id="pricing"
          className=" items-center mx-auto container py-12 md:py-24 lg:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Flexible pricing for every business
            </h2>{" "}
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {" "}
              Find a plan that fits your email marketing needs and start growing
              your business with MailMaster.{" "}
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col overflow-hidden rounded-lg border bg-background"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline text-3xl font-bold">
                    M{plan.price}
                    <span className="ml-1 text-xl font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 w-full">{plan.buttonText}</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />
        <CustomerTestimonials/>
        <section className="container py-12 md:py-24 items-center mx-auto lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Ready to boost your email marketing?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Start your free trial today. No credit card required.
            </p>
            <Button className="mt-4">Start Your Free Trial</Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const features = [
  {
    name: "Drag-and-Drop Editor",
    description:
      "Create beautiful emails with our intuitive drag-and-drop editor.",
    icon: Layout,
  },
  {
    name: "Advanced Analytics",
    description: "Get detailed insights into your email campaign performance.",
    icon: BarChart,
  },
  {
    name: "Automation",
    description: "Set up powerful email automation workflows.",
    icon: Zap,
  },
  {
    name: "List Management",
    description: "Easily manage and segment your subscriber lists.",
    icon: Users,
  },
  {
    name: "Deliverability",
    description:
      "Ensure your emails reach the inbox with our advanced deliverability tools.",
    icon: Shield,
  },
  {
    name: "A/B Testing",
    description: "Optimize your campaigns with built-in A/B testing.",
    icon: Sparkles,
  },
] as const;

const pricingPlans = [
  {
    name: "Starter",
    price: 200,
    description: "Perfect for small businesses and startups.",
    features: [
      "Up to 50 contacts ",
      "200 emails per month",
      "Basic templates",
      "Email support",
    ],
    buttonText: "Start Free Trial",
  },
  {
    name: "Pro",
    price: 1000,
    description: "Ideal for growing businesses and marketers.",
    features: [
      "Up to 200 subscribers",
      "1000  emails per month",
      "Advanced templates",
      "Priority support",
      "Advanced automation",
      "A/B testing",
    ],
    buttonText: "Upgrade to Pro",
  },
] as const;
