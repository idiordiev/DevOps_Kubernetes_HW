```
docker build . -t idiordev/docker_hw1
docker run -p 49160:80 -m 100m --cpus="2" -d idiordev/docker_hw1
```