
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Zap,
  Settings,
  Database,
  MessageSquare,
  FileText,
  BarChart3,
  Users,
  Shield,
  CreditCard,
  Package,
  Calendar,
  Bot
} from 'lucide-react';
import { aiPipelineEngine, ExecutionPlan, FunctionCall } from '@/lib/aiPipeline';
import { FUNCTION_LIBRARY, getFunctionsByCategory } from '@/lib/functionLibrary';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const [executionPlan, setExecutionPlan] = useState<ExecutionPlan | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionProgress, setExecutionProgress] = useState(0);
  const [aiInitialized, setAiInitialized] = useState(false);
  const { toast } = useToast();

  const categoryIcons = {
    'Data Retrieval': Database,
    'Data Processing': Zap,
    'Communication': MessageSquare,
    'File Operations': FileText,
    'Analytics': BarChart3,
    'Database': Database,
    'API': Settings,
    'Utility': Settings,
    'Authentication': Shield,
    'Payment': CreditCard,
    'Inventory': Package,
    'Scheduling': Calendar,
    'Machine Learning': Bot
  };

  const exampleQueries = [
    "Retrieve all invoices for March, calculate the total amount, and send a summary email to admin@company.com",
    "Get customer data, analyze sales trends, and create a quarterly report with charts",
    "Find all pending orders, update inventory levels, and send notifications to customers",
    "Generate a monthly sales report, create visualizations, and schedule it for automatic delivery",
    "Authenticate user, retrieve their order history, and send personalized recommendations"
  ];

  useEffect(() => {
    initializeAI();
  }, []);

  const initializeAI = async () => {
    try {
      await aiPipelineEngine.initialize();
      setAiInitialized(true);
      toast({
        title: "AI Engine Ready",
        description: "The AI pipeline engine has been successfully initialized.",
      });
    } catch (error) {
      console.error('Failed to initialize AI:', error);
      toast({
        title: "AI Initialization Failed",
        description: "Using fallback rule-based processing.",
        variant: "destructive",
      });
      setAiInitialized(true); // Allow fallback processing
    }
  };

  const handleProcessQuery = async () => {
    if (!query.trim()) {
      toast({
        title: "Query Required",
        description: "Please enter a query to process.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setExecutionPlan(null);
    setExecutionProgress(0);

    try {
      const plan = await aiPipelineEngine.processQuery(query);
      setExecutionPlan(plan);
      
      toast({
        title: "Query Processed",
        description: `Generated execution plan with ${plan.functionCalls.length} function calls.`,
      });
    } catch (error) {
      console.error('Query processing failed:', error);
      toast({
        title: "Processing Failed",
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

    try {
      // Simulate execution with progress updates
      const totalSteps = executionPlan.functionCalls.length;
      
      for (let i = 0; i < totalSteps; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setExecutionProgress(((i + 1) / totalSteps) * 100);
      }

      const completedPlan = await aiPipelineEngine.simulateExecution(executionPlan);
      setExecutionPlan(completedPlan);
      
      toast({
        title: "Execution Completed",
        description: "All function calls have been executed successfully.",
      });
    } catch (error) {
      console.error('Execution failed:', error);
      toast({
        title: "Execution Failed",
        description: "Failed to execute the plan. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExecuting(false);
      setExecutionProgress(0);
    }
  };

  const handleReset = () => {
    setQuery('');
    setExecutionPlan(null);
    setExecutionProgress(0);
    setIsExecuting(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'running': return 'bg-blue-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'running': return Clock;
      case 'failed': return AlertCircle;
      default: return Clock;
    }
  };

  const functionsByCategory = getFunctionsByCategory();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Function Pipeline
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI-powered query processing with intelligent function sequencing and execution planning
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Badge variant={aiInitialized ? "default" : "secondary"}>
              {aiInitialized ? "AI Engine Ready" : "Initializing..."}
            </Badge>
            <Badge variant="outline">{FUNCTION_LIBRARY.length} Functions Available</Badge>
          </div>
        </div>

        <Tabs defaultValue="pipeline" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pipeline">AI Pipeline</TabsTrigger>
            <TabsTrigger value="functions">Function Library</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="pipeline" className="space-y-6">
            {/* Query Input */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Query Input</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter your natural language query..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1"
                    onKeyDown={(e) => e.key === 'Enter' && handleProcessQuery()}
                  />
                  <Button 
                    onClick={handleProcessQuery} 
                    disabled={isProcessing || !aiInitialized}
                    className="bg-gradient-to-r from-purple-500 to-blue-500"
                  >
                    {isProcessing ? <Clock className="h-4 w-4 animate-spin" /> : <Brain className="h-4 w-4" />}
                    Process
                  </Button>
                </div>
                
                {executionPlan && (
                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleExecutePlan} 
                      disabled={isExecuting || executionPlan.status === 'completed'}
                      variant="outline"
                      className="flex-1"
                    >
                      {isExecuting ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      {isExecuting ? 'Executing...' : 'Execute Plan'}
                    </Button>
                    <Button onClick={handleReset} variant="outline">
                      <RotateCcw className="h-4 w-4" />
                      Reset
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Execution Plan */}
            {executionPlan && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Plan Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Execution Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Status</span>
                        <Badge variant={executionPlan.status === 'completed' ? 'default' : 'secondary'}>
                          {executionPlan.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Functions</span>
                        <span className="text-sm">{executionPlan.functionCalls.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Complexity</span>
                        <Badge variant="outline">{executionPlan.analysis.complexity}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Estimated Time</span>
                        <span className="text-sm">{Math.round(executionPlan.estimatedDuration / 1000)}s</span>
                      </div>
                    </div>
                    
                    {isExecuting && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm">{Math.round(executionProgress)}%</span>
                        </div>
                        <Progress value={executionProgress} className="w-full" />
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Query Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Query Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium">Intent:</span>
                        <Badge variant="outline" className="ml-2">{executionPlan.analysis.intent}</Badge>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Entities:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {executionPlan.analysis.entities.map((entity, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {entity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Confidence:</span>
                        <span className="ml-2 text-sm">{Math.round(executionPlan.analysis.confidence * 100)}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Function Sequence */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Function Sequence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-64">
                      <div className="space-y-2">
                        {executionPlan.functionCalls
                          .sort((a, b) => a.executionOrder - b.executionOrder)
                          .map((call) => {
                            const StatusIcon = getStatusIcon(call.status);
                            return (
                              <div key={call.id} className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50">
                                <div className="flex items-center space-x-2 flex-1">
                                  <span className="text-xs font-mono bg-gray-200 px-2 py-1 rounded">
                                    {call.executionOrder}
                                  </span>
                                  <StatusIcon className={`h-4 w-4 ${getStatusColor(call.status)} text-white rounded-full p-0.5`} />
                                  <span className="text-sm font-medium">{call.name}</span>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {call.status}
                                </Badge>
                              </div>
                            );
                        })}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Detailed Function Calls */}
            {executionPlan && (
              <Card>
                <CardHeader>
                  <CardTitle>Function Call Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {executionPlan.functionCalls
                        .sort((a, b) => a.executionOrder - b.executionOrder)
                        .map((call) => (
                          <div key={call.id} className="border rounded-lg p-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{call.name}</h4>
                              <Badge variant={call.status === 'completed' ? 'default' : 'secondary'}>
                                {call.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">{call.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium mb-2">Inputs:</h5>
                                <pre className="text-xs bg-gray-50 p-2 rounded overflow-x-auto">
                                  {JSON.stringify(call.inputs, null, 2)}
                                </pre>
                              </div>
                              {call.outputs && (
                                <div>
                                  <h5 className="text-sm font-medium mb-2">Outputs:</h5>
                                  <pre className="text-xs bg-green-50 p-2 rounded overflow-x-auto">
                                    {JSON.stringify(call.outputs, null, 2)}
                                  </pre>
                                </div>
                              )}
                            </div>
                            
                            {call.dependencies.length > 0 && (
                              <div>
                                <h5 className="text-sm font-medium mb-1">Dependencies:</h5>
                                <div className="flex flex-wrap gap-1">
                                  {call.dependencies.map((depId) => (
                                    <Badge key={depId} variant="outline" className="text-xs">
                                      {depId.slice(0, 8)}...
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="functions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(functionsByCategory).map(([category, functions]) => {
                const IconComponent = categoryIcons[category] || Settings;
                return (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <IconComponent className="h-5 w-5" />
                        <span>{category}</span>
                        <Badge variant="secondary">{functions.length}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-64">
                        <div className="space-y-2">
                          {functions.map((func) => (
                            <div key={func.id} className="p-2 rounded-lg bg-gray-50 space-y-1">
                              <div className="font-medium text-sm">{func.name}</div>
                              <div className="text-xs text-gray-600">{func.description}</div>
                              <div className="flex items-center space-x-2 text-xs">
                                <Badge variant="outline" className="text-xs">
                                  {func.inputs.length} inputs
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {func.outputs.length} outputs
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Example Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exampleQueries.map((example, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-2">
                      <p className="text-sm">{example}</p>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setQuery(example)}
                        className="w-full"
                      >
                        Use This Query
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
