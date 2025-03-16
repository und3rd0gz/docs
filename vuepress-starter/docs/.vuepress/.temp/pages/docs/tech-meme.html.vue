<template><div><h1 id="tech-doc-meme-token-ai-predictions" tabindex="-1"><a class="header-anchor" href="#tech-doc-meme-token-ai-predictions"><span>Tech-doc Meme-token AI predictions</span></a></h1>
<h1 id="system-overview" tabindex="-1"><a class="header-anchor" href="#system-overview"><span>System Overview</span></a></h1>
<p>The meme-token prediction system is a multi-component solution built on the Node.js/TypeScript stack using TensorFlow.js for machine learning. The system is designed to analyze new meme tokens on the Solana blockchain (initially, only Solana is supported) within the first 15 minutes after their launch, providing users with the following metrics:</p>
<ul>
<li>Probability of a scam (in percentage)</li>
<li>Forecast of maximum market capitalization</li>
<li>Optimal time to buy</li>
<li>Optimal time to sell</li>
</ul>
<h1 id="system-architecture" tabindex="-1"><a class="header-anchor" href="#system-architecture"><span>System Architecture</span></a></h1>
<p><img src="@source/docs/screens/diagram.png" alt="System Diagram"></p>
<p>The meme-token prediction system consists of several key components, each performing its unique role in the process of data collection, processing, and analysis. Below is a description of each component and the tools used:</p>
<h2 id="data-collector" tabindex="-1"><a class="header-anchor" href="#data-collector"><span>Data Collector</span></a></h2>
<p><strong>Description:</strong>
The Data Collector is responsible for gathering data on new meme tokens from the blockchain. It uses APIs to interact with the blockchain and extract the necessary data.
<strong>Tools:</strong></p>
<ul>
<li><a href="https://github.com/und3rd0gz/defiKit" target="_blank" rel="noopener noreferrer">github.com/und3rd0gz/defiKit</a></li>
</ul>
<h2 id="data-processor" tabindex="-1"><a class="header-anchor" href="#data-processor"><span>Data Processor</span></a></h2>
<p><strong>Description:</strong>
The Data Processor processes and normalizes the collected data, preparing it for further analysis.</p>
<h2 id="feature-extraction" tabindex="-1"><a class="header-anchor" href="#feature-extraction"><span>Feature Extraction</span></a></h2>
<p><strong>Description:</strong>
This component extracts features from the processed data that will be used for training the machine learning model.</p>
<h2 id="ai-model" tabindex="-1"><a class="header-anchor" href="#ai-model"><span>AI Model</span></a></h2>
<p><strong>Description:</strong>
The AI Model is a trained machine learning model that analyzes the extracted features and makes predictions about meme tokens.
<strong>Tools:</strong></p>
<ul>
<li><strong>TensorFlow.js:</strong> For creating and training the machine learning model.</li>
</ul>
<h2 id="prediction-api" tabindex="-1"><a class="header-anchor" href="#prediction-api"><span>Prediction API</span></a></h2>
<p><strong>Description:</strong>
The Prediction API provides an interface for interacting with the model and obtaining predictions.</p>
<h2 id="client-bot" tabindex="-1"><a class="header-anchor" href="#client-bot"><span>Client Bot</span></a></h2>
<p><strong>Description:</strong>
The Client Bot interacts with users, providing them with predictions and notifications about new meme tokens.</p>
<p>This architecture ensures efficient data collection, processing, and analysis, allowing users to receive timely and accurate predictions about meme tokens.</p>
</div></template>


