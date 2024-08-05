'use client'

import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const TextToFileDownloader = () => {
  const [text, setText] = useState('');

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "downloaded-text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const faqItems = [
    {
      question: "How does this tool work?",
      answer: "Simply paste your text into the provided text area, then click the 'Download as .txt' button. Your text will be saved as a .txt file and downloaded to your device."
    },
    {
      question: "Is there a limit to how much text I can convert?",
      answer: "There's no strict limit, but for very large amounts of text (over 1MB), you may experience slower performance. We recommend splitting very large texts into smaller chunks."
    },
    {
      question: "Is my text stored anywhere?",
      answer: "No, your text is processed entirely in your browser. We don't store or transmit your text to any servers."
    },
    {
      question: "Can I use this tool on mobile devices?",
      answer: "Yes, this tool is fully functional on mobile devices. However, the process of downloading and managing files might vary depending on your mobile browser and operating system."
    },
    {
      question: "What file format does this tool use?",
      answer: "This tool converts your text into a .txt (plain text) file. This format is universally readable by almost all text editors and word processors."
    },
    {
      question: "Is this tool free to use?",
      answer: "Yes, this tool is completely free to use. There are no hidden charges or premium features."
    },
    {
      question: "Can I convert formatted text or only plain text?",
      answer: "This tool is designed for plain text conversion. Any formatting (like bold, italic, or different font sizes) will not be preserved in the .txt file."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <a 
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm transition-colors hover:bg-gray-100"
          href="https://github.com/mrmps/download-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
          </svg>
          <p>Star on GitHub</p>
        </a>
      </div>

      <h1 className="text-4xl font-bold text-center mb-2">Text to File Downloader</h1>
      <p className="text-xl text-center text-gray-600 mb-8">Convert any text to a downloadable .txt file in seconds</p>

      <Card className="w-full mb-8">
        <CardHeader>
          <CardTitle>Convert Your Text</CardTitle>
          <CardDescription>Paste your text below and click the download button</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[200px]"
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleDownload} disabled={!text.trim()} className="w-full">
            Download as .txt
          </Button>
        </CardFooter>
      </Card>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Paste your text into the text area above</li>
          <li>Click the &quot;Download as .txt&quot; button</li>
          <li>Your browser will automatically download the .txt file</li>
          <li>Open the downloaded file with any text editor</li>
        </ol>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default TextToFileDownloader;