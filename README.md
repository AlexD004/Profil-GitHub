# Github Profil : component to display a user github informations

There is a component which only display github informations based on a username.

## 🏗️ Getting Started

### 📄 Prerequisites

You'll need [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en) (which comes with NPM) installed on your computer.

```
node@v16.4.2 or higher
npm@7.18.1 or higher
git@2.30.1 or higher
```

### 🔨 Installation

From your command line, first clone the GithubProfil component.
Check if you are in the good folder :

```
$ cd /path/to/folder
```

And clone the component from github :

```sh
# Clone repository
$ git clone https://github.com/AlexD004/Profil-Github

```

That's it ! You can now use the component in your project.


## 🎚️ Custom set-up

### 📋 How to use GithubProfil Component

You can edit the GithubProfil component if you want. Just open the file and change functions to call more (or less) informations, or update the JSX.
   
You can call this components in all pages you want :

```

# On top of your page, adjust the path if necessary !
import GithubProfil from 'path/to/GithubProfil'

# In the render (JSX)
<GithubProfil 
  user=" [THE.USERNAME.YOU.WANT.TO.DISPLAY.INFOS] "
/>

```
