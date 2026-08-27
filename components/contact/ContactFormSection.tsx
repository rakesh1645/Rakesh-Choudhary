"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles,
  Clock
} from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/common/Icons";
import { BG1_TEXTURE } from "@/constants/imageassets";
import { motion } from "framer-motion";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long")
    .required("Your name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters long")
    .required("Please type your message"),
});

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const inquiryOptions = [
    "💼 Full-Time Role",
    "⚡ Full Stack Web App",
    "🏢 Real Estate Website",
    "🚀 SaaS Platform",
    "🤝 Freelance / Consulting",
    "💬 Other Inquiry",
  ];

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      inquiryType: "💼 Full-Time Role",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setErrorMessage("");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitted(true);
          resetForm();
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          setErrorMessage(data.error || "Failed to send email. Please try again.");
        }
      } catch (err) {
        setErrorMessage("An unexpected error occurred. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 w-full items-stretch">
      {/* Left Column: Photo Showcase, Contact Flex & Socials */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5 flex flex-col h-full"
      >
        <div className="shadow-box p-5 sm:p-7 md:p-8 flex flex-col justify-between h-full relative overflow-hidden group">
          <img
            src={BG1_TEXTURE}
            alt=""
            className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
          />

          {/* Top Group: Banner Photo & Contact Details */}
          <div className="relative z-10 flex flex-col gap-5">
            {/* Banner Image with Ambient Overlays */}
            <div className="-mx-5 sm:-mx-7 md:-mx-8 -mt-5 sm:-mt-7 md:-mt-8 relative overflow-hidden aspect-[1/1.1] sm:aspect-[1/1.25] max-h-[300px] sm:max-h-[360px] rounded-t-[24px]">
              <Image
                src="/pic4.png"
                alt="Rakesh Choudhary"
                width={1920}
                height={1080}
                priority
                quality={100}
                className="w-full h-full object-cover object-top scale-[1.25] sm:scale-[1.35] transition-transform duration-700 group-hover:scale-[1.38]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent" />

              {/* Floating Status & Location Overlay */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/80 border border-white/10 text-[10px] text-emerald-400 backdrop-blur-md font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available for Work</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-950/80 border border-white/10 text-[10px] text-zinc-300 backdrop-blur-md font-mono">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>Jaipur, India</span>
                </span>
              </div>
            </div>

            {/* Minimal Header */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white/90 tracking-tight">
                Let's build something scalable.
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Open to engineering roles, SaaS development & technical collaborations.
              </p>
            </div>

            {/* Contact Details in Responsive Flex Layout */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {/* Phone */}
              <div className="flex-1 min-w-[140px] flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-zinc-900/80 border border-white/5 hover:border-indigo-500/30 transition-all group/item">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-mono text-zinc-400 block uppercase">Phone</span>
                    <a href="tel:+919024226200" className="text-xs sm:text-sm font-semibold text-white/90 hover:text-indigo-400 block transition-colors truncate">
                      +91 9024226200
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("+919024226200", "phone")}
                  className="p-1.5 rounded-md bg-zinc-800/60 hover:bg-zinc-700/60 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-1"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Email */}
              <div className="flex-1 min-w-[180px] flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-zinc-900/80 border border-white/5 hover:border-purple-500/30 transition-all group/item">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-mono text-zinc-400 block uppercase">Email</span>
                    <a href="mailto:rakeshchoudhary941397@gmail.com" className="text-xs sm:text-sm font-semibold text-white/90 hover:text-purple-400 block transition-colors truncate">
                      rakeshchoudhary941397@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("rakeshchoudhary941397@gmail.com", "email")}
                  className="p-1.5 rounded-md bg-zinc-800/60 hover:bg-zinc-700/60 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-1"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="mt-6 pt-5 border-t border-white/10 relative z-10">
            <span className="text-[10px] font-mono text-zinc-400 tracking-widest block mb-2.5 uppercase">
              Social Profiles & Channels
            </span>
            <div className="grid grid-cols-4 gap-2">
              <a
                href="https://www.linkedin.com/in/rakesh-choudhary-122146266/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-indigo-400/50 hover:bg-indigo-950/40 text-zinc-300 hover:text-indigo-300 transition-all flex flex-col items-center justify-center gap-1 group/btn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                <span className="text-[9px] font-medium text-zinc-400 group-hover/btn:text-white">LinkedIn</span>
              </a>

              <a
                href="https://github.com/rakesh1645"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-purple-400/50 hover:bg-purple-950/40 text-zinc-300 hover:text-purple-300 transition-all flex flex-col items-center justify-center gap-1 group/btn"
                title="GitHub Repositories"
              >
                <GithubIcon className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                <span className="text-[9px] font-medium text-zinc-400 group-hover/btn:text-white">GitHub</span>
              </a>

              <a
                href="https://www.youtube.com/@codewithrc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-rose-400/50 hover:bg-rose-950/40 text-zinc-300 hover:text-rose-300 transition-all flex flex-col items-center justify-center gap-1 group/btn"
                title="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                <span className="text-[9px] font-medium text-zinc-400 group-hover/btn:text-white">YouTube</span>
              </a>

              <a
                href="mailto:rakeshchoudhary941397@gmail.com"
                className="p-2.5 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-emerald-400/50 hover:bg-emerald-950/40 text-zinc-300 hover:text-emerald-300 transition-all flex flex-col items-center justify-center gap-1 group/btn"
                title="Direct Email"
              >
                <Mail className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                <span className="text-[9px] font-medium text-zinc-400 group-hover/btn:text-white">Email</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Formik & Nodemailer Contact Form */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="lg:col-span-7 flex flex-col h-full"
      >
        <div className="shadow-box p-5 sm:p-7 md:p-8 flex flex-col justify-between h-full relative overflow-hidden group">
          <img
            src={BG1_TEXTURE}
            alt=""
            className="bg-img absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
          />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/10 mb-5">
              <div>
                <div className="flex items-center gap-2 text-indigo-400 mb-1">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
                    Contact Form
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 tracking-tight">
                  Send a Direct Message
                </h2>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs text-zinc-400 self-start sm:self-auto font-mono">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Response in ~24h</span>
              </div>
            </div>

            {submitted && (
              <div className="mb-5 p-4 rounded-2xl bg-indigo-950/90 border border-indigo-500/50 text-indigo-200 flex items-center gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">
                  Thank you! Your message has been delivered directly to Rakesh's inbox.
                </span>
              </div>
            )}

            {errorMessage && (
              <div className="mb-5 p-4 rounded-2xl bg-rose-950/90 border border-rose-500/50 text-rose-200 flex items-center gap-3 animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{errorMessage}</span>
              </div>
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Inquiry Type Selection */}
              <div>
                <label className="text-xs font-mono text-zinc-400 block mb-2">
                  Select Inquiry Type *
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryOptions.map((opt, oIdx) => {
                    const isSelected = formik.values.inquiryType === opt;
                    return (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => {
                          formik.setFieldValue("inquiryType", opt);
                          if (!formik.values.subject) {
                            formik.setFieldValue("subject", opt.replace(/^[^\w]+/, "").trim());
                          }
                        }}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/20 font-semibold"
                            : "bg-zinc-900/90 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white hover:bg-zinc-800/80"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="text-xs font-mono text-zinc-400 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white placeholder-zinc-500 focus:outline-none text-xs sm:text-sm transition-all ${
                      formik.touched.name && formik.errors.name
                        ? "border-rose-500/80 focus:border-rose-500 bg-rose-950/20"
                        : "border-white/10 focus:border-indigo-400/60 focus:bg-zinc-900"
                    }`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{formik.errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="text-xs font-mono text-zinc-400 block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white placeholder-zinc-500 focus:outline-none text-xs sm:text-sm transition-all ${
                      formik.touched.email && formik.errors.email
                        ? "border-rose-500/80 focus:border-rose-500 bg-rose-950/20"
                        : "border-white/10 focus:border-indigo-400/60 focus:bg-zinc-900"
                    }`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{formik.errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="text-xs font-mono text-zinc-400 block mb-1.5">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  placeholder="Full Stack Opportunity / Project Proposal"
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white placeholder-zinc-500 focus:outline-none text-xs sm:text-sm transition-all ${
                    formik.touched.subject && formik.errors.subject
                      ? "border-rose-500/80 focus:border-rose-500 bg-rose-950/20"
                      : "border-white/10 focus:border-indigo-400/60 focus:bg-zinc-900"
                  }`}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{formik.errors.subject}</span>
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="text-xs font-mono text-zinc-400 block mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  placeholder="Tell me about your project, role requirements, or scope..."
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white placeholder-zinc-500 focus:outline-none text-xs sm:text-sm transition-all resize-none ${
                    formik.touched.message && formik.errors.message
                      ? "border-rose-500/80 focus:border-rose-500 bg-rose-950/20"
                      : "border-white/10 focus:border-indigo-400/60 focus:bg-zinc-900"
                  }`}
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{formik.errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 cursor-pointer disabled:opacity-50 hover:shadow-indigo-500/40"
              >
                {formik.isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message Directly</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
