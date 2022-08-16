
# Static React Website 

Static React Website with my profile information.
## Authors

- [@beketm](https://github.com/beketm)


## Tech Stack

HTML, CSS, JavaScript, React

## Run Locally

Clone the project

```bash
  git clone https://github.com/beketm/myprofile
```

Go to the project directory

```bash
  cd myprofile
```

Build Docker image

```bash
  docker build -t sample:dev .
```

Run website in a Docker container

```bash
  docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```


## Demo

![Alt Text]('Screenshot 2022-08-16 at 23-22-20 React App.png')