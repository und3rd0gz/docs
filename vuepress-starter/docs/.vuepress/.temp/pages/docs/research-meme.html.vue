<template><div><h1 id="research-meme-tokens-ai-predictions" tabindex="-1"><a class="header-anchor" href="#research-meme-tokens-ai-predictions"><span>[Research] Meme-tokens AI predictions</span></a></h1>
<h2 id="prerequisite" tabindex="-1"><a class="header-anchor" href="#prerequisite"><span>Prerequisite</span></a></h2>
<p>The question was raised whether it is possible to predict the likelihood of scams in meme tokens on Solana at an early stage using AI. A lightweight build was created that provided approximately 100 input neurons for the neural network. Several hundred tokens were analyzed, and an AI was trained.</p>
<p>We managed to train a lightweight AI model to classify a token as either a Rug or a Gem. Rug - too dangerous to buy, Gem - can be bought and sold in the near future with minimal risk.</p>
<p>Such a model requires constant updates and training on current data.</p>
<h2 id="research-stages" tabindex="-1"><a class="header-anchor" href="#research-stages"><span>Research Stages</span></a></h2>
<ol>
<li>Client orientation</li>
<li>Predictive capability</li>
<li>How and where to deliver information for the fastest possible delivery to users</li>
</ol>
<h2 id="client-orientation" tabindex="-1"><a class="header-anchor" href="#client-orientation"><span>Client Orientation</span></a></h2>
<p>The main clients are people who are immersed in trading meme tokens and need an additional tool for early-stage analysis of meme token launches. There are many Telegram channels where people collectively discuss the purchase of various meme tokens at early stages.</p>
<h2 id="predictive-capability" tabindex="-1"><a class="header-anchor" href="#predictive-capability"><span>Predictive Capability</span></a></h2>
<p>The lightweight version of the AI model had about 100 input neurons, which made the model very categorical, and it started to make mistakes immediately when the trend changed.</p>
<h2 id="information-delivery-used-telegram" tabindex="-1"><a class="header-anchor" href="#information-delivery-used-telegram"><span>Information Delivery Used Telegram</span></a></h2>
<p>A Telegram bot was created that immediately sent information about a token if the token exceeded 70% in the prediction for the Gem class.</p>
<p><img src="@source/docs/screens/trade1.png" alt="Screenshot 1"></p>
<ul>
<li>Max Cap in $ after launch = <strong>900k</strong>$</li>
<li>Cap in $ at call to buy = <strong>250k</strong>$</li>
</ul>
<p><img src="@source/docs/screens/trade2.png" alt="Screenshot 2"></p>
<ul>
<li>Max Cap in $ after launch = <strong>5kk</strong> $</li>
<li>Cap in $ at call to buy = <strong>1.4kk</strong> $</li>
</ul>
<h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2>
<p>By inputting a greater number of neurons and a larger amount of data, as well as timely (automatic) updates of the AI model, a powerful utility for buying/selling meme tokens can be achieved.</p>
<p>As proof: the screenshots show versions of the AI model in the following format: <code v-pre>${version}.{badDataCounts}-${goodDataCounts}</code>;
where the version indicates an increase in the number of input neurons, and badDataCount and goodDataCount represent the training data, negative and positive respectively.</p>
<p>After the research, it was decided that more data about tokens needs to be collected, for which <a href="https://github.com/und3rd0gz/defiKit" target="_blank" rel="noopener noreferrer">github.com/und3rd0gz/defiKit</a> was created, which will be scaled in the future. Currently, more than 1000 input neurons are being collected.</p>
</div></template>


