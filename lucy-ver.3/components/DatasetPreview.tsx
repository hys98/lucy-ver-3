import React, { useState } from 'react';
import { FileText, Code, Table, Check, Copy, Download, Terminal, Database, Link as LinkIcon, Sparkles } from 'lucide-react';

type DatasetType = '10k' | '8k' | '13f';
type ViewMode = 'json' | 'table';

const datasets = {
  '10k': {
    label: 'Form 10-K (Annual)',
    desc: 'Item 7. Management’s Discussion',
    source: {
      type: 'text_table',
      content: [
        "Net sales for the quarter were $89.5 billion, down 1% from last year.",
        "Gross margin was 45.2%, up from 42.3% in the prior year quarter.",
        "Operating expenses were $14.3 billion, up 7% year-over-year.",
        "| Metric | Q4 2023 | Q4 2024 |",
        "|--------|---------|---------|",
        "| Revenue| $89.5B  | $90.1B  |",
        "| Op Inc | $26.9B  | $28.2B  |"
      ]
    },
    json: {
      "doc_type": "10-K",
      "company": "APPLE INC",
      "period_end": "2024-09-30",
      "section": "Item 7",
      "extracted_data": {
        "net_sales": { "value": 89500000000, "currency": "USD", "change_yoy": -0.01 },
        "gross_margin": { "value": 0.452, "context": "up from 42.3%" },
        "tables": [
          {
            "id": "table_01",
            "title": "Quarterly Financial Metrics",
            "rows": [
              { "metric": "Revenue", "q4_2023": "89.5B", "q4_2024": "90.1B" },
              { "metric": "Operating Income", "q4_2023": "26.9B", "q4_2024": "28.2B" }
            ]
          }
        ]
      },
      "xbrl_links": ["us-gaap:SalesRevenueNet", "us-gaap:GrossProfit"]
    }
  },
  '8k': {
    label: 'Form 8-K (Events)',
    desc: 'Item 1.01 Entry into a Material Definitive Agreement',
    source: {
      type: 'text',
      content: [
        "On September 12, 2024, the Company entered into a Credit Agreement.",
        "The facility provides for a $5.0 billion unsecured revolving credit line.",
        "The maturity date is September 12, 2029."
      ]
    },
    json: {
      "doc_type": "8-K",
      "event_type": "Material Definitive Agreement",
      "date": "2024-09-12",
      "agreement_details": {
        "type": "Credit Agreement",
        "facility_amount": { "value": 5000000000, "currency": "USD" },
        "facility_type": "Unsecured Revolving Credit Line",
        "maturity_date": "2029-09-12"
      },
      "parties": ["The Company", "JPMorgan Chase Bank, N.A."]
    }
  },
  '13f': {
    label: 'Form 13F-HR',
    desc: 'Information Table - Institutional Holdings',
    source: {
      type: 'table',
      content: [
        "NAME OF ISSUER  | TITLE OF CLASS | VALUE (x$1000)",
        "-----------------------------------------------",
        "NVIDIA CORP     | COM            | 420,500",
        "MICROSOFT CORP  | COM            | 315,200",
        "AMAZON INC      | COM            | 180,900"
      ]
    },
    json: {
      "doc_type": "13F-HR",
      "filer": "BRIDGEWATER ASSOCIATES, LP",
      "report_period": "2024-12-31",
      "holdings": [
        { "issuer": "NVIDIA CORP", "class": "COM", "value": 420500000, "cusip": "67066G104" },
        { "issuer": "MICROSOFT CORP", "class": "COM", "value": 315200000, "cusip": "594918104" },
        { "issuer": "AMAZON INC", "class": "COM", "value": 180900000, "cusip": "023135106" }
      ],
      "total_value": 916600000
    }
  }
};

const DatasetPreview: React.FC = () => {
  const [selectedDataset, setSelectedDataset] = useState<DatasetType>('10k');
  const [viewMode, setViewMode] = useState<ViewMode>('json');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(datasets[selectedDataset].json, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentData = datasets[selectedDataset];
  
  // Safely access date field which varies by document type
  const jsonAny = currentData.json as any;
  const displayDate = jsonAny.period_end || jsonAny.date || jsonAny.report_period;

  return (
    <section className="py-24 bg-deep-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-xs font-bold text-neon-blue uppercase tracking-wider mb-4">
              <Database className="w-3 h-3" />
              Interactive Demo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See the Data for Yourself
            </h2>
            <p className="text-gray-400 max-w-xl">
              Compare a raw SEC filing with Lucy's output. Copy the JSON and see how it fits your schema.
            </p>
          </div>

          {/* Dataset Selector */}
          <div className="flex bg-deep-800 p-1 rounded-lg border border-white/10 overflow-x-auto">
            {(Object.keys(datasets) as DatasetType[]).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedDataset(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all ${
                  selectedDataset === key
                    ? 'bg-deep-700 text-white shadow-sm ring-1 ring-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {datasets[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Split View */}
        <div className="grid lg:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-black/40 backdrop-blur-sm">
          
          {/* Left Pane: Original Source */}
          <div className="bg-[#1e1e2e] p-6 border-b lg:border-b-0 lg:border-r border-white/5 relative min-h-[500px]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider font-semibold">
                <FileText className="w-4 h-4" />
                Original Document (PDF)
              </div>
              <div className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                Source: SEC EDGAR
              </div>
            </div>

            {/* Simulated Document Paper */}
            <div className="bg-white text-gray-800 p-8 rounded shadow-lg max-w-md mx-auto min-h-[400px] text-[10px] md:text-xs leading-relaxed relative font-serif opacity-90">
               {/* Header decoration */}
               <div className="w-12 h-12 bg-gray-200 mb-6 rounded-full opacity-50"></div>
               <div className="h-4 bg-gray-200 w-1/2 mb-8"></div>
               
               {/* Content Lines */}
               <div className="space-y-3 relative z-10">
                 <h4 className="font-bold text-sm mb-2 text-black">{currentData.desc}</h4>
                 {currentData.source.content.map((line, i) => (
                   <p key={i} className={`
                     ${line.startsWith('|') ? 'font-mono text-[9px] whitespace-pre bg-gray-50 p-2 rounded border border-gray-200 mt-4' : ''}
                   `}>
                     {line}
                   </p>
                 ))}
               </div>

               {/* Bounding Box Overlay (Simulating AI Vision) */}
               <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-[120px] left-6 right-6 bottom-12 border-2 border-neon-purple/50 bg-neon-purple/5 rounded animate-pulse-slow flex items-start justify-end p-2">
                    <span className="bg-neon-purple text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      Confidence: 99.9%
                    </span>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Pane: Structured Output */}
          <div className="bg-[#0f0e1a] p-0 flex flex-col min-h-[500px]">
             {/* Toolbar */}
             <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#131220]">
               <div className="flex items-center gap-4">
                 <button 
                   onClick={() => setViewMode('json')}
                   className={`flex items-center gap-2 text-xs font-medium transition-colors ${viewMode === 'json' ? 'text-neon-cyan' : 'text-gray-500 hover:text-gray-300'}`}
                 >
                   <Code className="w-3.5 h-3.5" /> JSON Schema
                 </button>
                 <button 
                    onClick={() => setViewMode('table')}
                    className={`flex items-center gap-2 text-xs font-medium transition-colors ${viewMode === 'table' ? 'text-neon-cyan' : 'text-gray-500 hover:text-gray-300'}`}
                 >
                   <Table className="w-3.5 h-3.5" /> Markdown Table
                 </button>
               </div>
               
               <button 
                 onClick={handleCopy}
                 className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors"
               >
                 {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                 {copied ? 'Copied' : 'Copy'}
               </button>
             </div>

             {/* Code Editor Area */}
             <div className="flex-1 overflow-auto p-6 font-mono text-sm custom-scrollbar relative">
                {/* Line Numbers decoration */}
                <div className="absolute left-0 top-6 bottom-0 w-10 text-right pr-4 text-gray-700 select-none text-xs leading-6 font-mono hidden sm:block">
                  {Array.from({length: 20}).map((_, i) => <div key={i}>{i+1}</div>)}
                </div>

                <div className="pl-0 sm:pl-10">
                  {viewMode === 'json' ? (
                    <SyntaxHighlighter data={currentData.json} />
                  ) : (
                    <div className="text-gray-300 whitespace-pre-wrap">
                      {/* Simulated Markdown View */}
                      <span className="text-neon-purple">## {currentData.desc}</span>
                      {'\n\n'}
                      <span className="text-gray-500">Metadata:</span> {displayDate} | {currentData.json.doc_type}
                      {'\n\n'}
                      {JSON.stringify(currentData.json, null, 2)}
                    </div>
                  )}
                </div>
             </div>
          </div>
        </div>

        {/* Feature Callouts */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-deep-800 flex items-center justify-center shrink-0 border border-white/5">
                    <LinkIcon className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                    <h4 className="text-white font-semibold text-sm mb-1">XBRL-Linked Values</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Every number is traceable back to the source XBRL tag, ensuring auditability.
                    </p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-deep-800 flex items-center justify-center shrink-0 border border-white/5">
                    <Table className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Table-to-JSON</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Merged cells and complex headers are flattened into clean, semantic JSON objects.
                    </p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-deep-800 flex items-center justify-center shrink-0 border border-white/5">
                    <Sparkles className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Metadata Enrichment</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Enriched with ticker mapping, sentiment scores, and standard industrial codes (SIC).
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

// Simple JSON Syntax Highlighter Component for the demo
const SyntaxHighlighter = ({ data }: { data: any }) => {
  const jsonString = JSON.stringify(data, null, 2);
  
  // Basic regex to colorize JSON parts
  const html = jsonString.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (match) => {
      let cls = 'text-neon-cyan'; // Number/Bool
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'text-neon-purple'; // Key
        } else {
          cls = 'text-green-400'; // String
        }
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );

  return (
    <pre 
      className="text-xs md:text-sm leading-6 whitespace-pre-wrap" 
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
};

export default DatasetPreview;