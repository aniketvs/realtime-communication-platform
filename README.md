# 📡 Realtime Communication Platform

A scalable, full-featured real-time communication platform built with microservices using **NestJS**, **Redis**, **Kafka**, **MongoDB**, and **MySQL**.

Supports:
- 🔴 Real-time Chat (1-on-1 and group)
- 📞 Voice/Video Call (with timeout, reject, accept)
- 📬 Notifications (Pub/Sub, Kafka-based)
- 🔐 Authentication
- 🧠 Presence & Session Handling (via Redis)
- 🐳 Dockerized Multi-instance Architecture

---

## ⚙️ Tech Stack

| Layer              | Tech Used                   |
|-------------------|-----------------------------|
| Server Framework  | NestJS                      |
| Messaging Queue   | Apache Kafka + Zookeeper    |
| Cache + Locking   | Redis + Key Expiry Events   |
| Database          | MySQL + MongoDB             |
| Realtime Layer    | Socket.IO (via Gateway)     |
| Containerization  | Docker + Docker Compose     |

---

## 🧱 Microservices Overview

| Service              | Description                              |
|----------------------|------------------------------------------|
| `auth-service`       | Handles authentication and user identity |
| `chat-gateway-service` | WebSocket gateway using Socket.IO        |
| `notification-service` | Manages email/push/socket notifications |
| `data-service`       | Aggregates and stores analytics/data     |
| `redis`              | Caching, pub/sub, session control        |
| `kafka + zookeeper`  | Distributed messaging                    |
| `mysql`              | Persistent relational data               |
| `mongo`              | Chat history, logs                       |

---

## 🚀 Getting Started

### 🧰 Prerequisites

- Docker & Docker Compose
- Node.js (for development)

---

### 🐳 Run via Docker Compose

```bash
docker-compose up --build
````

> Ensure Redis supports key expiry events (needed for call timeouts):

```bash
redis-cli config set notify-keyspace-events Ex
```

---

## 🌐 Environment Variables

Each service should have a `.env` or set variables inside the `docker-compose.yml`:

```env
REDIS_URL=redis://redis:6379
KAFKA_BROKER=kafka:9092
MYSQL_HOST=mysql
MONGO_URL=mongodb://mongo:27017
INSTANCE_ID=gateway-1
```

---

## 🔄 Call Flow Events

| Event              | Triggered By    | Description                    |
| ------------------ | --------------- | ------------------------------ |
| `CALL_REQUEST`     | Caller → Server | User initiates call            |
| `CALL_ACCEPTED`    | Callee → Server | Callee accepts                 |
| `CALL_REJECTED`    | Callee → Server | Callee rejects                 |
| `CALL_TIMEOUT`     | Redis expiry    | Auto timeout after no response |
| `CALL_END`         | Caller/Callee   | Manually ended call            |
| `MESSAGE_SEND`     | Client          | Send chat message              |
| `MESSAGE_RECEIVED` | Server          | Acknowledge message delivery   |

---

## 📁 Services Project Structure

```
├── auth-service/
├── chat-gateway-service/
├── notification-service/
├── data-service/
├── docker-compose.yml
└── README.md
```

---

## 📜 License

This project is MIT licensed.

---

## 👨‍💻 Author

**Aniket Vinod Sharma**

* 🔗 [GitHub](https://github.com/aniketvs)
* 🔗 [LinkedIn](https://linkedin.com/in/sharma-aniket-vinod)

```
