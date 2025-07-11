#  Cross-Platform Content Repurposer using GenAI

##  Project Overview
This project enables content creators, marketers, and professionals to automatically **repurpose a single piece of content into platform-specific formats** such as:

-  LinkedIn post  
-  Tweet thread  
-  YouTube video description  
-  Instagram caption

Using a fine-tuned **Flan-T5** model, the app intelligently transforms your original idea into engaging content tailored for each platform’s unique audience and style.

---

##  Objective
To build an AI-powered tool that **saves time and effort** for content creators by generating well-formatted, context-aware posts for multiple platforms from a single input — enhancing productivity and maximizing content reach.

---

## Tech Stack

| Layer        | Technology Used                        | Purpose                                    |
|--------------|----------------------------------------|--------------------------------------------|
| Frontend     | React.js                               | UI for entering input & displaying output  |
| Backend      | FastAPI                                | API server that connects frontend to model |
| Model        | HuggingFace `flan-t5-base`             | GenAI model for text generation            |
| Dataset      | Custom JSON (500+ entries)             | Supervised learning data                   |
| Other Tools  | Python, Axios, Uvicorn, GitHub         | Glue code & development tools              |

---

##  Model Details

- **Model Used**: `google/flan-t5-base` from HuggingFace
- **Task**: Text-to-Text Generation
- **Training Data**: Manually curated dataset with 500+ examples
- **Training Framework**: HuggingFace Transformers + Datasets
- **Training Method**:
  - Prompt: `"repurpose for [platform]: [input_text]"`
  - Target: Platform-specific output (e.g., tweet thread, caption, etc.)

---
Future Enhancements
* Add tone customization (formal/casual)

* Add more social platforms (e.g., Pinterest, Threads)

* Add file upload & download options

* Add user authentication & history




