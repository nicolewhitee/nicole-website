const patentsArray = [
    {
        title: 'Method And System for Provisioning an Application in a Distributed Multi-Tiered Computing Environment Using Case Based Reasoning',
        patentId: '12265845',
        dateIssued: 'Apr 1, 2025',
        description: 'Techniques described herein relate to a method for manag­ing a distributed multi-tiered computing (DMC) environ­ment. The method includes obtaining, by a global controller, a DMC environment management request from a user, whereas the DMC environment management request is associated with scheduling an application in the DMC environment; and in response to obtaining the request: identifying target domains for tasks associated with the application based on the request; selecting scheduling poli­cies for each target domain; obtaining fingerprints of previ­ously provisioned applications associated with the request; performing case based reasoning using the fingerprints to generate scheduling packages for the target domains; send­ing the scheduling packages to local controllers associated with the target domains; obtaining application information from the local controllers; and providing the application information to the user.'
    },
    {
        title: ' Edge Day Zero Secure Infrastructure Provisioning with Autonomic Methods',
        patentId: '12248577',
        dateIssued: 'Mar 11, 2025',
        description: 'A method of provisioning a self-provisioning computer system is disclosed.The method includes executing code in a secure base activation image to perform various functions.This includes executing an identification process, using a cryptographically created identifier included in the base activation image, with an activation service to confirm an identity of the computer system with the activation service.This further includes confirming system integrity of the computer system with the activation service. Based on confirming the identity of the computer system and con­firming system integrity of the computer system, The com­puter system is unlocked for load installation.Load instal­lation is performed by providing capabilities for the computer system to the activation service and receiving the load based on the provided capabilities.'
    },
    {
        title: 'System and Methods for Transparent Edge Application Dataset Management and Control',
        patentId: '12238349',
        dateIssued: 'Feb 25, 2025',
        description: 'Techniques described herein relate to a method for distrib­uted data management.The method may include obtaining, by a data management agent of a data host and from an application executing on the data host, a request to access data; obtaining, by the data management agent, an informa­tion set associated with the data; making a determination, by the data management agent, that at least a portion of the data is not ready to be used by the application; and performing, by the data management agent and based on the determina­tion, a data preparation action set.'
    },
    {
        title: 'Method and System for Performing Domain Level Scheduling of an Application in a Distributed Multi-Tiered Computing Environment using Reinforcement Learning',
        patentId: '12236267',
        dateIssued: 'Feb 25, 2025',
        description: 'Techniques described herein relate to a method for manag­ing a distributed multi- tiered computing(DMC) environ­ment.The method includes decomposing, by a local con­troller  associated  with  an  DMC  domain, a  service dependency graph associated with a scheduling job; assign­ ing normalized compute units and normalized network units to tasks included in the service dependency graph; generat­ing a Q - table using the service dependency graph and reinforcement Q-leaming; calculating a critical path and a max learned path using the Q-table and the service depen­dency graph; calculating the earliest start time and the latest start time for each task using the service dependency graph and the max learned path to obtain a plurality of earliest start time and latest start time pairs for each task; and generating scheduling assignments using the plurality of earliest start time and latest start time pairs for each task.'
    },
    {
        title: 'Feature Extraction and Selection in Information Processing System Environment',
        patentId: '12229178',
        dateIssued: 'Feb 18, 2025',
        description: 'Data characterization techniques in an information process­ing system environment are disclosed.In one example, at least one processing device is configured to obtain data associated with execution of at least one of a plurality of applications in an information processing system. The pro­cessing device extracts features from the obtained data, and then selects a reduced subset of features from the extracted features for use in a machine learning classification process configured to determine an intent of the obtained data.'
    },
    {
        title: 'Method and System for Managing Elastic Accelerator Resource Pools with a Shared Storage',
        patentId: '12204949',
        dateIssued: 'Jan 21, 2025',
        description: 'Techniques described herein relate to a method for managing workflows. The method may include obtaining, from a client, by a registration manager associated with accelerator pools, a request to perform a portion of a workflow using accelerators; identifying a minimum quantity and a maximum quantity of accelerators associated with the request; identifying a storage to store data associated with the portion of the workflow; identifying an accelerator pool of the accelerator pools that includes at least the maximum quantity of accelerators; establishing a connection between the client, the storage, and accelerators of the accelerator pool to perform the portion of the workflow; and initiating the performance of the portion of the workflow using the storage, the client, and the accelerators of the accelerator pool.'
    },
    {
        title: 'Secure Base Activation Image for Edge Day Zero Secure Infrastructure Provisioning',
        patentId: '12105850',
        dateIssued: 'Oct 01, 2024',
        description: 'A method of implementing a self-provisioning computer system is shown. The method includes storing a secure base activation image on a computer system. This includes stor­ing executable code to implement enhanced network dis­covery configured to first attempt to determine if a private TCP port is open and if the private TCP port is not open to default to use of a public URL on a well-known TCP port at the computer system. This further includes storing execut­able code to implement an auto-connection service config­ured to automatically connect to a remote activation service to perform identification and attestation of the computer system. This further includes storing executable code to implement a secure vault for cryptographic secrets.'
    },
    {
        title: 'Edge Day Zero Secure Infrastructure Identification And Attestation',
        patentId: '12086255',
        dateIssued: 'Sep 10, 2024',
        description: 'Self-provisioning a computer system is illustrated. Code in a secure base activation image implements an auto-connection service at the computer system. The auto-connection service attempts to perform a local activation by attempting to determine that a private port is open and using the private port, initiating an identification and attestation process with an activation service. The auto-connection service performs a remote activation by determining that the private port is closed, defaulting activation to a public port, and using the public port, initiating an identification and attestation process with the activation service. Code in the base activation image implements service(s) which execute an identification process, using a cryptographically created identifier included in the base activation image, with the activation service to confirm an identity of the computer system, confirming system integrity of the computer system with the activation service, unlocking the computer system for load installation.'
    },
    {
        title: 'Generating and Managing Workflow Fingerprints Based on Provisioning of Devices in a Device Ecosystem',
        patentId: '12032993',
        dateIssued: 'Jul 9, 2024',
        description: 'Techniques described herein relate to a method for deploy­ing workflows. The method may include receiving, by a platform controller of a domain, a workflow portion from a service controller of a federated controller, provisioning a set of devices in the domain to the workflow portion based on a first fit, generating, by the platform controller, a workflow fingerprint based on the provisioning of the set of devices and based on the workflow portion, executing the workflow portion in the domain using the set of devices, making a determination that the workflow portion requires additional resources, based on the determination, provision­ ing additional resources of the domain to the workflow portion to obtain an updated execution resource set, and updating the workflow fingerprint based on the updated execution resource set to obtain an updated workflow fin­gerprint, and executing the workflow portion using the updated execution resource set.'
    },
    {
        title: 'Data Management Techniques Using Distributed Policy Agent',
        patentId: '11995055',
        dateIssued: 'May 28, 2024',
        description: 'Techniques described herein relate to a method for distrib­uted data management. The method may include making a first determination that data is written to a data structure of storage of a data host; obtaining, based on the first deter­mination, data information associated with the data; making a second determination of intent corresponding to the data; generating a global name and metadata corresponding to the data, wherein the metadata comprises the intent; and publishing the global name and metadata to a global name repository.'
    },
    {
        title: 'Method And System For Performing Root Cause Analysis Associated With Service Impairments In A Distributed Multi-Tiered Computing Environment',
        patentId: '11994975',
        dateIssued: 'May 28, 2024',
        description: 'Certain embodiments described herein relate to a method for managing a distributed multi- tiered computing(DMC) environment. The method may include obtaining, by a local controller associated with a DMC domain, a set of correlated services associated with an anomaly; obtaining a service dependency graph associated with the set of correlated services; generating a causal variance for each service using the correlated services and the service dependency graph; generating a weighted rank order of causal services based on the causal variance associated with each service, and the weighted rank order of causal services includes a portion of the services associated with an application associated with the anomaly; and performing remediation based on the weighted rank order of the causal services.'
    },
    {
        title: 'Method and System for Provisioning Workflows Based on Locality',
        patentId: '11972289',
        dateIssued: 'Apr 30, 2024',
        description: 'Techniques described herein relate to a method for deploy­ing workflows. The method may include receiving, at a service controller of a federated controller, a request to deploy a workflow in a device ecosystem; decomposing, the workflow into a plurality of workflow portions; identifying an initial platform controller for a domain associated workflow portions; in response to the determination: iden­tifying a plurality of additional platform controllers for additional domains that previously expressed capabilities corresponding to the remaining workflow portions of the plurality of workflow portions; selecting, based on a locality associated with the anchor point, an additional platform controller of the plurality of additional platform controllers; and initiating performance of the workflow using the initial platform controller and the additional platform controller.'
    },
    {
        title: 'Method and System for Performing Service Remediation in a Distributed Multi-Tiered Computing Environment',
        patentId: '11953978',
        dateIssued: 'Apr 9, 2024',
        description: 'Techniques described herein relate to a method for manag­ing a distributed multi-tiered computing (DMC) environ­ment. The method includes obtaining, by a local controller associated with a DMC domain, a weighted rank order of causal services associated with a service impairment; obtain­ing contextual information associated with the weighted rank order of causal services; identifying top causal services based on the weighted rank order of causal services; gen­erating, using a causal symbolic engine, a ranked order of top root causes based on the top causal services and the contextual information; selecting remediation profiles asso­ciated with the top root causes; executing remediation profiles in ranked order of the top root causes; making a determination that the remediation profiles were successful; and in response to the determination: logging the service impairment and notifying a user associated with the service impairment.'
    },
    {
        title: 'Enhanced Drift Remediation with Causal Methods and Online Model Modification',
        patentId: '11928011',
        dateIssued: 'Mar 12, 2024',
        description: 'Embodiments of systems and methods for enhanced drift remediation with causal methods and online model modification are described. In some embodiments, an Information Handling System (IHS) may include a processor and a memory coupled to the processor, the memory having program instructions stored thereon that, upon execution, cause the IHS to: detect drift in an Artificial Intelligence (AI) or Machine Learning (ML) model configured to make a prediction or a causal reasoning graphical or structural inference based upon input data, identify a root cause of the drift, and tag the input data with an indication of the root cause.'
    },
    {
        title: 'Method and System for Automated Dataset Placement for Application Execution',
        patentId: '11874848',
        dateIssued: 'Jan 16, 2024',
        description: 'Techniques described herein relate to a method for distributed data management. The method may include obtaining data descriptors for an application executing on a data host, performing a dataset policy analysis using the data descriptors to determine a data placement for a dataset associated with the application using a global name repository, performing, based on the data policy analysis, the data placement, and based on the data placement, updating the global name repository.',
    },
    {
        title: 'Optimizing Workflow Movement Through Device Ecosystem Boundaries',
        patentId: '11669525',
        dateIssued: 'Jun 6, 2023',
        description: 'Techniques described herein relate to a method for ­optimizing workflow execution. The method may include receiving an event notification at a service controller, wherein the event notification is associated with a workflow deployed in a device ecosystem; performing, based on receiving the event notification, a workflow reconfiguration action com­prising; providing a first workflow portion to a first platform controller in a first domain in the device ecosystem; trans­mitting a workflow reconfiguration action notification to a second platform controller in a second domain of the device ecosystem; identifying, by the second platform controller and in response to receiving the workflow reconfiguration action notification, a data transfer optimization action asso­ciated with data to be transmitted from the second domain to the first domain and used during execution of the first workflow portion; and transmitting the data from the second domain to the first domain using the data transfer optimi­zation action.',
    },
    {
        title: 'Continuous Integration and Continuous Delivery Pipeline Data for Workflow Deployment',
        patentId: '11669315',
        dateIssued: 'Jun 6, 2023',
        description: 'Techniques described herein relate to a method for using pipeline data for deploying workflows. The method may include determining that a pipeline testing trigger occurred for a workflow; decomposing a pipeline testing manifest of the workflow; generating a testing execution plan using the decomposed workflow; adding instrumentation to the testing execution plan; determining that the instrumented testing execution plan is valid; deploying computing devices within a CI/CD pipeline ecosystem for performing the instrumented testing execution plan; capturing deployment logs; initiating telemetry capture; executing pipeline testing of the work­ flow based on the instrumented testing execution plan; generating a pipeline deployment information set based on the pipeline testing; and providing the pipeline deployment information set to an orchestrator of a production device ecosystem.',
    },
    {
        title: 'Multi-Level Workflow Scheduling Using Meta-Heuristic and Heuristic Algorithms',
        patentId: '11630753',
        dateIssued: 'Apr 18, 2023',
        description: 'Techniques described herein relate to a method for deploy­ing workflows. The method may include receiving, by a global orchestrator of a device ecosystem, a request to execute a workflow; decomposing, by the global orchestra­ tor, the workflow into a plurality of workflow portions; executing, by the global orchestrator, a metaheuristic algo­rithm to generate a result comprising a plurality of domains of the device ecosystem in which to execute the plurality of workflow portions; and providing, by the global orchestra­ tor, the plurality of workflow portions to respective local orchestrators of the plurality of domains based on the result of executing the metaheuristic algorithm.'
    },
    {
        title: 'Provisioning Workflows Using Subgraph Similarity',
        patentId: '11627090',
        dateIssued: 'Apr 11, 2023',
        description: 'Techniques described herein relate to a method for deploy­ing workflows. The method may include receiving, at a service controller of a federated controller, a request to deploy a workflow in a device ecosystem; decomposing, by the service controller, the workflow into a plurality of workflow portions; performing, by the service controller, a search in a capabilities and constraints data construct to identify a domain in which to perform a workflow portion of the plurality of workflow portions; providing the workflow portion and workflow constraints to a platform controller in the domain; performing, by the platform controller, a sub­ graph similarity check to determine that a previously executed workflow portion was successfully executed on a subgraph in the domain; provisioning, by the platform controller, a set of devices in the domain based on the subgraph; and executing the workflow portion in the domain.'
    },
    {
        title: 'Application of Data Services Based on Services Policies',
        patentId: '11516109',
        dateIssued: 'Nov 29, 2022',
        description: 'Techniques described herein relate to a method for perform­ing data services. The method may include receiving, from a monitor agent, a global name and metadata corresponding to data written to a data structure of storage of a data host; performing a services assessment using the global name, the metadata, and a data service policy rule to obtain at least one data service to perform on the data; and performing the at least one data service based on the services assessment.'
    },
    {
        title: 'Method and System for Provisioning Workflows with Data Management Services',
        patentId: '11461211',
        dateIssued: 'Oct 4, 2022',
        description: 'Techniques described herein relate to a method for deploy­ing workflows with data management services. The method may include receiving, at a service controller of a federated controller, a request to deploy a workflow in a device ecosystem; decomposing the workflow into a plurality of workflow portions; assigning, based on identifying a first platform controller, a first workflow portion to the first platform controller; assigning, based on identifying a second platform controller, a second workflow portion to the second platform controller; assigning, based on the plurality of workflow portions and a capabilities and constraints data construct, data management services to the first platform controller and the second platform controller; and initiating performance of the first workflow portion by the first plat­ form controller and the second workflow portion by the second platform controller, in which performing the first workflow portion and the second workflow portion includes performing the data management services.'
    },
    {
        title: 'Creating and managing dynamic workflows based on occupancy',
        patentId: '11463315',
        dateIssued: 'Oct 4, 2022',
        description: 'Techniques described herein relate to a method for deploy­ing workflows. The method may include receiving, by a platform controller of a domain, a workflow portion and workflow constraints from a service controller of a federated controller, provisioning, by the platform controller, a set of devices in the domain to the workflow portion, executing the workflow portion in the domain using the set of devices, monitoring the executing of the workflow portion to deter­ mine an occupancy of the workflow portion, making a determination that the occupancy of the workflow portion exceeds an available capacity of the domain, providing, based on the determination, the occupancy to the service controller, and in response to the occupancy, performing, by the service controller, a remediation action.'
    },
    {
        title: 'Local Small Foundation System For Inferencing',
        patentId: '18/963962',
        dateIssued: 'Nov 29, 2024'
    },
    {
        title: 'Enhanced Distributed Retrieval Augmented Generation System',
        patentId: '18/963965',
        dateIssued: 'Nov 29, 2024'
    },
    {
        title: 'Knowledge Acquisition for Retrieval Augmented Generation System',
        patentId: '18/963975',
        dateIssued: 'Nov 29, 2024'
    },
    {
        title: 'Artificial Intelligence Hybrid Distributed Inference System',
        patentId: '18/936958',
        dateIssued: 'Nov 29, 2024'
    },
    {
        title: 'Knowledge Acquisition for Distributed Learning Models',
        patentId: '18/963976',
        dateIssued: 'Nov 29, 2024'
    },
    {
        title: 'Contextual Active Dynamic Learning with a Digital Twin System',
        patentId: '18/963981',
        dateIssued: 'Nov 29, 2024'
    },
    {
        title: 'Symbolic Local Small Foundation Model Composable Reduction',
        patentId: '18/963980',
        dateIssued: 'Nov 29, 2024'
    },
    {
        title: 'Autonomous Failover DTPC Control Continuity',
        patentId: '18/890969',
        dateIssued: 'Sep 20, 2024'
    },
    {
        title: 'Edge Agent Choreographer Control System',
        patentId: '18/890973',
        dateIssued: 'Sep 20, 2024'
    },
    {
        title: 'Edge Data Autonomic Process Control System',
        patentId: '18/890978',
        dateIssued: 'Sep 20, 2024'
    },
    {
        title: 'Objective Optimization Reasoning Engine',
        patentId: '18/890981',
        dateIssued: 'Sep 20, 2024'
    },
    {
        title: 'Predictive Control In Distributed Systems',
        patentId: '18/890965',
        dateIssued: 'Sep 20, 2024'
    },
    {
        title: 'Local Zone Predictive Control',
        patentId: '18/890991',
        dateIssued: 'Sep 20, 2024'
    },
    {
        title: 'Distributed System Management With Control',
        patentId: '18/891017',
        dateIssued: 'Sep 20, 2024'
    },
    {
        title: 'Distributed System Management Validation',
        patentId: '18/891061',
        dateIssued: 'Sep 20, 2024'
    },
    {
        title: 'Systems and Methods for Hypergraph Edge Resource Demand Load Representation',
        patentId: '18/366507',
        dateIssued: 'Aug 7, 2023'
    },
    {
        title: 'Systems and Methods for Hypergraph Edge Resource Demand Knowledge Management',
        patentId: '18/366520',
        dateIssued: 'Aug 7, 2023'
    },
    {
        title: 'Systems and Methods for Edge System Resource Capacity Dynamic Policy Planning Framework',
        patentId: '18/366490',
        dateIssued: 'Aug 7, 2023'
    },
    {
        title: 'Systems and Methods for Edge Resource Demand Load Estimation',
        patentId: '18/366549',
        dateIssued: 'Aug 7, 2023'
    },
    {
        title: 'Systems and Methods for Edge Resource Demand Load Scheduling',
        patentId: '18/366555',
        dateIssued: 'Aug 7, 2023'
    },
    {
        title: 'Systems and Methods for Continued Edge Resource Demand Load Estimation',
        patentId: '18/366538',
        dateIssued: 'Aug 7, 2023'
    },
    {
        title: 'Edge Domain-Specific Accelerator Virtualization and Scheduling',
        patentId: '18/355351',
        dateIssued: 'Jul 19, 2023'
    },
    {
        title: 'Device Authentication for Onboarding',
        patentId: '18/352359',
        dateIssued: 'Jul 14, 2023'
    },
    {
        title: 'Device Onboarding on Secure Networks',
        patentId: '18/352007',
        dateIssued: 'Jul 13, 2023'
    },
    {
        title: 'Data Discovery and Classification in Information Processing System Environment',
        patentId: '18/114195',
        dateIssued: 'Feb 24, 2023'
    },
    {
        title: 'Parametric Meta-Learning Decisioning in Information Processing System Environment',
        patentId: '18/114197',
        dateIssued: 'Feb 24, 2023'
    },
    {
        title: 'Service Impairment Isolation in Information Processing System Environment',
        patentId: '18/113162',
        dateIssued: 'Feb 23, 2023'
    },
    {
        title: 'Predictive Anomaly Detection and Fault Isolation in Information Processing System Environment',
        patentId: '18/112256',
        dateIssued: 'Feb 21, 2023'
    },
    {
        title: 'Method and System for Managing a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722147',
        dateIssued: 'Apr 15, 2022'
    },
    {
        title: 'Method and System for Provisioning Applications in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722066',
        dateIssued: 'Apr 15, 2022'
    },
    {
        title: 'Method and System for Performing Device Level Management in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722058',
        dateIssued: 'Apr 15, 2022'
    },
    {
        title: 'Method and System for Managing Resource Buffers in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722121',
        dateIssued: 'Apr 15, 2022'
    },
    {
        title: 'Method and System for Performing Domain Level Scheduling of an Application in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/721987',
        dateIssued: 'Apr 15, 2022'
    },
    {
        title: 'Method and System for Performing Domain Level Scheduling of an Application in a Distributed Multi-Tiered Computing Environment Using Heuristic Scheduling',
        patentId: '17/722007',
        dateIssued: 'Apr 15, 2022'
    },
    {
        title: 'Method and System for Processing a Manifest to Provision an Application in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722071',
        dateIssued: 'Apr 15, 2022'
    },
    {
        title: 'Method and System for Dynamic Selection of Policy Priorities for Provisioning an Application in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/721964',
        dateIssued: 'Apr 15, 2022'
    },
    {
        title: 'Method and System for Performing Anomaly Detection in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722109',
        dateIssued: 'Apr 15, 2022'
    },
    {
        title: 'Unsupervised Data Characterization Utilizing Drift',
        patentId: '17/508043',
        dateIssued: 'Oct 22, 2021'
    },
    {
        title: 'Multi-Observer, Consensus Based Ground Truth',
        patentId: '17/508079',
        dateIssued: 'Oct 22, 2021'
    },
    {
        title: 'Model Prediction Confidence Utilizing Drift',
        patentId: '17/508114',
        dateIssued: 'Oct 22, 2021'
    },
    {
        title: 'Automated Identification of Training Datasets',
        patentId: '17/508017',
        dateIssued: 'Oct 21, 2021'
    },
    {
        title: 'Autonomic Detection and Correction of Artificial Intelligence Model Drift',
        patentId: '17/378844',
        dateIssued: 'Jul 19, 2021'
    },
    {
        title: 'Method and System for Provisioning Workflows with Proactive Data Transformation',
        patentId: '17/236762',
        dateIssued: 'Apr 21, 2021'
    },
    {
        title: 'Method and System for Managing Elastic Accelerator Resource Pools with a Shared Storage',
        patentId: '17/236708',
        dateIssued: 'Apr 21, 2021'
    },
    {
        title: 'Method and System for Provisioning Workflows with Dynamic Accelerator Pools',
        patentId: '17/236733',
        dateIssued: 'Apr 21, 2021'
    },
]

export default patentsArray;