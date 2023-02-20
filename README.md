
Install dependencies

```bash
docker run --rm -it \
    -v $PWD:/app \
    -w /app \
    -u $(id -u ${USER}):$(id -g ${USER}) \
    -p 3000:3000 \
    node:18.1.0-alpine3.15 \
    npm install
```

Start dev server

```bash
docker run --rm -it \
    -v $PWD:/app \
    -w /app \
    -u $(id -u ${USER}):$(id -g ${USER}) \
    -p 3000:3000 \
    node:18.1.0-alpine3.15 \
    npm start
```

Open http://localhost:3000

There are two implementations.

1) Using the global window object
2) Using the context object 

Check in the index.js file. You can switch between the two implementations by commenting out the code.