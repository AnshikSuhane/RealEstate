import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Shield,
  CheckCircle,
  AlertCircle,
  FileText,
  Home,
  Users,
  Briefcase,
} from "lucide-react";

export function TermsAndServices() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services & Policies</h1>
          <p className="text-muted-foreground">
            Find your dream home with confidence.
          </p>
        </div>

        {/* Service Highlights */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <Home className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Property Listings</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse verified properties.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Expert Agents</h3>
                  <p className="text-sm text-muted-foreground">
                    Get assistance from top professionals.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Briefcase className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Premium Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Exclusive features for serious buyers.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms and Conditions */}
        <Card>
          <CardContent className="p-6">
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Terms and Conditions
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    By using our platform, you agree to the following terms...
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    User Responsibilities
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Users must ensure all listings and personal information are
                    accurate...
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    Payment and Refunds
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Premium features may require payment. Refunds are subject to
                    policy...
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We protect your data as per our Privacy Policy...
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions, contact support@propertypro.com
                  </p>
                </section>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
