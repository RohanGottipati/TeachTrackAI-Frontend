
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Download, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Clock, 
  Target,
  BookOpen,
  GraduationCap,
  PieChart
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LearningGap {
  skill: string;
  severity: 'Critical' | 'Moderate' | 'Minor';
  studentsAffected: number;
  description: string;
  curriculumStandard: string;
}

interface Recommendation {
  gap: string;
  strategy: string;
  timeEstimate: string;
  grouping: string;
  resources: string[];
}

interface ClassPerformance {
  totalStudents: number;
  overallMastery: number;
  skillAreas: Array<{
    skill: string;
    mastery: number;
    studentsBelow: number;
  }>;
}

interface TeachingPlan {
  priorityTopics: string[];
  suggestedSequence: string[];
  groupingSuggestions: string[];
  timeSaved: number;
}

interface AnalysisResult {
  id: string;
  fileName: string;
  uploadDate: string;
  classPerformance: ClassPerformance;
  learningGaps: LearningGap[];
  recommendations: Recommendation[];
  teachingPlan: TeachingPlan;
  confidence: number;
}

interface AnalysisResultsProps {
  results: AnalysisResult[];
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results }) => {
  const { toast } = useToast();

  const generateDetailedReport = (result: AnalysisResult) => {
    toast({
      title: "Detailed Report Generated",
      description: `Downloading comprehensive learning gap analysis for ${result.fileName}...`,
    });
    console.log('Generating detailed report for:', result);
  };

  const generateTeachingPlan = (result: AnalysisResult) => {
    toast({
      title: "Teaching Plan Generated",
      description: `Downloading personalized teaching plan based on AI analysis...`,
    });
    console.log('Generating teaching plan for:', result);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Minor': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'Critical': return <AlertTriangle className="h-4 w-4" />;
      case 'Moderate': return <Clock className="h-4 w-4" />;
      case 'Minor': return <Target className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'bg-green-100 text-green-800';
    if (confidence >= 75) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <GraduationCap className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Analysis Results Yet</h3>
        <p className="text-gray-600 mb-6">
          Upload student work to see comprehensive AI-powered learning gap analysis, class insights, and personalized teaching recommendations.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Learning Gap Analysis Results</h2>
        <Badge variant="secondary">
          {results.length} {results.length === 1 ? 'Analysis' : 'Analyses'} Complete
        </Badge>
      </div>

      {results.map((result) => (
        <div key={result.id} className="space-y-6">
          {/* Header Card */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-500 mr-2" />
                    {result.fileName}
                  </CardTitle>
                  <CardDescription>
                    Analyzed on {result.uploadDate} • Class of {result.classPerformance.totalStudents} students
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getConfidenceColor(result.confidence)}>
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {result.confidence}% Confidence
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Class Performance Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 text-green-500 mr-2" />
                Class Performance Summary
              </CardTitle>
              <CardDescription>
                Overall mastery and skill-specific performance data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Overall Class Mastery</span>
                    <span className="text-sm text-gray-600">{result.classPerformance.overallMastery}%</span>
                  </div>
                  <Progress value={result.classPerformance.overallMastery} className="h-2" />
                </div>
                <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
                  <Users className="h-6 w-6 text-blue-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium">{result.classPerformance.totalStudents} Students</p>
                    <p className="text-xs text-gray-600">Total in class</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Skill Area Breakdown:</h4>
                {result.classPerformance.skillAreas.map((area, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium text-sm">{area.skill}</p>
                      <p className="text-xs text-gray-600">{area.studentsBelow} students below proficiency</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{area.mastery}%</p>
                      <Progress value={area.mastery} className="w-16 h-1.5" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Gaps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Identified Learning Gaps ({result.learningGaps.length})
              </CardTitle>
              <CardDescription>
                Specific skills and concepts requiring targeted instruction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {result.learningGaps.map((gap, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-semibold text-gray-900">{gap.skill}</h4>
                        <Badge className={`ml-2 ${getSeverityColor(gap.severity)}`}>
                          {getSeverityIcon(gap.severity)}
                          <span className="ml-1">{gap.severity}</span>
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{gap.description}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <BookOpen className="h-3 w-3 mr-1" />
                        {gap.curriculumStandard}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm font-medium">{gap.studentsAffected}</span>
                      </div>
                      <p className="text-xs text-gray-500">students affected</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI-Generated Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                AI-Generated Teaching Recommendations
              </CardTitle>
              <CardDescription>
                Targeted strategies and resources for each identified gap
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {result.recommendations.map((rec, index) => (
                <div key={index} className="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium text-green-900">{rec.gap}</h4>
                    <Badge variant="outline" className="ml-2">
                      <Clock className="h-3 w-3 mr-1" />
                      {rec.timeEstimate}
                    </Badge>
                  </div>
                  <p className="text-sm text-green-800">{rec.strategy}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-medium text-green-900">Suggested Grouping:</p>
                      <p className="text-green-700">{rec.grouping}</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-900">Recommended Resources:</p>
                      <ul className="text-green-700 list-disc list-inside">
                        {rec.resources.map((resource, idx) => (
                          <li key={idx}>{resource}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Teaching Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 text-purple-500 mr-2" />
                Next Steps Teaching Plan
              </CardTitle>
              <CardDescription>
                Structured plan for addressing identified learning gaps
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Priority Topics:</h4>
                  <ul className="space-y-1">
                    {result.teachingPlan.priorityTopics.map((topic, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Target className="h-3 w-3 text-red-500 mr-2" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-900">{result.teachingPlan.timeSaved} hours</p>
                  <p className="text-sm text-blue-700">saved this week with AI insights</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Suggested Teaching Sequence:</h4>
                <ol className="space-y-2">
                  {result.teachingPlan.suggestedSequence.map((step, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center justify-center mr-3 mt-0.5">
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Recommended Student Groupings:</h4>
                <div className="space-y-2">
                  {result.teachingPlan.groupingSuggestions.map((group, idx) => (
                    <div key={idx} className="flex items-center p-2 bg-gray-50 rounded text-sm">
                      <Users className="h-4 w-4 text-gray-500 mr-2" />
                      {group}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => generateDetailedReport(result)}
                  className="flex-1 sm:flex-none"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Detailed Report
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => generateTeachingPlan(result)}
                  className="flex-1 sm:flex-none"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Download Teaching Plan
                </Button>
                <Button 
                  variant="secondary"
                  className="flex-1 sm:flex-none"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Class Insights
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AnalysisResults;
