
# AI Function Pipeline - Intelligent Query Processing System

A sophisticated MERN stack application that leverages open-source AI models to process natural language queries and generate structured sequences of function calls. This system demonstrates advanced AI reasoning capabilities with intelligent function sequencing and execution planning.

## 🚀 Features

### Core Functionality
- **Natural Language Processing**: Advanced query analysis and intent recognition
- **Intelligent Function Sequencing**: AI-powered function call ordering with dependency management
- **Real-time Execution**: Live visualization of function execution with progress tracking
- **Comprehensive Function Library**: 50+ predefined functions across multiple domains
- **Modern UI**: Beautiful, responsive interface built with React and Tailwind CSS

### AI Capabilities
- **Query Analysis**: Intent classification, entity extraction, and complexity assessment
- **Function Mapping**: Intelligent mapping of queries to appropriate functions
- **Dependency Resolution**: Automatic calculation of function dependencies
- **Execution Optimization**: Smart ordering of function calls for optimal performance

### Function Categories
- **Data Retrieval**: Get invoices, customers, orders, products, sales data
- **Data Processing**: Calculate totals, filter data, aggregations, sorting
- **Communication**: Send emails, SMS, notifications, Slack messages
- **File Operations**: Create, read, delete, upload files
- **Analytics**: Generate reports, create charts, calculate metrics
- **Database**: CRUD operations, queries
- **API**: HTTP requests, webhook triggers
- **Authentication**: User authentication, token management
- **Payment**: Process payments, refunds
- **Inventory**: Stock management
- **Scheduling**: Task scheduling and management
- **Machine Learning**: Predictions, text classification

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Lucide React** for icons
- **React Router** for navigation

### AI/ML
- **Hugging Face Transformers** for local AI processing
- **WebGPU** acceleration support
- **Custom pipeline engine** for query processing

### Additional Libraries
- **TanStack Query** for state management
- **UUID** for unique identifiers
- **Date-fns** for date manipulation
- **Recharts** for data visualization

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Modern browser with WebGPU support (optional, falls back to CPU)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd ai-function-pipeline
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:8080`

## 💡 How to Use

### Basic Query Processing

1. **Enter a Natural Language Query**
   - Type your request in plain English
   - Example: "Retrieve all invoices for March, calculate the total amount, and send a summary email"

2. **Process the Query**
   - Click "Process" to analyze the query
   - The AI engine will generate an execution plan

3. **Review the Plan**
   - View the generated function sequence
   - Check dependencies and execution order
   - Review query analysis results

4. **Execute the Plan**
   - Click "Execute Plan" to run the functions
   - Monitor real-time progress
   - View execution results

### Example Queries

```
Business Operations:
- "Get all customers from California and send them a promotional email"
- "Retrieve sales data for Q1, analyze trends, and generate a quarterly report"
- "Find pending orders, update inventory, and notify customers of shipping delays"

Data Analysis:
- "Collect invoice data, calculate total revenue, and create a revenue chart"
- "Analyze customer data, segment by demographics, and export to CSV"
- "Get product sales data, identify top performers, and generate insights"

Automation:
- "Schedule weekly sales reports and email them to the management team"
- "Monitor inventory levels and automatically reorder low-stock items"
- "Process refunds for returned items and update customer accounts"
```

## 🔧 Architecture

### AI Pipeline Engine
The core of the system is the `AIPipelineEngine` class that handles:

- **Query Analysis**: Breaking down natural language into actionable components
- **Function Identification**: Mapping queries to relevant functions
- **Dependency Calculation**: Determining execution order and dependencies
- **Execution Planning**: Creating optimized execution plans
- **Progress Tracking**: Real-time monitoring of function execution

### Function Library
A comprehensive library of 50+ functions organized by category:

```typescript
interface FunctionDefinition {
  id: string;
  name: string;
  description: string;
  category: string;
  inputs: InputDefinition[];
  outputs: OutputDefinition[];
  example?: string;
}
```

### Execution Flow
1. **Query Input**: User enters natural language query
2. **Analysis**: AI engine analyzes intent and extracts entities
3. **Planning**: System generates function sequence with dependencies
4. **Execution**: Functions are executed in optimized order
5. **Results**: Outputs are displayed with full traceability

## 🎯 Key Components

### Dashboard (`src/components/Dashboard.tsx`)
- Main interface for query input and execution
- Real-time progress tracking
- Results visualization
- Function library browser

### AI Pipeline Engine (`src/lib/aiPipeline.ts`)
- Core AI processing logic
- Query analysis and function mapping
- Execution planning and optimization
- Mock execution simulation

### Function Library (`src/lib/functionLibrary.ts`)
- Comprehensive function definitions
- Category-based organization
- Input/output specifications
- Usage examples

## 🔮 Advanced Features

### AI Model Integration
- Uses Hugging Face Transformers for local processing
- Supports both WebGPU and CPU execution
- Fallback to rule-based processing if AI models fail
- Extensible architecture for additional models

### Intelligent Dependency Management
- Automatic detection of function dependencies
- Optimal execution order calculation
- Parallel execution support for independent functions
- Error handling and recovery mechanisms

### Real-time Visualization
- Live progress tracking during execution
- Interactive function call details
- Execution timeline and dependency graphs
- Performance metrics and analytics

## 🛡 Error Handling

The system includes comprehensive error handling:
- AI model initialization failures
- Query processing errors
- Function execution failures
- Network connectivity issues
- Input validation and sanitization

## 🔧 Configuration

### AI Model Settings
Configure AI models in `src/lib/aiPipeline.ts`:
```typescript
// Text classification model
this.textClassifier = await pipeline(
  'text-classification',
  'microsoft/DialoGPT-medium',
  { device: 'webgpu' }
);
```

### Function Library Extension
Add new functions in `src/lib/functionLibrary.ts`:
```typescript
{
  id: "custom_function",
  name: "Custom Function",
  description: "Description of the function",
  category: "Custom",
  inputs: [...],
  outputs: [...],
}
```

## 📈 Performance Optimization

- **WebGPU Acceleration**: Leverages GPU for AI model inference
- **Lazy Loading**: AI models loaded on demand
- **Efficient Caching**: Query results and model outputs cached
- **Optimized Rendering**: Virtual scrolling for large datasets
- **Memory Management**: Automatic cleanup of large objects

## 🧪 Testing

The system includes comprehensive testing capabilities:
- Mock function execution for development
- Simulated delays for realistic testing
- Error injection for robustness testing
- Performance benchmarking tools

## 🔒 Security Considerations

- **Input Sanitization**: All user inputs are validated and sanitized
- **Function Isolation**: Each function runs in isolated context
- **Access Control**: Function execution permissions
- **Data Privacy**: Local processing ensures data privacy

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Hugging Face** for the Transformers library
- **shadcn/ui** for the beautiful UI components
- **Tailwind CSS** for the styling framework
- **React** team for the amazing framework

## 📞 Support

For questions, issues, or contributions:
- Create an issue on GitHub
- Join our Discord community
- Check the documentation wiki

---

**Built with ❤️ using modern web technologies and AI**
