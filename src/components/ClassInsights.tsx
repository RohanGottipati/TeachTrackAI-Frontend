
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  BookOpen
} from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface ClassInsightsProps {
  hasData: boolean;
}

const ClassInsights: React.FC<ClassInsightsProps> = ({ hasData }) => {
  if (!hasData) {
    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Class Insights Coming Soon</h3>
        <p className="text-gray-600 mb-4">
          View comprehensive class-wide analytics and trends once you've analyzed more student work.
        </p>
        <p className="text-sm text-gray-500">
          Analyze at least 5 pieces of student work to unlock detailed class insights and performance trends.
        </p>
      </div>
    );
  }

  // Sample data for demonstration
  const skillMasteryData = [
    { skill: 'Reading Comp.', mastery: 68, target: 80 },
    { skill: 'Math Reasoning', mastery: 75, target: 80 },
    { skill: 'Writing', mastery: 62, target: 80 },
    { skill: 'Problem Solving', mastery: 71, target: 80 },
    { skill: 'Critical Think.', mastery: 59, target: 80 }
  ];

  const progressData = [
    { week: 'Week 1', overall: 58, reading: 55, math: 62, writing: 53 },
    { week: 'Week 2', overall: 61, reading: 59, math: 65, writing: 57 },
    { week: 'Week 3', overall: 65, reading: 63, math: 69, writing: 61 },
    { week: 'Week 4', overall: 68, reading: 66, math: 72, writing: 64 }
  ];

  const gapDistribution = [
    { severity: 'Critical', count: 4, color: '#ef4444' },
    { severity: 'Moderate', count: 7, color: '#f59e0b' },
    { severity: 'Minor', count: 3, color: '#3b82f6' },
    { severity: 'Resolved', count: 8, color: '#10b981' }
  ];

  const studentPerformance = [
    { range: '90-100%', students: 3 },
    { range: '80-89%', students: 6 },
    { range: '70-79%', students: 8 },
    { range: '60-69%', students: 5 },
    { range: 'Below 60%', students: 2 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Class Performance Insights</h2>
        <Badge variant="secondary">
          Updated Today
        </Badge>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Average</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students At Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              Need immediate support
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Gaps</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">
              Identified across class
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23h</div>
            <p className="text-xs text-muted-foreground">
              This month with AI
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Skill Mastery Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Skill Mastery vs. Target Goals</CardTitle>
          <CardDescription>
            Current class performance compared to curriculum standards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{
            mastery: { label: "Current Mastery", color: "#3b82f6" },
            target: { label: "Target Goal", color: "#ef4444" }
          }}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillMasteryData}>
                <XAxis dataKey="skill" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="mastery" fill="#3b82f6" name="Current Mastery" />
                <Bar dataKey="target" fill="#ef4444" name="Target Goal" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Class Progress Trend</CardTitle>
            <CardDescription>
              Weekly performance improvement across subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              overall: { label: "Overall", color: "#10b981" },
              reading: { label: "Reading", color: "#3b82f6" },
              math: { label: "Math", color: "#f59e0b" },
              writing: { label: "Writing", color: "#8b5cf6" }
            }}>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={progressData}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="overall" stroke="#10b981" strokeWidth={3} />
                  <Line type="monotone" dataKey="reading" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="math" stroke="#f59e0b" strokeWidth={2} />
                  <Line type="monotone" dataKey="writing" stroke="#8b5cf6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Learning Gap Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Gap Severity</CardTitle>
            <CardDescription>
              Distribution of identified learning gaps by priority level
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              critical: { label: "Critical", color: "#ef4444" },
              moderate: { label: "Moderate", color: "#f59e0b" },
              minor: { label: "Minor", color: "#3b82f6" },
              resolved: { label: "Resolved", color: "#10b981" }
            }}>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={gapDistribution}
                    dataKey="count"
                    nameKey="severity"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ severity, count }) => `${severity}: ${count}`}
                  >
                    {gapDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Student Performance Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Student Performance Distribution</CardTitle>
          <CardDescription>
            Number of students in each performance range
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {studentPerformance.map((range, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium">{range.range}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-32">
                    <Progress value={(range.students / 24) * 100} className="h-2" />
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {range.students} students
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 text-orange-500 mr-2" />
            Recommended Next Actions
          </CardTitle>
          <CardDescription>
            Priority interventions based on class performance data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start p-3 bg-red-50 border-l-4 border-red-400 rounded">
              <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-red-800">Critical: Address fraction operations</p>
                <p className="text-xs text-red-700">7 students need immediate intervention</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <Clock className="h-4 w-4 text-yellow-600 mr-2 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-800">Schedule reading comprehension review</p>
                <p className="text-xs text-yellow-700">Class average below target in inference skills</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-green-50 border-l-4 border-green-400 rounded">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-800">Continue current math reasoning approach</p>
                <p className="text-xs text-green-700">Strong improvement trend observed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassInsights;
