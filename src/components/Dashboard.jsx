
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Play, Clock, CheckCircle, AlertCircle, Bot, Zap, Database, Mail } from 'lucide-react';
import { aiPipelineEngine } from '../lib/aiPipeline';
import { FUNCTION_LIBRARY } from '../lib/functionLibrary';
import { toast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [executionPlan, setExecutionPlan] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionProgress, setExecutionProgress] = useState(0);

  // Initialize AI engine on component mount
  useEffect(() => {
    const initializeEngine = async () => {
      try {
        await aiPipelineEngine.initialize();
        toast({
          title: "AI Engine Ready",
          description: "The AI pipeline engine has been initialized successfully.",
        });
      } catch (error) {
        console.error('Failed to initialize AI engine:', error);
        toast({
          title: "Initialization Warning",
          description: "AI engine initialized with fallback mode.",
          variant: "default",
        });
      }
    };

    initializeEngine();
  }, []);

  const handleProcessQuery = async () => {
    if (!query.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter a query to process.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    try {
      const plan = await aiPipelineEngine.processQuery(query);
      setExecutionPlan(plan);
      toast({
        title: "Query Processed",
        description: `Generated execution plan with ${plan.functionCalls.length} function calls.`,
      });
    } catch (error) {
      console.error('Error processing query:', error);
      toast({
        title: "Processing Error",
        description: "Failed to process the query. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleExecutePlan = async () => {
    if (!executionPlan) return;

    setIsExecuting(true);
    setExecutionProgress(0);

    // Simulate progress updates
    const progressInterval = setInterval(() => {
      setExecutionProgress(prev => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 10;
      });
    }, 500);

    try {
      const result = await aiPipelineEngine.simulateExecution(executionPlan);
      setExecutionPlan(result);
      setExecutionProgress(100);
      
      toast({
        title: "Execution Complete",
        description: "All function calls have been executed successfully.",
      });
    } catch (error) {
      console.error('Error executing plan:', error);
      toast({
        title: "Execution Error",
        description: "Failed to execute the plan. Please try again.",
        variant: "destructive",
      });
    } finally {
      clearInterval(progressInterval);
      setIsExecuting(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'running':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'failed':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'data_retrieval':
        return <Database className="h-4 w-4" />;
      case 'communication':
        return <Mail className="h-4 w-4" />;
      case 'data_analysis':
        return <Zap className="h-4 w-4" />;
      default:
        return <Bot className="h-4 w-4" />;
    }
  };

  // Sample queries for demonstration
  const sampleQueries = [
    "Retrieve all invoices for March, summarize the total amount, and send the summary to my email",
    "Get customer data, filter by active status, and generate a sales report",
    "Calculate total revenue for last quarter and create a chart visualization",
    "Process payment for order #12345 and send confirmation email to customer"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Function Pipeline
          </h1>
          <p className="text-gray-600 text-lg">
            Intelligent query processing with automated function orchestration
          </p>
        </div>

        {/* Query Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Query Input
            </CardTitle>
            <CardDescription>
              Enter your natural language query to generate an automated execution plan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Example: Retrieve all invoices for March, calculate total amount, and send summary via email..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-h-[100px]"
            />
            
            {/* Sample Queries */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Sample Queries:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sampleQueries.map((sample, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-left h-auto p-3 justify-start"
                    onClick={() => setQuery(sample)}
                  >
                    <span className="text-xs text-gray-600 line-clamp-2">{sample}</span>
                  </Button>
                ))}
              </div>
            </div>

            <Button 
              onClick={handleProcessQuery} 
              disabled={isProcessing || !query.trim()}
              className="w-full"
            >
              {isProcessing ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Processing Query...
                </>
              ) : (
                <>
                  <Bot className="mr-2 h-4 w-4" />
                  Generate Execution Plan
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Execution Plan Display */}
        {executionPlan && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Plan Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Execution Plan</CardTitle>
                <CardDescription>
                  Analysis and execution overview
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Query Intent:</p>
                  <Badge variant="secondary" className="mt-1">
                    {executionPlan.analysis.intent.replace('_', ' ').toUpperCase()}
                  </Badge>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700">Complexity:</p>
                  <Badge 
                    variant={executionPlan.analysis.complexity === 'simple' ? 'default' : 
                            executionPlan.analysis.complexity === 'medium' ? 'secondary' : 'destructive'}
                    className="mt-1"
                  >
                    {executionPlan.analysis.complexity.toUpperCase()}
                  </Badge>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700">Function Calls:</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {executionPlan.functionCalls.length}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700">Estimated Duration:</p>
                  <p className="text-lg font-semibold">
                    {Math.round(executionPlan.estimatedDuration / 1000)}s
                  </p>
                </div>

                <Separator />

                <Button 
                  onClick={handleExecutePlan}
                  disabled={isExecuting || executionPlan.status === 'completed'}
                  className="w-full"
                  variant={executionPlan.status === 'completed' ? 'secondary' : 'default'}
                >
                  {isExecuting ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Executing...
                    </>
                  ) : executionPlan.status === 'completed' ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Completed
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Execute Plan
                    </>
                  )}
                </Button>

                {isExecuting && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{Math.round(executionProgress)}%</span>
                    </div>
                    <Progress value={executionProgress} />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Function Calls */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Function Sequence</CardTitle>
                <CardDescription>
                  Ordered list of function calls to be executed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-3">
                    {executionPlan.functionCalls
                      .sort((a, b) => a.executionOrder - b.executionOrder)
                      .map((functionCall, index) => {
                        const functionDef = FUNCTION_LIBRARY.find(f => f.id === functionCall.functionId);
                        return (
                          <div
                            key={functionCall.id}
                            className="flex items-start gap-3 p-4 border rounded-lg bg-white shadow-sm"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                              {functionCall.executionOrder}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                {functionDef && getCategoryIcon(functionDef.category)}
                                <span className="font-medium text-gray-900">
                                  {functionCall.name}
                                </span>
                                {getStatusIcon(functionCall.status)}
                              </div>
                              
                              <p className="text-sm text-gray-600 mb-2">
                                {functionCall.description}
                              </p>
                              
                              {Object.keys(functionCall.inputs).length > 0 && (
                                <div className="text-xs">
                                  <span className="font-medium text-gray-700">Inputs: </span>
                                  <span className="text-gray-500">
                                    {Object.entries(functionCall.inputs)
                                      .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
                                      .join(', ')}
                                  </span>
                                </div>
                              )}
                              
                              {functionCall.outputs && (
                                <div className="text-xs mt-1">
                                  <span className="font-medium text-gray-700">Outputs: </span>
                                  <span className="text-gray-500">
                                    {Object.entries(functionCall.outputs)
                                      .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
                                      .join(', ')}
                                  </span>
                                </div>
                              )}
                              
                              {functionCall.dependencies.length > 0 && (
                                <div className="text-xs mt-1">
                                  <span className="font-medium text-gray-700">Dependencies: </span>
                                  <span className="text-gray-500">
                                    {functionCall.dependencies.length} function(s)
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Function Library Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Available Functions</CardTitle>
            <CardDescription>
              Overview of the function library capabilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Object.entries(
                FUNCTION_LIBRARY.reduce((acc, func) => {
                  acc[func.category] = (acc[func.category] || 0) + 1;
                  return acc;
                }, {})
              ).map(([category, count]) => (
                <div key={category} className="text-center p-3 bg-white rounded-lg border">
                  <div className="flex justify-center mb-2">
                    {getCategoryIcon(category)}
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{count}</p>
                  <p className="text-xs text-gray-500 capitalize">
                    {category.replace('_', ' ')}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Total: <span className="font-semibold">{FUNCTION_LIBRARY.length}</span> functions available
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
