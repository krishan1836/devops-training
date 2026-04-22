from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"status": "Backend running"}

@app.get("/api")   # 👈 ADD THIS
def api():
    return {"status": "Backend running"}