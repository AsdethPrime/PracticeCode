import socket

HOST = '127.0.0.1'
PORT = 8000
ADDR = (HOST,PORT)

# Create a TCP server s
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Start infinite loop of accept, serve and ready to accept
with s:
    s.bind(ADDR)
    s.listen()
    conn, addr = s.accept()
    with conn:
        print ("Connected by: ", addr)
        while True:
            data = conn.recv(1024)
            if not data:
                break
            conn.sendall(data)


