import { getDictionary } from "@/lib/dictionaries";
import { getPlans } from "@/lib/plans";
import { getSettings } from "@/lib/settings";
import type { Locale } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { Features } from "@/components/sections/Features";
import { Proof } from "@/components/sections/Proof";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const plans = await getPlans();
  const settings = await getSettings();
  const trialDays = settings?.trialDays ?? 14;

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} trialDays={trialDays} />
        <Logos dict={dict} />
        <Features dict={dict} />
        <Proof dict={dict} />
        <Pricing dict={dict} lang={lang} plans={plans} trialDays={trialDays} />
        <FinalCta dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
