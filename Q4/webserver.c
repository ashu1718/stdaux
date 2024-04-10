#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>

#define PORT 8888
#define BUFFER_SIZE 1024

void handle_client(SOCKET client_socket)
{
    char buffer[BUFFER_SIZE] = {0};
    char response[BUFFER_SIZE] = {0};

    // Read the incoming request
    recv(client_socket, buffer, BUFFER_SIZE, 0);

    // Parse the request to extract parameters
    char *query = strstr(buffer, "GET /?"); // Finding the start of the query string
    if (query != NULL)
    {
        query += 6;                           // Move past "GET /?"
        char *end_query = strchr(query, ' '); // Find the end of the query string
        if (end_query != NULL)
        {
            *end_query = '\0'; // Terminate the query string
            sprintf(response, "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<html><body><h1>Query Parameters: %s</h1></body></html>", query);
        }
    }
    else
    {
        sprintf(response, "HTTP/1.1 400 Bad Request\r\nContent-Type: text/html\r\n\r\n<html><body><h1>Bad Request</h1></body></html>");
    }

    // Send the response
    send(client_socket, response, strlen(response), 0);

    // Close the socket
    closesocket(client_socket);
}

int main()
{
    WSADATA wsa;
    SOCKET server_socket, client_socket;
    struct sockaddr_in server, client;
    int addrlen = sizeof(struct sockaddr_in);

    // Initialize Winsock
    if (WSAStartup(MAKEWORD(2, 2), &wsa) != 0)
    {
        printf("WSAStartup failed\n");
        return 1;
    }

    // Create socket
    if ((server_socket = socket(AF_INET, SOCK_STREAM, 0)) == INVALID_SOCKET)
    {
        printf("Socket creation failed\n");
        return 1;
    }

    server.sin_family = AF_INET;
    server.sin_addr.s_addr = INADDR_ANY;
    server.sin_port = htons(PORT);

    // Bind the socket to localhost:8080
    if (bind(server_socket, (struct sockaddr *)&server, sizeof(server)) == SOCKET_ERROR)
    {
        printf("Bind failed\n");
        return 1;
    }

    // Listen for incoming connections
    if (listen(server_socket, 3) < 0)
    {
        printf("Listen failed\n");
        return 1;
    }

    printf("Server listening on port %d...\n", PORT);

    // Accept incoming connections
    while (1)
    {
        if ((client_socket = accept(server_socket, (struct sockaddr *)&client, &addrlen)) == INVALID_SOCKET)
        {
            printf("Accept failed\n");
            return 1;
        }

        // Handle client request
        handle_client(client_socket);
    }

    // Cleanup
    closesocket(server_socket);
    WSACleanup();

    return 0;
}
