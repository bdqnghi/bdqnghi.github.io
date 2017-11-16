---
layout: page
title: Research
permalink: /research/
---

My research focuses on the application of machine learning and AI into software engineering tasks. More broadly, my interests lie at the intersection of Software Mining, Natural Language Processing, and Machine Learning. In details, I am focusing on employing the power of Machine Learning to software engineering and programming languages to create smart software engineering tools for developers. 

In this era, software data is ubiquitous. These data is available puclicly on Github, Jira, Bitbucket, etc. These system publicly expose not just source code, but also meta-data concerning authorship, but-fixes and review processes. The scale of available data is massive: billions of tokens of code and millions of instances of meta-data. This abundance of massive code data suggests a new, data-driven approach to develop software tools. With the promise and power of Machine Learning on its ability to generalize from examples and handle noise, along with predictive power, it is quite obvious that we can leverage the power of Machine Learning to exploit such massive dataset to get valuable information to enhance the usability of software development tools.

-----------------------------
## Cross-Language Learning for Program Classification using Bilateral Tree-Based Convolutional Neural Networks (Accepted at NL4SE Workshop - AAAI'18)

Automated program translation (a.k.a. language migration) can be very useful for software development as it may help reduce developer coding time, especially for functionalities and library APIs that need be implemented and maintained in various programming languages. In the field of natural language processing (NLP), neural-network based Neural Machine Translation (NMT) has emerged as an alternative to statistical language models, achieving good results for natural language translation [18]. NMT models use distributed vector representations of words as the basic unit to compose repre sentations for more complex language elements, such as sentences and paragraphs. One prominent distributed vector representation is word2vec, which uses neural networks to learn vector representations of words (a.k.a. word embeddings) from natural language articles to capture latent semantics with respect to a modeling objective, such as predicting the context given a word or predicting the next word given a context. Also, similarities among different natural languages can be exploited for machine translation which can be applicable for programming languages as there are many across-language code clones too. 

Towards this vision, I proposes an approach for automated program classifications using bilateral tree-based convolutional neural networks (BiTBCNNs). It is layered on top of two tree-based convolutional neural networks (TBCNNs), each of which recognizes the algorithm of code written in an indi- vidual programming language. The combination layer of the networks recognizes the similarities and differences among code in different programming languages.

The paper is accepted at AAAI'18, here's the URL: <a href="https://arxiv.org/pdf/1710.06159.pdf" target="_blank">Bilareral TBCNN</a>