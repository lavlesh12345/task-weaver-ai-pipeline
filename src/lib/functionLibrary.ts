
export interface FunctionDefinition {
  id: string;
  name: string;
  description: string;
  category: string;
  inputs: {
    name: string;
    type: string;
    description: string;
    required: boolean;
  }[];
  outputs: {
    name: string;
    type: string;
    description: string;
  }[];
  example?: string;
}

export const FUNCTION_LIBRARY: FunctionDefinition[] = [
  // Data Retrieval Functions
  {
    id: "get_invoices",
    name: "Get Invoices",
    description: "Retrieve invoices based on date range or filters",
    category: "Data Retrieval",
    inputs: [
      { name: "startDate", type: "string", description: "Start date (YYYY-MM-DD)", required: false },
      { name: "endDate", type: "string", description: "End date (YYYY-MM-DD)", required: false },
      { name: "status", type: "string", description: "Invoice status filter", required: false }
    ],
    outputs: [
      { name: "invoices", type: "array", description: "List of invoice objects" }
    ],
    example: "Retrieve all invoices for March 2024"
  },
  {
    id: "get_customers",
    name: "Get Customers",
    description: "Retrieve customer information",
    category: "Data Retrieval",
    inputs: [
      { name: "customerId", type: "string", description: "Specific customer ID", required: false },
      { name: "name", type: "string", description: "Customer name filter", required: false }
    ],
    outputs: [
      { name: "customers", type: "array", description: "List of customer objects" }
    ]
  },
  {
    id: "get_products",
    name: "Get Products",
    description: "Retrieve product catalog information",
    category: "Data Retrieval",
    inputs: [
      { name: "category", type: "string", description: "Product category", required: false },
      { name: "inStock", type: "boolean", description: "Filter by stock availability", required: false }
    ],
    outputs: [
      { name: "products", type: "array", description: "List of product objects" }
    ]
  },
  {
    id: "get_orders",
    name: "Get Orders",
    description: "Retrieve order information",
    category: "Data Retrieval",
    inputs: [
      { name: "orderId", type: "string", description: "Specific order ID", required: false },
      { name: "customerId", type: "string", description: "Customer ID filter", required: false },
      { name: "status", type: "string", description: "Order status", required: false }
    ],
    outputs: [
      { name: "orders", type: "array", description: "List of order objects" }
    ]
  },
  {
    id: "get_sales_data",
    name: "Get Sales Data",
    description: "Retrieve sales analytics data",
    category: "Data Retrieval",
    inputs: [
      { name: "period", type: "string", description: "Time period (daily/weekly/monthly)", required: true },
      { name: "startDate", type: "string", description: "Start date", required: false }
    ],
    outputs: [
      { name: "salesData", type: "object", description: "Sales analytics object" }
    ]
  },

  // Data Processing Functions
  {
    id: "calculate_total",
    name: "Calculate Total",
    description: "Sum up numerical values from a dataset",
    category: "Data Processing",
    inputs: [
      { name: "data", type: "array", description: "Array of objects containing numerical values", required: true },
      { name: "field", type: "string", description: "Field name to sum", required: true }
    ],
    outputs: [
      { name: "total", type: "number", description: "Calculated total value" }
    ]
  },
  {
    id: "filter_data",
    name: "Filter Data",
    description: "Filter dataset based on criteria",
    category: "Data Processing",
    inputs: [
      { name: "data", type: "array", description: "Input dataset", required: true },
      { name: "criteria", type: "object", description: "Filter criteria", required: true }
    ],
    outputs: [
      { name: "filteredData", type: "array", description: "Filtered dataset" }
    ]
  },
  {
    id: "group_by",
    name: "Group By",
    description: "Group data by specific field",
    category: "Data Processing",
    inputs: [
      { name: "data", type: "array", description: "Input dataset", required: true },
      { name: "field", type: "string", description: "Field to group by", required: true }
    ],
    outputs: [
      { name: "groupedData", type: "object", description: "Grouped data object" }
    ]
  },
  {
    id: "sort_data",
    name: "Sort Data",
    description: "Sort dataset by specified field",
    category: "Data Processing",
    inputs: [
      { name: "data", type: "array", description: "Input dataset", required: true },
      { name: "field", type: "string", description: "Field to sort by", required: true },
      { name: "order", type: "string", description: "Sort order (asc/desc)", required: false }
    ],
    outputs: [
      { name: "sortedData", type: "array", description: "Sorted dataset" }
    ]
  },
  {
    id: "aggregate_data",
    name: "Aggregate Data",
    description: "Perform aggregation operations on data",
    category: "Data Processing",
    inputs: [
      { name: "data", type: "array", description: "Input dataset", required: true },
      { name: "operation", type: "string", description: "Aggregation operation (sum/avg/count/min/max)", required: true },
      { name: "field", type: "string", description: "Field to aggregate", required: true }
    ],
    outputs: [
      { name: "result", type: "number", description: "Aggregated result" }
    ]
  },

  // Communication Functions
  {
    id: "send_email",
    name: "Send Email",
    description: "Send email with content",
    category: "Communication",
    inputs: [
      { name: "to", type: "string", description: "Recipient email address", required: true },
      { name: "subject", type: "string", description: "Email subject", required: true },
      { name: "body", type: "string", description: "Email content", required: true },
      { name: "attachments", type: "array", description: "File attachments", required: false }
    ],
    outputs: [
      { name: "messageId", type: "string", description: "Sent message ID" }
    ]
  },
  {
    id: "send_sms",
    name: "Send SMS",
    description: "Send SMS message",
    category: "Communication",
    inputs: [
      { name: "to", type: "string", description: "Phone number", required: true },
      { name: "message", type: "string", description: "SMS content", required: true }
    ],
    outputs: [
      { name: "messageId", type: "string", description: "Message ID" }
    ]
  },
  {
    id: "create_notification",
    name: "Create Notification",
    description: "Create system notification",
    category: "Communication",
    inputs: [
      { name: "title", type: "string", description: "Notification title", required: true },
      { name: "message", type: "string", description: "Notification content", required: true },
      { name: "priority", type: "string", description: "Priority level", required: false }
    ],
    outputs: [
      { name: "notificationId", type: "string", description: "Created notification ID" }
    ]
  },
  {
    id: "send_slack_message",
    name: "Send Slack Message",
    description: "Send message to Slack channel",
    category: "Communication",
    inputs: [
      { name: "channel", type: "string", description: "Slack channel", required: true },
      { name: "message", type: "string", description: "Message content", required: true }
    ],
    outputs: [
      { name: "timestamp", type: "string", description: "Message timestamp" }
    ]
  },

  // File Operations
  {
    id: "create_file",
    name: "Create File",
    description: "Create a new file with content",
    category: "File Operations",
    inputs: [
      { name: "filename", type: "string", description: "File name", required: true },
      { name: "content", type: "string", description: "File content", required: true },
      { name: "format", type: "string", description: "File format (csv/json/txt/pdf)", required: false }
    ],
    outputs: [
      { name: "fileId", type: "string", description: "Created file ID" }
    ]
  },
  {
    id: "read_file",
    name: "Read File",
    description: "Read content from file",
    category: "File Operations",
    inputs: [
      { name: "fileId", type: "string", description: "File ID to read", required: true }
    ],
    outputs: [
      { name: "content", type: "string", description: "File content" }
    ]
  },
  {
    id: "delete_file",
    name: "Delete File",
    description: "Delete a file",
    category: "File Operations",
    inputs: [
      { name: "fileId", type: "string", description: "File ID to delete", required: true }
    ],
    outputs: [
      { name: "success", type: "boolean", description: "Deletion status" }
    ]
  },
  {
    id: "upload_file",
    name: "Upload File",
    description: "Upload file to storage",
    category: "File Operations",
    inputs: [
      { name: "file", type: "blob", description: "File to upload", required: true },
      { name: "destination", type: "string", description: "Upload destination", required: false }
    ],
    outputs: [
      { name: "fileUrl", type: "string", description: "Uploaded file URL" }
    ]
  },

  // Analytics Functions
  {
    id: "generate_report",
    name: "Generate Report",
    description: "Generate analytical report",
    category: "Analytics",
    inputs: [
      { name: "data", type: "array", description: "Data for report", required: true },
      { name: "reportType", type: "string", description: "Type of report", required: true },
      { name: "format", type: "string", description: "Output format", required: false }
    ],
    outputs: [
      { name: "reportId", type: "string", description: "Generated report ID" }
    ]
  },
  {
    id: "create_chart",
    name: "Create Chart",
    description: "Create data visualization chart",
    category: "Analytics",
    inputs: [
      { name: "data", type: "array", description: "Chart data", required: true },
      { name: "chartType", type: "string", description: "Chart type (bar/line/pie)", required: true },
      { name: "title", type: "string", description: "Chart title", required: false }
    ],
    outputs: [
      { name: "chartId", type: "string", description: "Created chart ID" }
    ]
  },
  {
    id: "calculate_metrics",
    name: "Calculate Metrics",
    description: "Calculate business metrics",
    category: "Analytics",
    inputs: [
      { name: "data", type: "array", description: "Input data", required: true },
      { name: "metrics", type: "array", description: "Metrics to calculate", required: true }
    ],
    outputs: [
      { name: "results", type: "object", description: "Calculated metrics" }
    ]
  },
  {
    id: "trend_analysis",
    name: "Trend Analysis",
    description: "Analyze data trends over time",
    category: "Analytics",
    inputs: [
      { name: "data", type: "array", description: "Time series data", required: true },
      { name: "period", type: "string", description: "Analysis period", required: true }
    ],
    outputs: [
      { name: "trends", type: "object", description: "Trend analysis results" }
    ]
  },

  // Database Operations
  {
    id: "create_record",
    name: "Create Record",
    description: "Create new database record",
    category: "Database",
    inputs: [
      { name: "table", type: "string", description: "Database table", required: true },
      { name: "data", type: "object", description: "Record data", required: true }
    ],
    outputs: [
      { name: "recordId", type: "string", description: "Created record ID" }
    ]
  },
  {
    id: "update_record",
    name: "Update Record",
    description: "Update existing database record",
    category: "Database",
    inputs: [
      { name: "table", type: "string", description: "Database table", required: true },
      { name: "recordId", type: "string", description: "Record ID to update", required: true },
      { name: "data", type: "object", description: "Updated data", required: true }
    ],
    outputs: [
      { name: "success", type: "boolean", description: "Update status" }
    ]
  },
  {
    id: "delete_record",
    name: "Delete Record",
    description: "Delete database record",
    category: "Database",
    inputs: [
      { name: "table", type: "string", description: "Database table", required: true },
      { name: "recordId", type: "string", description: "Record ID to delete", required: true }
    ],
    outputs: [
      { name: "success", type: "boolean", description: "Deletion status" }
    ]
  },
  {
    id: "query_database",
    name: "Query Database",
    description: "Execute database query",
    category: "Database",
    inputs: [
      { name: "query", type: "string", description: "SQL query", required: true },
      { name: "parameters", type: "object", description: "Query parameters", required: false }
    ],
    outputs: [
      { name: "results", type: "array", description: "Query results" }
    ]
  },

  // API Functions
  {
    id: "http_get",
    name: "HTTP GET",
    description: "Make HTTP GET request",
    category: "API",
    inputs: [
      { name: "url", type: "string", description: "Request URL", required: true },
      { name: "headers", type: "object", description: "Request headers", required: false }
    ],
    outputs: [
      { name: "response", type: "object", description: "HTTP response" }
    ]
  },
  {
    id: "http_post",
    name: "HTTP POST",
    description: "Make HTTP POST request",
    category: "API",
    inputs: [
      { name: "url", type: "string", description: "Request URL", required: true },
      { name: "data", type: "object", description: "Request body", required: true },
      { name: "headers", type: "object", description: "Request headers", required: false }
    ],
    outputs: [
      { name: "response", type: "object", description: "HTTP response" }
    ]
  },
  {
    id: "webhook_trigger",
    name: "Trigger Webhook",
    description: "Trigger external webhook",
    category: "API",
    inputs: [
      { name: "webhookUrl", type: "string", description: "Webhook URL", required: true },
      { name: "payload", type: "object", description: "Webhook payload", required: true }
    ],
    outputs: [
      { name: "response", type: "object", description: "Webhook response" }
    ]
  },

  // Utility Functions
  {
    id: "format_date",
    name: "Format Date",
    description: "Format date string to specific format",
    category: "Utility",
    inputs: [
      { name: "date", type: "string", description: "Input date", required: true },
      { name: "format", type: "string", description: "Output format", required: true }
    ],
    outputs: [
      { name: "formattedDate", type: "string", description: "Formatted date string" }
    ]
  },
  {
    id: "validate_email",
    name: "Validate Email",
    description: "Validate email address format",
    category: "Utility",
    inputs: [
      { name: "email", type: "string", description: "Email to validate", required: true }
    ],
    outputs: [
      { name: "isValid", type: "boolean", description: "Validation result" }
    ]
  },
  {
    id: "generate_uuid",
    name: "Generate UUID",
    description: "Generate unique identifier",
    category: "Utility",
    inputs: [],
    outputs: [
      { name: "uuid", type: "string", description: "Generated UUID" }
    ]
  },
  {
    id: "hash_string",
    name: "Hash String",
    description: "Generate hash of input string",
    category: "Utility",
    inputs: [
      { name: "input", type: "string", description: "String to hash", required: true },
      { name: "algorithm", type: "string", description: "Hash algorithm", required: false }
    ],
    outputs: [
      { name: "hash", type: "string", description: "Generated hash" }
    ]
  },
  {
    id: "sleep",
    name: "Sleep",
    description: "Add delay in execution",
    category: "Utility",
    inputs: [
      { name: "duration", type: "number", description: "Sleep duration in milliseconds", required: true }
    ],
    outputs: [
      { name: "completed", type: "boolean", description: "Sleep completion status" }
    ]
  },

  // Authentication Functions
  {
    id: "authenticate_user",
    name: "Authenticate User",
    description: "Authenticate user credentials",
    category: "Authentication",
    inputs: [
      { name: "username", type: "string", description: "Username", required: true },
      { name: "password", type: "string", description: "Password", required: true }
    ],
    outputs: [
      { name: "token", type: "string", description: "Authentication token" },
      { name: "user", type: "object", description: "User information" }
    ]
  },
  {
    id: "refresh_token",
    name: "Refresh Token",
    description: "Refresh authentication token",
    category: "Authentication",
    inputs: [
      { name: "refreshToken", type: "string", description: "Refresh token", required: true }
    ],
    outputs: [
      { name: "newToken", type: "string", description: "New authentication token" }
    ]
  },
  {
    id: "logout_user",
    name: "Logout User",
    description: "Logout user and invalidate session",
    category: "Authentication",
    inputs: [
      { name: "token", type: "string", description: "Authentication token", required: true }
    ],
    outputs: [
      { name: "success", type: "boolean", description: "Logout status" }
    ]
  },

  // Payment Functions
  {
    id: "process_payment",
    name: "Process Payment",
    description: "Process payment transaction",
    category: "Payment",
    inputs: [
      { name: "amount", type: "number", description: "Payment amount", required: true },
      { name: "currency", type: "string", description: "Currency code", required: true },
      { name: "paymentMethod", type: "string", description: "Payment method", required: true }
    ],
    outputs: [
      { name: "transactionId", type: "string", description: "Transaction ID" },
      { name: "status", type: "string", description: "Transaction status" }
    ]
  },
  {
    id: "refund_payment",
    name: "Refund Payment",
    description: "Process payment refund",
    category: "Payment",
    inputs: [
      { name: "transactionId", type: "string", description: "Original transaction ID", required: true },
      { name: "amount", type: "number", description: "Refund amount", required: false }
    ],
    outputs: [
      { name: "refundId", type: "string", description: "Refund ID" },
      { name: "status", type: "string", description: "Refund status" }
    ]
  },

  // Inventory Functions
  {
    id: "check_inventory",
    name: "Check Inventory",
    description: "Check product inventory levels",
    category: "Inventory",
    inputs: [
      { name: "productId", type: "string", description: "Product ID", required: true }
    ],
    outputs: [
      { name: "quantity", type: "number", description: "Available quantity" },
      { name: "status", type: "string", description: "Stock status" }
    ]
  },
  {
    id: "update_inventory",
    name: "Update Inventory",
    description: "Update product inventory",
    category: "Inventory",
    inputs: [
      { name: "productId", type: "string", description: "Product ID", required: true },
      { name: "quantity", type: "number", description: "New quantity", required: true },
      { name: "operation", type: "string", description: "Operation type (set/add/subtract)", required: false }
    ],
    outputs: [
      { name: "newQuantity", type: "number", description: "Updated quantity" }
    ]
  },

  // Scheduling Functions
  {
    id: "schedule_task",
    name: "Schedule Task",
    description: "Schedule a task for future execution",
    category: "Scheduling",
    inputs: [
      { name: "taskId", type: "string", description: "Task identifier", required: true },
      { name: "executeAt", type: "string", description: "Execution datetime", required: true },
      { name: "parameters", type: "object", description: "Task parameters", required: false }
    ],
    outputs: [
      { name: "scheduleId", type: "string", description: "Schedule ID" }
    ]
  },
  {
    id: "cancel_scheduled_task",
    name: "Cancel Scheduled Task",
    description: "Cancel a scheduled task",
    category: "Scheduling",
    inputs: [
      { name: "scheduleId", type: "string", description: "Schedule ID to cancel", required: true }
    ],
    outputs: [
      { name: "success", type: "boolean", description: "Cancellation status" }
    ]
  },

  // Machine Learning Functions
  {
    id: "predict_value",
    name: "Predict Value",
    description: "Make prediction using ML model",
    category: "Machine Learning",
    inputs: [
      { name: "modelId", type: "string", description: "ML model ID", required: true },
      { name: "inputData", type: "object", description: "Input features", required: true }
    ],
    outputs: [
      { name: "prediction", type: "any", description: "Model prediction" },
      { name: "confidence", type: "number", description: "Prediction confidence" }
    ]
  },
  {
    id: "classify_text",
    name: "Classify Text",
    description: "Classify text using NLP model",
    category: "Machine Learning",
    inputs: [
      { name: "text", type: "string", description: "Text to classify", required: true },
      { name: "categories", type: "array", description: "Classification categories", required: false }
    ],
    outputs: [
      { name: "category", type: "string", description: "Predicted category" },
      { name: "confidence", type: "number", description: "Classification confidence" }
    ]
  }
];

export function getFunctionsByCategory(): Record<string, FunctionDefinition[]> {
  return FUNCTION_LIBRARY.reduce((acc, func) => {
    if (!acc[func.category]) {
      acc[func.category] = [];
    }
    acc[func.category].push(func);
    return acc;
  }, {} as Record<string, FunctionDefinition[]>);
}

export function getFunctionById(id: string): FunctionDefinition | undefined {
  return FUNCTION_LIBRARY.find(func => func.id === id);
}
