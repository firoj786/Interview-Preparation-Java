1. What is Kubernetes? Why is it used?
Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications. It ensures application reliability, scalability, and efficient resource utilization across clusters.
 
2. What are the core components of Kubernetes architecture?
· Master Node Components: 
o API Server: Manages the cluster and serves the Kubernetes API.
o Controller Manager: Ensures desired states by monitoring and acting on changes.
o Scheduler: Allocates Pods to Nodes based on resource requirements.
o etcd: A distributed key-value store for cluster data.
· Worker Node Components: 
o Kubelet: Communicates with the API server and ensures Pods are running.
o Kube-proxy: Manages networking and load balancing.
o Container Runtime: Runs the containers (e.g., Docker, CRI-O, or containerd).

3. Explain the difference between a Pod and a Container.
· A Pod is the smallest deployable unit in Kubernetes, containing one or more containers.
· A Container is an isolated runtime environment. Kubernetes manages containers within Pods, not directly.

4. What is a Node in Kubernetes?
A Node is a physical or virtual machine that runs Pods and contains necessary components like the kubelet, kube-proxy, and a container runtime.

5. What is a Pod in Kubernetes, and why is it considered the smallest deployable unit?
A Pod is a logical group of one or more containers sharing storage, network, and specifications. It represents the smallest deployable unit because Kubernetes manages workloads at the Pod level.

6. What is a ReplicaSet, and how is it different from a ReplicationController?
· ReplicaSet: Ensures a specified number of replicas of a Pod are running. Supports set-based label selectors.
· ReplicationController: Similar but supports equality-based selectors only.

7. What is the purpose of a Service in Kubernetes?
A Service provides a stable network endpoint and load balancing for a set of Pods, abstracting their dynamic IP addresses.

8. Explain the concept of Namespaces in Kubernetes.
Namespaces partition cluster resources into isolated segments, enabling multi-tenant environments or resource segmentation.

9. What is a Deployment in Kubernetes? How does it manage Pods?
A Deployment provides declarative updates for Pods and ReplicaSets, managing scaling, rolling updates, and rollbacks.

10. What is the role of etcd in Kubernetes?
etcd is a distributed key-value store that stores all cluster data, ensuring consistency and availability for state management.

11. Explain ConfigMaps and Secrets. How do they differ?
· ConfigMaps: Store configuration data as key-value pairs, not sensitive.
· Secrets: Store sensitive data like passwords, encoded in base64 for security.





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

