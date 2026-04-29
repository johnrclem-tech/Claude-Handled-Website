import type { Metadata } from "next"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "Privacy Policy — Handled",
  description:
    "Handled's Privacy Policy explains how we collect, use, share, and protect personal data when you use our website, tools, and fulfillment services.",
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 lg:px-8 py-16 sm:py-24">
        <header className="border-b border-border pb-10 mb-12">
          <p className="section-label mb-4">Handled, Inc.</p>
          <p className="card-description mb-8">
            1590 Rosecrans Ave, Ste D, PMB 805
            <br />
            Manhattan Beach, CA 90266
          </p>
          <h1 className="section-heading">Privacy Policy</h1>
          <p className="feature-text mt-4">Date of Last Revision: September 24, 2025</p>
        </header>

        <div className="border-b border-border pb-8 mb-12 space-y-4">
          <p className="section-description mt-0">
            Handled, Inc. (&ldquo;Handled,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            respects your privacy and is committed to protecting personal information. This Privacy Policy
            explains how we collect, use, share, and protect data when you use our website, tools, and
            fulfillment services.
          </p>
          <p className="section-description mt-0">
            This Policy applies to Customer entities that use our Services and to their Authorized Users. It
            also describes how we handle personal data of end recipients processed on Customer&rsquo;s behalf
            in the course of providing the Services. Capitalized terms used but not defined in this Policy
            have the meanings given to them in the Handled{" "}
            <a
              href="https://www.handledcommerce.com/terms"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
            >
              Terms of Service
            </a>
            .
          </p>
        </div>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">01</span>Information We Collect
          </h2>
          <p className="section-description">We collect personal and business information in several ways:</p>

          <h3 className="card-title mt-8 mb-3 italic">A. Information You Provide Directly</h3>
          <ul className="list-disc pl-6 space-y-2 card-description">
            <li>Name, email address, phone number, business name</li>
            <li>Shipping and billing addresses</li>
            <li>Payment information</li>
            <li>Fulfillment and support requests</li>
          </ul>

          <h3 className="card-title mt-8 mb-3 italic">B. Order &amp; Shipment Data</h3>
          <p className="card-description mb-3">
            We process personally identifiable information (PII) about your customers as part of fulfilling
            shipments, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 card-description">
            <li>Recipient name, address, phone number, and email</li>
            <li>Order contents and delivery preferences</li>
          </ul>
          <p className="card-description mt-3">
            When we process this data on your behalf as part of fulfilling orders, we act as a data processor
            and you act as the data controller. Our processing of such data is governed by the Terms of
            Service and the{" "}
            <a
              href="https://www.handledcommerce.com/terms/data-processing-agreement"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
            >
              Data Processing Agreement
            </a>
            .
          </p>

          <h3 className="card-title mt-8 mb-3 italic">C. Automatically Collected Data</h3>
          <p className="card-description mb-3">We collect certain technical and usage data automatically:</p>
          <ul className="list-disc pl-6 space-y-2 card-description">
            <li>IP address, browser type, device identifiers</li>
            <li>Cookies, pixel tags, and analytics data</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">02</span>How We Use Information
          </h2>
          <p className="section-description mb-6">We use your information to:</p>

          <div className="space-y-6">
            {[
              {
                title: "Provide our services",
                basis: "Art. 6(1)(b) — Contract performance",
                body: "To operate and deliver our fulfillment, logistics, and related services.",
              },
              {
                title: "Process and deliver orders",
                basis: "Art. 6(1)(b) — Contract performance",
                body: "To manage and fulfill shipments, returns, and related customer requests.",
              },
              {
                title: "Manage accounts and communications",
                basis: "Art. 6(1)(b) — Contract performance",
                body: "To maintain customer accounts, respond to inquiries, and provide customer support.",
              },
              {
                title: "Improve and develop our services",
                basis: "Art. 6(1)(f) — Legitimate interests",
                body: "To analyze usage, identify trends, troubleshoot issues, and enhance the performance, features, and security of our offerings. Our legitimate interest is in providing a reliable, high-quality service to our customers.",
              },
              {
                title: "Marketing and promotions",
                basis: "Art. 6(1)(a)/(f) — Consent or Legitimate interests",
                body: "To send relevant communications, offers, and advertising where permitted by law. You may opt out of marketing communications at any time by clicking the unsubscribe link in any marketing email or by contacting us at legal@handledcommerce.com.",
              },
              {
                title: "Legal and compliance",
                basis: "Art. 6(1)(c) — Legal obligation",
                body: "To comply with legal obligations, enforce agreements, and protect the rights, property, or safety of Handled, our customers, or others.",
              },
            ].map((item) => (
              <div key={item.title} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                <p className="card-title mb-1">
                  {item.title}
                  <span className="ml-2 inline-block rounded bg-blue-50 px-2 py-0.5 font-mono text-xs font-medium uppercase tracking-wide text-blue-600 align-middle">
                    {item.basis}
                  </span>
                </p>
                <p className="card-description">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">03</span>How We Share Information
          </h2>
          <p className="section-description">
            We share personal data with third parties for the purposes outlined above. These include:
          </p>

          <h3 className="card-title mt-8 mb-3 italic">A. Service Providers (Processors)</h3>
          <p className="card-description mb-3">
            We use trusted vendors to operate core services such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 card-description">
            <li>Warehouse management systems (WMS)</li>
            <li>IT infrastructure and cloud platforms</li>
            <li>Customer support tools and analytics</li>
            <li>Payment processors</li>
          </ul>
          <p className="card-description mt-3">
            These vendors act as data processors, processing information only on our instructions and under
            contractual data protection obligations.
          </p>

          <h3 className="card-title mt-8 mb-3 italic">B. Independent Data Controllers</h3>
          <p className="card-description mb-3">
            We also share data with third parties that determine their own purposes and means of processing.
            These include:
          </p>
          <ul className="list-disc pl-6 space-y-2 card-description">
            <li>Shipping carriers (e.g., UPS, FedEx)</li>
            <li>Marketing and ad platforms (e.g., Google, Meta)</li>
            <li>CRM and marketing automation tools (e.g., HubSpot)</li>
            <li>Professional advisors (e.g., auditors, legal counsel)</li>
          </ul>
          <p className="card-description mt-3">
            These parties act as independent data controllers and handle data according to their own privacy
            policies. Handled does not control and is not responsible for how these independent third parties
            use, store, or protect your data.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">04</span>International Data Transfers
          </h2>
          <p className="section-description mb-3">
            We operate in and transfer data to the United States and other jurisdictions that may not have
            equivalent data protection laws. When required by law (e.g., under GDPR), we rely on:
          </p>
          <ul className="list-disc pl-6 space-y-2 card-description">
            <li>Standard Contractual Clauses approved by the European Commission</li>
            <li>Other lawful transfer mechanisms to ensure adequate protection</li>
          </ul>
          <p className="card-description mt-3">
            By using our services, you consent to the transfer of your data to the United States and other
            countries where we or our partners operate.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">05</span>Your Rights and Choices
          </h2>
          <p className="section-description mb-3">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 card-description">
            <li>Access or obtain a copy of your personal data</li>
            <li>Correct or delete inaccurate data</li>
            <li>Object to or restrict certain processing</li>
            <li>Withdraw consent where applicable</li>
            <li>Request portability of your data</li>
          </ul>

          <h3 className="card-title mt-8 mb-3 italic">How to Exercise Your Rights</h3>
          <p className="card-description">
            To make a request, email us at{" "}
            <a
              href="mailto:legal@handledcommerce.com"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
            >
              legal@handledcommerce.com
            </a>
            . We may verify your identity before fulfilling the request.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">06</span>Rights for Specific Jurisdictions
          </h2>

          <h3 className="card-title mt-8 mb-3 italic">A. California Residents (CCPA)</h3>
          <p className="card-description mb-3">If you reside in California, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 card-description">
            <li>Know what categories of personal data we collect and share</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of the &ldquo;sale&rdquo; of personal information (we do not sell data)</li>
          </ul>
          <p className="card-description mt-3">
            We honor authorized agent requests and will not discriminate against you for exercising your
            rights.
          </p>

          <h3 className="card-title mt-8 mb-3 italic">B. EU/UK Residents (GDPR)</h3>
          <p className="card-description">
            If you are in the EU, EEA, or UK, we process your data under a legal basis as set out in Section 2
            above. You also have the right to lodge a complaint with your local supervisory authority. For
            details on cross-border data transfers and the safeguards we apply, please see Section 4 and our{" "}
            <a
              href="https://www.handledcommerce.com/terms/data-processing-agreement"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
            >
              Data Processing Agreement
            </a>
            .
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">07</span>Data Security
          </h2>
          <p className="section-description">
            We implement reasonable technical and organizational safeguards to protect personal data,
            including encryption of data in transit and at rest and access controls on systems holding
            personal data. However, no system is 100% secure, and we cannot guarantee absolute protection
            against unauthorized access or breaches. If you suspect a security incident involving your data,
            please notify us immediately at{" "}
            <a
              href="mailto:security@handledcommerce.com"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
            >
              security@handledcommerce.com
            </a>
            .
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">08</span>Data Retention
          </h2>
          <p className="section-description mb-3">
            We retain personal data only as long as necessary for the purposes described in this Policy,
            unless a longer period is required by law or contractual obligation:
          </p>
          <ul className="list-disc pl-6 space-y-2 card-description">
            <li>
              <strong>Order and shipment data</strong> — retained for a minimum of 3 years following the close
              of the relevant Account to satisfy legal, tax, and contractual obligations.
            </li>
            <li>
              <strong>Account data</strong> — retained for the duration of the customer relationship and for 3
              years following Account closure.
            </li>
            <li>
              <strong>Marketing data</strong> — retained until you opt out or request deletion, whichever is
              earlier.
            </li>
          </ul>
          <p className="card-description mt-3">
            When data is no longer needed, we securely delete or anonymize it.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">09</span>Cookies and Tracking Technologies
          </h2>
          <p className="section-description mb-3">We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 space-y-2 card-description">
            <li>Understand usage and improve performance</li>
            <li>Provide analytics and support marketing campaigns</li>
          </ul>
          <p className="card-description mt-3">
            You can adjust your browser settings to limit or block cookies. We do not respond to &ldquo;Do Not
            Track&rdquo; signals.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">10</span>Children&rsquo;s Privacy
          </h2>
          <p className="section-description">
            Our services are not directed to children under 13 (or under 16 in certain jurisdictions), and we
            do not knowingly collect personal data from children.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">11</span>Changes to This Policy
          </h2>
          <p className="section-description">
            We may update this Privacy Policy from time to time. For material changes, we will provide notice
            by email to the address associated with your Account at least 30 days before the changes take
            effect, consistent with our Terms of Service. The latest version will always be posted on our
            website with the updated effective date.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2">
            <span className="section-label mr-3">12</span>Contact Us
          </h2>
          <p className="section-description">
            If you have questions or requests related to this Privacy Policy or your data, please contact us
            at{" "}
            <a
              href="mailto:legal@handledcommerce.com"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
            >
              legal@handledcommerce.com
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
