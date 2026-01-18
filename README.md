# 🔐 A Simple Example Using the Web Crypto API

Welcome to a simple project that demonstrates how to **encrypt and decrypt data using the Web Crypto API** with a password-derived key.

This project uses:
- **AES-256-GCM** for encryption  
- **PBKDF2** to derive a secure key from a password  

No external cryptography libraries are used.

---

## 📌 Use Case

This project is useful if you want to:
- Encrypt sensitive data on the client side
- Store encrypted data safely (localStorage, backend, database, etc.)
- Ensure the original data can only be decrypted with the correct password

The password is **never stored**.

---

## 🔧 How It Works

1. The user provides a password
2. A cryptographic key is derived using PBKDF2 + salt
3. Data is encrypted using AES-GCM
4. The following values are generated and stored:
   - `cipher` (encrypted data)
   - `iv` (initialization vector)
   - `salt` (used to derive the key)

To decrypt the data, the same password and stored values are required.

---

## 📁 Project Structure

project/
├── index.js
├── crypto.js
├── .env
├── .env.example
└── README.md


## ⚙️ Environment Variables
Create a `.env` file in the root of the project.
```code
PASS_CODE="your_passcode"
```

> ⚠️ Never commit your `.env` file to version control.

---

## 🚀 How to Run the Project

### 1️⃣ Install Node.js

Make sure you have **Node.js 18 or higher** installed:

```bash
node -v
npm install
node index.js
```

Or run as auto-reload (optional)

```bash
npm install nodemon -g
npm install
nodemon index.js
```

