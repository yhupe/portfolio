from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

# App instance
app = FastAPI()

# Static files (CSS, JS, images, docs)
app.mount("/static", StaticFiles(directory="app/public/static"), name="static")

# Templates (HTML files)
templates = Jinja2Templates(directory="app/public/templates")


# Route: landing page
@app.get("/", response_class=HTMLResponse)
async def read_index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})




# run with   ->    uvicorn app.main:app --reload