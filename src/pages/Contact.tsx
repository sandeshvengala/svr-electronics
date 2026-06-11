import { PageHero, Reveal } from "@/components/site/PageShell";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { SITE } from "@/lib/site";
import { motion } from "framer-motion";
import { BRANDS } from "@/lib/site";

({
  head: () => ({
    meta: [
      { title: "Contact SVR Electronics — Call, Email or Visit" },
      { name: "description", content: "Get in touch — call, WhatsApp, email or visit our workshop. We respond within minutes during business hours." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type FormVals = {
  name: string;
  phone: string;
  email: string;
  brand: string;
  model: string;
  issue: string;
  service: string;
  address: string;
};

function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<FormVals>();
  const onSubmit = async (v: FormVals) => {
  const message = `
📺 *SVR ELECTRONICS - NEW SERVICE REQUEST*

👤 Full Name: ${v.name}

📞 Phone: ${v.phone}

📧 Email: ${v.email || "Not Provided"}

📺 TV Brand: ${v.brand}

📏 Model / Size: ${v.model || "Not Provided"}

🛠 Service Type: ${v.service}

📝 Issue:
${v.issue}

📍 Pickup Address:
${v.address}
`;

  const whatsappNumber = "919246455535";

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  toast.success("Redirecting to WhatsApp...");
  reset();
};

  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to a human, fast." subtitle="Call, WhatsApp, email or fill the form — we respond in minutes during working hours." />
      <section className="container-x py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            {[
              { icon: Phone, label: "Call", value: SITE.phone, href: SITE.phoneHref },
              { icon: Phone, label: "Call", value: SITE.phone1, href: SITE.phoneHref1 },
              { icon: MessageSquare, label: "WhatsApp", value: SITE.whatsapp, href: SITE.whatsappHref },
              { icon: MessageSquare, label: "WhatsApp", value: SITE.whatsapp1, href: SITE.whatsappHref1 },
              { icon: Mail, label: "Email", value: SITE.email, href: SITE.emailHref },
              { icon: MapPin, label: "Visit", value: SITE.address },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <a href={c.href} className="flex items-center gap-4 glass rounded-2xl p-5 hover:bg-[color:var(--card)] transition group">
                  <motion.div whileHover={{ rotate: -6, scale: 1.1 }} className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-[color:var(--primary-foreground)] glow-ember">
                    <c.icon className="size-5" />
                  </motion.div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-semibold mt-0.5">{c.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="rounded-2xl overflow-hidden glass aspect-[4/3]">
                <iframe src={SITE.mapsEmbed} className="w-full h-full border-0" loading="lazy" title="Our location" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form
  onSubmit={handleSubmit(onSubmit)}
  className="lg:col-span-7 glass-strong rounded-3xl p-6 md:p-10 space-y-5"
>
  <h2 className="text-2xl font-bold">
    Request TV Service
  </h2>

  <div className="grid sm:grid-cols-2 gap-4">
    <Field label="Full Name" error={errors.name?.message}>
      <input
        {...register("name", { required: "Required" })}
        className={inputClass}
      />
    </Field>

    <Field label="Phone" error={errors.phone?.message}>
      <input
        {...register("phone", { required: "Required" })}
        className={inputClass}
        placeholder="07X XXX XXXX"
      />
    </Field>
  </div>

  <Field label="Email">
    <input
      {...register("email")}
      className={inputClass}
      placeholder="optional"
    />
  </Field>

  <div className="grid sm:grid-cols-2 gap-4">
    <Field label="TV Brand" error={errors.brand?.message}>
      <select
        {...register("brand", { required: "Required" })}
        className={`${inputClass} text-foreground bg-background`}
      >
        <option value="">Select Brand</option>
        {BRANDS.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
    </Field>

    <Field label="Model / Size">
      <input
        {...register("model")}
        className={inputClass}
        placeholder='e.g. 55" QLED Q70A'
      />
    </Field>
  </div>

  <Field label="Service Type" error={errors.service?.message}>
    <select
      {...register("service", { required: "Required" })}
      className={`${inputClass} text-foreground bg-background`}
    >
      <option value="">Select Service</option>
      <option value="Repair">Repair</option>
      <option value="Spare Parts">Spare Parts</option>
      <option value="Wall Mounting">Wall Mounting</option>
      <option value="New TV Purchase Advice">
        New TV Purchase Advice
      </option>
      <option value="Warranty Service">
        Warranty Service
      </option>
      <option value="Other">Other</option>
    </select>
  </Field>

  <Field label="Describe the Issue" error={errors.issue?.message}>
    <textarea
      rows={4}
      {...register("issue", { required: "Required" })}
      className={inputClass + " resize-none"}
      placeholder="No display, lines on screen, won't turn on, etc."
    />
  </Field>

  <Field label="Pickup Address" error={errors.address?.message}>
    <input
      {...register("address", { required: "Required" })}
      className={inputClass}
      placeholder="House no, street, city"
    />
  </Field>

  <button
    disabled={isSubmitting}
    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] glow-ember"
  >
    {isSubmitting ? (
      "Submitting..."
    ) : (
      <>
        Submit Request
        <Send className="size-4" />
      </>
    )}
  </button>
</form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputClass = "w-full rounded-xl bg-[color:var(--input)] border border-border/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ember)]/50 transition";

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
export default Contact;