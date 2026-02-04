import { useState } from "react";
import { ChevronRight, ChevronLeft, Home, DollarSign, Users, Mountain, Sparkles } from "lucide-react";
import { properties, Property } from "@/lib/properties";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: string;
  question: string;
  icon: React.ElementType;
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: "budget",
    question: "What is your budget range?",
    icon: DollarSign,
    options: [
      { value: "20-30", label: "$20M - $30M" },
      { value: "30-40", label: "$30M - $40M" },
      { value: "40-50", label: "$40M - $50M" },
      { value: "50+", label: "$50M+" },
    ],
  },
  {
    id: "size",
    question: "How many bedrooms do you need?",
    icon: Home,
    options: [
      { value: "5-7", label: "5-7 Bedrooms" },
      { value: "8-10", label: "8-10 Bedrooms" },
      { value: "10+", label: "10+ Bedrooms" },
    ],
  },
  {
    id: "purpose",
    question: "Primary purpose of the property?",
    icon: Users,
    options: [
      { value: "primary", label: "Primary Residence" },
      { value: "vacation", label: "Vacation Home" },
      { value: "investment", label: "Investment Property" },
      { value: "entertainment", label: "Entertainment Estate" },
    ],
  },
  {
    id: "setting",
    question: "Preferred setting?",
    icon: Mountain,
    options: [
      { value: "oceanfront", label: "Oceanfront" },
      { value: "mountain", label: "Mountain" },
      { value: "urban", label: "Urban/City" },
      { value: "countryside", label: "Countryside" },
    ],
  },
];

interface EstateFinder {
  isOpen: boolean;
  onToggle: () => void;
  onSelectProperty: (property: Property) => void;
}

const EstateFinder = ({ isOpen, onToggle, onSelectProperty }: EstateFinder) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const getRecommendations = (): Property[] => {
    // Simple matching algorithm based on answers
    let filtered = [...properties];

    if (answers.budget) {
      const priceRanges: Record<string, [number, number]> = {
        "20-30": [20000000, 30000000],
        "30-40": [30000000, 40000000],
        "40-50": [40000000, 50000000],
        "50+": [50000000, Infinity],
      };
      const [min, max] = priceRanges[answers.budget] || [0, Infinity];
      filtered = filtered.filter((p) => {
        const price = parseInt(p.price.replace(/[$,]/g, ""));
        return price >= min && price <= max;
      });
    }

    if (answers.size) {
      const sizeRanges: Record<string, [number, number]> = {
        "5-7": [5, 7],
        "8-10": [8, 10],
        "10+": [10, Infinity],
      };
      const [min, max] = sizeRanges[answers.size] || [0, Infinity];
      filtered = filtered.filter((p) => p.bedrooms >= min && p.bedrooms <= max);
    }

    // Return at least 2 properties even if no matches
    return filtered.length > 0 ? filtered.slice(0, 3) : properties.slice(0, 2);
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground px-3 py-6 rounded-l-lg shadow-lg hover:bg-primary/90 transition-all group"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="flex items-center gap-2 text-sm font-medium tracking-wide">
          <Sparkles className="w-4 h-4 rotate-90" />
          Estate Finder
        </span>
      </button>
    );
  }

  return (
    <div className="fixed right-0 top-0 bottom-0 z-40 w-full sm:w-96 bg-card border-l border-border shadow-2xl flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="font-serif font-bold text-lg">Estate Finder</h3>
          </div>
          <button
            onClick={onToggle}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {!showResults && (
          <div>
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-1" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {showResults ? (
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="font-serif text-xl font-bold mb-2">Your Matches</h4>
              <p className="text-sm text-muted-foreground">
                Based on your preferences, we recommend:
              </p>
            </div>

            <div className="space-y-4">
              {getRecommendations().map((property) => (
                <button
                  key={property.id}
                  onClick={() => onSelectProperty(property)}
                  className="w-full text-left bg-secondary/50 rounded-lg p-4 hover:bg-secondary transition-colors group"
                >
                  <div className="flex gap-4">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-serif font-semibold text-primary">
                        {property.price}
                      </p>
                      <p className="font-medium">{property.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {property.location}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={resetQuiz}
              className="w-full py-3 border border-primary text-foreground rounded hover:bg-primary/10 transition-colors"
            >
              Start Over
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Question */}
            <div className="text-center">
              {(() => {
                const Icon = questions[currentQuestion].icon;
                return <Icon className="w-10 h-10 text-primary mx-auto mb-4" />;
              })()}
              <h4 className="font-serif text-xl font-bold">
                {questions[currentQuestion].question}
              </h4>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full py-4 px-6 border rounded-lg text-left transition-all hover:border-primary hover:bg-primary/5 ${
                    answers[questions[currentQuestion].id] === option.value
                      ? "border-primary bg-primary/10"
                      : "border-border"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {!showResults && currentQuestion > 0 && (
        <div className="p-6 border-t border-border">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous question
          </button>
        </div>
      )}

      {/* Progress dots */}
      {!showResults && (
        <div className="flex justify-center gap-2 pb-6">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentQuestion
                  ? "bg-primary"
                  : index < currentQuestion
                  ? "bg-primary/50"
                  : "bg-border"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EstateFinder;
