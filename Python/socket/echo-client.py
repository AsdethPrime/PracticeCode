import socket
HOST = '127.0.0.1'
PORT = 8000
ADDR = (HOST,PORT)

# Create socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# send and receive data
with s:
    s.connect(ADDR)
    s.sendall(b'Hello World')
    data = s.recv(1023)
    

# Display the data 
print ('Received: ', repr(data))
