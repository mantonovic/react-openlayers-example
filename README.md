# OpenLayers 7 with ReactJS 18

Example on how to use OpenLayers 7 with ReactJS in functional components.

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

## Initialize the Map

There are two implementations.

1) Using the global window object
2) Using the context object 

Check in the index.js file. You can switch between the two implementations by commenting out the code.


## Enable / disable interactions

The interactions is added to the Map during the initialization. Then it is enabled / disabled by calling the enable / disable methods.