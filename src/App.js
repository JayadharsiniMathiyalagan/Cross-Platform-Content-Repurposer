import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [transcript, setTranscript] = useState('');
  const [platform, setPlatform] = useState('linkedin_post');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!transcript) return;
    setLoading(true);
    try {
      const res = await axios.post('http://127.0.0.1:8000/generate', {
        transcript,
        platform
      });
      setResult(res.data.output);
    } catch (err) {
      alert('Error generating content');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>🎯 GenAI Content Repurposer</h1>
      <textarea
        rows="5"
        placeholder="Enter transcript..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
      />

      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option value="linkedin_post">LinkedIn Post</option>
        <option value="tweet_thread">Tweet Thread</option>
        <option value="youtube_description">YouTube Description</option>
        <option value="instagram_caption">Instagram Caption</option>
      </select>

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate'}
      </button>

      {result && (
        <div className="result">
          <h3>📝 Output:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
