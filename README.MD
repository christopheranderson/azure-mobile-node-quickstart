# Quickstart

This demo works with any of the normal Azure Quickstart projects and clients which you can download from the portal. It creates a TodoItem.js table, with Dynamic Schema turned on and allows anonymous read/write (this is not good security policy).

## Deploy to Azure ...

### ... the 'easy' way

1. Press the button below to deploy into your Azure Subscription

  [![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

2. Grab the client from your new Web App ([See step 3 below for more info](#demo-step-3))

### ... the 'hard' way

1. [Create a Web App in Azure and enable git publishing](https://azure.microsoft.com/en-us/documentation/articles/web-sites-nodejs-develop-deploy-mac/#create-a-web-app-and-enable-git-publishing) (see link for details)
     - Web and Mobile apps are functionally equivalent (literally just a minor conifg setting), but there is some minor portal experience that changes - feel free to create a Mobile App here and then enable git publishing in the same way. No other directions should change if you use Mobile Apps.

2. Clone this repo and deploy
  ```
  git clone https://github.com/christopheranderson/azure-mobile-apps-quickstart
  cd ./azure-mobile-apps-quickstart
  git remote add azure {sitename}.scm.azurewebsites.net/{sitename}.git
  ```
   <a id="demo-step-3"></a>
3. In the [Azure portal](https://portal.azure.com), download the client.
   0. <a id="demo-step-3"></a>Navigate to your Web/Mobile App
   1. Open the Settings blade
   2. Open the Get Started blade
   3. Choose your favorite client
   4. Download the client
   5. (Optional) if you want data to be persisted, you'll want to set up a SQL Database

## Usage and License

See the [LICENSE](./LICENSE) file for more info

Unless otherwise prohibited, feel free to use this where you want. Try to link back to this demo when you can so others can find out more information.
