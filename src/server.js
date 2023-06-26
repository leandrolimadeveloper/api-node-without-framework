import http from "node:http";
import { randomUUID } from "node:crypto";

import { Database } from "./database/database.js";

import { json } from "./middlewares/json.js";

const database = new Database();

const server = http.createServer(async (request, response) => {
    const { method, url } = request;

    await json(request, response);

    if (method === "GET" && url === "/users") {
        const users = database.select("users");

        return response.end(JSON.stringify(users));
    }

    if (method === "POST" && url === "/users") {
        const { name, email } = request.body;

        const users = database.insert("users", {
            id: randomUUID(),
            name,
            email,
        });

        return response.writeHead(201).end(JSON.stringify(users));
    }

    return response.writeHead(404).end();
});

server.listen(3333);
