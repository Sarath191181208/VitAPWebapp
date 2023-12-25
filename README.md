# vitap-webapp 
A web interface for the [VTOP-API](https://github.com/Sarath191181208/VTOP_API/) project.

## Developing

Clone the repo and cd into it.
```bash
git clone https://github.com/Sarath191181208/VitAPWebapp
cd vitap-webapp
```

Install all the dependencies using npm.

```bash
npm ci
```

Clone the VTOP-API repo in an another directory and run it.
```bash 
git clone https://github.com/Sarath191181208/VTOP_API/
```
**Follow the instructions in the [README](https://github.com/Sarath191181208/VTOP_API/?tab=readme-ov-file#how-to-install-this-project-) to run the API.**

To run the server follow this command 
```bash 
waitress-serve --listen=0.0.0.0:5000 wsgi:app
```

This takes care of the backend. Now we need to run the frontend.

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
