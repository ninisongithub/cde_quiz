// OCR-converted text quiz questions.
const BASE_QUESTION_POOL = [
  {
    "id": "text-1",
    "kind": "text",
    "prompt": "You want to add an additional maintenance user on the PSM for SSH. How can you accomplish this if InstallCyberarkSSHD is set to Integrated?",
    "options": [
      "Create a local user and add it to the PSMMaintenance Group.",
      "Create a local user called proxymng.",
      "Create a local user and add it to group configured for the parameter AllowGroups in the /etc/sshd_config file.",
      "Create a local user, called psmpmng."
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "text-2",
    "kind": "text",
    "prompt": "You want to change the name of the PVWAappuser of the second PVWA server. Which steps are part of the process? (Choose two.)",
    "options": [
      "Update PVWA.ini with new user name",
      "Update Vault.ini with new user name",
      "Create new user in PrivateArk",
      "Rename user in PrivateArk",
      "Create new cred file for user"
    ],
    "correct": [
      4,
      5
    ]
  },
  {
    "id": "text-3",
    "kind": "text",
    "prompt": "When configuring RADIUS authentication, which utility is used to create a file containing an encrypted version of the RADIUS secret?",
    "options": [
      "CAVaultManager",
      "CACert",
      "CreateAuthFile",
      "CreateCredFile"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-4",
    "kind": "text",
    "prompt": "In which configuration file on the Vault can filters be configured to either include or exclude log messages that are sent through SNMP?",
    "options": [
      "PARAgent.ini",
      "DBParm.ini",
      "TSParm.ini",
      "CyberArkv2 MIB file"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-5",
    "kind": "text",
    "prompt": "In which configuration file do you add LoadBalancerClientAddressHeader when you enable x-forwarding on the PVWA loadbalancer?",
    "options": [
      "PVconfiguration.xml",
      "web.config",
      "apigw.ini",
      "CyberArkScheduledTasks.exe.config A first PSM server has been installed."
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "text-6",
    "kind": "text",
    "prompt": "What should you confirm before installing any additional PSM servers?",
    "options": [
      "The PSM ID of the first installed PSM server was changed and the additional PSM server can use the same PSM ID.",
      "The user performing the installation is a direct owner in the PSMUnmanagedSessionAccounts Safe, PSM safe and member of PVWAMonitor group.",
      "The user performing the installation is not a direct owner in the PSMUnmanagedSessionAccounts Safe.",
      "The path of the Recordings Folder must be different on all PSM installations. During the PSM installation process, Safes and a User are created."
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "text-7",
    "kind": "text",
    "prompt": "In addition to Add Safes, Add/Update Users, Reset Users’ Passwords, and Activate Users, which authorization(s) does the Vault user installing the PSM need to enable them to be successfully created?",
    "options": [
      "Manage Vault File Categories",
      "Manage Server File Categories",
      "Manage Directory Mapping, Manage Server File Categories",
      "Manage Directory Mapping, Manage Vault File Categories C."
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-8",
    "kind": "text",
    "prompt": "Which file should you edit?",
    "options": [
      "TSparm.ini",
      "Vault.ini",
      "DBparm.ini",
      "user.ini"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-9",
    "kind": "text",
    "prompt": "Which utility should be used to register the Vault in Amazon Web Services?",
    "options": [
      "CAVaultManager",
      "StorageManager",
      "CloudVaultManager",
      "CACert"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-10",
    "kind": "text",
    "prompt": "To enable LDAP over SSL for a Vault when DNS lookups are blocked, which step must be completed?",
    "options": [
      "Add the FQDN & IP details for each LDAP host into the local hosts file of the Vault server.",
      "Configure an AllowNonStandardFWAddresses rule in DBParm.ini on the Vault to allow outbound TCP 53 to the organization’s DNS servers.",
      "Ensure LDAP hosts added to the directory mapping configuration are defined using only IP addresses.",
      "Set the ReferralsDNSLookup parameter value to “No” in the directory configuration."
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-11",
    "kind": "text",
    "prompt": "A customer is moving from an on-premises to a public cloud deployment. What is the best and most cost-effective option to secure the server key?",
    "options": [
      "Install the Vault in the cloud the same way you would in an on-premises environment. Place the server key in a password protected folder on the operating system.",
      "Install the Vault in the cloud the same way you would in an on-premises environment. Purchase a Hardware Security Module to secure the server key.",
      "Install the Vault using the native cloud images and secure the server key using native cloud Key Management Systems.",
      "Install the Vault using the native cloud images and secure the server key with a Hardware Security Module."
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "text-12",
    "kind": "text",
    "prompt": "You want to add an additional maintenance user on the PSM for SSH. How can you accomplish this if InstallCyberarkSSHD is set to Yes or No?",
    "options": [
      "Create a local user and add it to the PSMMaintenance Group.",
      "Create a local user called proxymng<number>.",
      "Create a local user and add it to group configured for the parameter AllowGroups in the /etc/sshd_config file.",
      "Create a local user, called psmpmng<number>."
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-13",
    "kind": "text",
    "prompt": "13. All 80 employees from your satellite Tokyo office are complaining that browsing the PVWA site is very slow; however, your New York headquarters users are not experiencing this. The current PAM solution is: 2 distributed Vaults, the primary one in New York and a satellite in Tokyo, 2 PVWA servers, both in New York with load balancing configured 2 PSM servers, both in New York without load balancing configured 1 CPM server in New York All PVWA, PSM, and CPM servers are connected to the primary Vault Which proposal optimally resolves the performance issue while minimizing the impact to production?",
    "options": [
      "Install two new PVWA servers in Tokyo data center, configure load balancing, connect to the local satellite Vault and provide the URL of new PVWA servers to the local employees.",
      "Install two new PVWA servers in New York data center, configure load balancing and have them connect to the satellite Vault in Tokyo.",
      "Install two new PSM servers in the Tokyo data center, configure load balancing, connect to the local satellite vault, and inform the local employees to browse using the same PVWA URL.",
      "Change the current distributed Vaults architecture, migrate back to a Primary-DR architecture, install two new PVWA servers in the Tokyo data center and configure load balancin",
      "Connect to the local DR Vault and provide the URL of new PVWA servers to the local employees."
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-14",
    "kind": "text",
    "prompt": "Validate that primary CPMs services are stopped and set to manual On the DR CPM confirm details in the vault.ini , reset password of CPM and recreate the cred file Enable CPM services on the DR CPM Review logs 15. The account used to install a PVWA must have ownership of which safes? (Choose two.)",
    "options": [
      "VaultInternal",
      "PVWAConfig",
      "System",
      "Notification Engine",
      "PVWAReports"
    ],
    "correct": [
      1,
      4
    ]
  },
  {
    "id": "text-15",
    "kind": "text",
    "prompt": "16. Which command should be executed to harden a Vault after registering it to Azure?",
    "options": [
      "HardenAzureFW.ps1",
      "ExecuteStage ./Hardening/HardeningConf.xml",
      "HardenVaultFW.ps1",
      "ExecuteStage ./PostInstallation/PostInstallation.xml"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-16",
    "kind": "text",
    "prompt": "17. Which component must be installed before the first CPM installation?",
    "options": [
      "PTA",
      "PSM",
      "PVWA",
      "EPM"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "text-17",
    "kind": "text",
    "prompt": "18.  What is a valid combination of primary and secondary layers of authentication to a company's two-factor authentication policy?",
    "options": [
      "RSA SecurID Authentication (in PVWA) and LDAP Authentication",
      "CyberArk Authentication and RADIUS Authentication",
      "Oracle SSO (in PVWA) and SAML Authentication",
      "LDAP Authentication and RADIUS Authentication"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-18",
    "kind": "text",
    "prompt": "19. CyberArk User Neil is trying to connect to the Target Linux server 192.168.1.164 using a domain account ACME/linuxuser01 on domain acme.corp using PSM for SSH server 192.168.65.145. What is the correct syntax?",
    "options": [
      "ssh neil@linuxuser01:acme.corp@192.168.1.164@192.168.65.145",
      "ssh neil@linuxuser01#acme.corp@192.168.1.164@192.168.65.145",
      "ssh neil@linuxuser01@192.168.1.164@192.168.65.145",
      "ssh neil@linuxuser01@acme.corp@192.168.1.164@192.168.65.145"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "text-19",
    "kind": "text",
    "prompt": "20. You are designing the number of PVWAs a customer must deploy. The customer has three data centers with a distributed Vault in each, requires high availability, and wants to use all Vaults at all times. How many PVWAs does the customer need?",
    "options": [
      "six or more",
      "four",
      "two or less",
      "three"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-20",
    "kind": "text",
    "prompt": "21. A customer asked you to help scope the company’s PSM deployment. What should be included in the scoping conversation?",
    "options": [
      "Recordings file path",
      "Recordings codec",
      "Recordings retention period",
      "Recordings file type"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "text-21",
    "kind": "text",
    "prompt": "22. A customer has three data centers distributed globally and wants highly-available PSM connections in each segmented zone. In addition, the customer needs a highly-available PSM connection for the CyberArk Admins. What will best satisfy this customer's needs?",
    "options": [
      "one PSM per zone with a load balancer and two PSMs for Admins with a load balancer",
      "six PSMs in the main data center with a load balancer and one PSM for Admins",
      "two PSMs per zone with a load balancer and two PSMs for Admins with a dedicated load balancer",
      "three PSMs per zone with CyberArk built-in load balancing"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "text-22",
    "kind": "text",
    "prompt": "23. You need to enable the PSM for all platforms. Where do you perform this task?",
    "options": [
      "Platform Management > (Platform) > UI & Workflows",
      "Master Policy > Session Management",
      "Master Policy > Privileged Access Workflows",
      "Administration > Options > Connection Components"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "text-23",
    "kind": "text",
    "prompt": "24. Which CyberArk utility allows you to create lists of Master Policy Settings, owners and safes for output to text files or MSSQL databases?",
    "options": [
      "Export Vault Data",
      "Export Vault Information",
      "PrivateArk Client",
      "Privileged Threat Analytics"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-24",
    "kind": "text",
    "prompt": "BackupFilesDeletion=No PARestore vault.ini operator /FullVaultRestore CAVaultManager RecoverBackupFiles CAVaultManager RestoreDB BackupFilesDeletion=Yes,24,1,5,7d 26. What are the basic network requirements to deploy a CPM server?",
    "options": [
      "port 1858 to vault and port 443 to PVWA",
      "port 1858 only",
      "all ports to the vault",
      "port UDP/1858 to vault and all required ports to targets and port 389 to the PSM"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-25",
    "kind": "text",
    "prompt": "27. You have been asked to identify the up or down status of Vault services. Which CyberArk utility can you use to accomplish this task?",
    "options": [
      "Vault Replicator",
      "PAS Reporter",
      "Remote Control Agent",
      "Syslog"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "text-26",
    "kind": "text",
    "prompt": "28. To use PSM connections while in the PVWA, what are the minimum safe permissions a user or group will need?",
    "options": [
      "List Accounts, Use Accounts",
      "List Accounts, Use Accounts, Retrieve Accounts",
      "Use Accounts",
      "List Accounts, Use Accounts, Retrieve Accounts, Access Safe without confirmation"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-27",
    "kind": "text",
    "prompt": "29. Which permissions are needed for the Active Directory user required by the Windows Discovery process?",
    "options": [
      "Domain Admin",
      "LDAP Admin",
      "Read/Write",
      "Read"
    ],
    "correct": [
      4
    ]
  },
  {
    "id": "text-28",
    "kind": "text",
    "prompt": "30. You are creating a new Rest API user that utilizes CyberArk Authentication. What is a correct process to provision this user?",
    "options": [
      "Private Ark Client > Tools > Administrative Tools > Users and Groups > New > User",
      "Private Ark Client > Tools-> Administrative Tools > Directory Mapping > Add",
      "PVWA > User Provisioning > LDAP Integration > Add Mapping",
      "PVWA > User Provisioning > Users and Groups > New > User"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-29",
    "kind": "text",
    "prompt": "31. In the screenshot displayed, you just configured the usage in CyberArk and want to update its password. What is the least intrusive way to accomplish this?",
    "options": [
      "Use the \"change\" button on the usage’s details page",
      "Use the \"change\" button on the parent account’s details page",
      "Use the \"sync\" button on the usage's details page.",
      "Use the \"reconcile\" button on the parent account's details page. D"
    ],
    "correct": [
      4
    ]
  },
  {
    "id": "text-30",
    "kind": "text",
    "prompt": "32. Which components can connect to a satellite Vault in distributed Vault architecture?",
    "options": [
      "CPM, EPM, PTA",
      "PVWA, PSM",
      "CPM, PVWA, PSM",
      "CPM, PSM"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "text-31",
    "kind": "text",
    "prompt": "33. You have been asked to turn off the time access restrictions for a safe. Where is this setting found?",
    "options": [
      "PrivateArk",
      "RestAPI",
      "Password Vault Web Access (PVWA)",
      "Vault"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-32",
    "kind": "text",
    "prompt": "34. Your organization has a requirement to allow users to \"check out passwords\" and connect to targets with the same account through the PSM. What needs to be configured in the Master policy to ensure this will happen?",
    "options": [
      "Enforce check-in/check-out exclusive access = active; Require privileged session monitoring and isolation = active",
      "Enforce check-in/check-out exclusive access = inactive; Require privileged session monitoring and isolation = inactive",
      "Enforce check-in/check-out exclusive access = inactive; Record and save session activity = active",
      "Enforce check-in/check-out exclusive access = active; Record and save session activity = inactive"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-33",
    "kind": "text",
    "prompt": "35. A newly created platform allows users to access a Linux endpoint. When users click to connect, nothing happens. Which piece of the platform is missing?",
    "options": [
      "PSM-SSH Connection Component",
      "UnixPrompts.ini",
      "UnixProcess.ini",
      "PSM-RDP Connection Component 36 DRAG DROP - Arrange the steps to complete CPM Hardening for Out-of-Domain Deployment in the correct sequence. 1-Locate the CPM_Hardnering.ps1 script in the installation media 2-Open PowerShell as administrator and run the script 3-Review the Script log call hardeningscript Log 4-Review the script log called CYBRHardneringsecedit.log"
    ],
    "correct": [
      3,
      4
    ]
  },
  {
    "id": "text-34",
    "kind": "text",
    "prompt": "37. You are helping a customer prepare a Windows server for PSM installation. What is required for a successful installation?",
    "options": [
      "Windows 2012 KB4558843",
      "Remote Desktop Services (RDS) Session Host Role",
      "Windows 2016 KB4558843",
      "Remote Desktop Services (RDS) Session Broker"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "text-35",
    "kind": "text",
    "prompt": "38. When creating Distributed Vault environment architecture, what is the maximum number of Vault servers that can be deployed?",
    "options": [
      "5 - number of primary and satellite Vaults can be specified during installation",
      "3 - all primary",
      "6 - 1 primary and 5 satellite",
      "10 - 2 primary and 8 satellite"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "text-36",
    "kind": "text",
    "prompt": "39. After installing the Vault, you need to allow Firewall Access for Windows Time service to sync with NTP servers 10.1.1.1 and 10.2.2.2. What should you do?",
    "options": [
      "Edit DBParm.ini to add: AllowNonStandardFWAddresses=[10.1.1.1,10.2.2.2],Yes,123:outbound/udp.",
      "Edit DBParm.ini to add: NTPServer=[10.1.1.1:123/UDP,10.2.2.2:123/UDP].",
      "Edit DBParm.ini to add: AllowNonStandardFWAddresses=[10.1.1.1,10.2.2.2],Yes:123,outbound/udp,123:inbound/udp.",
      "Edit the Windows Firewall configuration to add a rule for Port 123/udp outbound to 10.1.1.1 and 10.2.2.2."
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-37",
    "kind": "text",
    "prompt": "40. A customer has two data centers and requires a single PVWA url. Which deployment provides the fastest time to reach the PVWA and the most redundancy?",
    "options": [
      "Deploy two PVWAs behind a global traffic manager.",
      "Deploy one PVWA only.",
      "Deploy two PVWAs in an active/standby mode.",
      "Deploy two PVWAs using DNS round robin."
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-38",
    "kind": "text",
    "prompt": "41. What is mandatory for a PVWA Installation?",
    "options": [
      "A DNS entry for the PVWA url must be created.",
      "A company-signed TLS certificate must be imported into the server.",
      "A Vault Administrative User must be used to register the PVWA.",
      "Data Execution Prevention must be disabled."
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "text-39",
    "kind": "text",
    "prompt": "42. As Vault Admin, you have been asked to configure LDAP authentication for your organization's CyberArk users. Which permissions do you need to complete this task?",
    "options": [
      "Audit Users and Add Network Areas",
      "Audit Users and Manage Directory Mapping",
      "Audit Users and Add/Update Users",
      "Audit Users and Activate Users"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "text-40",
    "kind": "text",
    "prompt": "43. Before the hardening process, your customer identified a PSM Universal Connector executable that will be required to run on the PSM. Which file should you update to allow this to run?",
    "options": [
      "PSMConfigureAppLocker.xml",
      "PSMHardening.xml",
      "PSMAppConfig.xml",
      "PSMConfigureHardening.xml"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-41",
    "kind": "text",
    "prompt": "44. You are installing multiple PVWAs behind a load balancer. Which statement is correct?",
    "options": [
      "Port 1858 must be opened between the load balancer and the PVWAs.",
      "The load balancer must be configured in DNS round robin.",
      "The load balancer must support \"sticky sessions\".",
      "The LoadBalancerClientAddressHeader parameter in the PVWA.ini file must be set."
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "text-42",
    "kind": "text",
    "prompt": "45. A customer installed multiple PVWAs in the production environment behind a load balancer VIP. They subsequently observed that all incoming traffic from the load balancer VIP goes to only one PVWA; even though all the PVWAs are up and running. What could be the likely cause of this situation?",
    "options": [
      "The load balancing algorithm is the least connections algorithm.",
      "The Certificate of the loadbalancer is not a wild card cert.",
      "The Load Balancing Pool only has one PVWA server",
      "SSL passthrough is not configured on the load balancer."
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "text-43",
    "kind": "text",
    "prompt": "46. For a Digital Vault Cluster in a high availability configuration, how does the cluster determine if a node is down?",
    "options": [
      "The heartbeat is no longer detected on the private network.",
      "The shared storage array is offline.",
      "An alert is generated in the Windows Event log.",
      "The Digital Vault Cluster does not detect a node failure."
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "text-44",
    "kind": "text",
    "prompt": "48. If the AccountUploader Utility is used to create accounts with SSH keys, which parameter do you use to set the full or relative path of the SSH private key file that will be attached to the account?",
    "options": [
      "KeyPath",
      "KeyFile",
      "ObjectName",
      "Address"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "ocr-45",
    "kind": "text",
    "prompt": "What is the primary reason for installing more than one active Central Policy Manager (CPM)?",
    "options": [
      "Installing CPMs in multiple sites prevents complex firewall rules to manage devices at remote sites",
      "Multiple instances create fault tolerance",
      "Multiple instances increase response time",
      "Having additional CPMs increases the maximum number of devices CyberArk can manage"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image9.png"
  },
  {
    "id": "ocr-46",
    "kind": "text",
    "prompt": "The Remote Desktop services role installed on PSM must be properly licensed by Microsoft.",
    "options": [
      "No, this is not necessary.",
      "Yes, this is necessary and must be scoped and purchased prior to project implementation.",
      "Yes, RDS is included as part of Microsoft operating system license.",
      "No, RDS licenses are only required when using the RemoteApp feature."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image11.png"
  },
  {
    "id": "ocr-47",
    "kind": "text",
    "prompt": "When using multiple Central Policy Managers (CPM), which one of the following Safes is shared by all CPMs?",
    "options": [
      "PasswordManager",
      "PasswordManager_Pending",
      "PasswordManager_workspace",
      "PasswordManager_ADInternal"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image13.png"
  },
  {
    "id": "ocr-48",
    "kind": "text",
    "prompt": "Which of the following is NOT a use case for installing multiple Central Policy Managers (CPM)?",
    "options": [
      "A single CPM cannot accommodate the total number of accounts managed.",
      "Accounts are managed in multiple sites or VLANs protected by firewall.",
      "Reduce network traffic across WAN links.",
      "Provide load-balancing capabilities when managing passwords on target devices."
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image16.png"
  },
  {
    "id": "ocr-49",
    "kind": "text",
    "prompt": "The DR module allows an integration with enterprise backup software.",
    "options": [
      "True",
      "Ol False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image20.png"
  },
  {
    "id": "ocr-50",
    "kind": "text",
    "prompt": "Multiple Central Policy Manager (CPM) servers can be load balanced.",
    "options": [
      "Ol True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image22.png"
  },
  {
    "id": "ocr-51",
    "kind": "text",
    "prompt": "Multiple Password Vault Web Access (PVWA) servers can be load balanced.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image26.png"
  },
  {
    "id": "ocr-52",
    "kind": "text",
    "prompt": "When working with the CyberArk High Availability Cluster, which services are running on the passive node?",
    "options": [
      "Cluster Vault Manager and PrivateArk Database.",
      "Cluster Vault Manager, PrivateArk Database and Remote Control Agent",
      "Cluster Vault Manager",
      "Cluster Vault Manager and Remote Control Agent"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image28.png"
  },
  {
    "id": "ocr-53",
    "kind": "text",
    "prompt": "When working with the CyberArk Disaster Recovery (DR) solution, which services should be running on the DR Vault?",
    "options": [
      "CyberArk Vault Disaster Recovery (DR), PrivateArk Database",
      "CyberArk Vault Disaster Recovery",
      "CyberArk Vault Disaster Recovery, PrivateArk Database, PrivateArk Server",
      "CyberArk Vault Disaster Recovery, PrivateArk Database, CyberArk Event Notification Engine"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image30.png"
  },
  {
    "id": "ocr-54",
    "kind": "text",
    "prompt": "Which service when failed does not mandate a failover and is considered optional when working the CyberArk High Availability Cluster",
    "options": [
      "PrivateArk Server",
      "PrivateArk Database",
      "Event Notification Engine",
      "Logic Container"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image32.png"
  },
  {
    "id": "ocr-55",
    "kind": "text",
    "prompt": "How does the Vault administrator configure the CyberArk Disaster Recovery (DR) solution to perform automatic failover in case of failure in the Primary Vault?",
    "options": [
      "By setting \"EnableFailover=yes\" in the padr.ini file",
      "By setting \"EnableFailover=yes\" in the dbparm.ini file",
      "By setting \"FailoverMode=yes\" in the padr.ini file",
      "By setting \"FailoverMode=yes\" in the dbparm.ini file"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image34.png"
  },
  {
    "id": "ocr-56",
    "kind": "text",
    "prompt": "When working with the CyberArk Cluster, the Virtual IP is used by:",
    "options": [
      "the CyberArk components to communicate with the Vault Cluster over the public network.",
      "the Vault nodes for exchanging keep-alive messages over the public network.",
      "the CyberArk components to communicate with the Vault Cluster over the private network.",
      "the Vault nodes for exchanging keep-alive messages over the public network."
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image37.png"
  },
  {
    "id": "ocr-57",
    "kind": "text",
    "prompt": "In a Distributed Vaults environment, which of the following components will NOT be communicating with the Satellite Vaults?",
    "options": [
      "AAM Credential Provider (previously known as AIM Credential Provider)",
      "ExportVaultData utility",
      "PAReplicate utility",
      "Central Policy Manager"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image39.png"
  },
  {
    "id": "ocr-58",
    "kind": "text",
    "prompt": "In a Disaster Recovery (DR) environment, which of the following should NEVER be configured for automatic failover due to the possibility of split-brain phenomenon?",
    "options": [
      "Password Vault Web Access (PVWA)",
      "PSM",
      "CPM",
      "PTA"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image41.png"
  },
  {
    "id": "ocr-59",
    "kind": "text",
    "prompt": "To support a fault tolerant and high-availability architecture, the Password Vault Web Access (PVWA] servers must to be configured to communicate with the Primary Vault and Satellite Vaults. Which file needs to be changed on the PVWA to enable this setup?",
    "options": [
      "Vault.ini",
      "dbparm.ini",
      "pvwa.ini",
      "Satellite.ini"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image43.png"
  },
  {
    "id": "ocr-60",
    "kind": "text",
    "prompt": "The Vault does NOT support dual factor authentication.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image45.png"
  },
  {
    "id": "ocr-61",
    "kind": "text",
    "prompt": "A Simple Mail Transfer Protocol (SMTP) integration allows the Vault administrator to forward audit records from the Vault to the Security Information and Event Management (SIEM).",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image47.png"
  },
  {
    "id": "ocr-62",
    "kind": "text",
    "prompt": "A Simple Network Management Protocol (SNMP) integration allows the Vault administrator to forward audit records from the Vault to the Security Information and Event Management (SIEM).",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image49.png"
  },
  {
    "id": "ocr-63",
    "kind": "text",
    "prompt": "Which file is used to open up a non-standard firewall port to the Vault?",
    "options": [
      "dbparm.ini",
      "PARagent.ini",
      "passparm.ini",
      "Vault.ini"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image51.png"
  },
  {
    "id": "ocr-64",
    "kind": "text",
    "prompt": "When accessing the Vault via Password Vault Web Access (PVWA], is it possible to configure multiple dual authentication methods?",
    "options": [
      "Yes, all authentication methods will be configured to use the Vault integrated authentication flow.",
      "No, dual authentication methods are not supported.",
      "Yes, authentication methods will be configured to use the combination of IS and Vault integrated authentication flow.",
      "Yes, all authentication methods will be configured to use the IS integrated authentication tlow."
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image54.png"
  },
  {
    "id": "ocr-65",
    "kind": "text",
    "prompt": "Which file is used to integrate the Vault with the RADIUS server?",
    "options": [
      "radius.ini",
      "PARagent.ini",
      "ENEConf.ini",
      "dbparm.ini"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image56.png"
  },
  {
    "id": "ocr-66",
    "kind": "text",
    "prompt": "If a transparent user matches two different directory mappings, how does the system determine which user template to use?",
    "options": [
      "The system will use the template for the mapping listed first.",
      "The system will use the template for the mapping listed last.",
      "The system will grant all of the Vault authorizations from the two templates.",
      "The system will grant only the Vault authorizations that are listed in both templates."
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image58.png"
  },
  {
    "id": "ocr-67",
    "kind": "text",
    "prompt": "Where does the Vault administrator configure in Password Vault Web Access (PVWA) the Fully Qualified Domain Name (FQDN) of the domain controller during LDAP/S integration?",
    "options": [
      "PVWA > Platform Management > LDAP Integration",
      "PVWA > Administration > LDAP Integration",
      "PVWA > Administration > Options > LDAP Integration",
      "PVWA > LDAP Integration"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image60.png"
  },
  {
    "id": "ocr-68",
    "kind": "text",
    "prompt": "The Vault can only integrate with a single Security Information and Event Management (SIEM) or SYSLOG server.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image62.png"
  },
  {
    "id": "ocr-69",
    "kind": "text",
    "prompt": "Can ITALOG records be forwarded to the monitoring solution via Security Information and Event Management (SIEM) integration?",
    "options": [
      "Yes",
      "No"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image64.png"
  },
  {
    "id": "ocr-70",
    "kind": "text",
    "prompt": "Where does the Vault administrator configure in Password Vault Web Access (PVWA] the Fully Qualified Domain Name (FQDN) of the target email server during Simple Mail Transfer Protocol (SMTP) integration?",
    "options": [
      "PVWA > Platform Management > Notification Settings",
      "PVWA > Options > Notification Settings",
      "PVWA > Administration > Notification Settings",
      "PVWA > LDAP Integration > Notification Settings"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image66.png"
  },
  {
    "id": "ocr-71",
    "kind": "text",
    "prompt": "Which file does the Vault administrator need to edit in order to configure the integration of the Vault with the radius server?",
    "options": [
      "radius.ini",
      "PARagent.ini",
      "ENEConf.ini",
      "dbparm.ini"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image69.png"
  },
  {
    "id": "ocr-72",
    "kind": "text",
    "prompt": "After the Vault administrator configures syslog integration on the Vault, the Vault will be able to:",
    "options": [
      "forward ITALOG records to Security Information and Event Management (SIEM).",
      "send out Simple Network Management Protocol (SNMP) traps.",
      "forward audit records to Security Information and Event Management (SIEM).",
      "forward emails to SIEM."
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image73.png"
  },
  {
    "id": "ocr-73",
    "kind": "text",
    "prompt": "The Vault needs to send Simple Network Management Protocol (SNMP) traps to the SNMP solution. Which file is used to configure the IP address of the SNMP server?",
    "options": [
      "snmp.ini",
      "dbparm.ini",
      "ENEConf.ini",
      "PARagent.ini"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image75.png"
  },
  {
    "id": "ocr-74",
    "kind": "text",
    "prompt": "Which of the following sends out Simple Network Management Protocol (SNMP) traps?",
    "options": [
      "PrivateArk Remote Control Agent",
      "PrivateArk Server",
      "CyberArk Event Notification Engine",
      "CyberArk SNMP agent"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image77.png"
  },
  {
    "id": "ocr-75",
    "kind": "text",
    "prompt": "Which is the purpose of the allowed Safes parameter in a Central Policy Manager (CPM) policy? Select the two best options.",
    "options": [
      "To improve performance by reducing CPM workload",
      "To prevent accidental use of a policy in the wrong Safe",
      "To allow users to access only the passwords they should be able to access",
      "To enforce Least Privilege in CyberArk"
    ],
    "correct": [
      1,
      2
    ],
    "sourceImage": "assets/image80.png"
  },
  {
    "id": "ocr-76",
    "kind": "text",
    "prompt": "Which is the purpose of the interval setting in a Central Policy Manager (CPM] policy?",
    "options": [
      "To control how often the CPM looks for system-initiated CPM work",
      "To control how often the CPM looks for user-initiated CPM work",
      "To control how long the CPM rests between password changes",
      "To control the maximum amount of time the CPM will wait for a password change to complete"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image82.png"
  },
  {
    "id": "ocr-77",
    "kind": "text",
    "prompt": "Which parameter controls how often the Central Policy Manager (CPM) looks for one-time passwords that need to be changed?",
    "options": [
      "HeadStartInterval",
      "Interval",
      "Immediatelnterval",
      "The CPM does not change the password under this circumstance."
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image84.png"
  },
  {
    "id": "ocr-78",
    "kind": "text",
    "prompt": "Which parameter controls how often the Central Policy Manager (CPM] looks for soon-to-be-expired passwords that need to be changed?",
    "options": [
      "HeadStartInterval",
      "Interval",
      "Immediatelnterval",
      "The CPM does not change the password under this circumstance."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image86.png"
  },
  {
    "id": "ocr-79",
    "kind": "text",
    "prompt": "Which parameter controls how often the Central Policy Manager (CPM] looks for exclusive passwords that need to be changed?",
    "options": [
      "HeadStartInterval",
      "Interval",
      "Immediatelnterval",
      "The CPM does not change the password under this circumstance."
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image88.png"
  },
  {
    "id": "ocr-80",
    "kind": "text",
    "prompt": "Which parameter controls how often the Central Policy Manager (CPM] looks for accounts that need to be changed from recently completed Dual Control requests?",
    "options": [
      "HeadStartInterval",
      "Interval",
      "Immediatelnterval",
      "The CPM does not change the password under this circumstance."
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image90.png"
  },
  {
    "id": "ocr-81",
    "kind": "text",
    "prompt": "The PSM requires the Remote Desktop Web Access role service.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image92.png"
  },
  {
    "id": "ocr-82",
    "kind": "text",
    "prompt": "When the PSM Gateway (also known as the HTML5 Gateway) is implemented, users must have an RDP client, such as MSTSC, installed on their endpoint in order to launch connections via the PSM.",
    "options": [
      "True",
      "False. When the PSM Gateway is implemented, the user only requires a browser in order launch a connection via the PSM."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image94.png"
  },
  {
    "id": "ocr-83",
    "kind": "text",
    "prompt": "The PSM Gateway (also known as the HTML5 Gateway) can be installed on the same server as PSM for SSH (previously known as PSM-SSH Proxy or PSMP]",
    "options": [
      "True",
      "False, the PSM Gateway must be installed on a separate Windows machine"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image96.png"
  },
  {
    "id": "ocr-84",
    "kind": "text",
    "prompt": "Which of the following is considered a prerequisite for installing PSM?",
    "options": [
      "IIS web services role",
      "HTML5 Gateway",
      "Provider",
      "Remote Desktop Services"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image98.png"
  },
  {
    "id": "ocr-85",
    "kind": "text",
    "prompt": "CyberArk creates exceptions for Data Execution Prevention (DEP) on selected executable files. This is done as part of installing which of the following components?",
    "options": [
      "PSM",
      "CPM",
      "PVWA",
      "AAM Credential Provider (previously known as AIM Credential Provider)"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image100.png"
  },
  {
    "id": "ocr-86",
    "kind": "text",
    "prompt": "During the process of installing the Central Policy Manager (CPM), the Vault administrator will be asked to provide the credentials for an administrative user in the Vault. For which purpose are these credentials used?",
    "options": [
      "The credentials will be used later by the CPM to retrieve passwords from the Vault.",
      "The credentials are used by the installer to register the CPM in the CyberArk database.",
      "The credentials are used by the installer to authenticate to the Vault and create the Central Policy Manager (CPM) environment (Sates, users, etc.).",
      "The credentials will be used later by the CPM to update passwords in the Vault."
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image102.png"
  },
  {
    "id": "ocr-87",
    "kind": "text",
    "prompt": "The Vault server requires WINS services to work properly.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image104.png"
  },
  {
    "id": "ocr-88",
    "kind": "text",
    "prompt": "What is the proper way to allow the Vault to resolve host names?",
    "options": [
      "Define a DNS server.",
      "Define a WINS server.",
      "Define the local hosts file.",
      "The Vault cannot resolve host names due to security standards."
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image106.png"
  },
  {
    "id": "ocr-89",
    "kind": "text",
    "prompt": "After the Vault server is installed, the Microsoft Windows firewall is now commandeered by the Vault. Can the administrator change these firewall rules?",
    "options": [
      "Yes, but the administrator can only modify the firewall rules by editing the dbparm.ini file and the restarting the Vault.",
      "Yes, the administrator can still modify firewall rules via the Windows firewall interface.",
      "No, the Vault does not permit any changes to the firewall due to security requirements.",
      "Yes, but the administrator can only modify the firewall rules by editing the FirewallRules.ini file and the restarting the Vault."
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image109.png"
  },
  {
    "id": "ocr-90",
    "kind": "text",
    "prompt": "Which file is used to configure new firewall rules on the Vault?",
    "options": [
      "firewall.ini",
      "PARagent.ini",
      "dbparm.ini",
      "padr.ini"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image113.png"
  },
  {
    "id": "ocr-91",
    "kind": "text",
    "prompt": "Accounts Discovery allows secure connections to domain controllers.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image128.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-92",
    "kind": "text",
    "prompt": "Which of these accounts onboarding methods is considered proactive?",
    "options": [
      "Accounts Discovery",
      "Detecting accounts with PTA",
      "A REST API integration with account provisioning software",
      "A DNA scan"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image129.png",
    "selectionCount": null,
    "keyMethod": "ink+marker"
  },
  {
    "id": "ocr-93",
    "kind": "text",
    "prompt": "When creating an onboarding rule, it will be executed upon",
    "options": [
      "All accounts in the pending accounts list.",
      "Any future accounts discovered by a discovery process.",
      "Both A and B"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image130.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-94",
    "kind": "text",
    "prompt": "What are the functions of the Remote Control Agent service? (Choose 3)",
    "options": [
      "Allows remote monitoring of the Vault",
      "Sends SNMP traps from the Vault",
      "Maintains audit data",
      "Allows CyberArk services to be managed (start/stop/status) remotely"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "sourceImage": "assets/image131.png",
    "selectionCount": 3,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-95",
    "kind": "text",
    "prompt": "The Vault administrator can change the Vault license by uploading the new license to the system Safe.",
    "options": [
      "«True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image132.png",
    "selectionCount": null,
    "keyMethod": "ink+marker"
  },
  {
    "id": "ocr-96",
    "kind": "text",
    "prompt": "CyberArk implements license limits by controlling the number and types of users that can be provisioned in the Vault.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image134.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-97",
    "kind": "text",
    "prompt": "PSM for Windows (previously known as RDP Proxy) supports connections to the which of the following target systems?",
    "options": [
      "Windows",
      "Unix",
      "Oracle",
      "All of the above"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image136.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-98",
    "kind": "text",
    "prompt": "PSM for SSH (previously known as PSM-SSH Proxy) supports connections to which of the following target systems?",
    "options": [
      "Windows",
      "Unix",
      "Oracle",
      "All of the above"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image138.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-99",
    "kind": "text",
    "prompt": "Within the Vault each password is encrypted by:",
    "options": [
      "the server key.",
      "the recovery public key.",
      "the recovery private key.",
      "its own unique key."
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image140.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-100",
    "kind": "text",
    "prompt": "Which utilities could a Vault administrator use to change debugging levels on the Vault without having to restart the Vault? Select the two correct options.",
    "options": [
      "PAR Agent",
      "PrivateArk Server Central Administration",
      "Edit DBParm.ini in a text editor.",
      "Setup.exe"
    ],
    "correct": [
      1,
      2
    ],
    "sourceImage": "assets/image146.png",
    "selectionCount": 2,
    "keyMethod": "checked"
  },
  {
    "id": "ocr-101",
    "kind": "text",
    "prompt": "How does the Vault administrator apply a new license file?",
    "options": [
      "Upload the license.xml file to the system Safe and restart the PrivateArk Server service.",
      "Upload the license.xml file to the system Safe.",
      "Upload the license.xml file to the Vault Internal Safe and restart the PrivateArk Server service.",
      "Upload the license.xml file to the Vault Internal Safe."
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image147.png",
    "selectionCount": null,
    "keyMethod": "checked"
  },
  {
    "id": "ocr-102",
    "kind": "text",
    "prompt": "Which keys are required to be present in order to start the PrivateArk Server service? (Choose 2)",
    "options": [
      "Recovery public key",
      "Recovery private key",
      "Server key",
      "Safe key"
    ],
    "correct": [
      1,
      3
    ],
    "sourceImage": "assets/image148.png",
    "selectionCount": 2,
    "keyMethod": "checked"
  },
  {
    "id": "ocr-103",
    "kind": "text",
    "prompt": "What is the purpose of the CyberArk Event Notification Engine service?",
    "options": [
      "It sends email messages from the Central Policy Manager (CPM).",
      "It sends email messages from the Vault.",
      "It processes audit report messages.",
      "It makes Vault data available to components."
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image149.png",
    "selectionCount": null,
    "keyMethod": "checked"
  },
  {
    "id": "ocr-104",
    "kind": "text",
    "prompt": "What is the purpose of the PrivateArk Database service?",
    "options": [
      "Communicates with components",
      "Sends email alerts from the Vault",
      "Executes password changes",
      "Maintains Vault metadata"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image151.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-105",
    "kind": "text",
    "prompt": "What is the purpose of the PrivateArk Server service?",
    "options": [
      "Executes password changes",
      "Maintains Vault metadata",
      "Makes Vault data accessible to components",
      "Sends email alerts from the Vault"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image153.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-106",
    "kind": "text",
    "prompt": "Select the best practice for storing the Master CD.",
    "options": [
      "Copy the files to the Vault server and discard the CD.",
      "Copy the contents of the CD to a Hardware Security Module (HSM) and discard the CD.",
      "Store the CD in a secure location, such as a physical safe.",
      "Store the CD in a secure location, such as a physical safe, and coCopy the contents of the CD to a folder secured with NTFS permissions on the Vault."
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image155.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-107",
    "kind": "text",
    "prompt": "Which of the following are secure options for storing the contents of the Operator CD, while still allowing the contents to be accessible upon a planned Vault restart? Choose the three correct options.",
    "options": [
      "Store the CD in a physical safe and mount the CD every time Vault maintenance is performed.",
      "Copy the entire contents of the CD to the system Safe on the Vault.",
      "Copy the entire contents of the CD to a folder on the Vault Server and secure it with NTFS permissions.",
      "Store the server key in a Hardware Security Module (HS) and coCopy the rest the keys from the CD to a folder on the Vault Server and secure it with NTFS permissions."
    ],
    "correct": [
      1,
      3,
      4
    ],
    "sourceImage": "assets/image161.png",
    "selectionCount": 3,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-108",
    "kind": "text",
    "prompt": "Which service should NOT be running on the DR Vault when the primary Production Vault is up?",
    "options": [
      "PrivateArk Database",
      "PrivateArk Server",
      "CyberArk Vault Disaster Recovery (DR) service",
      "CyberArk Logic Container"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image163.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-109",
    "kind": "text",
    "prompt": "Which of the following logs contains information about errors related to PTA?",
    "options": [
      "PTAlog.log",
      "diamond.log",
      "pm_error.log",
      "WebApplication.log"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image165.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-110",
    "kind": "text",
    "prompt": "When a DR Vault Server becomes an active vault, it will automatically fail back to the original state once the Primary Vault comes back online.",
    "options": [
      "True; this is the default behavior.",
      "False, this is not possible.",
      "True, if the AllowFailback setting is set to \"yes\" in the padr.ini file.",
      "True, if the AllowFailback setting is set to \"yes\" in the dbparm.ini file."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image171.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-111",
    "kind": "text",
    "prompt": "When a DR Vault Server becomes an active vault, it will automatically revert back to DR mode once the Primary Vault comes back online.",
    "options": [
      "True; this is the default behavior.",
      "False, the Vault administrator must manually set the DR Vault to DR mode by setting \"FailoverMode=no\" in the padr.ini file.",
      "True, if the AllowFailback setting is set to \"yes\" in the padr.ini file.",
      "False, the Vault administrator must manually set the DR Vault to DR mode by setting \"FailoverMode=no\" in the dbparm.ini file."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image172.png",
    "selectionCount": null,
    "keyMethod": "checked"
  },
  {
    "id": "ocr-112",
    "kind": "text",
    "prompt": "Which of the following components can be used to create a tape backup of the Vault?",
    "options": [
      "Disaster Recovery",
      "Distributed Vaults",
      "Replicate",
      "High Availability"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image173.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-113",
    "kind": "text",
    "prompt": "A Vault administrator has associated a logon account to one of their Unix root accounts in the Vault. When attempting to change the root account's password the Central Policy Manager (CPM) will:",
    "options": [
      "log in to the system as root, then change root's password.",
      "log in to the system as the logon account, then change root's password.",
      "log in to the system as the logon account, run the Su command to log in as root, and then change root's password.",
      "none of these."
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image178.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-114",
    "kind": "text",
    "prompt": "For a Safe with object level access control enabled the Vault administrator is able to turn off object level access control when it no longer needed on the Safe.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image179.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-115",
    "kind": "text",
    "prompt": "The Vault supports Subnet Based Access Control.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image180.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-116",
    "kind": "text",
    "prompt": "The Vault does NOT support Subnet Based Access Control.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image181.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-117",
    "kind": "text",
    "prompt": "Assuming a Safe has been configured to be accessible during certain hours of the day, a Vault administrator may still access that Safe outside of those hours.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image183.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-118",
    "kind": "text",
    "prompt": "A Simple Mail Transfer Protocol (SMTP) integration is critical for monitoring Vault activity and facilitating workflow processes, such as Dual Control.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image185.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-119",
    "kind": "text",
    "prompt": "What is the purpose of the password verify process?",
    "options": [
      "To test that CyberArk is storing accurate credentials for accounts",
      "To change the password of an account according to organizationally defined password rules",
      "To allow CyberArk to manage unknown or lost credentials",
      "To generate a new complex password"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image190.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-120",
    "kind": "text",
    "prompt": "What is the purpose of the password change process?",
    "options": [
      "To test that CyberArk is storing accurate credentials for accounts",
      "To change the password of an account according to organizationally defined password rules",
      "To allow CyberArk to manage unknown or lost credentials",
      "To generate a new complex password"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image191.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-121",
    "kind": "text",
    "prompt": "A logon account can be specified in the platform settings.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image192.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-122",
    "kind": "text",
    "prompt": "In order to grant a permission to a user, an administrator MUST possess that permission.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image194.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-123",
    "kind": "text",
    "prompt": "Which Master Policy setting must be active in order to have an account checked out by one user for a pre-determined amount of time?",
    "options": [
      "Require Dual Control password access approval.",
      "Enforce check-in/check-out exclusive access.",
      "Enforce one-time password access.",
      "Enforce check-in/check-out exclusive access and enforce one-time password access."
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image199.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-124",
    "kind": "text",
    "prompt": "Which combination of Safe member permissions will allow end users to log in to a remote machine transparently but NOT show or coCopy the password?",
    "options": [
      "Use Accounts, Retrieve Accounts, List Accounts",
      "Use Accounts, List Accounts",
      "Use Accounts",
      "List Accounts, Retrieve Accounts"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image200.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-125",
    "kind": "text",
    "prompt": "CyberArk recommends implementing object level access control on all Safes.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image201.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-126",
    "kind": "text",
    "prompt": "Which credentials does CyberArk use when managing a target account?",
    "options": [
      "Those of the service account for the CyberArk Password Manager service",
      "A domain administrator account created for this purpose",
      "The credentials of the target account",
      "An account assigned by the Master Policy"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image202.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-127",
    "kind": "text",
    "prompt": "What is the purpose of the password reconcile process?",
    "options": [
      "To test that CyberArk is storing accurate credentials for accounts",
      "To change the password of an account according to organizationally defined password rules",
      "To allow CyberArk to manage unknown or lost credentials",
      "To generate a new complex password"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image205.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-128",
    "kind": "text",
    "prompt": "What is the process to remove object level access control from a Safe?",
    "options": [
      "Uncheck the 'Enable Object Level Access Control' on the Safe Details page in the PVWA.",
      "Uncheck the 'Enable Object Level Access Control' box in the Safe Properties in PrivateArk.",
      "This cannot be done.",
      "Remove all ACLs from the Safe"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image206.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-129",
    "kind": "text",
    "prompt": "Access control to passwords is implemented by:",
    "options": [
      "Vault authorizations.",
      "Safe authorizations.",
      "Master Policy.",
      "platform settings."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image209.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-130",
    "kind": "text",
    "prompt": "If a user is a member of more than one group that has authorizations on a Safe, by default that user is granted:",
    "options": [
      "the Vault will not allow this situation to occur.",
      "only those permissions that exist on the group added to the Safe first.",
      "only those permissions that exist in all groups to which the user belongs.",
      "the cumulative permissions of all the groups to which that user belongs."
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image210.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-131",
    "kind": "text",
    "prompt": "Users who have the 'Access Safe without confirmation' permission on a Safe where accounts are configured for Dual Control still need to request approval to use the account.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image214.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-132",
    "kind": "text",
    "prompt": "Which is the purpose of a linked account?",
    "options": [
      "To ensure that a particular collection of accounts all have the same password",
      "To ensure a particular set of accounts all change at the same time",
      "To connect the CPM to a target system",
      "To allow the use of additional passwords within a password management process"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image215.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-133",
    "kind": "text",
    "prompt": "A Vault administrator have associated a logon account to one of their Unix root accounts in the vault. When attempting to verify the root account's password the Central Policy Manager (CPM) will:",
    "options": [
      "ignore the logon account and attempt to log in as root.",
      "prompt the end user with a dialog box asking for the login account to use.",
      "log in first with the logon account, then run the Su command to log in as root using the password in the Vault.",
      "none of these."
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image221.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-134",
    "kind": "text",
    "prompt": "For an account attached to a platform that requires Dual Control based on a Master Policy exception, how would the Vault administrator configure a group of users to access a password without approval?",
    "options": [
      "Create an exception to the Master Policy to exclude the group from the workflow process.",
      "Edit the Master Policy rule and modify the advanced 'Access Safe without approval' rule to include the group.",
      "On the Safe in which the account is stored grant the group the 'Access Safe without audit' authorization.",
      "On the Safe in which the account is stored grant the group the 'Access Safe without confirmation' authorization."
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image222.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-135",
    "kind": "text",
    "prompt": "Which is the primary purpose of exclusive accounts?",
    "options": [
      "Reduced risk of credential theft",
      "More frequent password changes",
      "Non-repudiation (individual accountability)",
      "To force a 'collusion to commit' fraud ensuring no single actor may use a password without authorization"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image227.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-136",
    "kind": "text",
    "prompt": "Which is the primary purpose of one-time passwords?",
    "options": [
      "Reduced risk of credential theft",
      "More frequent password changes",
      "Non-repudiation (individual accountability)",
      "To force a 'collusion to commit' fraud ensuring no single actor may use a password without authorization"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image228.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-137",
    "kind": "text",
    "prompt": "Which is the primary purpose of Dual Control?",
    "options": [
      "Reduced risk of credential theft",
      "More frequent password changes",
      "Non-repudiation (individual accountability)",
      "To force a 'collusion to commit' fraud ensuring no single actor may use a password without authorization"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image229.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-138",
    "kind": "text",
    "prompt": "What is the name of the platform parameter that determines the length of time a person is allowed to use a one-time password?",
    "options": [
      "MinValidityPeriod",
      "Interval",
      "Immediatelnterval",
      "Timeout"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image230.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-139",
    "kind": "text",
    "prompt": "Which is the purpose of the HeadStartInterval setting in a platform?",
    "options": [
      "It determines how far in advance audit data is collected for reports.",
      "It instructs the CPM to initiate the password change process certain number of days before expiration.",
      "It instructs the AIM provider to 'skip the cache' during the defined time period.",
      "It alerts users of upcoming password changes a certain number of days before expiration."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image235.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-140",
    "kind": "text",
    "prompt": "One can create exceptions to the Master Policy based on:",
    "options": [
      "Safes.",
      "platforms.",
      "policies.",
      "accounts."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image237.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-141",
    "kind": "text",
    "prompt": "When managing SSH keys, the Central Policy Manager (CPM) stores the public key:",
    "options": [
      "in the Vault.",
      "on the target server.",
      "A and B.",
      "nowhere because the public key can always be generated from the private key."
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image239.png",
    "selectionCount": null,
    "keyMethod": "source-selected-row"
  },
  {
    "id": "ocr-142",
    "kind": "text",
    "prompt": "When managing SSH keys, the Central Policy Manager (CPM) stores the private key:",
    "options": [
      "in the Vault.",
      "on the target server.",
      "A and B.",
      "nowhere because the private key can always be generated from the public key."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image241.png",
    "selectionCount": null,
    "keyMethod": "checked"
  },
  {
    "id": "ocr-143",
    "kind": "text",
    "prompt": "Time of day or day of week restrictions on when password changes can occur are configured in the:",
    "options": [
      "Master Policy.",
      "platform settings.",
      "Safe settings.",
      "account details."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image244.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-144",
    "kind": "text",
    "prompt": "Time of day or day of week restrictions on when password verifications can occur are configured in the:",
    "options": [
      "Master Policy.",
      "platform settings.",
      "Safe settings.",
      "account details."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image245.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-145",
    "kind": "text",
    "prompt": "Time of day or day of week restrictions on when password reconciliations can occur are configured in the:",
    "options": [
      "Master Policy.",
      "platform settings.",
      "Safe settings.",
      "account details."
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image247.png",
    "selectionCount": null,
    "keyMethod": "source-selected-row"
  },
  {
    "id": "ocr-146",
    "kind": "text",
    "prompt": "A Safe was recently created by a user who is a member of the LDAP Vault Administrators group. Which of the following users does NOT have access to the newly created Safe by default?",
    "options": [
      "Master",
      "Administrator",
      "Auditor",
      "Backup"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image249.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-147",
    "kind": "text",
    "prompt": "According to the default web options settings, which group grants access to the reports page?",
    "options": [
      "PVWAUsers",
      "Vault Administrators",
      "Auditors",
      "PVWAMonitor"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image251.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-148",
    "kind": "text",
    "prompt": "Which report could show all accounts that are past their expiration dates?",
    "options": [
      "Privileged Account Compliance Status report",
      "Activity log",
      "Privileged Account Inventory report",
      "Application Inventory report"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image253.png",
    "selectionCount": null,
    "keyMethod": "source-selected-row"
  },
  {
    "id": "ocr-149",
    "kind": "text",
    "prompt": "Which report shows the accounts that are accessible to each user?",
    "options": [
      "Activity report",
      "Entitlement report",
      "Privileged Accounts Compliance Status report",
      "Applications Inventory report"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image256.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-150",
    "kind": "text",
    "prompt": "Which type of automatic remediation can be performed by the PTA in case of a suspected credential theft security event?",
    "options": [
      "Password change",
      "Password reconciliation",
      "Session suspension",
      "Session termination"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image257.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-151",
    "kind": "text",
    "prompt": "Which type of automatic remediation can be performed by the PTA in case of a suspicious password change security event?",
    "options": [
      "Password change",
      "Password reconciliation",
      "Session suspension",
      "Session termination"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image259.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-152",
    "kind": "text",
    "prompt": "Which of the following PTA detections are included in the Core PAS offering? Choose 2.",
    "options": [
      "Suspected Credential Theft",
      "Over-Pass-The-Hash",
      "Golden Ticket",
      "Unmanaged Privileged Access"
    ],
    "correct": [
      1,
      4
    ],
    "sourceImage": "assets/image262.png",
    "selectionCount": 2,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-153",
    "kind": "text",
    "prompt": "PTA can automatically suspend sessions if suspicious activities are detected in a privileged session, but only if the session is made via the CyberArk PSM.",
    "options": [
      "True",
      "False, the PTA can suspend sessions whether the session is made via the PSM or not."
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image268.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-154",
    "kind": "text",
    "prompt": "Which of the following PTA detections require the deployment of a Network Sensor or installing the PTA Agent on the domain controller?",
    "options": [
      "Suspected credential theft",
      "Over-Pass-The-Hash",
      "Golden Ticket",
      "Unmanaged privileged access"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image269.png",
    "selectionCount": null,
    "keyMethod": "ink+marker"
  },
  {
    "id": "ocr-155",
    "kind": "text",
    "prompt": "Which one of the following reports is NOT generated by using the Password Vault Web Access (PVWA)?",
    "options": [
      "Accounts Inventory",
      "Application Inventory",
      "Active/Non-Active Users",
      "Compliance Status"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image270.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-156",
    "kind": "text",
    "prompt": "A user has successfully conducted a short PSM session and logged off. However, the user cannot access the Monitoring tab to view the recordings. What is the issue?",
    "options": [
      "The user must login as PSMAdminConnect.",
      "The PSM service is not running.",
      "The user is not a member of the PVWAMonitor group.",
      "The user is not a member of the Auditors group."
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image273.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-157",
    "kind": "text",
    "prompt": "An auditor needs to login to the PSM in order to live monitor an active session. Which user ID is used to establish the RDP connection to the PSM server?",
    "options": [
      "PSMConnect",
      "PSMMaster",
      "PSMGwUser",
      "PSMAdminConnect"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image275.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-158",
    "kind": "text",
    "prompt": "In order to connect to a target device through PSM, the account credentials used for the connection must be stored in the Vault.",
    "options": [
      "True",
      "False, because the user can also enter credentials manually using Ad-Hoc Access.",
      "False, because if credentials are not stored in the Vault, the PSM will log into the target device as PSM Connect.",
      "False, because if credentials are not stored in the Vault, the PSM will prompt for credentials."
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image278.png",
    "selectionCount": null,
    "keyMethod": "source-selected-row"
  },
  {
    "id": "ocr-159",
    "kind": "text",
    "prompt": "Via Password Vault Web Access (PVWA), a user initiates a PSM connection to the target Linux machine using RemoteApp. When the client's machine makes an RDP connection to the PSM server, which user will be utilized?",
    "options": [
      "CCredentials stored in the Vault for the target machine",
      "Shadowuser",
      "PSMConnect",
      "PSMAdminConnect"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image280.png",
    "selectionCount": null,
    "keyMethod": "verified-source-key"
  },
  {
    "id": "ocr-160",
    "kind": "text",
    "prompt": "An auditor initiates a live monitoring session to PSM server to view an ongoing live session. When the auditor's machine makes an RDP connection the PSM server, which user will be used?",
    "options": [
      "PSMAdminConnect",
      "Shadowuser",
      "PSMConnect",
      "CCredentials stored in the Vault for the target machine"
    ],
    "correct": [
      1
    ],
    "sourceImage": "assets/image285.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-161",
    "kind": "text",
    "prompt": "Which one of these built-in Vault users is NOT automatically added to a Safe when it is created?",
    "options": [
      "Master",
      "Administrator",
      "Auditor",
      "Operator"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image286.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-162",
    "kind": "text",
    "prompt": "Vault administrators must manually add the Auditors group to newly created Safes so auditors will have sufficient access to run reports.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      2
    ],
    "sourceImage": "assets/image287.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-163",
    "kind": "text",
    "prompt": "Which user(s) can access all passwords in the Vault?",
    "options": [
      "Administrator",
      "Any member of Vault administrators",
      "Any member of auditors",
      "Master"
    ],
    "correct": [
      4
    ],
    "sourceImage": "assets/image288.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-164",
    "kind": "text",
    "prompt": "A user is receiving the error message \"ITATSO06E Station is suspended for User jsmith\" when attempting to sign into the Password Vault Web Access (PVWA). Which utility would a Vault administrator use to correct this problem?",
    "options": [
      "createcredfile.exe",
      "cavaultmanager.exe",
      "PrivateArk",
      "PVWA"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image291.png",
    "selectionCount": null,
    "keyMethod": "ink"
  },
  {
    "id": "ocr-165",
    "kind": "text",
    "prompt": "Which user is automatically added to all Safes and cannot be removed?",
    "options": [
      "Auditor",
      "Administrator",
      "Master",
      "Operator"
    ],
    "correct": [
      3
    ],
    "sourceImage": "assets/image292.png",
    "selectionCount": null,
    "keyMethod": "ink"
  }
];
