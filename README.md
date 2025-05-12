<h1 align="left">
  <span style="color:white;">🎙️Tex</span><span style="color:#a855f7;">tilo</span>
</h1>

Textilo is a browser-based voice-to-text converter and translator. It allows users to record or upload audio, transcribe it to text using OpenAI's Whisper model, and translate the transcription into over 200 languages — all running fully in the browser using WebAssembly and Web Workers.

---

## 🌐 Live Demo

> 🔗 [Try Textilo Live on AWS Amplify](https://main.diwem6dkopenw.amplifyapp.com/)

Open it in a modern browser (Chrome/Edge/Firefox) — no install required.

---

## 🚀 Features

- 🎤 Record or upload audio files (MP3, WAV)
- 🧠 Transcribe speech to text using `openai/whisper-tiny.en`
- 🌍 Translate transcribed text to 200+ languages using `Xenova/nllb-200-distilled-600M`
- 📤 Fully browser-based — no server or backend required
- ⚡ Runs on WebAssembly using [`@xenova/transformers`](https://www.npmjs.com/package/@xenova/transformers)
- 📄 Download or copy the output text

---

## 🛠️ Tech Stack

| Layer           | Tools                                         |
|------------------|-----------------------------------------------|
| Frontend        | React + Tailwind CSS                         |
| Audio Recording | MediaRecorder API                            |
| Transcription   | `openai/whisper-tiny.en` via `@xenova/transformers` |
| Translation     | `Xenova/nllb-200-distilled-600M`             |
| Runtime         | WebAssembly + Web Workers                    |
| Output          | Text file download / clipboard copy          |

---

## 📦 External Models Used

| Task         | Model                                                                 | Source               |
|--------------|------------------------------------------------------------------------|-----------------------|
| Transcription| [`openai/whisper-tiny.en`](https://huggingface.co/openai/whisper-tiny.en) | Hugging Face / OpenAI |
| Translation  | [`Xenova/nllb-200-distilled-600M`](https://huggingface.co/Xenova/nllb-200-distilled-600M) | Hugging Face / Meta AI |

---

## 🖥️ Local Setup

To run the project locally:

```bash
git clone https://github.com/sayan922/Textilo.git
cd textilo
npm install
npm run dev

