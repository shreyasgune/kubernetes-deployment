# kubernetes-deployment
Helps explain how Kubernetes is deployed in Google Cloud.

## Initial Steps
- Create a Google Cloud Account at `https://cloud.google.com/`
- Install the GCP SDK from here `https://cloud.google.com/sdk/`
- Make sure `gcloud` works on your system. If it does not, add this to your `.bash_profile`
```
export GPATH=/Users/<yourlocation>/google-cloud-sdk/bin
export PATH=$PATH:$GPATH
```
- Enable the following APIs </br>
```
Google Container Engine
Google Compute Engine
Google Container Registry
```
- Create a Project and note down the `project_id` </br>
- Perform `gcloud init` and follow through the instructions

## Get started with it.
- Get your project ID and export it to your system: `export PROJECT_ID=<your_project_id>`
- Create a `Dockerfile` for your project. Or, you can clone mine.
- Build the docker image : `docker build -t <gcr.io/tag_name> .`
- Push your image to Google Cloud Registry : `gcloud docker --push gcr.io/tag_name`
- Create a Cluster : `gcloud container cluster create <cluster_name>`
- Make sure your `kubectl` has cmd access :
```
gcloud container clusters get-credentials <cluster_name> --zone <your-zone> --project <project_id>
```
- To get a UI for what's goin on with your cluster : `kubectl proxy` and browse to `127.0.0.1/ui`

## Deployments, Pod and Scaling

- Deploy it :
```
kubectl run <cluster_name> --image=<image_path> --port=<your-choice-of-port>
```

- Check if it's deployed and other details
```
kubectl get deployments
kubectl get pods
kubectl cluster-info
```

- Expose your deployment as a service
```
kubectl expose deployment <cluster_name> --type=<whatever_type_you_want>
```

- Find out where your service is
```
kubectl get services <cluster_name>
```

- Browse to the `external-IP:port` to see if your webservice is running.

- Scale it : `kubectl scale deployment <cluster_name> --replicas=<# of replicas ya want>`

# My build
### My App @ http://35.190.141.75:8080/
### Dockerhub Image : https://hub.docker.com/r/shreyasgune/kubernetes-app-174114/tags/
### GCR Image : https://gcr.io/kubernetes-app-174114/shreyasgune/kubernetes-app-174114
