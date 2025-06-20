
// Data Retrieval Functions
export const FUNCTION_LIBRARY = [
  {
    id: 'get_invoices',
    name: 'Get Invoices',
    description: 'Retrieve invoices based on specified criteria',
    category: 'data_retrieval',
    inputs: [
      { name: 'startDate', type: 'string', required: false, description: 'Start date for filtering' },
      { name: 'endDate', type: 'string', required: false, description: 'End date for filtering' },
      { name: 'customerId', type: 'string', required: false, description: 'Filter by customer ID' },
      { name: 'status', type: 'string', required: false, description: 'Invoice status filter' }
    ],
    outputs: [
      { name: 'invoices', type: 'array', description: 'List of invoices' },
      { name: 'totalCount', type: 'number', description: 'Total number of invoices' }
    ]
  },
  
  {
    id: 'get_customers',
    name: 'Get Customers',
    description: 'Retrieve customer information',
    category: 'data_retrieval',
    inputs: [
      { name: 'searchTerm', type: 'string', required: false, description: 'Search by name or email' },
      { name: 'limit', type: 'number', required: false, description: 'Maximum number of results' },
      { name: 'offset', type: 'number', required: false, description: 'Pagination offset' }
    ],
    outputs: [
      { name: 'customers', type: 'array', description: 'List of customers' },
      { name: 'totalCount', type: 'number', description: 'Total number of customers' }
    ]
  },

  {
    id: 'get_orders',
    name: 'Get Orders',
    description: 'Retrieve order information',
    category: 'data_retrieval',
    inputs: [
      { name: 'customerId', type: 'string', required: false, description: 'Filter by customer' },
      { name: 'status', type: 'string', required: false, description: 'Order status filter' },
      { name: 'dateRange', type: 'object', required: false, description: 'Date range filter' }
    ],
    outputs: [
      { name: 'orders', type: 'array', description: 'List of orders' },
      { name: 'totalValue', type: 'number', description: 'Total value of orders' }
    ]
  },

  {
    id: 'get_products',
    name: 'Get Products',
    description: 'Retrieve product catalog information',
    category: 'data_retrieval',
    inputs: [
      { name: 'category', type: 'string', required: false, description: 'Product category' },
      { name: 'inStock', type: 'boolean', required: false, description: 'Filter by stock availability' },
      { name: 'priceRange', type: 'object', required: false, description: 'Price range filter' }
    ],
    outputs: [
      { name: 'products', type: 'array', description: 'List of products' },
      { name: 'categories', type: 'array', description: 'Available categories' }
    ]
  },

  {
    id: 'get_sales_data',
    name: 'Get Sales Data',
    description: 'Retrieve sales analytics and metrics',
    category: 'data_retrieval',
    inputs: [
      { name: 'period', type: 'string', required: true, description: 'Time period (daily, weekly, monthly)' },
      { name: 'startDate', type: 'string', required: false, description: 'Start date' },
      { name: 'endDate', type: 'string', required: false, description: 'End date' }
    ],
    outputs: [
      { name: 'salesData', type: 'array', description: 'Sales data points' },
      { name: 'totalRevenue', type: 'number', description: 'Total revenue' },
      { name: 'averageOrderValue', type: 'number', description: 'Average order value' }
    ]
  },

  // Data Analysis Functions
  {
    id: 'calculate_total',
    name: 'Calculate Total',
    description: 'Calculate sum of numerical values in dataset',
    category: 'data_analysis',
    inputs: [
      { name: 'data', type: 'array', required: true, description: 'Array of data to calculate' },
      { name: 'field', type: 'string', required: true, description: 'Field name to sum' }
    ],
    outputs: [
      { name: 'total', type: 'number', description: 'Calculated total' },
      { name: 'count', type: 'number', description: 'Number of items processed' }
    ]
  },

  {
    id: 'aggregate_data',
    name: 'Aggregate Data',
    description: 'Perform aggregation operations on dataset',
    category: 'data_analysis',
    inputs: [
      { name: 'data', type: 'array', required: true, description: 'Data to aggregate' },
      { name: 'groupBy', type: 'string', required: true, description: 'Field to group by' },
      { name: 'operation', type: 'string', required: true, description: 'Aggregation operation (sum, avg, count)' }
    ],
    outputs: [
      { name: 'aggregatedData', type: 'array', description: 'Aggregated results' },
      { name: 'summary', type: 'object', description: 'Summary statistics' }
    ]
  },

  {
    id: 'filter_data',
    name: 'Filter Data',
    description: 'Filter dataset based on specified criteria',
    category: 'data_analysis',
    inputs: [
      { name: 'data', type: 'array', required: true, description: 'Data to filter' },
      { name: 'criteria', type: 'object', required: true, description: 'Filter criteria' }
    ],
    outputs: [
      { name: 'filteredData', type: 'array', description: 'Filtered results' },
      { name: 'matchCount', type: 'number', description: 'Number of matching records' }
    ]
  },

  {
    id: 'sort_data',
    name: 'Sort Data',
    description: 'Sort dataset by specified field and order',
    category: 'data_analysis',
    inputs: [
      { name: 'data', type: 'array', required: true, description: 'Data to sort' },
      { name: 'sortBy', type: 'string', required: true, description: 'Field to sort by' },
      { name: 'order', type: 'string', required: false, description: 'Sort order (asc, desc)' }
    ],
    outputs: [
      { name: 'sortedData', type: 'array', description: 'Sorted data' }
    ]
  },

  // Communication Functions
  {
    id: 'send_email',
    name: 'Send Email',
    description: 'Send email notification or report',
    category: 'communication',
    inputs: [
      { name: 'to', type: 'string', required: true, description: 'Recipient email address' },
      { name: 'subject', type: 'string', required: true, description: 'Email subject' },
      { name: 'body', type: 'string', required: true, description: 'Email body content' },
      { name: 'attachments', type: 'array', required: false, description: 'File attachments' }
    ],
    outputs: [
      { name: 'messageId', type: 'string', description: 'Email message ID' },
      { name: 'status', type: 'string', description: 'Delivery status' }
    ]
  },

  {
    id: 'send_sms',
    name: 'Send SMS',
    description: 'Send SMS notification',
    category: 'communication',
    inputs: [
      { name: 'phoneNumber', type: 'string', required: true, description: 'Recipient phone number' },
      { name: 'message', type: 'string', required: true, description: 'SMS message content' }
    ],
    outputs: [
      { name: 'messageId', type: 'string', description: 'SMS message ID' },
      { name: 'status', type: 'string', description: 'Delivery status' }
    ]
  },

  {
    id: 'create_notification',
    name: 'Create Notification',
    description: 'Create system notification or alert',
    category: 'communication',
    inputs: [
      { name: 'title', type: 'string', required: true, description: 'Notification title' },
      { name: 'message', type: 'string', required: true, description: 'Notification message' },
      { name: 'priority', type: 'string', required: false, description: 'Priority level' },
      { name: 'recipients', type: 'array', required: true, description: 'List of recipients' }
    ],
    outputs: [
      { name: 'notificationId', type: 'string', description: 'Notification ID' },
      { name: 'deliveryStatus', type: 'object', description: 'Delivery status per recipient' }
    ]
  },

  // File Operations
  {
    id: 'create_file',
    name: 'Create File',
    description: 'Create and save file with specified content',
    category: 'file_operations',
    inputs: [
      { name: 'filename', type: 'string', required: true, description: 'File name' },
      { name: 'content', type: 'string', required: true, description: 'File content' },
      { name: 'format', type: 'string', required: false, description: 'File format (csv, json, txt)' }
    ],
    outputs: [
      { name: 'filePath', type: 'string', description: 'Created file path' },
      { name: 'fileSize', type: 'number', description: 'File size in bytes' }
    ]
  },

  {
    id: 'generate_csv',
    name: 'Generate CSV',
    description: 'Generate CSV file from data array',
    category: 'file_operations',
    inputs: [
      { name: 'data', type: 'array', required: true, description: 'Data to convert to CSV' },
      { name: 'filename', type: 'string', required: true, description: 'CSV filename' },
      { name: 'headers', type: 'array', required: false, description: 'Custom headers' }
    ],
    outputs: [
      { name: 'csvPath', type: 'string', description: 'Generated CSV file path' },
      { name: 'rowCount', type: 'number', description: 'Number of rows' }
    ]
  },

  {
    id: 'upload_file',
    name: 'Upload File',
    description: 'Upload file to specified destination',
    category: 'file_operations',
    inputs: [
      { name: 'filePath', type: 'string', required: true, description: 'Local file path' },
      { name: 'destination', type: 'string', required: true, description: 'Upload destination' },
      { name: 'metadata', type: 'object', required: false, description: 'File metadata' }
    ],
    outputs: [
      { name: 'uploadUrl', type: 'string', description: 'Uploaded file URL' },
      { name: 'uploadId', type: 'string', description: 'Upload reference ID' }
    ]
  },

  // Reporting Functions
  {
    id: 'generate_report',
    name: 'Generate Report',
    description: 'Generate comprehensive business report',
    category: 'reporting',
    inputs: [
      { name: 'reportType', type: 'string', required: true, description: 'Type of report' },
      { name: 'data', type: 'array', required: true, description: 'Report data' },
      { name: 'template', type: 'string', required: false, description: 'Report template' },
      { name: 'parameters', type: 'object', required: false, description: 'Report parameters' }
    ],
    outputs: [
      { name: 'reportPath', type: 'string', description: 'Generated report file path' },
      { name: 'reportId', type: 'string', description: 'Report reference ID' },
      { name: 'summary', type: 'object', description: 'Report summary' }
    ]
  },

  {
    id: 'create_chart',
    name: 'Create Chart',
    description: 'Create data visualization chart',
    category: 'reporting',
    inputs: [
      { name: 'data', type: 'array', required: true, description: 'Chart data' },
      { name: 'chartType', type: 'string', required: true, description: 'Chart type (bar, line, pie)' },
      { name: 'title', type: 'string', required: false, description: 'Chart title' },
      { name: 'options', type: 'object', required: false, description: 'Chart options' }
    ],
    outputs: [
      { name: 'chartPath', type: 'string', description: 'Generated chart file path' },
      { name: 'chartId', type: 'string', description: 'Chart reference ID' }
    ]
  },

  {
    id: 'calculate_metrics',
    name: 'Calculate Metrics',
    description: 'Calculate business performance metrics',
    category: 'reporting',
    inputs: [
      { name: 'data', type: 'array', required: true, description: 'Data for metrics calculation' },
      { name: 'metricTypes', type: 'array', required: true, description: 'Types of metrics to calculate' },
      { name: 'period', type: 'string', required: false, description: 'Time period for metrics' }
    ],
    outputs: [
      { name: 'metrics', type: 'object', description: 'Calculated metrics' },
      { name: 'trends', type: 'array', description: 'Trend analysis' }
    ]
  },

  // Database Operations
  {
    id: 'query_database',
    name: 'Query Database',
    description: 'Execute database query',
    category: 'database',
    inputs: [
      { name: 'query', type: 'string', required: true, description: 'SQL query string' },
      { name: 'parameters', type: 'array', required: false, description: 'Query parameters' }
    ],
    outputs: [
      { name: 'results', type: 'array', description: 'Query results' },
      { name: 'rowCount', type: 'number', description: 'Number of rows affected' }
    ]
  },

  {
    id: 'update_records',
    name: 'Update Records',
    description: 'Update database records',
    category: 'database',
    inputs: [
      { name: 'table', type: 'string', required: true, description: 'Target table' },
      { name: 'data', type: 'object', required: true, description: 'Update data' },
      { name: 'conditions', type: 'object', required: true, description: 'Update conditions' }
    ],
    outputs: [
      { name: 'updatedCount', type: 'number', description: 'Number of updated records' },
      { name: 'success', type: 'boolean', description: 'Operation success status' }
    ]
  },

  // Authentication & Security
  {
    id: 'authenticate_user',
    name: 'Authenticate User',
    description: 'Authenticate user credentials',
    category: 'security',
    inputs: [
      { name: 'username', type: 'string', required: true, description: 'Username' },
      { name: 'password', type: 'string', required: true, description: 'Password' }
    ],
    outputs: [
      { name: 'authenticated', type: 'boolean', description: 'Authentication status' },
      { name: 'token', type: 'string', description: 'Authentication token' },
      { name: 'userInfo', type: 'object', description: 'User information' }
    ]
  },

  {
    id: 'generate_token',
    name: 'Generate Token',
    description: 'Generate authentication or access token',
    category: 'security',
    inputs: [
      { name: 'userId', type: 'string', required: true, description: 'User ID' },
      { name: 'permissions', type: 'array', required: false, description: 'Token permissions' },
      { name: 'expiration', type: 'string', required: false, description: 'Token expiration' }
    ],
    outputs: [
      { name: 'token', type: 'string', description: 'Generated token' },
      { name: 'expiresAt', type: 'string', description: 'Token expiration date' }
    ]
  },

  // Validation Functions
  {
    id: 'validate_email',
    name: 'Validate Email',
    description: 'Validate email address format and deliverability',
    category: 'validation',
    inputs: [
      { name: 'email', type: 'string', required: true, description: 'Email address to validate' }
    ],
    outputs: [
      { name: 'isValid', type: 'boolean', description: 'Validation result' },
      { name: 'details', type: 'object', description: 'Validation details' }
    ]
  },

  {
    id: 'validate_data',
    name: 'Validate Data',
    description: 'Validate data against specified schema',
    category: 'validation',
    inputs: [
      { name: 'data', type: 'object', required: true, description: 'Data to validate' },
      { name: 'schema', type: 'object', required: true, description: 'Validation schema' }
    ],
    outputs: [
      { name: 'isValid', type: 'boolean', description: 'Validation result' },
      { name: 'errors', type: 'array', description: 'Validation errors' }
    ]
  },

  // Payment Processing
  {
    id: 'process_payment',
    name: 'Process Payment',
    description: 'Process payment transaction',
    category: 'payment',
    inputs: [
      { name: 'amount', type: 'number', required: true, description: 'Payment amount' },
      { name: 'currency', type: 'string', required: true, description: 'Currency code' },
      { name: 'paymentMethod', type: 'object', required: true, description: 'Payment method details' }
    ],
    outputs: [
      { name: 'transactionId', type: 'string', description: 'Transaction ID' },
      { name: 'status', type: 'string', description: 'Payment status' },
      { name: 'receipt', type: 'object', description: 'Payment receipt' }
    ]
  },

  {
    id: 'refund_payment',
    name: 'Refund Payment',
    description: 'Process payment refund',
    category: 'payment',
    inputs: [
      { name: 'transactionId', type: 'string', required: true, description: 'Original transaction ID' },
      { name: 'amount', type: 'number', required: false, description: 'Refund amount (partial refund)' },
      { name: 'reason', type: 'string', required: false, description: 'Refund reason' }
    ],
    outputs: [
      { name: 'refundId', type: 'string', description: 'Refund ID' },
      { name: 'status', type: 'string', description: 'Refund status' },
      { name: 'refundAmount', type: 'number', description: 'Actual refund amount' }
    ]
  },

  // Integration Functions
  {
    id: 'sync_with_crm',
    name: 'Sync with CRM',
    description: 'Synchronize data with CRM system',
    category: 'integration',
    inputs: [
      { name: 'data', type: 'array', required: true, description: 'Data to sync' },
      { name: 'crmSystem', type: 'string', required: true, description: 'Target CRM system' },
      { name: 'syncType', type: 'string', required: false, description: 'Sync type (full, incremental)' }
    ],
    outputs: [
      { name: 'syncId', type: 'string', description: 'Sync operation ID' },
      { name: 'recordsProcessed', type: 'number', description: 'Number of records processed' },
      { name: 'errors', type: 'array', description: 'Sync errors if any' }
    ]
  },

  {
    id: 'api_call',
    name: 'API Call',
    description: 'Make HTTP API call to external service',
    category: 'integration',
    inputs: [
      { name: 'url', type: 'string', required: true, description: 'API endpoint URL' },
      { name: 'method', type: 'string', required: true, description: 'HTTP method' },
      { name: 'headers', type: 'object', required: false, description: 'Request headers' },
      { name: 'body', type: 'object', required: false, description: 'Request body' }
    ],
    outputs: [
      { name: 'response', type: 'object', description: 'API response' },
      { name: 'statusCode', type: 'number', description: 'HTTP status code' }
    ]
  },

  // Utility Functions
  {
    id: 'format_date',
    name: 'Format Date',
    description: 'Format date according to specified format',
    category: 'utility',
    inputs: [
      { name: 'date', type: 'string', required: true, description: 'Date to format' },
      { name: 'format', type: 'string', required: true, description: 'Desired date format' }
    ],
    outputs: [
      { name: 'formattedDate', type: 'string', description: 'Formatted date string' }
    ]
  },

  {
    id: 'generate_uuid',
    name: 'Generate UUID',
    description: 'Generate unique identifier',
    category: 'utility',
    inputs: [],
    outputs: [
      { name: 'uuid', type: 'string', description: 'Generated UUID' }
    ]
  },

  {
    id: 'hash_string',
    name: 'Hash String',
    description: 'Generate hash of input string',
    category: 'utility',
    inputs: [
      { name: 'input', type: 'string', required: true, description: 'String to hash' },
      { name: 'algorithm', type: 'string', required: false, description: 'Hash algorithm' }
    ],
    outputs: [
      { name: 'hash', type: 'string', description: 'Generated hash' }
    ]
  },

  // Machine Learning Functions
  {
    id: 'predict_sales',
    name: 'Predict Sales',
    description: 'Predict future sales based on historical data',
    category: 'machine_learning',
    inputs: [
      { name: 'historicalData', type: 'array', required: true, description: 'Historical sales data' },
      { name: 'timeframe', type: 'string', required: true, description: 'Prediction timeframe' },
      { name: 'factors', type: 'array', required: false, description: 'Additional factors to consider' }
    ],
    outputs: [
      { name: 'predictions', type: 'array', description: 'Sales predictions' },
      { name: 'confidence', type: 'number', description: 'Prediction confidence score' },
      { name: 'trends', type: 'object', description: 'Identified trends' }
    ]
  },

  {
    id: 'classify_text',
    name: 'Classify Text',
    description: 'Classify text content into categories',
    category: 'machine_learning',
    inputs: [
      { name: 'text', type: 'string', required: true, description: 'Text to classify' },
      { name: 'categories', type: 'array', required: true, description: 'Possible categories' }
    ],
    outputs: [
      { name: 'category', type: 'string', description: 'Predicted category' },
      { name: 'confidence', type: 'number', description: 'Classification confidence' },
      { name: 'allScores', type: 'object', description: 'Scores for all categories' }
    ]
  },

  // Workflow Management
  {
    id: 'create_workflow',
    name: 'Create Workflow',
    description: 'Create automated workflow',
    category: 'workflow',
    inputs: [
      { name: 'name', type: 'string', required: true, description: 'Workflow name' },
      { name: 'steps', type: 'array', required: true, description: 'Workflow steps' },
      { name: 'triggers', type: 'array', required: true, description: 'Workflow triggers' }
    ],
    outputs: [
      { name: 'workflowId', type: 'string', description: 'Created workflow ID' },
      { name: 'status', type: 'string', description: 'Workflow status' }
    ]
  },

  {
    id: 'execute_workflow',
    name: 'Execute Workflow',
    description: 'Execute existing workflow',
    category: 'workflow',
    inputs: [
      { name: 'workflowId', type: 'string', required: true, description: 'Workflow ID to execute' },
      { name: 'parameters', type: 'object', required: false, description: 'Execution parameters' }
    ],
    outputs: [
      { name: 'executionId', type: 'string', description: 'Execution ID' },
      { name: 'status', type: 'string', description: 'Execution status' },
      { name: 'results', type: 'object', description: 'Execution results' }
    ]
  }
];
