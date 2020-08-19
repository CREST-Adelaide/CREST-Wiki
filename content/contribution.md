---
title: Contributing to Wiki
---

# How the website works

This wiki is a static website, meaning that there is no server-side script running behind the scene to generate the pages upon request. Instead, its HTML, CSS and Javascript files are built and bundled whenever on-demand and deployed on a normal Web server. Thus, static websites such as this wiki requires less resource to run and less complicated technology platform. 

Both the content and source code of the wiki are stored in a GitHub repository. The Website, which is compiled from the content and source code on the GitHub, is deployed on a Web server, from which web browsers download and display the content. A continuous delivery service automatically rebuild and deploy the website on the server whenever a commit hapens on the GitHub repository. 

# How to contribute

Content of the Wiki is written in Markdown format. To update content, you will add or modify markdown files on the GitHub and commit the change. The website then would be built automatically. 