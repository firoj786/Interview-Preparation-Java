Create an Azure Kubernetes Service cluster.

Your company plans to deploy your cloud-based video rendering service using Azure Kubernetes Service (AKS) as your cloud-native development platform. Before you can deploy any application, you need to create your AKS cluster.

Kubernetes clusters.

Kubernetes is based on clusters. Instead of having a single virtual machine (VM), it uses several machines working as one. These VMs are called nodes. Kubernetes is a cluster-based orchestrator. It provides your application with several benefits, such as availability, monitoring, scaling, and rolling updates.


Deploy an application on your Azure Kubernetes Service cluster.

Your company is looking at ways to deploy your cloud-based video rendering service. You chose Azure Kubernetes Service (AKS) as your cloud-native development platform. With the cluster configured, you're ready to deploy one of the components in your video rendering application. You decide to deploy a static version of your company's website to explore the Kubernetes deployment process.

Before we discuss the Kubernetes way of deployment, let's review some of the steps you'd take to deploy a similar application to a non-Kubernetes environment.

Assume you're using an Azure virtual machine (VM) as your target platform. The first step is to prepare the server software to host the application. You will:

Install the operating system.
Make sure to update the OS to the latest security and software patches.
Install and configure the web server software.
Deploy the web application.
Repeat this process for each new VM when you decide to scale the website out to handle an increase in demand from customers.

An alternative approach is to run the website on a container-based platform like Azure Container Instances. You don't need to worry about the underlying server technology, but you have to configure and manage several containers to use this strategy manually.

Kubernetes and AKS help you orchestrate containers. The Kubernetes container orchestration features make it easy to manage workloads on the cluster. You deploy workloads by using containers built from container images to run your applications within an AKS cluster.


What is a Kubernetes pod?

A Kubernetes pod groups containers and applications into a logical structure. These pods have no intelligence and are composed of one or more application containers. Each one has an IP address, network rules, and exposed ports.

For example, if you wanted to search all workloads related to the contoso-website, you'd query the cluster for pods with the label app and the value contoso-website.


What is Kubernetes deployment?

A Kubernetes deployment is an evolution of pods. A deployment wraps the pods into an intelligent object that allows them to scale out. You can easily duplicate and scale your application to support more load without the need to configure complex networking rules.

Deployments allow users to update applications just by changing the image tag without downtime. When you update a deployment, instead of deleting all apps, the deployment turns off the online apps one by one. Then, it replaces them with the newest version. This aspect means any deployment can update the pods inside it with no visible effect in availability.


Kubernetes manifest files.

A Kubernetes manifest file allows you to describe your workloads in the YAML format declaratively and simplify Kubernetes object management.

Imagine you have to deploy a workload by hand. You need to think about and manage several aspects. You'd need to create a container, select a specific node, wrap it in a pod, run the pod, monitor execution, and so on.

Manifest files contain all the information that you need to create and manage the described workload.

