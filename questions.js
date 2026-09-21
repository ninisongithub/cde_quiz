// Generated locally from CED-RECERT SAMPLE QUESTIONS 3.docx
const QUESTION_POOL = [
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
    "id": "self-text-1",
    "kind": "self",
    "prompt": "14. DRAG DROP Arrange the steps to failover to the DR CPM in the correct sequence. Solution: Validate that primary CPMs services are stopped and set to manual",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-text-2",
    "kind": "self",
    "prompt": "36 DRAG DROP - Arrange the steps to complete CPM Hardening for Out-of-Domain Deployment in the correct sequence.",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-text-3",
    "kind": "self",
    "prompt": "47. DRAG DROP - Match each component to its respective Log File location.",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-1",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image9.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-2",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image11.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-3",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image13.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-4",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image16.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      4
    ]
  },
  {
    "id": "visual-5",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image20.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-6",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image22.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-7",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image26.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-8",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image28.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "visual-9",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image30.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-10",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image32.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "visual-11",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image34.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-12",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image37.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-13",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image39.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      4
    ]
  },
  {
    "id": "visual-14",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image41.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "visual-15",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image43.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-16",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image45.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-17",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image47.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-18",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image49.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-19",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image51.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-20",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image54.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "visual-21",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image56.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      4
    ]
  },
  {
    "id": "visual-22",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image58.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-23",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image60.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-24",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image62.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-25",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image64.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-26",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image66.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "visual-27",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image69.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      4
    ]
  },
  {
    "id": "visual-28",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image73.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "visual-29",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image75.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      4
    ]
  },
  {
    "id": "visual-30",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image77.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-31",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image80.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      1,
      2
    ]
  },
  {
    "id": "visual-32",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image82.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-33",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image84.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "visual-34",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image86.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-35",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image88.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "visual-36",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image90.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      4
    ]
  },
  {
    "id": "visual-37",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image92.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-38",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image94.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-39",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image96.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-40",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image98.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      4
    ]
  },
  {
    "id": "visual-41",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image100.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-42",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image102.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "visual-43",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image104.png",
    "options": [
      "Option 1",
      "Option 2"
    ],
    "correct": [
      2
    ]
  },
  {
    "id": "visual-44",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image106.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "visual-45",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image109.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "visual-46",
    "kind": "visual",
    "prompt": "Screenshot question — select the highlighted-answer position from top to bottom.",
    "image": "assets/image113.png",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correct": [
      3
    ]
  },
  {
    "id": "self-47",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image1.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-48",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image2.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-49",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image3.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-50",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image4.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-51",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image5.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-52",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image6.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-53",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image117.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-54",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image118.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-55",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image120.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-56",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image128.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-57",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image129.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-58",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image130.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-59",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image131.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-60",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image132.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-61",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image134.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-62",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image136.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-63",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image138.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-64",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image140.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-65",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image146.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-66",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image147.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-67",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image148.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-68",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image149.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-69",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image151.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-70",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image153.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-71",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image155.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-72",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image161.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-73",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image163.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-74",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image165.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-75",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image171.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-76",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image172.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-77",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image173.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-78",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image178.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-79",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image179.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-80",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image180.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-81",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image181.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-82",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image183.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-83",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image185.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-84",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image190.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-85",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image191.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-86",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image192.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-87",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image194.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-88",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image199.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-89",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image200.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-90",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image201.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-91",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image202.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-92",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image205.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-93",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image206.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-94",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image209.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-95",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image210.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-96",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image214.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-97",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image215.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-98",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image221.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-99",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image222.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-100",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image227.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-101",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image228.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-102",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image229.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-103",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image230.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-104",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image235.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-105",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image236.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-106",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image237.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-107",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image239.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-108",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image241.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-109",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image244.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-110",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image245.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-111",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image247.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-112",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image249.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-113",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image251.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-114",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image253.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-115",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image256.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-116",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image257.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-117",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image259.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-118",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image262.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-119",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image268.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-120",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image269.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-121",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image270.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-122",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image271.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-123",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image273.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-124",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image275.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-125",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image278.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-126",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image280.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-127",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image285.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-128",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image286.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-129",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image287.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-130",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image288.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-131",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image291.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-132",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image292.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-133",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image295.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-134",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image297.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-135",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image299.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-136",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image301.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-137",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image306.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-138",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image307.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-139",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image308.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-140",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image309.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-141",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image312.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-142",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image313.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-143",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image314.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-144",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image322.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-145",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image325.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-146",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image326.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-147",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image327.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-148",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image329.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-149",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image330.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-150",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image331.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-151",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image333.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-152",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image334.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-153",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image336.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-154",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image338.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-155",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image341.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-156",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image342.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-157",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image343.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-158",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image344.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-159",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image345.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-160",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image346.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-161",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image347.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-162",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image348.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-163",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image349.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-164",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image350.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-165",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image351.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-166",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image352.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-167",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image353.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-168",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image354.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-169",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image355.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-170",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image356.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-171",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image357.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-172",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image358.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-173",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image359.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-174",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image360.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-175",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image364.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-176",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image365.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-177",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image366.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-178",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image367.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-179",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image368.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-180",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image370.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-181",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image371.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-182",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image372.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-183",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image373.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-184",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image374.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-185",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image375.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-186",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image376.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-187",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image377.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-188",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image378.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-189",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image381.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-190",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image382.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-191",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image383.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-192",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image385.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-193",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image386.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-194",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image391.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-195",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image394.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-196",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image398.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-197",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image403.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-198",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image406.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-199",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image408.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-200",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image412.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-201",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image413.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-202",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image419.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-203",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image420.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-204",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image426.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-205",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image427.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-206",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image428.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-207",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image429.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-208",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image433.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-209",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image438.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-210",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image439.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-211",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image442.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-212",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image443.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  },
  {
    "id": "self-213",
    "kind": "self",
    "prompt": "Answer or complete this source item, then mark your own result.",
    "image": "assets/image446.png",
    "options": [
      "I answered correctly",
      "I need to review this item"
    ],
    "correct": [
      1
    ]
  }
];
