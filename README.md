
# README Generator
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=plastic "MIT License" )](./LICENSE)
[![Node v16.14 ](https://img.shields.io/badge/Node%20v16.14-339933?labelColor=ffffff&style=plastic&logo=node.js&logoColor=339933 'Node.JS')](https://nodejs.org/)
[![Lodash v4.17.21](https://img.shields.io/badge/Lodash%20v4.17.21-3492ff?labelColor=ffffff&style=plastic&logo=lodash 'Lodash')](https://lodash.com/)
[![Inquirer v8.2.2](https://img.shields.io/badge/Inquirer-%20v8.2.2-yellow?labelColor=ffffff&style=plastic 'Inquirer')](https://www.npmjs.com/package/inquirer)
[![Markdown-Builder v0.9](https://img.shields.io/badge/Markdown--Builder-%20v0.9-green?labelColor=ffffff&style=plastic 'Markdown-Builder')](https://www.npmjs.com/package/markdown-builder)
[![ESM v3.2.25](https://img.shields.io/badge/ESM-%20v3.2.25-gold?labelColor=ffffff&style=plastic 'ESM')](https://www.npmjs.com/package/esm)



## Table Of Contents
* [Description](#description)
* [Roadmap](#roadmap)
* [Installation](#installation)
  * [Dependancies](#dependancies)
  * [Clone](#clone)
  * [Zip](#zip)
* [Usage](#usage)
  * [Starting](#starting)
  * [Sections](#sections)
  * [Editor](#editor)
* [Contact Me](#contact-me)
* [License](#license)
## Description
This was a neat project that allowed me to utilize a wrapper I
previously created.  This wrapper is for Inquirer that is easily
extended and completely object oriented.  This project allows you
to quickly generate a README file you can see a complete
walkthrough [here](https://youtu.be/MO-zx7zRsp0).
## Roadmap

- [x]  Splash scree
- [x]  Select sections
- [x]  Create License Badge
- [x]  Write README to file based on user input
- [x]  Create walkthrough video

## Installation

You will need to have Nodejs installed along with Node Package Manager(NPM)  You can
find some links below on how to install Node and NPM on Windows, Linux, and macOS.
### Dependancies
[![Node v16.14 ](https://img.shields.io/badge/Node%20v16.14-339933?labelColor=ffffff&style=plastic&logo=node.js&logoColor=339933 'NodeJS download page')](https://nodejs.org/en/download/)
* [How to Install Node.js and NPM on Windows - phoenixNAP](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
* [How to install Node.js and npm on macOS - newline](https://www.newline.co/@Adele/how-to-install-nodejs-and-npm-on-macos--22782681)
* [How To Install Node.js on Ubuntu 20.04 - DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)
### Clone
Assuming you have Node and NPM you can clone this GitHub repo, go into the directory,
and install the package.json file with NPM.
```bash
git clone https://github.com/DevJonTaylor/gen-me-read.git
cd gen-me-read
npm install
```
### Zip
Another method is to download the zip file, unzip the contents to a specific directory
and install the package.json file.

These commands that work on all three. (Windows, macOS, Linux) assuming they have
curl & tar.  Which newer version of Windows have.
```bash
curl -L -o gen-me-read.zip https://github.com/DevJonTaylor/gen-me-read/archive/refs/heads/main.zip
unzip gen-me-read.zip
cd gen-me-read-main
npm install
```

## Usage
You can see a full walkthrough [here](https://www.youtube.com/watch?v=MO-zx7zRsp0).  
Once the project is install and you are in the folder you can run it by using this command
### Starting
```bash
npm start
```

### Sections
Each section is optional even the license. To remove the license section you simply
just select none.
![Section Options](./assets/images/sections.png 'Select Sections')
![Section Licenses](./assets/images/license.png 'License Options')

### Editor
An editor is used to capture user input because of possibility that it will include
larger sections then one line.
![Editor](./assets/images/editor.png 'Editor')

## Contact Me

- **Phone/SMS**: [(512)740-9784](tel:+15127409784/)
- **Email**: [jonnytest1101@icloud.com](mailto:jonnytest1101@icloud.com)
- **GitHub**: [@DevJonTaylor](https://www.github.com/devjontaylor)
- **LinkedIn**: [Vue-Shell](https://www.linkedin.com/in/vue-shell)
## License

[![MIT License](https://img.shields.io/badge/license-MIT-green?style=plastic)](./LICENSE)