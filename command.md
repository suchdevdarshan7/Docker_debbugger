docker build -t express-debug .
docker run -p 3000:3000 -p 9229:9229 express-debug
