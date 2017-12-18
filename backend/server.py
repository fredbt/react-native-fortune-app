"""Hello world."""

import http.server
import socketserver
import random

PORT = 8080

FORTUNES = [
    "Native rocks. Webview sucks.",
    "Debugging sucks. Testing rocks.",
    "React-Native is nice",
    "But the red screen of death sucks",
    "Let's grab a beer!",
    "6 a 1 eterno"
]


class FortuneHandler(http.server.BaseHTTPRequestHandler):
    """Serves fortunes."""

    def do_HEAD(s):
        """head."""
        s.send_response(200)
        s.send_header("Content-type", "text/html")
        s.end_headers()

    def do_GET(s):
        """Respond to a GET request."""
        s.send_response(200)
        s.send_header("Content-type", "text/html")
        s.end_headers()
        s.wfile.write(random.choice(FORTUNES).encode())


httpd = socketserver.TCPServer(("", PORT), FortuneHandler)

print("FortuneServer at port {0}".format(PORT))
httpd.serve_forever()
