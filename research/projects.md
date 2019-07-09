---
layout: page
title: Research
permalink: /research/
---

## Projects

### Program Representation Learning
<p align="justify" >
I'm focusing on employing the theory of graph-based and tree-based deep learning to learn the representation of software program (or code modeling). Programming languages, as well as natural languages, are both considered as the sequence of text. But the programming languages expose richer structural information in a form of the Abstract Syntax Tree (AST). In addition, the elements in the AST are well-connected with each other through many forms of dependencies, such as def-use, control flow, data flow. As such, the source code of programming languages can also be described in the form of graphs, where the edges in the graph represent a different type of relations between the elements. This leads to the consequence that modeling source code using a tree-based model or graph-based model usually can produce richer and more useful features than the sequence-based model. The features extracted can be useful in tasks, such as program classification [<a href="/files/SANER_2019_bilateral_dependency.pdf" target="_blank">SANER'19</a>], variable naming, variable misuse detection, etc.
</p>

### Cross-Domains Adaptation with Little Parallel Data
<p align="justify" >
I'm also interested in working with cross-domain problems. The cross-domain problems are the ones which involve 2 or more domains in a learning task, in which the cross-domains can be cross-languages, cross-projects, or cross code and text modeling. Some example tasks that involve cross-domains are cross-language API mappings [<a href="/files/ICSE_2018_NIER.pdf" target="_blank">ICSE'18</a>], cross-language program classification [<a href="/files/AAAI_18_cross_language_learning.pdf" target="_blank">AAAI'18</a>][<a href="/files/SANER_2019_bilateral_dependency.pdf" target="_blank">SANER'19</a>], programming language translation, etc.  Usually, to adapt 2 domains, e.g mapping APIs from one language into another, transferring bug prediction model learn from a project to another, etc, one needs a lot of parallel data to build the cross-domains model and such parallel data may not available all the time, and requires a lot of human effort to label the data, which can be seen as a lot of prior knowledge to build the model. As such, there is a need for the techniques that can adapt the domains with at least prior knowledge as possible, or without prior knowledge at all.
</p>

### Interpretability Mechanism for Program Representation Learning
<p align="justify" >
As the third wave of AI is coming, someday the computer will have the ability to program itself. Program representation learning is one of the core technique to reach such a goal. Many techniques have been proposed to learn the representation of the program, but lack of the interpretable ability. As a result, no one understands how the Deep Learning model for program representation works, which resulting in the hesitation to adopt such techniques to solve real-world problems. To bridge this gap, the need to build the interpretable neural networks for program representation is obvious. We hypothesize that to build such an interpretable mechanism, this mechanism should be built around the structural representation of the source code, e.g Abstract Syntax Tree.
</p>

## Keywords
<p align="justify" >
source code modeling, natural language processing, structure-based learning, neural networks, domain adaptation
</p>


