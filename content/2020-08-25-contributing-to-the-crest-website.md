---
title: Contributing to the CREST Website
---
## Editing the Website Content

Most of the content editing can be done directly in the Web-based CMS, accessible at one of the following URLs:
- https://crest.nk-tran.com/admin/
- https://crest-centre.net/admin/

In order to access the CMS, you need to be added to the GitHub organization ``CREST-Adelaide`` and granted write access to the ``CREST-Website`` repository. Contact Nguyen or William in case you have not received your GitHub invitation. 

The CMS has already been configured to edit most relevant types of content, primarily research areas and news articles. If you need to make more substantial edit to the structure of the Website, follow the instructions below.


## Debug the website on a local machine


### Clone the repository

Run the command in the terminal
``` sh
git clone https://github.com/CREST-Adelaide/CREST-Website

```

### Install the dependencis by yarn
Please use yarn instead of npm.

Cd into the folder and run:

``` sh
yarn install
```

### Run the website by npm
Run the command below to start the development mode:

``` sh
npm run start
```
### Browser

Open the broser

``` sh
http://localhost:8000/
```

## Edit your personal information

### Personal introduction
All of our information is stored in a JSON file, if there's some mistake of your information or you want to edit your personal information. Please find the folder:

``` sh
/src/data/global/teams.json
```

Edit your detail, as for "socials", please fill them if you have them, we will do further development later.

### Portrait

If you want to change your photo, please upload a photo to the folder below:
``` sh
/src/data/global/images/team/
```

And edit your personal introduction in the previous step.


## Add new pages

### Directory
If you'd like to add a brand new page for our website, it's super simple, just write a markdown file and upload it to the folder below:
``` sh
/src/data/global/pages/
```


### File header
Make sure you have the correct header in the file.


``` yaml
---
title: "Collaboration"
date: "2020-07-01 15:03:00"
author: "Owen Christ"
featured_image: "../../images/blog/blog-03-1170x600.jpg"
video_link: "null"
quote_author: "null"
quote_text: "null"
categories: 
    - Positions
    - cyber security
tags: 
    - Cyber Security
    - IT Services
format: "null"
type: "pages"
is_featured: true
---
```

Please note, some of the parameters are not effective but necessary.

For example: "featured_image" is not effective at the moment but must have. "author" is not effective but we must make is as "Owen Christ" at the moment because we didn't direct our team members in the search list, we will deal with this later.



### How to use the new page
The page url will be http://www.crest-centre.net/yourfilename.

You are able to use this url in other pages, such as in your research area, you could have a link, linking to this new page.

You are able to make this page as your personal page as well.


### Layout issue

If you are not satisfied with current layout, please feel free to contact with William or Leo to discuss what kind of layout you'd like to have.

If you have any idea about improving our website, please feel free to contact with Nguyen, or anyone of us.

If you find any BUG, please do not hesitate to contact us or open a new issue on GitHub.