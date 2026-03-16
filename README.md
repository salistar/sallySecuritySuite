# 🛡️ Sally AI Security Suite: Master Infrastructure & Operations Guide
# 🛡️ Sally AI Security Suite: Guide Maître des Infrastructures et Opérations

Welcome to the **Sally AI Security Suite**, the world's most comprehensive ecosystem for AI safety, security, and ethical governance. 
Bienvenue dans la **Sally AI Security Suite**, l'écosystème le plus complet au monde pour la sûreté, la sécurité et la gouvernance éthique de l'IA.

---

## 🚀 Global Architecture & Tech Stack / Architecture Globale

- **Frontend Core**: Vite, React, TypeScript.
- **Styling**: TailwindCSS pour des interfaces modernes et responsives.
- **Routing**: React Router DOM.
- **Icons**: Lucide React.
- **Build & Compilation**: Esbuild (via Vite) pour des temps de build ultra-rapides.

### 📦 Standard Architecture / Architecture Standard
Each app is a **Vite + React + TS** static frontend. 
Chaque application est un frontend statique **Vite + React + TS**.

**Generic Build Command / Commande de Build Générique:**
```bash
cd sally-<app-name>
npm install --legacy-peer-deps
npm run build
```

**Deployment Destinatons / Destinations de Déploiement:**
*   **Edge**: Vercel, Cloudflare Pages, Netlify.
*   **Cloud Static**: AWS S3 + CloudFront, GCP Firebase Hosting, Azure Static Web Apps.
*   **Enterprise**: Docker + Nginx on K8s/ECS.

---

## 🛠️ Application Deep-Dives / Immersion dans les Applications (20 Apps)

### 1. [sally-prompt-armor](./sally-prompt-armor)
**Description**: Semantic firewall preventing prompt injections and jailbreaks.
**Description (FR)**: Firewall sémantique empêchant les injections de prompts et les évasions (jailbreaks).

#### 💻 Technique & Architecture
* **Stack**: React, TypeScript, Vite, TailwindCSS, NLP Heuristics API, WebSockets pour temps réel.
* **Déploiement**: Docker (K8s/ECS) ou Edge (Cloudflare Pages/Vercel). Variable d'environnement: `VITE_FIREWALL_STRICT_MODE=true`.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Protège les LLMs en exposition publique ou interne contre les manipulations malveillantes (Prompt Injection, Jailbreaks). Indispensable pour les chatbots B2C et les assistants internes manipulés par les employés.
* **🎯 Gains & ROI**: Réduction de 99% des fuites de données via prompt, zéro compromission d'agents IA, protection de l'image de marque (éviter les réponses inappropriées du bot).

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 2. [sally-fact-layer](./sally-fact-layer)
**Description**: Real-time hallucination detection and grounding.
**Description (FR)**: Détection des hallucinations en temps réel et ancrage des faits.

#### 💻 Technique & Architecture
* **Stack**: React, TypeScript, Vite, Vector Database Querying (Pinecone/Milvus), RAG Integration.
* **Déploiement**: Vercel / AWS Amplify. Requiert des instances de calcul pour les requêtes de vecteurs.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Assure l'exactitude des informations générées par l'IA. Essentiel pour les secteurs de la santé, du droit, de la finance, où une hallucination de l'IA a un coût critique.
* **🎯 Gains & ROI**: Fiabilité accrue des outputs IA, réduction des risques de litiges liés aux fausses informations, augmentation de l'adoption de l'IA par la confiance.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 3. [sally-data-vault](./sally-data-vault)
**Description**: PII and sensitive data masking for LLM prompts.
**Description (FR)**: Masquage des données sensibles et PII pour les prompts LLM.

#### 💻 Technique & Architecture
* **Stack**: React, TypeScript, Vite, Regex Expressions, NLP NER (Named Entity Recognition) Models.
* **Déploiement**: Azure Static Web Apps + KeyVault. Recommandé dans un VNet privé pour les données critiques.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Conformité stricte (RGPD, HIPAA) en anonymisant les données avant qu'elles ne soient envoyées à des API externes (OpenAI, Anthropic, etc.).
* **🎯 Gains & ROI**: Conformité légale garantie, prévention des fuites de données PII, permettant aux entreprises d'utiliser des LLMs cloud sans risque de violation de données.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 4. [sally-fair-audit](./sally-fair-audit)
**Description**: Bias auditing and algorithmic fairness certification.
**Description (FR)**: Audit de biais et certification de l'équité algorithmique.

#### 💻 Technique & Architecture
* **Stack**: React, TypeScript, Recharts (Visualisation de données), Python Backend Integrations.
* **Déploiement**: Google Cloud Run (Autoscaling) pour absorber des charges d'audit massives.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Audit continu pour détecter les biais liés au genre, à l'ethnie, ou à l'âge dans les modèles (ex: scoring de crédit, recrutement).
* **🎯 Gains & ROI**: Évitement des amendes discriminatoires (EU AI Act), protection de la réputation, amélioration de la qualité des décisions automatisées.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 5. [sally-robust-ml](./sally-robust-ml)
**Description**: Defense against evasion and poisoning attacks.
**Description (FR)**: Défense contre les attaques par évasion et empoisonnement.

#### 💻 Technique & Architecture
* **Stack**: React, Vite, TensorFlow.js / PyTorch backend hooks, Dashboard analytique.
* **Déploiement**: Instances GPU dédiées (AWS EC2 g5) pour générer des perturbations antagonistes d'entraînement.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Protection des modèles ML contre l'empoisonnement des données et les attaques par évasion, vital pour la voiture autonome, la détection de fraude et la biométrie.
* **🎯 Gains & ROI**: Modèles 10x plus résilients aux attaques externes, continuité d'activité garantie, réduction des faux positifs induits par les attaquants.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 6. [sally-phish-guard](./sally-phish-guard)
**Description**: AI-powered social engineering and phishing detection.
**Description (FR)**: Détection de phishing et ingénierie sociale par IA.

#### 💻 Technique & Architecture
* **Stack**: React, WebExtensions API (Browser extension), Email parser integrations.
* **Déploiement**: AWS Lambda (Serverless) pour scanner instantané des emails + Extension de navigateur.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Bouclier contre les attaques sophistiquées de phishing générées par IA (Spear Phishing, Business Email Compromise).
* **🎯 Gains & ROI**: Réduction drastique (jusqu'à 95%) des clics sur des liens malveillants, sécurisation des identifiants SaaS, protection des collaborateurs.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 7. [sally-explain-ai](./sally-explain-ai)
**Description**: Model transparency and decision visualization.
**Description (FR)**: Transparence des modèles et visualisation des décisions.

#### 💻 Technique & Architecture
* **Stack**: React, TypeScript, D3.js/Recharts, SHAP/LIME outputs parsers.
* **Déploiement**: Vercel ou Docker Swarm. Hébergement des dashboards interactifs.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Rend l'IA 'explicable' (XAI). Indispensable lorsque des décisions automatisées doivent être justifiées (refus de prêt civil, diagnostic médical).
* **🎯 Gains & ROI**: Conformité au 'Droit à l'explication' (RGPD), adoption interne facilitée par la compréhension algorithmique.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 8. [sally-clean-data](./sally-clean-data)
**Description**: Data sanitization for secure AI training.
**Description (FR)**: Assainissement des données pour un entraînement IA sécurisé.

#### 💻 Technique & Architecture
* **Stack**: React, Vite, Data Processing Pipelines GUI, Hooks vers Data Lakes.
* **Déploiement**: Cluster On-prem GPU (fortement recommandé sur réseau isolé - Air-gap) pour la purge de datasets massifs.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Nettoie les sets de données d'entraînement des malwares, toxicités, biais ou éléments propriétaires avant le Fine-Tuning de modèles.
* **🎯 Gains & ROI**: Modèles fondations plus éthiques et sûrs, gain de temps colossal sur la curation manuelle des données (x50 plus rapide).

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 9. [sally-agent-guard](./sally-agent-guard)
**Description**: Security guardrails for autonomous AI agents.
**Description (FR)**: Garde-fous de sécurité pour agents IA autonomes.

#### 💻 Technique & Architecture
* **Stack**: React, WebSocket, Agent State Management (Redux/Zustand).
* **Déploiement**: Kubernetes Sidecar pattern pour appliquer des règles d'exécution strictes en < 10ms.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Applique des limites strictes aux Agents IA (ex: budgets max, permissions de lecture/écriture, actions prohibées).
* **🎯 Gains & ROI**: Mitigation totale du risque qu'un Agent IA autonome ne détruise des données (via AutoGPT/BabyAGI) ou ne dépasse des budgets cloud.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 10. [sally-voice-auth](./sally-voice-auth)
**Description**: Biometric voice liveness and anti-cloning.
**Description (FR)**: Vivacité vocale biométrique et anti-clonage.

#### 💻 Technique & Architecture
* **Stack**: React, Web Audio API, WebRTC, IA Voice Liveness Detector.
* **Déploiement**: AWS Lambda @ Edge / CloudFront pour réduire la latence d'authentification vocale.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Prévient les attaques par clonage vocal (Deepfakes), sécurisant l'accès aux comptes, au centre d'appels, ou l'utilisation par les VIPs.
* **🎯 Gains & ROI**: Évite les fraudes au président vocales, sécurise l'IoT vocal et fiabilise l'authentification sans friction.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 11. [sally-code-sentry](./sally-code-sentry)
**Description**: Triage for AI-generated code vulnerabilities.
**Description (FR)**: Triage des vulnérabilités de code généré par IA.

#### 💻 Technique & Architecture
* **Stack**: React, SAST/DAST report vizualization, GitHub/GitLab API Integrations.
* **Déploiement**: Intégration directe via GitHub Actions / GitLab CI Runner (SARIF output).

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Analyse le code généré par les Copilots IA pour détecter des failles de sécurité (Secrets en dur, SQLi, Insecure dependencies) avant compilation.
* **🎯 Gains & ROI**: Accélère le DevOps sans sacrifier la sécurité, sécurise le code (souvent imparfait) sorti par les IA de dev.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 12. [sally-privacy-mesh](./sally-privacy-mesh)
**Description**: Secure compute and differential privacy.
**Description (FR)**: Calcul sécurisé et confidentialité différentielle.

#### 💻 Technique & Architecture
* **Stack**: React, FHE (Fully Homomorphic Encryption) dashboard, Differential Privacy Configurator.
* **Déploiement**: Environnement Confidential Computing (ex: Azure VM série DC, AWS Nitro Enclaves).

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Permet de mutualiser ou d'analyser des données sensibles sans jamais les déchiffrer (recherche médicale, benchmarking inter-banque).
* **🎯 Gains & ROI**: Débloque la collaboration sur des données ultra-sensibles, création de nouveaux business models via le datasharing sécurisé.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 13. [sally-identity-fortress](./sally-identity-fortress)
**Description**: Synthetic identity and document fraud detection.
**Description (FR)**: Détection de fraude d'identité et documents synthétiques.

#### 💻 Technique & Architecture
* **Stack**: React, Camera API, Deepfake Detection Models Integration.
* **Déploiement**: Backend sur GCP Cloud Run (traitement lourd) + Hébergement Frontend standard.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: K.Y.C (Know Your Customer) : vérifie si un document d'identité a été forgé synthétiquement par une IA.
* **🎯 Gains & ROI**: Protège le secteur financier/location des fraudes d'onboarding, automatisation et baisse des coûts du KYC de 80%.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 14. [sally-cyber-sentinel](./sally-cyber-sentinel)
**Description**: AI-augmented SOC and threat hunting.
**Description (FR)**: SOC augmenté par IA et chasse aux menaces.

#### 💻 Technique & Architecture
* **Stack**: React, Graph UI (Force-directed graphs), SIEM API connecteurs (Splunk, Elastic).
* **Déploiement**: AWS OpenSearch ou Elastic Stack On-Premise. Architecture micro-services.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Accélère le travail des analystes Cybersécurité (SOC), trie les milliers d'alertes, et identifie les mouvements latéraux via l'IA.
* **🎯 Gains & ROI**: Temps de réponse à un incident (MTTR) divisé par 4, réduit la fatigue des analystes SOC.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 15. [sally-model-vault](./sally-model-vault)
**Description**: Protection of Model IP (Fingerprinting/Watermarking).
**Description (FR)**: Protection de la PI des modèles (Fingerprinting/Watermarking).

#### 💻 Technique & Architecture
* **Stack**: React, Registry UI, Hash/Watermark Validators.
* **Déploiement**: Registre privé, accès via OAuth2 + mTLS. Très haut niveau de sécurité d'infrastructure.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Insère des tatouages numériques (watermarks) invisibles dans les poids du modèle pour en prouver la propriété intellectuelle.
* **🎯 Gains & ROI**: Défend les investissements en R&D IA, permet de prouver le vol d'un algorithme par un concurrent.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 16. [sally-compliance-hub](./sally-compliance-hub)
**Description**: EU AI Act readiness and automated compliance.
**Description (FR)**: Préparation EU AI Act et conformité automatisée.

#### 💻 Technique & Architecture
* **Stack**: React, FormBuilders complexes, Génération PDF/DOCX.
* **Déploiement**: Azure Static Web Apps connecté à une base documentaire PostgreSQL sécurisée.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Centralise toute la documentation, évalue le niveau de risque des modèles IA face aux réglementations comme l'EU AI Act.
* **🎯 Gains & ROI**: Évite des pénalités massives allant jusqu'à 7% du CA mondial. Automatise un travail administratif lourd.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 17. [sally-child-shield](./sally-child-shield)
**Description**: Safety monitoring for youth-AI interactions.
**Description (FR)**: Monitoring de sécurité pour interactions mineurs-IA.

#### 💻 Technique & Architecture
* **Stack**: React, Real-time profanity/toxic sentiment filters, Parental Dashboard.
* **Déploiement**: Serveurs NodeJS Edge (très faible latence requise < 15ms) avant restitution du texte.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Assure que les IA éducatives, de jeux ou sociales ne ciblent pas les enfants avec du contenu inapproprié, prédateur ou toxique.
* **🎯 Gains & ROI**: Responsabilité sociétale, protection légale (COPPA, etc.), sécurise la réputation des entreprises EdTech et Gaming.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 18. [sally-supply-trust](./sally-supply-trust)
**Description**: AI Supply Chain security and model provenance.
**Description (FR)**: Sécurité Supply Chain IA et provenance des modèles.

#### 💻 Technique & Architecture
* **Stack**: React, SBOM (Software Bill of Materials) parsers, Supply Chain Graph Visualizer.
* **Déploiement**: Connexion aux registres type AWS CodeArtifact / Azure Artifacts.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Assure la traçabilité des modèles Open Source utilisés (HuggingFace) : qui a entraîné quoi, sur quelle licence, avec quel dataset.
* **🎯 Gains & ROI**: Risque zéro d'intégration d'un modèle 'backdooré' depuis l'externe, maîtrise stricte de la chaîne d'approvisionnement logicielle IA.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 19. [sally-ethics-engine](./sally-ethics-engine)
**Description**: Continuous ethical monitoring and accountability.
**Description (FR)**: Monitoring éthique continu et responsabilité.

#### 💻 Technique & Architecture
* **Stack**: React, Dashboard KPI Éthiques, Heatmaps d'impact.
* **Déploiement**: GCP Cloud Run (analyse de batches) + Webhooks d'alerte.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Pilote l'alignement continu des systèmes d'IA avec les valeurs de l'entreprise (équité, non-malfaisance, justice communautaire).
* **🎯 Gains & ROI**: Maintien de la confiance publique, permet de publier des audits éthiques transparents (ESGIA).

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

### 20. [sally-truth-shield](./sally-truth-shield)
**Description**: Deepfake and disinformation network detection.
**Description (FR)**: Détection des deepfakes et réseaux de désinformation.

#### 💻 Technique & Architecture
* **Stack**: React, Video/Audio Analysis Dashboards, Media Provenance Checkers.
* **Déploiement**: Clusters de calcul GPU intensif (AWS g5, GCP A2) pour l'analyse des médias volumineux en temps réel.

#### 💼 Côté Métier (Business Value)
* **Cas d'usage principal**: Identifier et flaguer les Fake News et les médias altérés par l'IA (Deepfakes vidéos, manipulation de preuves, propagande).
* **🎯 Gains & ROI**: Garantit l'intégrité de l'information (réseaux sociaux, agences de presse, secteur public), protège les démocraties contre les campagnes de manipulation.

#### 🛡️ 10 Use Cases / 10 Cas d'Utilisation
| # | Use Case (Exemples Génériques) |
|---|-------------------------|
| 1 | Intégration par API dans le flux de production principal |
| 2 | Monitoring en temps réel des transactions et inputs |
| 3 | Contrôle d'accès et vérification d'identité |
| 4 | Audit automatisé, conformité et reporting réglementaire |
| 5 | Défense active contre les attaques et intrusions ciblées |
| 6 | Protection des collaborateurs et des données internes |
| 7 | Optimisation des enquêtes (Investigation numérique / Forensics) |
| 8 | Certification et Audit tierce partie |
| 9 | Sécurisation des données sensibles (PII/Santé/Finance) |
| 10 | Déploiement sécurisé On-Premise ou dans des Cloud souverains |

---

## 📅 Growth & Monetization / Croissance et Monétisation

### 🏢 B2B (Enterprise)
*   **Methods**: direct sales to CISOs, strategic partnerships with Cloud Providers (AWS Marketplace, Azure Gallery).
*   **Méthodes**: Ventes directes aux RSSI, partenariats stratégiques Cloud (Marketplace).

### 🏛️ B2G (Government)
*   **Methods**: Sovereign AI-Safety centers, compliance for national security platforms.
*   **Méthodes**: Centres souverains de sûreté IA, conformité pour plateformes de sécurité nationale.

### 👥 B2B2C (In-App Safety)
*   **Methods**: SDK licensing for social media and educational platforms.
*   **Méthodes**: Licences SDK pour réseaux sociaux et plateformes éducatives.

---
**Sally AI Security Suite** - *Trusted Intelligence. Worldwide.*
**Sally AI Security Suite** - *Intelligence de Confiance. Partout.*
© 2026 Sally Group. Confidential.
