export default function Page() {
    return (
      <div
        id="home"
        className="min-h-screen bg-black text-gray-200 flex flex-col gap-8 p-8 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
  
        <p>
          Welcome to <strong>Igent Works</strong> (“we,” “our,” or “us”). Your privacy and trust are paramount to us. This Privacy Policy explains in detail how we collect, use, protect, and share your information when you use our Facebook and Instagram scheduling app powered by AI technology.
        </p>
  
        <h2 className="text-3xl font-semibold mt-8">Information We Collect</h2>
        <p>
          To provide you with seamless scheduling and AI-powered content generation, we collect the following information:
        </p>
        <ul className="list-disc list-inside ml-6 mt-4 space-y-2">
          <li><strong>Personal Information:</strong> This includes your email address and account details you provide when registering or contacting us.</li>
          <li><strong>Content Inputs:</strong> Any instructions, captions, or prompts you submit for AI-based image generation and post creation.</li>
          <li><strong>Scheduling Data:</strong> Information related to your selected posting times and dates.</li>
          <li><strong>Usage Data:</strong> Technical data such as IP address, device type, and interaction logs to improve our services and monitor system health.</li>
        </ul>
  
        <h2 className="text-3xl font-semibold mt-8">How We Use Your Information</h2>
        <p>
          Your data is used strictly to enhance your experience and fulfill the services you request:
        </p>
        <ul className="list-disc list-inside ml-6 mt-4 space-y-2">
          <li>To generate images and captions using AI based on your instructions.</li>
          <li>To schedule and post your content on Facebook and Instagram at your specified times.</li>
          <li>To communicate important updates, support responses, or notifications via your registered email (<a href="mailto:contact@igentworks.com" className="underline text-blue-400">contact@igentworks.com</a>).</li>
          <li>To analyze and improve the performance, security, and reliability of our platform.</li>
        </ul>
  
        <h2 className="text-3xl font-semibold mt-8">Data Sharing and Disclosure</h2>
        <p>
          We value your privacy deeply. We do <strong>not</strong> sell or rent your personal information to third parties. The only data we share externally are the AI-generated captions or derivative content created from your instructions to enable the posting on your connected social media accounts. We do <strong>not</strong> share your raw personal data or instructions with third parties.
        </p>
        <p className="mt-4">
          We may use third-party service providers such as Facebook and Instagram APIs strictly to facilitate the scheduling and posting functionalities. These providers are bound by their own privacy policies and must adhere to strict data protection requirements.
        </p>
  
        <h2 className="text-3xl font-semibold mt-8">Your Rights and Choices</h2>
        <p>
          You have full control over your data:
        </p>
        <ul className="list-disc list-inside ml-6 mt-4 space-y-2">
          <li>You can contact us anytime at <a href="mailto:contact@igentworks.com" className="underline text-blue-400">contact@igentworks.com</a> to request access, corrections, or deletion of your personal data.</li>
          <li>You can choose what content and instructions to submit for AI generation.</li>
          <li>You can deactivate or delete your account through our platform settings.</li>
        </ul>
  
        <h2 className="text-3xl font-semibold mt-8">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to safeguard your personal information from unauthorized access, disclosure, alteration, or destruction. However, no online system is entirely immune to security risks, so please use our services with an understanding of these limitations.
        </p>
  
        <h2 className="text-3xl font-semibold mt-8">Data Retention</h2>
        <p>
          We retain your data only as long as necessary to provide our services or comply with legal obligations. If you request deletion, we will erase your personal information within a reasonable timeframe.
        </p>
  
        <h2 className="text-3xl font-semibold mt-8">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly. Continued use of our app after updates constitutes your acceptance of the revised terms.
        </p>
  
        <h2 className="text-3xl font-semibold mt-8">Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests related to your privacy or this policy, please contact us at <a href="mailto:contact@igentworks.com" className="underline text-blue-400">contact@igentworks.com</a>.  
          We’re here to help and value your trust in Igent Works.
        </p>
      </div>
    );
  }
  