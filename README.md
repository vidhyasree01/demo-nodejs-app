## Nodejs application deployment in k8s using Helm

Step 1: Setting up the cluster 
 - Ininalize the minikube cluster in the local environment($minikube start, minikube status)
 - verify kubectl to intract with the minikube cluster (kubectl config set-context minikube, kubectl get node/pod)
step 2: Preparing the Nodejs application
 - created simple nodjs application with expressjs($npm init -y , $npm install express)
 - containeraized the application with the help of Dockerfile($ docker build -t <imagename>:<tagname>)
step 3: Helm Chart craetion
 - create a helm chart under the root directory($helm create <chartname)
 - define the k8s objects like Deployment,service,Ingress yaml files and parameteraized with value.yaml file($helm install <releasename> ./path of the helm chart directory)
 step 4: Deploying the application using helm in the k8s cluster
 - verify the application are deployed by issing the kubectl get pod /svc
 - verify the ingress controller is routing the traffic based on the host URL(host:http://nodejs-app.local)
 step 5:Implementing the updates and rollback with helm
 - build a new version and upgrade the helm deployment to route the traffic to newer version($helm upgrade <releasename> chartdirectory)
 - checked with previous version by issuing the rollback ($helm rollback <releasename> Revisionname)
 #challenges encounter
 - initially docker image not updated with the dockerhub registry so that we faced ErrImagepull issue
 - ingress controller is not able to accessed from outside od internet because the minikube loadbalancer IP
 ##Improvements from the devops side
- Use a managed Kubernetes service (e.g GKE, AKS)
- Set up a CI/CD pipeline for automated deployments
- Implement resource constraints and auto-scaling
- Ensure security best practices (e.g., secrets management, network policies)
- Use monitoring and logging tools (e.g., Prometheus, Grafana)
# clean up the resources
- clean up all the resources created during the demo($minikube delete ,helm uninstall <releasename>)