/*
 * Questions converted from the document's layout-dependent items.
 *
 * Only items with an answer explicitly shown in the source (answer text,
 * answer marker, or the completed mapping image) are included here. Items
 * whose screenshots do not show a reliable answer are kept in the source
 * quiz until they are confirmed.
 */
const LAYOUT_QUESTIONS = [
  {
    id: "layout-47",
    kind: "ordering",
    prompt: "Arrange the steps to fail over to the DR CPM in the correct sequence.",
    items: [
      "Enable the CPM services on the DR CPM.",
      "Validate that the Primary CPM's services are stopped and set to manual.",
      "On the DR CPM, confirm details in the Vault.ini configuration file, reset the CPM user password, and recreate the credential file.",
      "Review logs to confirm the DR CPM services are running as expected."
    ],
    correct: [2, 3, 1, 4],
    sourceImage: "assets/image1.png",
    answerSource: "The source document labels the ordered solution immediately before the highlighted steps."
  },
  {
    id: "layout-48",
    kind: "ordering",
    prompt: "Arrange the steps to restore a Vault using PARestore for a backup in the correct sequence.",
    items: [
      "BackupFilesDeletion=No",
      "CAVaultManager RestoreDB",
      "BackupFilesDeletion=Yes,24,1,5,7d",
      "CAVaultManager RecoverBackupFiles",
      "PARestore vault.ini operator /FullVaultRestore"
    ],
    correct: [1, 5, 4, 2, 3],
    sourceImage: "assets/image2.png",
    answerSource: "The highlighted ordered response in the source document."
  },
  {
    id: "layout-50",
    kind: "ordering",
    prompt: "Arrange the steps to complete CPM hardening for an out-of-domain deployment in the correct sequence.",
    items: [
      "Open PowerShell as Administrator and run the script.",
      "Review the script log called HardeningScript log.",
      "Locate the CPM_Hardening.ps1 script in the installation media.",
      "Review the script log called CYBRHardeningsecedit.log."
    ],
    correct: [3, 1, 2, 4],
    sourceImage: "assets/image4.png",
    answerSource: "The numbered, highlighted solution steps in the source document."
  },
  {
    id: "layout-52",
    kind: "matching",
    prompt: "Match each component to its respective log file location.",
    leftItems: ["PTA System", "PSM for SSH (PSMP)", "Disaster Recovery"],
    rightOptions: [
      "C:\\Program Files (x86)\\PrivateArk\\Server\\PADR",
      "/opt/tomcat/logs",
      "/var/opt/CARKpsmp/logs/"
    ],
    correct: [2, 3, 1],
    sourceImage: "assets/image6.png",
    answerSource: "The completed mapping shown in the source image."
  },
  {
    id: "layout-143",
    kind: "matching",
    prompt: "Match each account-unlock option to the correct description.",
    leftItems: [
      "Allow for Active Directory users",
      "Only allow from browsers with identity cookie",
      "Show a message to end users in desktop login that account is locked",
      "Show a message that explains the account unlock experience to end users who unlock their accounts"
    ],
    rightOptions: [
      "Enables users with Active Directory accounts to unlock their accounts",
      "Restricts account unlock to users who have already logged in successfully",
      "Shows users a message on the desktop login UI that their account is locked",
      "Displays the unlock-experience message: 'Your sign in experience was different'",
      "Restricts account unlock to users who have already failed logon on the browsers"
    ],
    correct: [1, 2, 3, 4],
    sourceImage: "assets/image314.png",
    answerSource: "Direct wording match between each source label and description."
  },
  {
    id: "layout-157",
    kind: "matching",
    prompt: "Match each key to its recommended storage location.",
    leftItems: ["Recovery Private Key", "Recovery Public Key", "Server Key", "SSH Keys"],
    rightOptions: [
      "Store in a Physical Safe",
      "Store in a Hardware Security Module",
      "Store on the Vault Server Disk Drive",
      "Store in the Vault"
    ],
    correct: [1, 3, 2, 4],
    sourceImage: "assets/image343.png",
    answerSource: "The answer mapping printed at the bottom of the source image."
  },
  {
    id: "layout-133",
    kind: "text",
    prompt: "PTA can automatically suspend sessions if suspicious activities are detected in a privileged session, but only if the session is made via the CyberArk PSM.",
    options: [
      "True",
      "False, PTA can suspend sessions whether the session is made via the PSM or not"
    ],
    correct: [2],
    sourceImage: "assets/image333.png"
  },
  {
    id: "layout-134",
    kind: "text",
    prompt: "Where can PTA be configured to send alerts? (Choose two.)",
    options: ["SIEM", "Email", "Google Analytics", "EVD", "PAReplicate"],
    correct: [1, 2],
    sourceImage: "assets/image334.png"
  },
  {
    id: "layout-136",
    kind: "text",
    prompt: "In a rule using ‘Privileged Session Analysis and Response’ in PTA, which session options are available to configure as responses to activities?",
    options: ["Suspend, Terminate, None", "Suspend, Terminate, Lock Account", "Pause, Terminate, None", "Suspend, Terminate"],
    correct: [4],
    sourceImage: "assets/image338.png"
  },
  {
    id: "layout-151",
    kind: "text",
    prompt: "Which of the following PTA detections require deployment of a Network Sensor or installation of the PTA Agent on the domain controller?",
    options: ["Golden Ticket", "Suspected credential theft", "Over-Pass-The-Hash", "Unmanaged privileged access"],
    correct: [1],
    sourceImage: "assets/image341.png"
  },
  {
    id: "layout-162",
    kind: "text",
    prompt: "Which PTA sensors are required to detect suspected credential theft?",
    options: ["Logs, Vault Logs", "Logs, Network Sensor, Vault Logs", "Logs, PSM Logs, CPM Logs", "Logs, Network Sensor, EPM"],
    correct: [1],
    sourceImage: "assets/image348.png"
  },
  {
    id: "layout-164",
    kind: "text",
    prompt: "A customer is moving from an on-premises to a public cloud deployment. What is the best and most cost-effective option to secure the server key?",
    options: [
      "Install the Vault in the cloud as on premises and place the server key in a password-protected operating-system folder.",
      "Install the Vault in the cloud as on premises and purchase a Hardware Security Module.",
      "Install the Vault using the Amazon Machine Images and secure the server key using native cloud Key Management Systems.",
      "Install the Vault using the Amazon Machine Images and secure the server key with a Hardware Security Module."
    ],
    correct: [3],
    sourceImage: "assets/image350.png"
  },
  {
    id: "layout-168",
    kind: "text",
    prompt: "Which configuration file and Vault utility are used to migrate the server key to an HSM?",
    options: [
      "DBparm.ini and CAVaultManager.exe",
      "VaultKeys.ini and CAVaultManager.exe",
      "DBparm.ini and ChangeServerKeys.exe",
      "VaultKeys.ini and ChangeServerKeys.exe"
    ],
    correct: [1],
    sourceImage: "assets/image354.png"
  },
  {
    id: "layout-186",
    kind: "text",
    prompt: "A customer wants to implement a multi-cloud strategy for a Vault deployment. Which architecture should you recommend?",
    options: [
      "Primary Vault in AWS and DR Vault in Azure; both integrate with AWS Key Management Service.",
      "Primary Vault in Azure and DR Vault in AWS; both integrate with Azure Key Vault.",
      "Primary Vault in AWS and DR Vault in Azure; the primary integrates with AWS Key Management Service and the DR Vault integrates with Azure Key Vault.",
      "Primary Vault in Azure and DR Vault in AWS; neither integrates with cloud-native key management systems."
    ],
    correct: [3],
    sourceImage: "assets/image376.png"
  },
  {
    id: "layout-187",
    kind: "text",
    prompt: "The System safe allows access to the Vault configuration files.",
    options: ["TRUE", "FALSE"],
    correct: [1],
    sourceImage: "assets/image377.png"
  },
  {
    id: "layout-188",
    kind: "text",
    prompt: "Ad-Hoc Access (formerly Secure Connect) provides the following features. Choose all that apply.",
    options: [
      "PSM connections to target devices that are not managed by CyberArk.",
      "Session Recording.",
      "Real-time live session monitoring.",
      "PSM connections from a terminal without the need to log in to the PVWA."
    ],
    correct: [1, 2, 3],
    sourceImage: "assets/image378.png"
  },
  {
    id: "layout-189",
    kind: "text",
    prompt: "Vault authorizations may be granted to ____.",
    options: ["Vault Users", "Vault Groups", "LDAP Users", "LDAP Groups"],
    correct: [3],
    sourceImage: "assets/image381.png"
  },
  {
    id: "layout-191",
    kind: "text",
    prompt: "What is the purpose of the HeadStartInterval setting in a platform?",
    options: [
      "It determines how far in advance audit data is collected for reports.",
      "It instructs the CPM to initiate the password change process X number of days before expiration.",
      "It instructs the AIM Provider to skip the cache during the defined time period.",
      "It alerts users of upcoming password changes X number of days before expiration."
    ],
    correct: [2],
    sourceImage: "assets/image383.png"
  },
  {
    id: "layout-194",
    kind: "text",
    prompt: "Secure Connect provides the following. Choose all that apply.",
    options: [
      "PSM connections to target devices that are not managed by CyberArk.",
      "Session Recording.",
      "Real-time live session monitoring.",
      "PSM connections from a terminal without the need to log in to the PVWA."
    ],
    correct: [1, 2],
    sourceImage: "assets/image391.png"
  },
  {
    id: "layout-195",
    kind: "text",
    prompt: "You are setting up a Linux host to act as an HTML5 gateway for PSM sessions. Which servers need to be trusted by the Linux host to secure communications through the gateway?",
    options: ["PSM and PVWA", "PSM and CPM", "PVWA and Vault", "Vault and PSM"],
    correct: [2],
    sourceImage: "assets/image394.png"
  },
  {
    id: "layout-196",
    kind: "text",
    prompt: "What is the configuration file used by the CPM scanner when scanning UNIX/Linux devices?",
    options: ["UnixPrompts.ini", "plink.exe", "dbparm.ini", "PVConfig.xml"],
    correct: [4],
    sourceImage: "assets/image398.png"
  },
  {
    id: "layout-197",
    kind: "text",
    prompt: "You are creating a shared safe for the help desk. What must be considered regarding the naming convention?",
    options: [
      "Ensure your naming convention is no longer than 20 characters.",
      "Combine environments, owners and platforms to minimize the total number of safes created.",
      "Safe owners should determine the safe name to enable them to easily remember it.",
      "The use of these characters \\: * ? < > | is not allowed."
    ],
    correct: [4],
    sourceImage: "assets/image403.png"
  },
  {
    id: "layout-198",
    kind: "text",
    prompt: "Which of the following properties are mandatory when adding accounts from a file? (Choose three.)",
    options: ["Safe Name", "Platform ID", "All required properties specified in the Platform", "Username", "Address", "Hostname"],
    correct: [2, 4, 6],
    sourceImage: "assets/image406.png"
  },
  {
    id: "layout-199",
    kind: "text",
    prompt: "Which statement is correct concerning accounts that are discovered, but cannot be added to the Vault by an automated onboarding rule?",
    options: [
      "They are added to the Pending Accounts list and can be reviewed and manually uploaded.",
      "They cannot be onboarded to the Password Vault.",
      "They must be uploaded using third-party tools.",
      "They are not part of the Discovery Process."
    ],
    correct: [1],
    sourceImage: "assets/image408.png"
  },
  {
    id: "layout-200",
    kind: "text",
    prompt: "How should you configure PSM for SSH to support load balancing?",
    options: [
      "By using a network load balancer.",
      "In PVWA > Options > PSM for SSH Proxy > Servers.",
      "In PVWA > Options > PSM for SSH Proxy > Servers > VIP.",
      "By editing sshd.config on all the PSM for SSH servers."
    ],
    correct: [3],
    sourceImage: "assets/image412.png"
  },
  {
    id: "layout-201",
    kind: "text",
    prompt: "What is a valid combination of primary and secondary layers of authentication to a company's two-factor authentication policy?",
    options: [
      "RSA SecurID Authentication (in PVWA) and LDAP Authentication",
      "CyberArk Authentication and RADIUS Authentication",
      "Oracle SSO (in PVWA) and SAML Authentication",
      "LDAP Authentication and RADIUS Authentication"
    ],
    correct: [1],
    sourceImage: "assets/image413.png"
  },
  {
    id: "layout-150",
    kind: "matching",
    prompt: "Match each PTA detection to the sensors shown in the source answer mapping.",
    leftItems: [
      "Unmanaged privileged account",
      "Anomalous access to multiple machines",
      "Suspicious activities detected in a privileged session",
      "Suspected credentials theft"
    ],
    rightOptions: [
      "Logs, Vault, AD (optional), AWS (optional), Azure (optional)",
      "Network Sensor, PTA Windows Agent",
      "Vault",
      "Logs, Vault, AWS (optional), Azure (optional)"
    ],
    correct: [1, 2, 3, 4],
    sourceImage: "assets/image330.png",
    answerSource: "The completed mapping shown in the source image."
  },
  {
    id: "layout-156",
    kind: "text",
    prompt: "Which Automatic Remediation is configurable for a PTA detection of a Suspected Credential Theft?",
    options: ["Add to Pending", "Rotate Credentials", "Reconcile Credentials", "Disable Account"],
    correct: [2],
    sourceImage: "assets/image342.png"
  },
  {
    id: "layout-158",
    kind: "text",
    prompt: "Which command configures email alerts within PTA if settings need to be changed post install?",
    options: [
      "/opt/tomcat/utility/emailConfiguration.sh",
      "/opt/PTA/emailConfiguration.sh",
      "/opt/PTA/utility/emailConfig.sh",
      "/opt/tomcat/utility/emailSetup.sh"
    ],
    correct: [1],
    sourceImage: "assets/image344.png"
  },
  {
    id: "layout-159",
    kind: "text",
    prompt: "Which PTA sensors are required to detect suspected credential theft? (Choose two.)",
    options: ["Logs", "Vault Logs", "PSM Logs", "CPM Logs", "EPM"],
    correct: [1, 2],
    sourceImage: "assets/image345.png"
  },
  {
    id: "layout-160",
    kind: "text",
    prompt: "Which file must be edited on the Vault to configure it to send data to PTA?",
    options: ["dbparm.ini", "PARAgent.ini", "my.ini", "padr.ini"],
    correct: [1],
    sourceImage: "assets/image346.png"
  },
  {
    id: "layout-161",
    kind: "text",
    prompt: "If PTA is integrated with a supported SIEM solution, which detection becomes available?",
    options: ["Unmanaged privileged account", "Privileged access to the Vault during irregular days", "riskySPN", "Exposed credentials"],
    correct: [1],
    sourceImage: "assets/image347.png"
  },
  {
    id: "layout-163",
    kind: "text",
    prompt: "Which Automatic Remediation is configurable for a PTA detection of a Suspected Credential Theft?",
    options: ["Add to Pending", "Rotate Credentials", "Reconcile Credentials", "Disable Account"],
    correct: [2],
    sourceImage: "assets/image349.png"
  },
  {
    id: "layout-165",
    kind: "text",
    prompt: "You need to move a platform from using PMTerminal to using Terminal Plugin Controller (TPC). What must you do?",
    options: [
      "In PVWA, edit the platform and set the ExeName parameter under Automatic Password Management > CPM Plug-in to CyberArk TPC.exe.",
      "Edit the platform's ini file in the PasswordManager_Shared safe, add UseTPC = True, remove PMTerminal lines, and restart CPM.",
      "Open the platform process file and add use TPC=yes under the States section.",
      "Import a new platform version that supports TPC over the existing platform."
    ],
    correct: [1],
    sourceImage: "assets/image351.png"
  },
  {
    id: "layout-166",
    kind: "text",
    prompt: "What is the default username for the PSM for SSH maintenance user?",
    options: ["proxymng", "psmpmaintenance", "psmpmaintenanceuser", "psmpmnguser"],
    correct: [1],
    sourceImage: "assets/image352.png"
  },
  {
    id: "layout-167",
    kind: "text",
    prompt: "You need to limit the Windows_Servers platform to the WindowsDC1 and WindowsDC2 safes. What is the correct way?",
    options: [
      "Edit the Windows_Servers platform, select Automatic Password Management > General, and set AllowedSafes to (WindowsDC1)|(WindowsDC2).",
      "Edit the Windows_Servers platform, select Automatic Password Management > Options, and set AllowedSafes to (Win*).",
      "Edit both safes and add Windows_Servers to their AllowedPlatforms.",
      "Edit the WindowsServersAllowedSafes file-server category and specify WindowsDC1|WindowsDC2."
    ],
    correct: [1],
    sourceImage: "assets/image353.png"
  },
  {
    id: "layout-170",
    kind: "text",
    prompt: "Which parameter must be provided when registering a primary Vault in Azure, but not in Amazon Web Services?",
    options: ["/RecPub", "/AdminPass", "/MasterPass", "/RDPGateway"],
    correct: [4],
    sourceImage: "assets/image356.png"
  },
  {
    id: "layout-171",
    kind: "text",
    prompt: "Which browser is supported for PSM Web Connectors developed using the CyberArk Plugin Generator Utility (PGUP)?",
    options: ["Internet Explorer", "Google Chrome", "Microsoft Edge", "Firefox"],
    correct: [2],
    sourceImage: "assets/image357.png"
  },
  {
    id: "layout-172",
    kind: "text",
    prompt: "Which step is required to register a Vault manually in Amazon Web Services using CAVaultManager?",
    options: [
      "Specify Amazon as the cloud vendor using the CloudVendor flag.",
      "After running the postinstall utility, restart the PrivateArk Server service.",
      "Specify the cloud region using the /CloudRegion flag.",
      "Specify whether the Vault is distributed or stand alone."
    ],
    correct: [3],
    sourceImage: "assets/image358.png"
  },
  {
    id: "layout-174",
    kind: "text",
    prompt: "Which Vault authorizations will your CyberArk user need to install the CPM?",
    options: [
      "Add Safes; Add/Update Users; Manage Directory Mapping",
      "Add Safes; Add/Update Users; Reset Users' Passwords; Activate Users; Manage Server File Categories",
      "Manage Directory Mapping; Backup All Safes; Restore All Safes",
      "Audit Users; Activate Users; Add Network Areas; Manage Directory Mapping"
    ],
    correct: [2],
    sourceImage: "assets/image360.png"
  },
  {
    id: "layout-176",
    kind: "text",
    prompt: "Which option in the PrivateArk client is used to update users' Vault group memberships?",
    options: ["Update > General tab", "Update > Authorizations tab", "Update > Member Of tab", "Update > Group tab"],
    correct: [1],
    sourceImage: "assets/image365.png"
  },
  {
    id: "layout-177",
    kind: "text",
    prompt: "Your customer wants to store the Safes Data in Drive D instead of Drive C. Which file should you edit?",
    options: ["TSparm.ini", "Vault.ini", "DBparm.ini", "user.ini"],
    correct: [1],
    sourceImage: "assets/image366.png"
  },
  {
    id: "layout-178",
    kind: "text",
    prompt: "Which item is an option for PSM recording customization?",
    options: [
      "Windows events text recorder with automatic playback",
      "Windows events text recorder and universal keystrokes recording simultaneously",
      "Universal keystrokes text recorder with Windows events text recorder disabled",
      "Custom audio recording for Windows events"
    ],
    correct: [2],
    sourceImage: "assets/image367.png"
  },
  {
    id: "layout-180",
    kind: "text",
    prompt: "A new domain controller has been added. Which locations must you update so the CyberArk infrastructure can use it for authentication?",
    options: [
      "Vault hosts file and the PVWA LDAP Integration > Directories > Hosts setting",
      "Vault hosts file and PVWA hosts file",
      "PrivateArk Client > Tools > Administrative Tools > Directory Mapping",
      "Vault and PVWA certificate stores"
    ],
    correct: [3],
    sourceImage: "assets/image370.png"
  },
  {
    id: "layout-181",
    kind: "text",
    prompt: "Where do you update the Audit Users Vault permission for all auditors?",
    options: [
      "PrivateArk Client > Tools > Administrative Tools > Directory Mapping > Vault Authorizations",
      "PrivateArk Client > Tools > Administrative Tools > Users and Groups > Auditors > Authorizations tab",
      "PVWA User Provisioning > LDAP Integration > Vault Auditors Mapping > Vault Authorizations",
      "PVWA > Administration > Configuration Options > LDAP Integration > Vault Auditors Mapping > Vault Authorizations"
    ],
    correct: [2],
    sourceImage: "assets/image371.png"
  },
  {
    id: "layout-182",
    kind: "text",
    prompt: "A recording has no Fast Forward option, only command skipping, and cannot be downloaded. What could be the cause?",
    options: [
      "The recording is of a PSM for SSH session.",
      "The browser is out of date and needs an update.",
      "You do not have View Audit permission on the safe.",
      "The platform recorder settings need screen capture every 10000 ms or less."
    ],
    correct: [1],
    sourceImage: "assets/image372.png"
  },
  {
    id: "layout-183",
    kind: "text",
    prompt: "You are creating a new REST API user that uses CyberArk Authentication. What is a correct provisioning process?",
    options: [
      "PrivateArk Client > Tools > Administrative Tools > Users and Groups > New > User",
      "PrivateArk Client > Tools > Administrative Tools > Directory Mapping > Add",
      "PVWA > User Provisioning > LDAP Integration > Add Mapping",
      "PVWA > User Provisioning > Users and Groups > New > User"
    ],
    correct: [1],
    sourceImage: "assets/image373.png"
  },
  {
    id: "layout-184",
    kind: "text",
    prompt: "The CPM cannot log in directly with UNIX root and must use a secondary account. How should this be configured for least privilege?",
    options: [
      "Configure each CPM to use the correct logon account.",
      "Configure each CPM to use the correct reconcile account.",
      "Configure the UNIX platform to use the correct logon account.",
      "Configure the UNIX platform to use the correct reconcile account."
    ],
    correct: [3],
    sourceImage: "assets/image374.png"
  },
  {
    id: "layout-190",
    kind: "text",
    prompt: "Which Automatic Remediation is configurable for a PTA detection of a Suspected Credential Theft?",
    options: ["Add to Pending", "Rotate Credentials", "Reconcile Credentials", "Disable Account"],
    correct: [2],
    sourceImage: "assets/image382.png"
  },
  {
    id: "layout-192",
    kind: "text",
    prompt: "Which onboarding method would you use to integrate CyberArk with your accounts provisioning process?",
    options: ["Accounts Discovery", "Auto Detection", "Onboarding REST API functions", "PTA Rules"],
    correct: [2],
    sourceImage: "assets/image385.png"
  },
  {
    id: "layout-193",
    kind: "text",
    prompt: "You need to limit the Windows_Servers platform to the WindowsDC1 and WindowsDC2 safes. What is the correct way?",
    options: [
      "Edit the Windows_Servers platform, select Automatic Password Management > General, and set AllowedSafes to (WindowsDC1)|(WindowsDC2).",
      "Edit the Windows_Servers platform, select Automatic Password Management > Options, and set AllowedSafes to (Win*).",
      "Edit both safes and add Windows_Servers to their AllowedPlatforms.",
      "Edit the WindowsServersAllowedSafes file-server category and specify WindowsDC1|WindowsDC2."
    ],
    correct: [1],
    sourceImage: "assets/image386.png"
  },
  {
    id: "layout-128",
    kind: "text",
    prompt: "Accounts Discovery allows secure connections to domain controllers.",
    options: ["True", "False"],
    correct: [1],
    sourceImage: "assets/image128.png"
  },
  {
    id: "layout-131",
    kind: "text",
    prompt: "What are the functions of the Remote Control Agent service? (Choose three.)",
    options: [
      "Allows remote monitoring of the Vault",
      "Sends SNMP traps from the Vault",
      "Maintains audit data",
      "Allows CyberArk services to be managed (start/stop/status) remotely"
    ],
    correct: [1, 2, 4],
    sourceImage: "assets/image131.png"
  },
  {
    id: "layout-173",
    kind: "text",
    prompt: "You are installing PSM for SSH with AD-Bridge in CyberArkSSHD mode for your customer. What do you need to install? (Choose two.)",
    options: ["libssh", "CARKpsmp-mfra", "CARKpsmp", "CARKpsmp-AD Bridge"],
    correct: [1, 3],
    sourceImage: "assets/image359.png"
  },
  {
    id: "layout-209",
    kind: "text",
    prompt: "You are creating a Dual Control workflow for a team's safe. Which safe permissions must you grant to the Approvers group?",
    options: [
      "Retrieve accounts, Authorize account request",
      "List accounts, Authorize account request",
      "List accounts, Unlock accounts",
      "Retrieve accounts, Access Safe without confirmation"
    ],
    correct: [3],
    sourceImage: "assets/image438.png"
  },
  {
    id: "layout-210",
    kind: "text",
    prompt: "Which usage can be added as a service account platform?",
    options: ["Loosely Connected Devices", "Kerberos Tokens", "IIS Application Pools", "PowerShell Libraries"],
    correct: [2],
    sourceImage: "assets/image439.png"
  }
];
