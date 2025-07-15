
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileCheck, TrendingUp, Users, BookOpen, LogOut, BarChart3 } from 'lucide-react';
import FileUpload from './FileUpload';
import AnalysisResults from './AnalysisResults';
import ClassInsights from './ClassInsights';

interface AnalysisResult {
  id: string;
  fileName: string;
  uploadDate: string;
  classPerformance: {
    totalStudents: number;
    overallMastery: number;
    skillAreas: Array<{
      skill: string;
      mastery: number;
      studentsBelow: number;
    }>;
  };
  learningGaps: Array<{
    skill: string;
    severity: 'Critical' | 'Moderate' | 'Minor';
    studentsAffected: number;
    description: string;
    curriculumStandard: string;
  }>;
  recommendations: Array<{
    gap: string;
    strategy: string;
    timeEstimate: string;
    grouping: string;
    resources: string[];
  }>;
  teachingPlan: {
    priorityTopics: string[];
    suggestedSequence: string[];
    groupingSuggestions: string[];
    timeSaved: number;
  };
  confidence: number;
}

const TeacherDashboard = () => {
  const { user, logout } = useAuth();
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
  const [activeTab, setActiveTab] = useState<'upload' | 'results' | 'insights'>('upload');

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResults(prev => [result, ...prev]);
    setActiveTab('results');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">TeachTrack AI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Welcome, {user?.name}</p>
                <p className="text-xs text-gray-500">
                  {user?.tier === 'freemium' ? `${user?.uploadsRemaining} uploads remaining` : 'Unlimited uploads'}
                </p>
              </div>
              <Button onClick={logout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'upload'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Upload className="h-4 w-4 inline mr-2" />
            Upload Work
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'results'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <FileCheck className="h-4 w-4 inline mr-2" />
            Analysis Results ({analysisResults.length})
          </button>
          <button
            onClick={() => setActiveTab('insights')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'insights'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <BarChart3 className="h-4 w-4 inline mr-2" />
            Class Insights
          </button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Analyses</CardTitle>
              <FileCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analysisResults.length}</div>
              <p className="text-xs text-muted-foreground">
                Student work analyzed this month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Gaps Identified</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {analysisResults.reduce((total, result) => total + result.learningGaps.length, 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                Areas for improvement detected
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Saved This Month</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {analysisResults.reduce((total, result) => total + result.teachingPlan.timeSaved, 0)}h
              </div>
              <p className="text-xs text-muted-foreground">
                {user?.tier === 'freemium' ? 'Upgrade for unlimited access' : 'Full access enabled'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        {activeTab === 'upload' && (
          <FileUpload 
            onAnalysisComplete={handleAnalysisComplete}
            uploadsRemaining={user?.uploadsRemaining || 0}
            userTier={user?.tier || 'freemium'}
          />
        )}

        {activeTab === 'results' && (
          <AnalysisResults results={analysisResults} />
        )}

        {activeTab === 'insights' && (
          <ClassInsights hasData={analysisResults.length >= 1} />
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
