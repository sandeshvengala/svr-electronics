import { PageHero, Reveal } from "@/components/site/PageShell";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BRANDS } from "@/lib/site";

({
  head: () => ({
    meta: [
      { title: "Request a Service — Book TV Repair | SVR Electronics" },
      { name: "description", content: "Book a pickup and diagnosis. Fill in the form and our team will be in touch within hours." },
    ],
    links: [{ rel: "canonical", href: "/request-service" }],
  }),
  component: RequestService,
});

type FormVals = {
  name: string; phone: string; email: string; brand: string; model: string;
  issue: string; service: string; address: string;
};

function RequestService() {
  const [done, setDone] = useState(false);
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

  setDone(true);
  reset();

  setTimeout(() => setDone(false), 4000);
};

  return (
    <>
      <PageHero eyebrow="Tell us about your television issue and our experts will provide a quick diagnosis, service recommendation, and transparent quote." />
      <section className="container-x py-12">
        <Reveal>
          <form onSubmit={handleSubmit(onSubmit)} className="glass-strong rounded-3xl p-6 md:p-10 max-w-3xl mx-auto space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" error={errors.name?.message}><input {...register("name", { required: "Required" })} className={inputClass} /></Field>
              <Field label="Phone" error={errors.phone?.message}><input {...register("phone", { required: "Required" })} className={inputClass} placeholder="07X XXX XXXX" /></Field>
            </div>
            <Field label="Email"><input {...register("email")} className={inputClass} placeholder="optional" /></Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="TV brand" error={errors.brand?.message}>
                <select {...register("brand", { required: "Required" })}
                  className={`${inputClass} text-foreground bg-background`}>
                     <option value="">Select brand</option>
                      {BRANDS.map((b) => (<option key={b} value={b}>{b}
                     </option> ))}
                </select>
              </Field>
              <Field label="Model / size"><input {...register("model")} className={inputClass} placeholder={`e.g. 55" QLED Q70A`} /></Field>
            </div>
            {/* <Field label="Service type" error={errors.service?.message}>
              <select {...register("service", { required: "Required" })}
                className={`${inputClass} text-foreground bg-background`}>
                <option value="">Select service</option>
                <option value="Repair">Repair</option>
                <option value="Spare parts">Spare parts</option>
                <option value="Wall mounting">Wall mounting</option>
                <option value="New TV purchase advice">New TV purchase advice</option>
                <option value="Warranty service">Warranty service</option>
                <option value="Other">Other</option>
              </select>
            </Field> */}
            <Field label="Describe the issue" error={errors.issue?.message}>
              <textarea rows={4} {...register("issue", { required: "Required" })} className={inputClass + " resize-none"} placeholder="No display, lines on screen, won't turn on, etc." />
            </Field>
            <Field label="Pickup address" error={errors.address?.message}>
              <input {...register("address", { required: "Required" })} className={inputClass} placeholder="House no, street, city" />
            </Field>
            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted-foreground">By submitting you agree to our privacy policy.</p>
              <button disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] glow-ember disabled:opacity-60">
                {isSubmitting ? "Submitting…" : (<>Submit request <Send className="size-4" /></>)}
              </button>
            </div>
            {done && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 rounded-xl bg-[color:var(--ember)]/10 border border-[color:var(--ember)]/30 px-4 py-3 text-sm">
                <CheckCircle2 className="size-5 text-[color:var(--ember)]" /> Thanks! We'll call you within a few hours.
              </motion.div>
            )}
          </form>
        </Reveal>
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
export default RequestService;