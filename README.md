### Publisher-Subscriber Notification system

#### About

This project consists of two applications consisting of a PUBLISHER server and a SUBSCRIBER server, whenever the PUBLISHER publishes a message, the SUBSCRIBERS receives it.

The PUBLISHER server consist of two endpoints

```
/subscribe/:topic
/publish/:topic
```

Where [/subscribe/:topic] allows a SUBSCRIBER server to subscribe to a topic on the PUBLISHER server and
[/publish/:topic] publishs a topic to any corresponding SUBSCRIBER subscribed to the topic

The SUBSCRIBER server consist of one endpoint

```
/:route
```

The above endpoint listens for messages from the PUBLISHER

<hr>

#### Running the project

1. Pull the project into your local environment
2. Update the PORTS in the env file of the PRODUCER and SUBSCRIBER to your desired PORT NUMBER (\*\*\*It is not compulsory )
3. Start the servers in the root of the project

###### Mac OS

```
start-server.sh
```

###### Windows OS

```
./start-server.sh
```

** All dependencies will be installed and the servers for the PUBLISHER and SUBSCRIBER will be started **

#### Subscribe to a topic

Run the following command in another terminal

```
curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:9000/test1"}' http://localhost:8000/subscribe/topic1

```

#### Publish a topic

Run the following command in another terminal

```
curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:8000/publish/topic1

```

PS: After running the curl commands, check the terminal where you ran the project, it will display logs of your successful subscription and publishing to a topic.

---

---

#### Important Notice

Localstorage (node-persist) was used to store data locally in order to reduce configuration and setting up a db on your local machine.
Any storage system can replace the usage of Localstorage (node-persist).
Such storage system includes - redis, mysql, mssql, mongodb, postgresql etc.

#### Running Test scripts

```
npm run test
```

#### Issues

If you have any challenge please create a new [issue](https://github.com/tolustar/publisher-subsciber/issues) or send a [mail](info@tolustar.com)

**Cheers!!!**
