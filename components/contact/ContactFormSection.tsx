"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/common/Icons";

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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
      {/* Contact Information Cards */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="shadow-box p-8 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-400 font-medium">
              Contact Details
            </span>
            <h1 className="text-3xl font-bold text-white/85 tracking-tight mt-1">
              Let's build something scalable together.
            </h1>
            <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
              Open to full-time engineering roles, freelance opportunities, or technical project collaborations.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500">Phone Number</span>
                <a href="tel:+919024226200" className="text-sm font-semibold text-white/85 hover:text-indigo-400 block transition-colors">
                  +91 9024226200
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500">Email Address</span>
                <a href="mailto:rakeshchoudhary941397@gmail.com" className="text-sm font-semibold text-white/85 hover:text-indigo-400 block transition-colors">
                  rakeshchoudhary941397@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500">Location</span>
                <p className="text-sm font-semibold text-white/85">Jaipur, Rajasthan, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <span className="text-xs font-mono text-zinc-500 tracking-widest block mb-3">
              Social Profiles
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/rakesh-choudhary-122146266/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-indigo-400 hover:border-indigo-400/40 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/rakesh1645"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-purple-400 hover:border-purple-400/40 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@codewithrc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-red-400 hover:border-red-400/40 transition-colors"
                title="YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:rakeshchoudhary941397@gmail.com"
                className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-indigo-400 hover:border-indigo-400/40 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Formik & Nodemailer Contact Form */}
      <div className="lg:col-span-7">
        <div className="shadow-box p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white/85">Send a Message</h2>
            <span className="text-xs font-mono text-zinc-500 tracking-wider">Formik + Nodemailer API</span>
          </div>

          {submitted && (
            <div className="mb-6 p-4 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 flex items-center gap-3 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <span className="text-sm font-medium">
                Thank you! Your message has been sent directly to Rakesh's inbox.
              </span>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-950/80 border border-rose-500/40 text-rose-300 flex items-center gap-3 animate-in fade-in">
              <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
              <span className="text-sm font-medium">{errorMessage}</span>
            </div>
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="text-xs font-mono text-zinc-400 block mb-2">
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
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white/85 placeholder-zinc-600 focus:outline-none text-sm transition-colors ${
                    formik.touched.name && formik.errors.name
                      ? "border-rose-500/80 focus:border-rose-500"
                      : "border-white/10 focus:border-white/30"
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
                <label htmlFor="email" className="text-xs font-mono text-zinc-400 block mb-2">
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
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white/85 placeholder-zinc-600 focus:outline-none text-sm transition-colors ${
                    formik.touched.email && formik.errors.email
                      ? "border-rose-500/80 focus:border-rose-500"
                      : "border-white/10 focus:border-white/30"
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
              <label htmlFor="subject" className="text-xs font-mono text-zinc-400 block mb-2">
                Subject *
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                placeholder="Full Stack Opportunity / Project Collaboration"
                className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white/85 placeholder-zinc-600 focus:outline-none text-sm transition-colors ${
                  formik.touched.subject && formik.errors.subject
                    ? "border-rose-500/80 focus:border-rose-500"
                    : "border-white/10 focus:border-white/30"
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
              <label htmlFor="message" className="text-xs font-mono text-zinc-400 block mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                placeholder="Tell me about your project or role requirements..."
                className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white/85 placeholder-zinc-600 focus:outline-none text-sm transition-colors resize-none ${
                  formik.touched.message && formik.errors.message
                    ? "border-rose-500/80 focus:border-rose-500"
                    : "border-white/10 focus:border-white/30"
                }`}
              />
              {formik.touched.message && formik.errors.message && (
                <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{formik.errors.message}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50"
            >
              {formik.isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                  <span>Sending Email...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
