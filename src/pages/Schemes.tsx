import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, ArrowRight, User, IndianRupee, Calendar } from 'lucide-react';

const schemes = [
  {
    title: 'PM-KISAN Scheme',
    description: 'Direct income support to farmers with landholding',
    amount: '₹6,000/year',
    eligibility: 'Small & Marginal Farmers',
    deadline: '31 March 2025',
    status: 'Eligible',
    category: 'Income Support'
  },
  {
    title: 'Crop Insurance Scheme',
    description: 'Protection against crop loss due to natural calamities',
    amount: 'Up to ₹2,00,000',
    eligibility: 'All Farmers',
    deadline: '15 April 2025',
    status: 'Recommended',
    category: 'Insurance'
  },
  {
    title: 'Organic Farming Support',
    description: 'Financial assistance for organic farming practices',
    amount: '₹50,000/hectare',
    eligibility: 'Certified Organic Farmers',
    deadline: '30 June 2025',
    status: 'Apply Now',
    category: 'Subsidy'
  },
  {
    title: 'Agri Equipment Loan',
    description: 'Low-interest loans for purchasing farm equipment',
    amount: 'Up to ₹15,00,000',
    eligibility: 'Income < ₹3L annually',
    deadline: 'Ongoing',
    status: 'Pre-approved',
    category: 'Loan'
  },
  {
    title: 'Kerala Spices Board Grant',
    description: 'Special support for spice cultivation in Kerala',
    amount: '₹1,00,000/acre',
    eligibility: 'Kerala Spice Farmers',
    deadline: '20 May 2025',
    status: 'Eligible',
    category: 'Grant'
  },
  {
    title: 'Water Conservation Scheme',
    description: 'Support for drip irrigation and water harvesting',
    amount: '₹75,000',
    eligibility: 'All Farmers',
    deadline: '15 July 2025',
    status: 'Apply Now',
    category: 'Infrastructure'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Eligible': return 'bg-primary text-primary-foreground';
    case 'Recommended': return 'bg-accent text-accent-foreground';
    case 'Pre-approved': return 'bg-primary-glow text-primary-foreground';
    case 'Apply Now': return 'bg-secondary text-secondary-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

export default function Schemes() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Government Schemes & Loans
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-curated schemes and loans based on your profile. Get personalized recommendations 
            to maximize your agricultural benefits.
          </p>
        </div>

        {/* AI Recommendation Banner */}
        <Card className="mb-8 bg-gradient-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">🤖 AI Recommendation</h3>
                <p className="opacity-90">
                  Based on your profile (Small farmer, 5 acres, Kerala), we've found 4 highly relevant schemes for you.
                </p>
              </div>
              <Button variant="secondary" size="sm">
                Update Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme, index) => (
            <Card key={index} className="bg-gradient-card hover-lift group h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {scheme.category}
                  </Badge>
                  <Badge className={getStatusColor(scheme.status)}>
                    {scheme.status}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {scheme.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground">
                  {scheme.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 flex-1">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <IndianRupee className="h-4 w-4 mr-2 text-accent" />
                    <span className="font-medium">{scheme.amount}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{scheme.eligibility}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Deadline: {scheme.deadline}</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full group-hover:shadow-glow transition-all">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <Card className="mt-12 bg-gradient-card">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Need Help with Applications?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our AI assistant can help you understand eligibility criteria, fill applications, 
              and track your application status. Get personalized guidance for each scheme.
            </p>
            <Button size="lg" variant="outline">
              Get AI Help
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}