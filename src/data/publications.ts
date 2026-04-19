export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'workshop' | 'preprint';
  abstract: string;
  doi?: string;
  pdfUrl?: string;
  codeUrl?: string;
  ranking?: string;
  acceptanceRate?: string;
}

export const publications: Publication[] = [
  {
    id: 'fse26-donot-treat',
    title: 'Do Not Treat Code as Natural Language: Implications for Repository-Level Code Generation and Beyond',
    authors: ['Minh Le-Anh', 'Huyen Nguyen', 'Khanh An Tran', 'Nam Le Hai', 'Linh Ngo Van', 'Nghi D. Q. Bui', 'Bach Le'],
    venue: 'ACM International Conference on the Foundations of Software Engineering (FSE)',
    year: 2026,
    type: 'conference',
    abstract: 'Investigates the implications of treating code differently from natural language for repository-level code generation and beyond.',
    pdfUrl: 'https://arxiv.org/abs/2602.11671',
    ranking: 'Rank A*'
  },
  {
    id: 'opendev-2026',
    title: 'OpenDev: Building Effective AI Coding Agents for the Terminal: Scaffolding, Harness, Context Engineering, and Lessons Learned',
    authors: ['Nghi D. Q. Bui'],
    venue: 'Technical Report',
    year: 2026,
    type: 'preprint',
    abstract: '81-page technical report. First ever to detail how coding agents should be built.',
    pdfUrl: 'https://arxiv.org/abs/2603.05344',
    codeUrl: 'https://github.com/opendev-to/opendev'
  },
  {
    id: 'swe-evo-2026',
    title: 'SWE-EVO: Benchmarking Coding Agents in Long-Horizon Software Evolution Scenarios',
    authors: ['Minh V. T. Thai', 'Tue Le', 'Dung Nguyen Manh', 'Huy Phan Nhat', 'Nghi D. Q. Bui'],
    venue: 'Preprint',
    year: 2026,
    type: 'preprint',
    abstract: 'Frontier and challenging benchmark to measure the capabilities of coding agents on long-horizon software engineering tasks.',
    pdfUrl: 'https://arxiv.org/abs/2512.18470'
  },
  {
    id: 'acl26-codewiki',
    title: "CodeWiki: Evaluating AI's Ability to Generate Holistic Documentation for Large-Scale Codebases",
    authors: ['Anh Nguyen Hoang', 'Minh Le-Anh', 'Bach Le', 'Nghi D. Q. Bui'],
    venue: 'Annual Meeting of the Association for Computational Linguistics (ACL)',
    year: 2026,
    type: 'conference',
    abstract: 'Methodology and benchmark to evaluate the ability of coding agents to generate documentation on large-scale codebases.',
    pdfUrl: 'https://arxiv.org/abs/2510.24428',
    codeUrl: 'https://github.com/FSoft-AI4Code/CodeWiki',
    ranking: 'Rank A*'
  },
  // Conference Papers
  {
    id: 'iclr25-codemlu',
    title: 'CodeMMLU: A Multi-Task Benchmark for Assessing Code Understanding Capabilities of CodeLLMs',
    authors: ['Dung Nguyen Manh', 'Thang Phan Chau', 'Nam Le Hai', 'Thong T. Doan', 'Nam V. Nguyen', 'Quang Pham', 'Nghi D. Q. Bui'],
    venue: '13th International Conference on Learning Representation (ICLR), Singapore',
    year: 2025,
    type: 'conference',
    abstract: 'We present CodeMMLU, a comprehensive multi-task benchmark designed to evaluate the code understanding and reasoning capabilities of large language models across diverse programming domains.',
    pdfUrl: 'https://arxiv.org/abs/2410.01999',
    codeUrl: 'https://github.com/FSoft-AI4Code/CodeMMLU',
    ranking: 'Rank A*'
  },
  {
    id: 'naacl25-contexts',
    title: 'On the Impacts of Contexts on Repository-Level Code Generation',
    authors: ['Nam Le Hai', 'Dung Manh Nguyen', 'Nghi D. Q. Bui'],
    venue: '2025 Annual Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics (NAACL), Albuquerque, New Mexico',
    year: 2025,
    type: 'conference',
    abstract: 'This paper investigates how different contextual information affects the performance of large language models in repository-level code generation tasks.',
    pdfUrl: 'https://arxiv.org/abs/2406.11927',
    codeUrl: 'https://github.com/FSoft-AI4Code/RepoExec',
    ranking: 'Rank A*'
  },
  {
    id: 'naacl25-visualcoder',
    title: 'VISUALCODER: Guiding Large Language Models in Code Execution with Fine-grained Multimodal Chain-of-Thought Reasoning',
    authors: ['Cuong Chi Le', 'Hoang-Chau Truong-Vinh', 'Huy Nhat Phan', 'Dung Duy Le', 'Tien N. Nguyen', 'Nghi D. Q. Bui'],
    venue: '2025 Annual Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics (NAACL), Albuquerque, New Mexico',
    year: 2025,
    type: 'conference',
    abstract: 'VISUALCODER introduces a novel approach to guide large language models in code execution through fine-grained multimodal chain-of-thought reasoning.',
    pdfUrl: 'https://arxiv.org/abs/2410.23402',
    codeUrl: 'https://github.com/FSoft-AI4Code/VisualCoder',
    ranking: 'Rank A*'
  },
  {
    id: 'forge25-repohyper',
    title: 'RepoHyper: Search-Expand-Refine on Semantic Graphs for Repository-Level Code Completion',
    authors: ['Huy N. Phan', 'Hoang N. Phan', 'Tien N. Nguyen', 'Nghi D. Q. Bui'],
    venue: 'The 2nd ACM international conference on AI Foundation Models and Software Engineering (FORGE), co-located with ICSE 2025, Ottawa, Canada',
    year: 2025,
    type: 'conference',
    abstract: 'RepoHyper presents a novel search-expand-refine methodology on semantic graphs for enhanced repository-level code completion.',
    pdfUrl: 'https://arxiv.org/abs/2403.06095',
    codeUrl: 'https://github.com/FSoft-AI4Code/RepoHyper'
  },
  {
    id: 'forge25-agilecoder',
    title: 'AgileCoder: Dynamic Collaborative Agents for Software Development based on Agile Methodology',
    authors: ['Minh Huynh Nguyen', 'Thang Phan Chau', 'Phong X. Nguyen', 'Nghi D. Q. Bui'],
    venue: 'The 2nd ACM international conference on AI Foundation Models and Software Engineering (FORGE), co-located with ICSE 2025, Ottawa, Canada',
    year: 2025,
    type: 'conference',
    abstract: 'AgileCoder introduces dynamic collaborative agents for software development based on agile methodology principles.',
    pdfUrl: 'https://arxiv.org/abs/2406.11912',
    codeUrl: 'https://github.com/FSoft-AI4Code/AgileCoder'
  },
  {
    id: 'forge25-codeflow',
    title: 'CodeFLow: Learning to Predict Program Execution by Modeling Dynamic Dependency on Code Graphs',
    authors: ['Cuong Chi Le', 'Hoang Nhat Phan', 'Huy Nhat Phan', 'Tien N. Nguyen', 'Nghi D. Q. Bui'],
    venue: 'The 2nd ACM international conference on AI Foundation Models and Software Engineering (FORGE), co-located with ICSE 2025, Ottawa, Canada',
    year: 2025,
    type: 'conference',
    abstract: 'CodeFLow learns to predict program execution by modeling dynamic dependencies on code graphs.',
    pdfUrl: 'https://arxiv.org/abs/2408.02816',
    codeUrl: 'https://github.com/FSoft-AI4Code/CodeFlow'
  },
  {
    id: 'acl24-reranking',
    title: 'Neural Code Generation Enhancement via Functional Overlap Reranking',
    authors: ['Hung Quoc To', 'Minh Huynh Nguyen', 'Nghi D. Q. Bui'],
    venue: 'The 62nd Annual Meeting of the Association for Computational Linguistics (ACL 2024), Bangkok, Thailand',
    year: 2024,
    type: 'conference',
    abstract: 'This work enhances neural code generation through functional overlap reranking techniques.',
    pdfUrl: 'https://arxiv.org/abs/2311.03366',
    codeUrl: 'https://github.com/FSoft-AI4Code/SRank-CodeRanker',
    ranking: 'Rank A'
  },
  {
    id: 'eacl24-hierarchynet',
    title: 'HierarchyNet: Learning to Summarize Source Code with Heterogeneous Representations',
    authors: ['Minh H. Nguyen', 'Nghi D. Q. Bui', 'Truong Son Hy', 'Long Tran-Thanh', 'Tien N. Nguyen'],
    venue: '18th Conference of the European Chapter of the Association for Computational Linguistics (EACL 2024), Malta',
    year: 2024,
    type: 'conference',
    abstract: 'HierarchyNet learns to summarize source code using heterogeneous representations.',
    pdfUrl: 'https://arxiv.org/abs/2205.15479',
    codeUrl: 'https://github.com/FSoft-AI4Code/HierarchyNet',
    ranking: 'Rank A'
  },
  {
    id: 'emnlp23-vault',
    title: 'The Vault: A Comprehensive Multilingual Dataset for Advancing Code Understanding and Generation',
    authors: ['Dung Nguyen Manh', 'Nam Le Hai', 'Anh T. V. Dau', 'Anh Minh Nguyen', 'Khanh Nghiem', 'Jin Guo', 'Nghi D. Q. Bui'],
    venue: 'Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP), Singapore',
    year: 2023,
    type: 'conference',
    abstract: 'The Vault presents a comprehensive multilingual dataset for advancing code understanding and generation capabilities.',
    pdfUrl: 'https://arxiv.org/abs/2305.06156',
    codeUrl: 'https://github.com/FSoft-AI4Code/TheVault',
    ranking: 'Rank A*'
  },
  {
    id: 'emnlp23-codet5plus',
    title: 'CodeT5+: Open Code Large Language Models for Code Understanding and Generation',
    authors: ['Yue Wang', 'Hung Le', 'Akhilesh Deepak Gotmare', 'Nghi D. Q. Bui', 'Junnan Li', 'Steven Hoi'],
    venue: 'Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP), Singapore',
    year: 2023,
    type: 'conference',
    abstract: 'CodeT5+ introduces enhanced architectures for code understanding and generation tasks with state-of-the-art performance.',
    pdfUrl: 'https://arxiv.org/abs/2305.07922',
    codeUrl: 'https://github.com/salesforce/CodeT5/tree/main/CodeT5%2B',
    ranking: 'Rank A*'
  },
  {
    id: 'acl23-selfimprovement',
    title: 'Better Language Models of Code through Self-Improvement',
    authors: ['Hung Quoc To', 'Nghi D. Q. BUI (Co-first Author)', 'Jin Guo', 'Tien N. Nguyen'],
    venue: 'The 61st Annual Meeting of the Association for Computational Linguistics (ACL), Toronto, Canada',
    year: 2023,
    type: 'conference',
    abstract: 'This work presents methods for improving language models of code through self-improvement techniques.',
    pdfUrl: '/files/ASE_2022_noise_detection.pdf',
    ranking: 'Rank A*',
    acceptanceRate: '19.1% (189/992)'
  },
  {
    id: 'acl23-influence',
    title: 'Class-based Influence Functions for Error Detection',
    authors: ['Nguyen Duc-Thang', 'Hoang Thanh Tung', 'Quan Tran', 'Huu Tien Dang', 'Nguyen Ngoc Hieu', 'Anh T.V. Dau', 'Nghi D. Q. BUI'],
    venue: 'The 61st Annual Meeting of the Association for Computational Linguistics (ACL), Toronto, Canada',
    year: 2023,
    type: 'conference',
    abstract: 'This paper introduces class-based influence functions for effective error detection in machine learning models.',
    pdfUrl: '/files/ASE_2022_noise_detection.pdf',
    ranking: 'Rank A*',
    acceptanceRate: '19.1% (189/992)'
  },
  {
    id: 'emnlp22-debug',
    title: 'Detect-Localize-Repair: A Unified Framework for Learning to Debug with CodeT5',
    authors: ['Nghi D. Q. BUI', 'Yue Wang', 'Steven Hoi'],
    venue: 'Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing (EMNLP), Abu Dhabi, United Arab Emirates',
    year: 2022,
    type: 'conference',
    abstract: 'A unified framework for learning to debug code using CodeT5, incorporating detection, localization, and repair phases.',
    pdfUrl: '',
    ranking: 'Rank A*',
    acceptanceRate: '14.0% (453/3242)'
  },
  {
    id: 'ase22-datacentric',
    title: 'Towards Using Data-Centric Approach for Better Code Representation Learning',
    authors: ['Anh T.V Dau (Co-first Author)', 'Nghi D. Q. BUI (Co-first Author)', 'Thang Nguyen Duc', 'Hoang Thanh Tung'],
    venue: 'Proceedings of the 37th IEEE/ACM International Conference on Automated Software Engineering (ASE), Late-Breaking Results Track, Michigan, US',
    year: 2022,
    type: 'conference',
    abstract: 'This work explores data-centric approaches for improving code representation learning.',
    pdfUrl: '/files/ASE_2022_noise_detection.pdf',
    ranking: 'Rank A*'
  },
  {
    id: 'ase22-robust',
    title: 'Towards Robust Models of Code via Energy-Based Learning on Auxiliary Datasets',
    authors: ['Nghi D. Q. BUI', 'Yijun Yu'],
    venue: 'Proceedings of the 37th IEEE/ACM International Conference on Automated Software Engineering (ASE), Late-Breaking Results Track, Michigan, US',
    year: 2022,
    type: 'conference',
    abstract: 'This work presents energy-based learning approaches for building robust models of code using auxiliary datasets.',
    pdfUrl: '/files/ASE_2022_OOD_detection.pdf',
    ranking: 'Rank A*'
  },
  {
    id: 'sigir21-ssl',
    title: 'Self-Supervised Learning for Code Retrieval and Summarization through Semantic-Preserving Program Transformations',
    authors: ['Nghi D. Q. BUI', 'Yijun YU', 'Lingxiao JIANG'],
    venue: 'Proceedings of the 44th ACM Conference on Research and Development in Information Retrieval (SIGIR)',
    year: 2021,
    type: 'conference',
    abstract: 'This work presents self-supervised learning approaches for code retrieval and summarization using semantic-preserving transformations.',
    pdfUrl: 'https://arxiv.org/abs/2009.02731',
    ranking: 'Rank A*',
    acceptanceRate: '21% (151/720)'
  },
  {
    id: 'icse21-infercode',
    title: 'InferCode: Self-Supervised Learning of Code Representations by Predicting Subtrees',
    authors: ['Nghi D. Q. BUI', 'Yijun YU', 'Lingxiao JIANG'],
    venue: 'Proceedings of the IEEE/ACM 43th International Conference on Software Engineering (ICSE), Madrid, Spain',
    year: 2021,
    type: 'conference',
    abstract: 'InferCode introduces self-supervised learning of code representations through subtree prediction.',
    pdfUrl: '/files/ICSE_2021.pdf',
    codeUrl: 'https://github.com/bdqnghi/infercode',
    ranking: 'Rank A*',
    acceptanceRate: '22.9% (138/602)'
  },
  {
    id: 'aaai21-treecaps',
    title: 'TreeCaps:Tree-based Capsule Networks for Source Code Processing',
    authors: ['Nghi D. Q. BUI', 'Yijun YU', 'Lingxiao JIANG'],
    venue: 'Proceedings of the 35th AAAI Conference on Artificial Intelligence (AAAI), Vancouver, Canada',
    year: 2021,
    type: 'conference',
    abstract: 'TreeCaps introduces tree-based capsule networks for effective source code processing and understanding.',
    pdfUrl: '/files/AAAI_2021.pdf',
    codeUrl: 'https://github.com/bdqnghi/treecaps',
    ranking: 'Rank A*',
    acceptanceRate: '21% (1692/7911)'
  },
  {
    id: 'fse19-sar',
    title: 'SAR: Learning Cross-Language API Mappings with Little Knowledge',
    authors: ['Nghi D. Q. BUI', 'Yijun YU', 'Lingxiao JIANG'],
    venue: 'Proceedings of the IEEE/ACM 27th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE), Tallinn, Estonia',
    year: 2019,
    type: 'conference',
    abstract: 'SAR presents an approach for learning cross-language API mappings with minimal prior knowledge.',
    pdfUrl: '/files/FSE_2019.pdf',
    codeUrl: 'https://github.com/bdqnghi/SAR_API_mapping',
    ranking: 'Rank A*',
    acceptanceRate: '24.4% (74/303)'
  },
  {
    id: 'saner19-bilateral',
    title: 'Bilateral Dependency Neural Networks for Cross-Language Algorithm Classification',
    authors: ['Nghi D. Q. BUI', 'Yijun YU', 'Lingxiao JIANG'],
    venue: '26th edition of the IEEE/ACM International Conference on Software Analysis, Evolution and Reengineering (SANER), Hangzhou, China',
    year: 2019,
    type: 'conference',
    abstract: 'This work introduces bilateral dependency neural networks for cross-language algorithm classification.',
    pdfUrl: '/files/SANER_2019_bilateral_dependency.pdf',
    codeUrl: 'https://github.com/bdqnghi/bi-tbcnn',
    ranking: 'Rank A',
    acceptanceRate: '27% (40/148)'
  },
  {
    id: 'icse19-src',
    title: 'Towards Zero Knowledge Learning for Cross Language API Mappings',
    authors: ['Nghi D. Q. BUI'],
    venue: 'Proceedings of the IEEE/ACM 41th International Conference on Software Engineering: ACM Student Research Competition Track (SRC), Montreal, Canada',
    year: 2019,
    type: 'conference',
    abstract: 'This student research competition entry explores zero knowledge learning approaches for cross-language API mappings.',
    pdfUrl: '/files/ICSE_2019_SRC.pdf',
    ranking: 'Rank A* (Award: Bronze Medal)',
    acceptanceRate: '45.2% (19/42)'
  },
  {
    id: 'ase19-autofocus',
    title: 'AutoFocus: Interpreting Attention-based Neural Networks by Code Perturbation',
    authors: ['Nghi D. Q. BUI', 'Yijun YU', 'Lingxiao JIANG'],
    venue: 'Proceedings of the 34th IEEE/ACM International Conference on Automated Software Engineering (ASE), San Diego, California, United States',
    year: 2019,
    type: 'conference',
    abstract: 'AutoFocus provides interpretation methods for attention-based neural networks through code perturbation techniques.',
    pdfUrl: '/files/ASE_2019_NIER.pdf',
    ranking: 'Rank A*',
    acceptanceRate: '22.7% (93/409)'
  },
  {
    id: 'icse18-hierarchical',
    title: 'Hierarchical Learning of Cross-Language Mappings through Distributed Vector Representations for Code',
    authors: ['Nghi D. Q. BUI', 'Lingxiao JIANG'],
    venue: 'Proceedings of the IEEE/ACM 40th International Conference on Software Engineering: New Ideas and Emerging Technologies Results Track (NIER), Gothenburg, Sweden',
    year: 2018,
    type: 'conference',
    abstract: 'This work presents hierarchical learning approaches for cross-language mappings using distributed vector representations.',
    pdfUrl: '/files/ICSE_2018_NIER.pdf',
    codeUrl: 'https://github.com/bdqnghi/hierarchical-programming-language-mapping',
    ranking: 'Rank A* (Award: ACM SIGSOFT Distinguished Paper Award)',
    acceptanceRate: '26.3% (25/95)'
  },

  // Workshop Papers
  {
    id: 'neurips19-mlsys-treecaps',
    title: 'TreeCaps: Tree-Structured Capsule Networks for Program Source Code Processing',
    authors: ['Vinoj JAYASUNDARA', 'Nghi D. Q. BUI', 'Lingxiao JIANG', 'David LO'],
    venue: 'NeurIPS Workshop on ML for Systems (MLSys), 2019',
    year: 2019,
    type: 'workshop',
    abstract: 'TreeCaps proposes tree-structured capsule networks tailored for program source code processing tasks.'
  },
  {
    id: 'aaai18-nl4se-bilateral',
    title: 'Cross-Language Learning for Program Classification Using Bilateral Tree-Based Convolutional Neural Networks',
    authors: ['Nghi D. Q. BUI', 'Lingxiao JIANG', 'Yijun YU'],
    venue: 'AAAI Workshop on Natural Language Processing for Software Engineering (NL4SE), New Orleans, Louisiana, USA, 2018',
    year: 2018,
    type: 'workshop',
    abstract: 'This work studies cross-language program classification with bilateral tree-based convolutional neural networks.',
    pdfUrl: '/files/AAAI_18_cross_language_learning.pdf',
    codeUrl: 'https://github.com/bdqnghi/bi-tbcnn'
  },

  // Journal Papers
  {
    id: 'ist20-generalizability',
    title: 'On the Generalizability of Neural Program Analyzers with respect to Semantic-Preserving Program Transformation',
    authors: ['Md. Rafiqul Islam RABIN', 'Nghi D. Q. BUI', 'Yijun YU', 'Lingxiao JIANG', 'Mohammad Amin ALIPOUR'],
    venue: 'Journal of Information and Software Technology',
    year: 2020,
    type: 'journal',
    abstract: 'This journal paper examines the generalizability of neural program analyzers with respect to semantic-preserving program transformations.',
    pdfUrl: 'https://arxiv.org/pdf/2008.01566.pdf'
  },

  // ArXiv Papers
  {
    id: 'arxiv24-xmainframe',
    title: 'XMainframe: A Large Language Model for Mainframe Modernization',
    authors: ['Anh T. V. Dau', 'Hieu Trung Dao', 'Anh Tuan Nguyen', 'Hieu Trung Tran', 'Phong X. Nguyen', 'Nghi D. Q. Bui'],
    venue: 'arXiv preprint',
    year: 2024,
    type: 'preprint',
    abstract: 'XMainframe presents a large language model specifically designed for mainframe modernization tasks.',
    pdfUrl: 'https://arxiv.org/abs/2408.04660',
    codeUrl: 'https://github.com/FSoft-AI4Code/XMainframe'
  },
  {
    id: 'arxiv24-hyperagent',
    title: 'HyperAgent: Generalist Software Engineering Agents to Solve Coding Tasks at Scale',
    authors: ['Huy Nhat Phan', 'Tien N. Nguyen', 'Nghi D. Q. Bui'],
    venue: 'arXiv preprint',
    year: 2024,
    type: 'preprint',
    abstract: 'HyperAgent represents a breakthrough in autonomous software engineering, offering a generalist approach to solving coding tasks at scale.',
    pdfUrl: 'https://arxiv.org/abs/2409.16299',
    codeUrl: 'https://github.com/FSoft-AI4Code/HyperAgent'
  },
  {
    id: 'arxiv23-codetf',
    title: 'CodeTF: One-Stop Transformer-based Library for CodeLLMs',
    authors: ['Nghi D. Q. Bui', 'Henry Le', 'Yue Wang', 'Akhilesh Deepak Gotmare', 'Junnan Li', 'Steven Hoi'],
    venue: 'arXiv preprint',
    year: 2023,
    type: 'preprint',
    abstract: 'CodeTF provides a unified framework for working with code-focused large language models, offering pre-trained models and evaluation tools.',
    pdfUrl: 'https://arxiv.org/abs/2306.00029',
    codeUrl: 'https://github.com/salesforce/CodeTF'
  }
];