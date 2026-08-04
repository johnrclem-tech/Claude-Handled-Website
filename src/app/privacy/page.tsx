import type { Metadata } from "next"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "Privacy Policy — Handled",
  description:
    "Handled's Privacy Policy: how we collect, use, share, and protect personal information when you use our website, tools, and fulfillment services.",
  alternates: { canonical: "https://www.handledcommerce.com/privacy" },
}

const sectionHeading =
  "text-2xl font-semibold tracking-tight mt-16 mb-6 pb-3 border-b border-border flex items-baseline gap-4"
const sectionNum = "text-sm font-mono text-primary min-w-[1.5rem]"
const subHeading = "text-lg italic font-medium mt-8 mb-3"
const bodyP = "text-base leading-relaxed text-muted-foreground mb-4"
const list = "list-disc pl-6 space-y-2 text-muted-foreground mb-4"
const extLink = "text-primary underline underline-offset-2 hover:text-primary/80"
const badge =
  "inline-block ml-2 rounded px-1.5 py-0.5 text-xs font-mono font-medium text-primary bg-primary/10 align-middle whitespace-nowrap"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Header */}
        <header className="pb-10 mb-10 border-b-2 border-foreground">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-8 leading-relaxed">
            <strong className="block text-sm text-foreground mb-1 tracking-wider">Handled, Inc.</strong>
            1590 Rosecrans Ave, Ste D, PMB 805<br />
            Manhattan Beach, CA 90266
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Privacy <em className="italic font-light text-primary">Policy</em>
          </h1>
          <p className="text-xs font-mono text-muted-foreground">
            Date of Last Revision: September 24, 2025
          </p>
        </header>

        {/* Preamble */}
        <div className="pb-8 mb-8 border-b border-border">
          <p className={bodyP}>
            Handled, Inc. (&quot;Handled,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
            privacy and is committed to protecting personal information. This Privacy Policy explains how we
            collect, use, share, and protect data when you use our website, tools, and fulfillment services.
          </p>
          <p className={bodyP}>
            This Policy applies to Customer entities that use our Services and to their Authorized Users. It
            also describes how we handle personal data of end recipients processed on Customer&apos;s behalf in
            the course of providing the Services. Capitalized terms used but not defined in this Policy have
            the meanings given to them in the Handled{" "}
            <a href="/terms" className={extLink}>Terms of Service</a>.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>1</span>
          <span>Information We Collect</span>
        </h2>
        <p className={bodyP}>We collect personal and business information in several ways:</p>

        <h3 className={subHeading}>A. Information You Provide Directly</h3>
        <ul className={list}>
          <li>Name, email address, phone number, business name</li>
          <li>Shipping and billing addresses</li>
          <li>Payment information</li>
          <li>Fulfillment and support requests</li>
        </ul>

        <h3 className={subHeading}>B. Order &amp; Shipment Data</h3>
        <p className={bodyP}>
          We process personally identifiable information (PII) about your customers as part of fulfilling
          shipments, including:
        </p>
        <ul className={list}>
          <li>Recipient name, address, phone number, and email</li>
          <li>Order contents and delivery preferences</li>
        </ul>
        <p className={bodyP}>
          When we process this data on your behalf as part of fulfilling orders, we act as a data processor
          and you act as the data controller. Our processing of such data is governed by the Terms of Service
          and the{" "}
          <a
            href="https://www.handledcommerce.com/terms/data-processing-agreement"
            className={extLink}
          >
            Data Processing Agreement
          </a>
          .
        </p>

        <h3 className={subHeading}>C. Automatically Collected Data</h3>
        <p className={bodyP}>We collect certain technical and usage data automatically:</p>
        <ul className={list}>
          <li>IP address, browser type, device identifiers</li>
          <li>Cookies, pixel tags, and analytics data</li>
        </ul>

        {/* Section 2 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>2</span>
          <span>How We Use Information</span>
        </h2>
        <p className={bodyP}>We use your information to:</p>

        <div className="mb-5 pb-5 border-b border-border/50">
          <p className="text-foreground font-medium mb-1">
            Provide our services
            <span className={badge}>Art. 6(1)(b) — Contract performance</span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To operate and deliver our fulfillment, logistics, and related services.
          </p>
        </div>

        <div className="mb-5 pb-5 border-b border-border/50">
          <p className="text-foreground font-medium mb-1">
            Process and deliver orders
            <span className={badge}>Art. 6(1)(b) — Contract performance</span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To manage and fulfill shipments, returns, and related customer requests.
          </p>
        </div>

        <div className="mb-5 pb-5 border-b border-border/50">
          <p className="text-foreground font-medium mb-1">
            Manage accounts and communications
            <span className={badge}>Art. 6(1)(b) — Contract performance</span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To maintain customer accounts, respond to inquiries, and provide customer support.
          </p>
        </div>

        <div className="mb-5 pb-5 border-b border-border/50">
          <p className="text-foreground font-medium mb-1">
            Improve and develop our services
            <span className={badge}>Art. 6(1)(f) — Legitimate interests</span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To analyze usage, identify trends, troubleshoot issues, and enhance the performance, features,
            and security of our offerings. Our legitimate interest is in providing a reliable, high-quality
            service to our customers.
          </p>
        </div>

        <div className="mb-5 pb-5 border-b border-border/50">
          <p className="text-foreground font-medium mb-1">
            Marketing and promotions
            <span className={badge}>Art. 6(1)(a)/(f) — Consent or Legitimate interests</span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To send relevant communications, offers, and advertising where permitted by law. You may opt out
            of marketing communications at any time by clicking the unsubscribe link in any marketing email
            or by contacting us at{" "}
            <a href="mailto:legal@handledcommerce.com" className={extLink}>
              legal@handledcommerce.com
            </a>
            .
          </p>
        </div>

        <div className="mb-5">
          <p className="text-foreground font-medium mb-1">
            Legal and compliance
            <span className={badge}>Art. 6(1)(c) — Legal obligation</span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To comply with legal obligations, enforce agreements, and protect the rights, property, or safety
            of Handled, our customers, or others.
          </p>
        </div>

        {/* Section 3 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>3</span>
          <span>How We Share Information</span>
        </h2>
        <p className={bodyP}>
          We share personal data with third parties for the purposes outlined above. These include:
        </p>

        <h3 className={subHeading}>A. Service Providers (Processors)</h3>
        <p className={bodyP}>We use trusted vendors to operate core services such as:</p>
        <ul className={list}>
          <li>Warehouse management systems (WMS)</li>
          <li>IT infrastructure and cloud platforms</li>
          <li>Customer support tools and analytics</li>
          <li>Payment processors</li>
        </ul>
        <p className={bodyP}>
          These vendors act as data processors, processing information only on our instructions and under
          contractual data protection obligations.
        </p>

        <h3 className={subHeading}>B. Independent Data Controllers</h3>
        <p className={bodyP}>
          We also share data with third parties that determine their own purposes and means of processing.
          These include:
        </p>
        <ul className={list}>
          <li>Shipping carriers (e.g., UPS, FedEx)</li>
          <li>Marketing and ad platforms (e.g., Google, Meta)</li>
          <li>CRM and marketing automation tools (e.g., HubSpot)</li>
          <li>Professional advisors (e.g., auditors, legal counsel)</li>
        </ul>
        <p className={bodyP}>
          These parties act as independent data controllers and handle data according to their own privacy
          policies. Handled does not control and is not responsible for how these independent third parties
          use, store, or protect your data.
        </p>

        {/* Section 4 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>4</span>
          <span>International Data Transfers</span>
        </h2>
        <p className={bodyP}>
          We operate in and transfer data to the United States and other jurisdictions that may not have
          equivalent data protection laws. When required by law (e.g., under GDPR), we rely on:
        </p>
        <ul className={list}>
          <li>Standard Contractual Clauses approved by the European Commission</li>
          <li>Other lawful transfer mechanisms to ensure adequate protection</li>
        </ul>
        <p className={bodyP}>
          By using our services, you consent to the transfer of your data to the United States and other
          countries where we or our partners operate.
        </p>

        {/* Section 5 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>5</span>
          <span>Your Rights and Choices</span>
        </h2>
        <p className={bodyP}>Depending on your location, you may have the right to:</p>
        <ul className={list}>
          <li>Access or obtain a copy of your personal data</li>
          <li>Correct or delete inaccurate data</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent where applicable</li>
          <li>Request portability of your data</li>
        </ul>

        <h3 className={subHeading}>How to Exercise Your Rights</h3>
        <p className={bodyP}>
          To make a request, email us at{" "}
          <a href="mailto:legal@handledcommerce.com" className={extLink}>
            legal@handledcommerce.com
          </a>
          . We may verify your identity before fulfilling the request.
        </p>

        {/* Section 6 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>6</span>
          <span>Rights for Specific Jurisdictions</span>
        </h2>

        <h3 className={subHeading}>A. California Residents (CCPA)</h3>
        <p className={bodyP}>If you reside in California, you have the right to:</p>
        <ul className={list}>
          <li>Know what categories of personal data we collect and share</li>
          <li>Request deletion of your personal data</li>
          <li>Opt out of the &quot;sale&quot; of personal information (we do not sell data)</li>
        </ul>
        <p className={bodyP}>
          We honor authorized agent requests and will not discriminate against you for exercising your rights.
        </p>

        <h3 className={subHeading}>B. EU/UK Residents (GDPR)</h3>
        <p className={bodyP}>
          If you are in the EU, EEA, or UK, we process your data under a legal basis as set out in Section 2
          above. You also have the right to lodge a complaint with your local supervisory authority. For
          details on cross-border data transfers and the safeguards we apply, please see Section 4 and our{" "}
          <a
            href="https://www.handledcommerce.com/terms/data-processing-agreement"
            className={extLink}
          >
            Data Processing Agreement
          </a>
          .
        </p>

        {/* Section 7 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>7</span>
          <span>Data Security</span>
        </h2>
        <p className={bodyP}>
          We implement reasonable technical and organizational safeguards to protect personal data, including
          encryption of data in transit and at rest and access controls on systems holding personal data.
          However, no system is 100% secure, and we cannot guarantee absolute protection against unauthorized
          access or breaches. If you suspect a security incident involving your data, please notify us
          immediately at{" "}
          <a href="mailto:security@handledcommerce.com" className={extLink}>
            security@handledcommerce.com
          </a>
          .
        </p>

        {/* Section 8 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>8</span>
          <span>Data Retention</span>
        </h2>
        <p className={bodyP}>
          We retain personal data only as long as necessary for the purposes described in this Policy, unless
          a longer period is required by law or contractual obligation:
        </p>
        <ul className={list}>
          <li>
            <strong className="text-foreground font-semibold">Order and shipment data</strong> — retained for
            a minimum of 3 years following the close of the relevant Account to satisfy legal, tax, and
            contractual obligations.
          </li>
          <li>
            <strong className="text-foreground font-semibold">Account data</strong> — retained for the
            duration of the customer relationship and for 3 years following Account closure.
          </li>
          <li>
            <strong className="text-foreground font-semibold">Marketing data</strong> — retained until you
            opt out or request deletion, whichever is earlier.
          </li>
        </ul>
        <p className={bodyP}>When data is no longer needed, we securely delete or anonymize it.</p>

        {/* Section 9 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>9</span>
          <span>Cookies and Tracking Technologies</span>
        </h2>
        <p className={bodyP}>We use cookies and similar technologies to:</p>
        <ul className={list}>
          <li>Understand usage and improve performance</li>
          <li>Provide analytics and support marketing campaigns</li>
        </ul>
        <p className={bodyP}>
          You can adjust your browser settings to limit or block cookies. We do not respond to &quot;Do Not
          Track&quot; signals.
        </p>

        {/* Section 10 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>10</span>
          <span>Children&apos;s Privacy</span>
        </h2>
        <p className={bodyP}>
          Our services are not directed to children under 13 (or under 16 in certain jurisdictions), and we
          do not knowingly collect personal data from children.
        </p>

        {/* Section 11 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>11</span>
          <span>Changes to This Policy</span>
        </h2>
        <p className={bodyP}>
          We may update this Privacy Policy from time to time. For material changes, we will provide notice
          by email to the address associated with your Account at least 30 days before the changes take
          effect, consistent with our Terms of Service. The latest version will always be posted on our
          website with the updated effective date.
        </p>

        {/* Section 12 */}
        <h2 className={sectionHeading}>
          <span className={sectionNum}>12</span>
          <span>Contact Us</span>
        </h2>
        <p className={bodyP}>
          If you have questions or requests related to this Privacy Policy or your data, please contact us at{" "}
          <a href="mailto:legal@handledcommerce.com" className={extLink}>
            legal@handledcommerce.com
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  )
}
