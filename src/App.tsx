import Groq from "groq-sdk";
import { useState } from "react";

export function App() {

  const tones : string[] = ['Witty', 'Professional', 'Casual', 'Motivational'];

  const [tweet, setTweet] = useState<string>('');
  const [tone, setTone] = useState<string>(tones[0]);
  const [rewritten, setRewritten] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleRewrite = async () => {
    setIsLoading(true);
    setRewritten('');
    try {
      const prompt = `Rewrite the following tweet in a ${tone.toLowerCase()} tone:\n\n"${tweet}"`;

      const response = await groq.chat.completions.create({
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [
          {
            role: 'system', content: "You are a social media expert. you will only show the rewritten tweet content. keep it concise.",
          },
          {
            role: 'user', content: prompt,
          },
        ]        
      });
      const output = response.choices[0].message.content || '';
      setRewritten(output.trim());
    } catch (err) {
      console.error('Error rewriting tweet:', err);
    } finally {
      setIsLoading(false);
    }
  }
  
  

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">AI Tweet Rewriter</h1>
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="Enter your tweet here"
          className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium">Tone:</label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="p-2 border rounded-md border-gray-300 focus:outline-none"
        >
          {tones.map( tone => (
            <option key={tone}>{tone}</option>
          ))}
        </select>
      </div>
        
      <button 
        onClick={handleRewrite}
        disabled={!tweet || isLoading}
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"       
        
      >{isLoading ? 'Rewriting...' : 'Rewrite Tweet'}</button>

      {rewritten && (
        <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
          <p className="text-sm font-medium mb-2">Rewritten Tweet:</p>
          <p className="text-base font-medium">{rewritten}</p>
        </div>
      )}
    </div>
  )
}
