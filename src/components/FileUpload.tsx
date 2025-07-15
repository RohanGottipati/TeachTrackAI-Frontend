
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, Image, FileType, CheckCircle, Loader2, AlertCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';

interface FileUploadProps {
  onAnalysisComplete: (result: any) => void;
  uploadsRemaining: number;
  userTier: 'freemium' | 'premium';
}

const FileUpload: React.FC<FileUploadProps> = ({ onAnalysisComplete, uploadsRemaining, userTier }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisStage, setAnalysisStage] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload student work files: PDF, Word docs, images (JPG/PNG), or text files.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
  };

  const simulateAdvancedAnalysis = async (file: File) => {
    setIsAnalyzing(true);
    setUploadProgress(0);
    setAnalysisStage('Uploading student work...');

    // Stage 1: Upload simulation
    const uploadInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 25) {
          clearInterval(uploadInterval);
          setAnalysisStage('Scanning responses and detecting patterns...');
          return 25;
        }
        return prev + Math.random() * 8;
      });
    }, 150);

    await new Promise(resolve => setTimeout(resolve, 1500));
    clearInterval(uploadInterval);
    
    // Stage 2: Pattern detection
    const patternInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 50) {
          clearInterval(patternInterval);
          setAnalysisStage('Comparing against curriculum standards...');
          return 50;
        }
        return prev + Math.random() * 6;
      });
    }, 200);

    await new Promise(resolve => setTimeout(resolve, 1800));
    clearInterval(patternInterval);

    // Stage 3: Curriculum comparison
    const curriculumInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 75) {
          clearInterval(curriculumInterval);
          setAnalysisStage('Identifying learning gaps and generating recommendations...');
          return 75;
        }
        return prev + Math.random() * 5;
      });
    }, 250);

    await new Promise(resolve => setTimeout(resolve, 2000));
    clearInterval(curriculumInterval);

    // Stage 4: Final analysis
    const finalInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(finalInterval);
          setAnalysisStage('Analysis complete!');
          return 100;
        }
        return prev + Math.random() * 4;
      });
    }, 300);

    await new Promise(resolve => setTimeout(resolve, 1200));
    clearInterval(finalInterval);

    // Generate comprehensive analysis results
    const detailedResults = {
      id: Date.now().toString(),
      fileName: file.name,
      uploadDate: new Date().toLocaleDateString(),
      
      classPerformance: {
        totalStudents: 24,
        overallMastery: 68,
        skillAreas: [
          { skill: 'Reading Comprehension', mastery: 65, studentsBelow: 8 },
          { skill: 'Mathematical Reasoning', mastery: 72, studentsBelow: 6 },
          { skill: 'Written Expression', mastery: 61, studentsBelow: 9 },
          { skill: 'Problem Solving', mastery: 74, studentsBelow: 5 }
        ]
      },

      learningGaps: [
        {
          skill: 'Fraction Operations',
          severity: 'Critical',
          studentsAffected: 7,
          description: 'Students struggle with adding and subtracting fractions with unlike denominators',
          curriculumStandard: 'Grade 5 Number Sense 5.3'
        },
        {
          skill: 'Reading Inference Skills',
          severity: 'Moderate',
          studentsAffected: 9,
          description: 'Difficulty drawing conclusions from text evidence and making logical inferences',
          curriculumStandard: 'Grade 5 Reading 5.2'
        },
        {
          skill: 'Multi-step Word Problems',
          severity: 'Moderate',
          studentsAffected: 6,
          description: 'Students need support breaking down complex word problems into manageable steps',
          curriculumStandard: 'Grade 5 Problem Solving 5.4'
        },
        {
          skill: 'Paragraph Structure',
          severity: 'Minor',
          studentsAffected: 4,
          description: 'Some students need reinforcement with topic sentences and supporting details',
          curriculumStandard: 'Grade 5 Writing 5.1'
        }
      ],

      recommendations: [
        {
          gap: 'Fraction Operations',
          strategy: 'Use visual fraction models and manipulatives for hands-on learning',
          timeEstimate: '20-25 minutes',
          grouping: 'Small group (7 students)',
          resources: ['Fraction strips', 'Digital fraction tool', 'Practice worksheets']
        },
        {
          gap: 'Reading Inference Skills',
          strategy: 'Implement guided reading with graphic organizers for inference practice',
          timeEstimate: '15-20 minutes',
          grouping: 'Whole class with differentiated texts',
          resources: ['Inference anchor charts', 'Text evidence organizers', 'Leveled passages']
        },
        {
          gap: 'Multi-step Word Problems',
          strategy: 'Teach problem-solving framework: Read, Understand, Plan, Solve, Check',
          timeEstimate: '25-30 minutes',
          grouping: 'Mixed-ability pairs',
          resources: ['Problem-solving poster', 'Step-by-step templates', 'Real-world scenarios']
        },
        {
          gap: 'Paragraph Structure',
          strategy: 'Use paragraph frames and color-coding for topic sentences and details',
          timeEstimate: '15 minutes',
          grouping: 'Small group (4 students)',
          resources: ['Paragraph templates', 'Color-coded organizers', 'Writing checklists']
        }
      ],

      teachingPlan: {
        priorityTopics: ['Fraction Operations', 'Reading Inference Skills'],
        suggestedSequence: [
          'Day 1: Review fraction concepts with visual models',
          'Day 2: Practice inference skills with short passages',
          'Day 3: Combine fraction work with word problem solving',
          'Day 4: Assessment and reinforcement activities'
        ],
        groupingSuggestions: [
          'Critical Support Group: 7 students (fraction intensive)',
          'Reading Focus Group: 9 students (inference practice)',
          'Advanced Group: 8 students (extension activities)'
        ],
        timeSaved: 11
      },

      confidence: 92
    };

    setIsAnalyzing(false);
    setSelectedFile(null);
    onAnalysisComplete(detailedResults);

    toast({
      title: "Analysis Complete!",
      description: `Identified ${detailedResults.learningGaps.length} key learning gaps with ${detailedResults.confidence}% confidence.`,
    });
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.includes('pdf')) return <FileType className="h-8 w-8 text-red-500" />;
    if (fileType.includes('image')) return <Image className="h-8 w-8 text-blue-500" />;
    if (fileType.includes('word')) return <FileText className="h-8 w-8 text-blue-600" />;
    return <FileText className="h-8 w-8 text-gray-500" />;
  };

  if (userTier === 'freemium' && uploadsRemaining <= 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
            Upload Limit Reached
          </CardTitle>
          <CardDescription>
            You've used all your free uploads for this month. Upgrade to Premium for unlimited uploads and advanced analytics.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">
            Upgrade to Premium
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Student Work</CardTitle>
          <CardDescription>
            Upload student work for AI-powered learning gap analysis. Supported formats: worksheets, quizzes, short answer responses, and assignments.
            {userTier === 'freemium' && (
              <span className="block mt-1 text-orange-600 font-medium">
                {uploadsRemaining} free uploads remaining this month
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!selectedFile && !isAnalyzing && (
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Drop student work here, or click to browse
              </h3>
              <p className="text-gray-600 mb-4">
                Supports PDF, Word docs, images (JPG/PNG), and text files up to 10MB
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Examples: Worksheets • Quizzes • Short Answer Responses • Assignments</p>
              </div>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.txt,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <Button asChild className="cursor-pointer">
                <label htmlFor="file-upload">
                  Choose File
                </label>
              </Button>
            </div>
          )}

          {selectedFile && !isAnalyzing && (
            <div className="space-y-4">
              <div className="flex items-center p-4 border rounded-lg">
                {getFileIcon(selectedFile.type)}
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex space-x-3">
                <Button 
                  onClick={() => simulateAdvancedAnalysis(selectedFile)}
                  className="flex-1"
                >
                  Analyze with AI
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedFile(null)}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}

          {isAnalyzing && (
            <div className="space-y-6">
              <div className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-blue-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">TeachTrack AI is analyzing student work...</p>
                  <p className="text-sm text-gray-600">{analysisStage}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Progress value={uploadProgress} className="w-full" />
                <p className="text-center text-sm text-gray-600">
                  {uploadProgress.toFixed(0)}% Complete
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-blue-500 mr-2" />
                  <p className="text-sm text-blue-800">
                    AI is scanning responses, detecting patterns, and comparing against curriculum standards...
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FileUpload;
