

import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Bell, Trash2 } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number)",
        "Property preferences and search history",
        "Device information and IP address",
        "Usage data and interaction with our services",
        "Payment information when applicable"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our real estate services",
        "Personalize your property search experience",
        "Process transactions and appointments",
        "Send relevant updates and notifications",
        "Maintain and enhance platform security"
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        "With real estate agents for property inquiries",
        "Service providers who assist our operations",
        "Legal requirements and law enforcement",
        "Business transfers or acquisitions",
        "With your consent for specific purposes"
      ]
    },
    {
      icon: Database,
      title: "Data Storage and Security",
      content: [
        "Industry-standard security measures",
        "Encrypted data transmission",
        "Regular security audits and updates",
        "Limited employee access to personal data",
        "Secure cloud storage solutions"
      ]
    },
    {
      icon: Bell,
      title: "Your Privacy Rights",
      content: [
        "Access your personal information",
        "Request data correction or deletion",
        "Opt-out of marketing communications",
        "Control cookie preferences",
        "Data portability options"
      ]
    },
    {
      icon: Trash2,
      title: "Data Retention",
      content: [
        "Account information retained while active",
        "Search history stored for 12 months",
        "Transaction records kept as required by law",
        "Deleted data permanent removal process",
        "Backup retention policies"
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: March 20, 2024
          </p>

          <div className="prose prose-neutral dark:prose-invert mb-8">
            <p className="text-muted-foreground">
              At PropertyFinder, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our website and services. Please
              read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-muted-foreground">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate
              to contact us at:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: privacy@propertyfinder.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Property Street, Seattle, WA 98101</li>
            </ul>
          </div>

          <div className="mt-8 text-sm text-muted-foreground text-center">
            <p>
              This privacy policy was last updated on March 20, 2024.
              We reserve the right to make changes to this policy at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}