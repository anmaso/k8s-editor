# k8s editor 
## An easy way to create descriptor files

Editing kubernetes descriptors by hand is boooring.
Even when starting with vscode you have to remember what fields to add.

This simple helper may get you on speed with minimal fuss for your simple descriptors

You can add/remove different sections of the deployment with the checkboxes

Besides deployment descriptor it also covers:
- Deployment
- Services
- Ingress
- Configmap
- Kustomize

## Export data

Once you have edited your files you have several options to save your work

You can save on your browser local storage so next time you open the page you have avaiable your own template.

You can copy to clipboard

You can copy to an "internet clipboard" so you can later share the value with other colleague or cURL/wget from another machine
For the "internet clipboard" it uses another free project hosted on [https://mycllip.glitch.me](https://mycllip.glitch.me)

You can even streamline the deployment to kubernetes if you `kubectl apply` directly from the "internet clipboard"
- Firs you create your deployment
- Upload to myclip (it may take a few seconds the first time you access)
- You get your own myclip url and copy the kubectl command to your computer clipboard
- Apply the command on your terminal
```
curl https://myclip.glitch.me/generated-key | kubectl apply -f -
```

