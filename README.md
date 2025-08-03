# Angular Client on AKS
This is a proof of concept (POC) project demonstrating how to use Azure DevOps to build Docker images for an Angular application,  and deploy it  to an Azure Kubernetes Service (AKS) cluster.

# Prerequisites
- Azure subscription and resource group.
- Azure Container Registry (ACR).
- Azure Kubernetes Service (AKS) cluster.
- Azure DevOps account with project, pipeline, and service connection setup properly.

# Deployment Overview
Once the code is built and deployed by the provided pipelines using Azure DevOps, the following resources will be available in Azure portal:

- A Docker image named angular-client in ACR.
- A workload named angular-client with the corresponding pod deployed in  AKS cluster.
- A service (LoadBalancer) named angular-client-service with an external IP address.

# Calling REST API Server with Ngrx Store
Redux (ngrx store) is used by the Angular client to call REST API server.  Please ensure following packages are included in package.json:
- @ngrx/store
- @ngrx/effects
- rxjs
  
Also ensure to replace with your own REST API server URL in the effect.


# Accessing the Angular Application
The Angular application can be accessed via the following URL:

http://external-ip-address-of-angular-app-ingress
