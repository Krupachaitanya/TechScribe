import React, { useState, useEffect, useRef } from 'react';
import { Play, Code, Terminal, Globe, Loader2, AlertCircle } from 'lucide-react';
import './CourseView.css';

const JUDGE0_LANG_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
  cpp: 54
};

const DEFAULT_SNIPPETS = {
  javascript: `// Write your JavaScript code here...\n\nlet frameworks = ["React", "Angular", "Vue"];\nconsole.log("Popular frontend frameworks:");\nframeworks.forEach(f => console.log("- " + f));`,
  python: `# Write your Python code here...\n\ndef greet(name):\n    print(f"Hello, {name}!")\n\ngreet("Python Developer")`,
  java: `// Write your Java code here...\n// Note: Class name must be Main\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from Java!");\n    }\n}`,
  cpp: `// Write your C++ code here...\n\n#include <iostream>\n\nint main() {\n    std::cout << "Hello from C++!" << std::endl;\n    return 0;\n}`,
  html: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family: sans-serif; text-align: center; margin-top: 50px; background: #f8fafc; color: #0f1115; }\n    h1 { color: #3b82f6; }\n  </style>\n</head>\n<body>\n  <h1>Hello TechScribe!</h1>\n  <p>Live frontend HTML/CSS preview.</p>\n</body>\n</html>`
};

const CompilerPage = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(DEFAULT_SNIPPETS.javascript);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const iframeRef = useRef(null);

  useEffect(() => {
    document.title = "Online Compiler | TechScribe";
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setCode(DEFAULT_SNIPPETS[newLang]);
    setOutput('');
    setErrorMsg('');
  };

  const runCode = async () => {
    setOutput('');
    setErrorMsg('');
    setIsRunning(true);

    if (language === 'html') {
      // HTML Rendering via Iframe
      if (iframeRef.current) {
        const doc = iframeRef.current.contentDocument;
        doc.open();
        doc.write(code);
        doc.close();
      }
      setIsRunning(false);
      return;
    }

    // Call Judge0 CE API for actual code execution
    try {
      const response = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          source_code: code,
          language_id: JUDGE0_LANG_IDS[language],
          stdin: ''
        })
      });

      if (!response.ok) {
        throw new Error(`Compilation service temporarily unavailable (HTTP ${response.status}). Please try again later.`);
      }

      const data = await response.json();

      if (data.status && data.status.id !== 3) {
        // Compilation error or runtime error
        setOutput(data.compile_output || data.stderr || data.message || `Execution Error: ${data.status.description}`);
      } else {
        // Success
        setOutput(data.stdout || '> Executed successfully with no standard output.');
      }
    } catch (err) {
      setErrorMsg(err.message || 'An unexpected error occurred while compiling.');
    } finally {
      setIsRunning(false);
    }
  };

  const handleKeyDown = (e) => {
    // Basic Tab Support in Textarea
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const val = e.target.value;
      setCode(val.substring(0, start) + '    ' + val.substring(end));
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 4;
      }, 0);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto', color: 'var(--text-main)', animation: 'fadeIn 0.5s ease-out' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 className="course-h1" style={{ fontSize: '2.8rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Terminal size={40} className="icon-success" /> Cloud IDE
        </h1>
        <p className="course-desc" style={{ marginTop: '10px' }}>
          Write, compile, and execute code instantly in a secure, containerized environment.
        </p>
      </header>
      
      <div className="code-sandbox-wrapper" style={{ height: '70vh', minHeight: '600px', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-glass)' }}>
        <div className="code-header" style={{ padding: '15px 25px', display: 'flex', justifyContent: 'space-between' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
             <Code size={20} className="code-icon" />
             <select 
               value={language}
               onChange={handleLanguageChange}
               style={{ 
                 background: 'var(--bg-surface)', 
                 color: 'var(--text-main)', 
                 border: '1px solid var(--card-border)', 
                 padding: '8px 16px', 
                 borderRadius: 'var(--radius-sm)',
                 fontSize: '1rem',
                 fontFamily: 'inherit',
                 outline: 'none',
                 cursor: 'pointer',
                 boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
               }}
             >
               <option value="javascript">JavaScript (Node.js)</option>
               <option value="python">Python 3</option>
               <option value="java">Java (OpenJDK)</option>
               <option value="cpp">C++ (GCC)</option>
               <option value="html">HTML / CSS (Live Preview)</option>
             </select>
           </div>
           
           <button 
             className="run-btn" 
             onClick={runCode}
             disabled={isRunning}
             style={{ 
                 opacity: isRunning ? 0.7 : 1, 
                 cursor: isRunning ? 'wait' : 'pointer',
                 padding: '10px 24px',
                 fontSize: '1rem'
             }}
           >
             {isRunning ? <><Loader2 size={18} className="spinner" style={{ border: 'none' }} /> Compiling...</> : <><Play size={18} fill="currentColor" /> Run Code</>}
           </button>
        </div>
        
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Editor Area */}
          <textarea 
            style={{ 
              flex: 1, 
              background: 'var(--code-bg)', 
              color: '#e2e8f0', 
              border: 'none', 
              borderRight: '1px solid var(--code-border)',
              padding: '25px',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '15px',
              resize: 'none',
              outline: 'none',
              lineHeight: '1.6',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
            }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            aria-label="Code Editor"
          />
          
          {/* Output Area */}
          <div style={{ flex: 1, background: 'var(--bg-surface)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 25px', borderBottom: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              {language === 'html' ? <Globe size={18} className="code-icon" /> : <Terminal size={18} className="code-icon" />}
              <h3 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, fontWeight: 600, letterSpacing: '0.5px' }}>
                {language === 'html' ? 'LIVE BROWSER PREVIEW' : 'CONSOLE OUTPUT'}
              </h3>
            </div>
            
            {errorMsg && (
              <div style={{ padding: '15px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  <AlertCircle size={18} /> {errorMsg}
              </div>
            )}

            {language === 'html' ? (
              <iframe 
                 ref={iframeRef}
                 title="Live Preview" 
                 style={{ flex: 1, width: '100%', border: 'none', background: '#fff' }}
                 sandbox="allow-scripts allow-same-origin"
              />
            ) : (
              <pre style={{ 
                flex: 1,
                color: errorMsg ? '#ef4444' : '#a1a1aa', 
                whiteSpace: 'pre-wrap', 
                padding: '25px',
                margin: 0,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '15px',
                overflowY: 'auto',
                lineHeight: '1.6'
              }}>
                <span style={{ color: output.toLowerCase().includes('error') || output.toLowerCase().includes('exception') ? '#ef4444' : '#a1a1aa' }}>
                    {output || 'Output will appear here...'}
                </span>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompilerPage;
